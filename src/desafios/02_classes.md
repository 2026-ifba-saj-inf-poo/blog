---
article: false
index: false
title: Desafio 02 - Classes, Atributos, Métodos e Construtores
date: 2026-02-19 7:40:00.00 -3
category:
  - exercicio
---

## 🔨 O Desafio do Criador

### Missão: O Segundo Dia da Criação — Moldando o Universo Bancário

**Contexto narrativo:**

O Deus Criador já provou que sabe dar forma a criaturas básicas. Mas agora o universo precisa crescer. Uma nova espécie de entidade precisa existir: a **Conta** — uma criatura financeira que guarda riquezas, recebe depósitos e concede saques. O Deus deve projetar o molde desta nova criatura, definir seus rituais de nascimento e conceder seus poderes.

**Sua missão como Deus Criador:**

1. Projete o **Molde** (classe) `Conta` com a essência adequada: número, cliente (nome), saldo e limite
2. Defina o **Ritual de Nascimento** (construtor) para que toda conta nasça com um titular e um número, começando com saldo zero e limite zero
3. Conceda os **Poderes** necessários: `depositar`, `sacar` (com validação!), `transferir` (para outra conta) e `exibirExtrato`
4. Crie um **segundo construtor** para contas com limite (cheque especial), onde o limite é informado na criação
5. No Observatório Divino (BlueJ), crie pelo menos **3 contas**, faça operações entre elas e inspecione seus estados

**Requisitos técnicos obrigatórios:**

- [ ] Classe `Conta` com atributos: `int numero`, `String cliente`, `double saldo`, `double limite`
- [ ] Construtor que recebe `numero` e `cliente` (saldo e limite iniciam em 0)
- [ ] Segundo construtor que recebe `numero`, `cliente` e `limite`
- [ ] Método `void depositar(double valor)` — adiciona valor ao saldo
- [ ] Método `boolean sacar(double valor)` — retorna `true` se o saque foi possível (saldo + limite ≥ valor), `false` caso contrário
- [ ] Método `boolean transferir(Conta destino, double valor)` — saca de si e deposita no destino
- [ ] Método `void exibirExtrato()` — exibe número, cliente, saldo e limite
- [ ] Teste no BlueJ com pelo menos 3 contas e operações entre elas

**Critérios de avaliação:**

| Critério                               | Pontos      |
| -------------------------------------- | ----------- |
| Classe com atributos corretos          | 10 pts      |
| Construtor básico funcional            | 15 pts      |
| Segundo construtor (com limite)        | 10 pts      |
| Método `depositar` correto             | 10 pts      |
| Método `sacar` com validação e retorno | 20 pts      |
| Método `transferir` entre contas       | 20 pts      |
| Método `exibirExtrato`                 | 5 pts       |
| Teste no BlueJ com pelo menos 3 contas | 10 pts      |
| **Total**                              | **100 pts** |

**Dica do Oráculo:** _"O método `transferir` não precisa reinventar a roda. Se o Deus já criou o poder de `sacar` e o poder de `depositar`... por que não reutilizá-los? Um bom Criador não repete trabalho — ele compõe poderes."_

## 🗣️ Palavras de inspiração

> _"O Molde é a ideia. A Criatura é a realidade. Sem o `new`, você tem um sonho. Com o `new`, você tem um ser vivo."_

> _"Uma classe sem construtor é como um universo sem Big Bang. Até existe… mas nada acontece."_

> _"Se você precisa preencher 5 atributos manualmente toda vez que cria um objeto, você não tem um Ritual de Nascimento — tem uma receita de sofrimento."_

> _"Dois objetos do mesmo molde não são o mesmo objeto. Gêmeos idênticos são duas pessoas — não uma."_

> _"O método `transferir` reutiliza `sacar` e `depositar`. Isso se chama composição de comportamentos — e é a marca de um Criador eficiente."_
