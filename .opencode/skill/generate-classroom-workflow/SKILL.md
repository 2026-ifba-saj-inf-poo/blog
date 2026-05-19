---
name: generate-classroom-workflow
description: "**DOMAIN SKILL** — Analisa um arquivo de teste Java e gera um arquivo de workflow do GitHub Actions (classroom.yml) seguindo os padrões estabelecidos nos repositórios de exercícios. USE FOR: criar workflows de autograding para testes JUnit em projetos Java; parsear métodos @Test e gerar steps individuais no GitHub Actions; calcular pontuação automática por teste. HANDLES: parsing de classes de teste Java, geração de estrutura YAML para GitHub Actions, configuração de Autograding Reporter, nomenclatura de IDs e variáveis de ambiente. NEVER USE FOR: outros formatos de teste que não JUnit; projetos que não usam Maven."
---

# Skill: generate-classroom-workflow

Esta skill analisa um arquivo de teste Java e gera um arquivo de workflow do GitHub Actions (`classroom.yml`) seguindo os padrões estabelecidos nos repositórios de exercícios.

---

## Quando Ativar

**Ativar este skill quando o usuário:**
- Pedir para gerar um "classroom.yml" ou "workflow de GitHub Actions"
- Mencionar "autograding" ou "testes automáticos"
- Fornecer um arquivo de teste Java (`.java` com `@Test`)
- Usar comando como: `generate classroom.yml for @caminho/ArquivoTest.java`

**NÃO ativar quando:**
- O usuário quer apenas revisar código (usar `avaliador-poo`)
- É um projeto que não usa Maven
- Não há arquivos de teste Java

---

## Inputs Esperados

O usuário deve fornecer:
1. **Caminho do arquivo de teste Java** — arquivo `.java` contendo métodos com `@Test`
2. **(Opcional) Nome da classe de teste** — se não for possível inferir do nome do arquivo

---

## Workflow de Geração

### Passo 1 — Leitura do Arquivo de Teste
- Ler o arquivo `.java` fornecido
- Identificar todos os métodos marcados com `@Test`
- Extrair o nome da classe (ex: `TVTest`) e nomes dos métodos (ex: `testConstrutor`)

### Passo 2 — Criação do Workflow
Gerar o arquivo `classroom.yml` com:

1. **Configuração de Trigger**:
   ```yaml
   name: Autograding Tests
   on:
     push:
       branches: ["**"]
     pull_request:
       branches: ["**"]
     workflow_dispatch:
   ```

2. **Permissões**:
   ```yaml
   permissions:
     checks: write
     actions: read
     contents: read
   ```

3. **Job**:
   - Nome: `run-autograding-tests`
   - Runner: `ubuntu-latest`
   - Condição: `if: github.actor != 'github-classroom[bot]'`

4. **Setup do Ambiente**:
   - Checkout: `actions/checkout@v4`
   - Java: `actions/setup-java@v4` (versão 25, distribuição `temurin`)

5. **Steps de Teste**:
   Para cada método `@Test`, criar um step com:
   - `name`: Nome do método de teste (ex: `testConstrutor`)
   - `id`: ID único (pode usar só o nome do método em minúsculas)
   - `uses`: `classroom-resources/autograding-command-grader@v1`
   - `with`:
     - `test-name`: Nome do teste
     - `setup-command`: `""`
     - `command`: `mvn test -Dtest="[Classe]#[Metodo]"`
     - `timeout`: `10`
     - `max-score`: `100 / [total_de_testes]` (arredondado para que o total seja 100)

6. **Autograding Reporter**:
   - `uses`: `classroom-resources/autograding-grading-reporter@v1`
   - `env`: Variáveis para cada teste no formato `[ID]_RESULTS: "${{steps.ID.outputs.result}}"`
   - `with`:
     - `runners`: Lista separada por vírgulas de todos os `id`s dos steps de teste

### Passo 3 — Salvamento do Arquivo
- Salvar o `classroom.yml` no diretório `.github/workflows/` do repositório

---

## Regras de Nomenclatura

> [!IMPORTANT]
> - **IDs dos steps**: podem ser simples (só o nome do método em minúsculas)
> - **Variáveis de ambiente**: `[ID]_RESULTS`
> - **test-name**: nome do método de teste

---

## Exemplo de Saída

**Input:** `TVTest.java` com métodos `testConstrutor`, `testLigar`, `testDesligar` (3 testes)

**Saída (classroom.yml):**
```yaml
name: Autograding Tests
on:
  push:
    branches: ["**"]
  pull_request:
    branches: ["**"]
  workflow_dispatch:
permissions:
  checks: write
  actions: read
  contents: read
jobs:
  run-autograding-tests:
    runs-on: ubuntu-latest
    if: github.actor != 'github-classroom[bot]'
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Set up Java 25
        uses: actions/setup-java@v4
        with:
          java-version: '25'
          distribution: 'temurin'
      - name: testConstrutor
        id: testconstrutor
        uses: classroom-resources/autograding-command-grader@v1
        with:
          test-name: testConstrutor
          setup-command: ""
          command: mvn test -Dtest="TVTest#testConstrutor"
          timeout: 10
          max-score: 33
      - name: testLigar
        id: testligar
        uses: classroom-resources/autograding-command-grader@v1
        with:
          test-name: testLigar
          setup-command: ""
          command: mvn test -Dtest="TVTest#testLigar"
          timeout: 10
          max-score: 33
      - name: testDesligar
        id: testdesligar
        uses: classroom-resources/autograding-command-grader@v1
        with:
          test-name: testDesligar
          setup-command: ""
          command: mvn test -Dtest="TVTest#testDesligar"
          timeout: 10
          max-score: 34
      - name: Autograding Reporter
        uses: classroom-resources/autograding-grading-reporter@v1
        env:
          testconstrutor_RESULTS: "${{steps.testconstrutor.outputs.result}}"
          testligar_RESULTS: "${{steps.testligar.outputs.result}}"
          testdesligar_RESULTS: "${{steps.testdesligar.outputs.result}}"
        with:
          runners: testconstrutor,testligar,testdesligar
```

---

## Regras Críticas

1. **Cada método @Test gera um step separado** — nunca agrupe testes
2. **Cálculo de max-score**: `100 / total_testes`, ajustando o último para fechar em 100
3. **Usar sempre as actions do classroom-resources**:
   - `classroom-resources/autograding-command-grader@v1` para os testes
   - `classroom-resources/autograding-grading-reporter@v1` para o relatório
4. **Salvar sempre em `.github/workflows/classroom.yml`**
5. **Incluir condição** `if: github.actor != 'github-classroom[bot]'` no job