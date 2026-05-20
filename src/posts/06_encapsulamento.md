---
icon: book
date: 2026-05-19 13:30:00.00 -3
title: "Encapsulamento"
tag:
  - java
  - encapsulamento
  - modificadores
  - pacotes
category:
  - aula
order: 6
---

::: tip

**O Deus Criador percebeu que dar vida às criaturas não era o suficiente. Para que o universo fosse estável, era preciso proteger a essência de cada ser contra interferências externas.**

:::

## 📖 A Revelação

### O que é Encapsulamento?

O **encapsulamento** é um dos pilares fundamentais da Programação Orientada a Objetos. Trata-se da técnica de "esconder" as entranhas de um objeto — seus dados e a lógica interna de funcionamento — expondo para o mundo exterior apenas uma interface controlada.

O objetivo principal é proteger o estado interno do objeto, garantindo que ele não seja colocado em um estado inválido por agentes externos. Em vez de permitir que qualquer parte do programa altere um atributo, o objeto assume a responsabilidade de gerenciar seus próprios dados.

### 🏘️ Organizando o Cosmos: Pacotes (Packages)

Antes de falarmos em proteção, precisamos de organização. No Java, as classes são organizadas em **Pacotes**.

::: note Pacotes
Um **pacote** é um agrupamento lógico de classes relacionadas. Tecnicamente, eles correspondem a pastas no sistema de arquivos. Eles servem para:
- **Evitar conflitos de nomes**: Duas classes podem ter o mesmo nome, desde que estejam em pacotes diferentes.
- **Organizar a visibilidade**: Alguns modificadores de acesso dependem de a classe estar ou não no mesmo pacote.
:::

- A palavra-chave `package` (no topo do arquivo) define a qual reino a classe pertence.
- A palavra-chave `import` permite que o Deus Criador utilize classes de outros reinos em seu código.

### 🛡️ Visibilidade e Modificadores de Acesso

Para implementar o encapsulamento, Java utiliza **modificadores de acesso**. Eles definem quem pode "ver" ou "tocar" em uma classe, um atributo ou um método.

#### 1. Visibilidade de Classes
As classes externas (nível superior) só podem ter dois tipos de visibilidade:
- `public`: A classe é visível para qualquer outra classe em qualquer pacote.
- `<padrão>` (package-private): A classe só é visível para classes que estão no **mesmo pacote**.

#### 2. Visibilidade de Atributos e Métodos
Para os membros de uma classe, temos quatro níveis de controle:

| Modificador | Visibilidade | Descrição Técnica | Metáfora |
| ----------- | ------------ | ------------------ | --------- |
| `public`    | Total        | Acessível de qualquer lugar do universo. | 🌍 Conhecimento Universal |
| `protected` | Herdada      | Acessível por classes no mesmo pacote e por subclasses (mesmo em pacotes diferentes). | 🏠 Segredo de Família |
| `<padrão>`  | Pacote       | Acessível apenas por classes no mesmo pacote. | 🏘️ Lei do Bairro |
| `private`   | Restrita     | Acessível **apenas** dentro da própria classe. | 🔒 Segredo Sagrado |

### 🚪 Métodos de Acesso: Getters e Setters

Se tornarmos nossos atributos `private` (para garantir a segurança), como faremos para ler ou alterar esses valores? Para isso, criamos **Portais Controlados**: os métodos de acesso.

- **Getter (get)**: Um método público que retorna o valor de um atributo privado. Ele permite a **leitura**, mas não a alteração.
- **Setter (set)**: Um método público que recebe um valor e o atribui ao atributo privado. Ele permite a **escrita**, mas com a vantagem de que podemos adicionar **validações** (regras) antes de aceitar a mudança.

A sintaxe padrão é `get` ou `set` seguido do nome do atributo com a primeira letra em maiúscula (ex: `getSaldo()`, `setSaldo()`).

---

## 🌌 A Gênese

Imagine que você criou uma criatura magnífica: uma **Conta Bancária Mística**. Você definiu que ela tem um `saldo` e um `titular`. Mas, em sua pressa, você deixou esses atributos como `public`.

De repente, surgem outros deuses — entidades externas ao seu código. Como a essência da sua criatura está exposta, eles podem interferir de formas catastróficas:
- Um deus invejoso pode simplesmente definir `conta.saldo = 0`, zerando a fortuna de um mortal sem qualquer transação.
- Um deus caótico pode definir `conta.saldo = -999999`, quebrando a lei fundamental de que um saldo não pode ser infinitamente negativo.
- Um deus trapaceiro pode mudar o `titular` da conta no meio de uma operação.

Isso não é liberdade — é negligência divina. Quando os dados estão expostos, você perde o controle sobre as regras do seu próprio universo.

Para evitar esse caos, o Deus Criador forja a **Armadura Sagrada** (🛡️ Proteção Divina). Ele sela os atributos com o modificador `private` e constrói **Portais Controlados** (Getters e Setters). Agora, se alguém quiser alterar o saldo, deve passar pelo portal do `setSaldo()`, onde o Deus pode impor a lei: *"Nenhum valor negativo será aceito aqui!"*

> _"Se todos os seus atributos são `public`, você não criou um objeto — criou uma barraca de feira onde qualquer um entra e mexe no que quer."_


## 💻 O Código Sagrado

Vamos ver a diferença entre a **Negligência** e a **Ordem Divina**.

### 🔴 A Negligência (Sem Encapsulamento)

Nesta versão, qualquer um pode interferir na conta.

```java
public class Conta {
    public double saldo; // ⚠️ Exposto! Qualquer deus pode mexer.
    public String titular;

    public Conta(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
}

public class Universo {
    public static void main(String[] args) {
        Conta conta = new Conta("Mortal", 1000.0);
        
        // Interferência Divina Caótica:
        conta.saldo = -5000.0; // 💥 Erro! Saldo negativo impossível, mas o Java permitiu.
        IO.println("Saldo atual: " + conta.saldo);
    }
}
```

### 🟢 A Ordem Divina (Com Encapsulamento)

Agora, protegemos a essência e criamos portais com validação.

```java
public class Conta {
    // 🔒 Segredos Sagrados: ninguém de fora toca aqui
    private double saldo;
    private String titular;

    public Conta(String titular, double saldoInicial) {
        this.titular = titular;
        // Usamos o setter para garantir que o saldo inicial seja válido
        setSaldo(saldoInicial);
    }

    // 🚪 Portal de Leitura (Getter)
    public double getSaldo() {
        return saldo;
    }

    public String getTitular() {
        return titular;
    }

    // 🚪 Portal de Escrita (Setter) com a Lei do Universo
    public void setSaldo(double novoSaldo) {
        if (novoSaldo >= 0) {
            this.saldo = novoSaldo;
        } else {
            IO.println("⚠️ Lei Violada: O saldo não pode ser negativo!");
        }
    }

    public void setTitular(String novoTitular) {
        if (novoTitular != null && !novoTitular.isBlank()) {
            this.titular = novoTitular;
        }
    }
}

public class Universo {
    public static void main(String[] args) {
        Conta conta = new Conta("Mortal", 1000.0);
        
        // Tentativa de interferência:
        // conta.saldo = -5000.0; // ❌ Erro de compilação! A armadura protege.
        
        conta.setSaldo(-5000.0); // ⚠️ A lei é aplicada e o valor é recusado.
        IO.println("Saldo final: " + conta.getSaldo()); // Continua 1000.0
    }
}
```

### 🔮 Roteiro no Observatório Divino (BlueJ)

**Passo 1 — Criar o Molde:**
Crie a classe `Conta` com os atributos `private` e os métodos `get` e `set`. Compile a classe.

**Passo 2 — O Gesto da Criação:**
Clique com o botão direito na classe `Conta` → `new Conta("Mortal", 1000.0)`. A conta aparecerá no Altar.

**Passo 3 — Testar a Armadura:**
Clique com o botão direito no objeto `conta1` no Altar. Observe que você **não consegue** alterar o `saldo` diretamente. O atributo não aparece na lista de métodos invocáveis. A armadura sagrada está funcionando!

**Passo 4 — Usar os Portais:**
Clique com o botão direito no objeto → selecione `getSaldo()`. O BlueJ mostrará `1000.0`. Agora tente `setSaldo(-500.0)`. Observe que o valor não é alterado porque a lei interna da classe impediu.

**Passo 5 — A Visão Divina:**
Clique com o botão direito no objeto → selecione _Inspect_. Você ainda consegue **ver** o valor do saldo (visão de Deus), mas não consegue **alterá-lo** sem usar os portais.


## 🔨 O Desafio do Criador

- [Desafio 09 - O Tesouro do Dragão Ancestral](../desafios/06_encapsulamento.md)
