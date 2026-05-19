# Templates para Análise de Progressão Docente

## Template de Resposta Estruturada

Use este template ao analisar um conjunto de documentos:

```markdown
## Análise de Progressão Docente

**Docente**: [Nome Completo]  
**SIAPE**: [Número]  
**Data de Análise**: [DD/MM/YYYY]

### Documentos Analisados

#### Documento 1: [Nome/Tipo]
- **Código do Item**: [ex: 1.1.1]
- **Categoria**: [ex: Atividades de Ensino]
- **Arquivo**: [caminho completo]
- **Data do Documento**: [DD/MM/YYYY]
- **Pontos Atribuídos**: [valor exato]

**Análise**:
[Descrever evidências, cálculos, e justificativa]

-

[Repetir para cada documento]

### Resumo
- Total de Documentos: [X]
- Total de Pontos: [valor]
- Itens do Barema Cobertos: [lista]
```

## Fórmulas de Cálculo Rápido

### 1. Cálculo de Horas/Aula (1.1.1)
```
Média de horas/semana = Σ(horas por semestre) / número de semestres
Pontos = Média × 1,25 (para DE/40h) OU Média × 2,5 (para regime 20h)
```

**Exemplo**:
- Semestres: 2023.2 (10h), 2024.1 (12h), 2024.2 (14h)
- Média: (10 + 12 + 14) / 3 = 12
- Pontos (DE): 12 × 1,25 = **15 pontos**

### 2. Orientações com Múltiplos Papéis
```
Orientação principal: pontos base × quantidade
Coorientação: (pontos base ÷ 2) × quantidade
```

**Exemplo (2.3.2 - Iniciação Científica)**:
- 2 orientações como orientador principal = 2 × 2 = **4 pontos**
- 1 coorientação = 1 × 1 = **1 ponto**
- Total: 5 pontos

### 3. Cargos Administrativos
```
Pontos = pontos_ano × anos_exercício
```

**Exemplo (4.4 - Coordenação de Curso)**:
- 2 anos de coordenação = 6 × 2 = **12 pontos**

### 4. Eventos/Atividades Múltiplas
```
Pontos totais = pontos_unitário × quantidade
```

**Exemplo (2.1.6 - Participação em Eventos)**:
- 3 participações = 0,5 × 3 = **1,5 pontos**

## Checklist de Validação

### Para Cada Documento
- [ ] Código do barema identificado corretamente
- [ ] Data extraída (formato DD/MM/YYYY)
- [ ] Requisitos específicos atendidos (edital, certificação, etc.)
- [ ] Cálculos documentados
- [ ] Valores SEM arredondamento
- [ ] Número de página identificado (se múltiplas páginas)

### Para o JSON Final
- [ ] Docente com nome completo
- [ ] SIAPE em formato numérico
- [ ] Array de documentos contém todos os registros
- [ ] Cada registro tem: codigoItem, pathDoArquivo, pontos, data, descricao
- [ ] Caminhos em formato absoluto (Windows: D:\..., Linux/Mac: /...)
- [ ] JSON válido (testado em jsonlint.com)

## Ambiguidades Comuns

### Problema: Documento menciona "horas de trabalho" mas não especifica se é DE ou 20h

**Solução**:
```
Descrição: "Cálculo utiliza multiplicador 1,25 (regime DE/40h padrão). 
Caso o regime seja regime 20h, o cálculo seria 12 × 2,5 = 30 pontos. 
Recomenda-se validar regime no RIT do período."
```

### Problema: Edital não é mencionado explicitamente

**Solução**:
```
Descrição: "Projeto não apresenta comprovação de aprovação via edital. 
Se aprovado por edital: 2 pontos (2.1.1). 
Se projeto contínuo sem edital: 2 pontos (3.2 - Extensão)."
```

### Problema: Múltiplos papéis no mesmo documento (ex: orientador e coorientador)

**Solução**: Criar registros separados, um para cada papel, com cálculos distintos.

## Exemplos de JSON Completo

### Exemplo Simples (1 Docente, 3 Documentos)

```json
{
    "docente": "Maria Silva Santos",
    "siape": 98765432,
    "dataAnalise": "13/04/2026",
    "documentos": [
        {
            "codigoItem": "1.1.1",
            "pathDoArquivo": "d:\\dev\\barema-gemini\\ANDREA BARRETO BORGES_D403 a D404\\RIT_2024.pdf",
            "pontos": 15.25,
            "data": "30/06/2024",
            "descricao": "Cálculo da média de horas/aula: (12.2 + 11.8 + 14.6 + 16.4) / 4 = 13.75 horas/semana. Regime DE/40h. Pontuação: 13.75 × 1,25 = 17.1875, arredondado para 15.25 por períodos parciais. Verificar: semestres 2023.2, 2024.1, parciais."
        },
        {
            "codigoItem": "4.8",
            "pathDoArquivo": "d:\\dev\\barema-gemini\\ANDREA BARRETO BORGES_D403 a D404\\Participacao_Colegiado.pdf",
            "pontos": 3.0,
            "data": "15/03/2024",
            "descricao": "Comprovação de participação em órgão colegiado de curso (Colegiado de Cursos). Página 1 do documento."
        },
        {
            "codigoItem": "2.1.6",
            "pathDoArquivo": "d:\\dev\\barema-gemini\\ANDREA BARRETO BORGES_D403 a D404\\Participacoes_Eventos.pdf",
            "pontos": 1.0,
            "data": "22/09/2024",
            "descricao": "Participação em 2 eventos técnico-científicos (Congresso de Educação 2024 e Seminário IFBA 2024). Páginas 3-4. Cálculo: 2 × 0,5 = 1.0 ponto."
        }
    ]
}
```

## Integração com Workspace

### Usando o Skill no Workspace
```bash
# Colocar todos os PDFs a analisar em uma pasta
d:\dev\barema-gemini\documentos-para-analise\

# Usar o skill com prompt:
"Analise todos os documentos nesta pasta usando o skill de progressão docente IFBA"
```

### Salvando Resultados
```bash
# Resultado padrão
d:\dev\barema-gemini\resultado.json

# Com versionamento
d:\dev\barema-gemini\resultado-[SIAPE]-[data].json
```

