---
article: false
index: false
title: Desafio 04 - Associações, Agregação e Composição
date: 2026-03-10 8:30:00.00 -3
category:
  - exercicio
---

## 🔨 O Desafio do Criador

### Missão: Construindo um Universo de Relações — O Sistema de Pedidos

**Contexto narrativo:**

O universo cresceu. As criaturas não vivem mais isoladas — elas se conectam, dependem umas das outras e formam estruturas complexas. O Deus Criador precisa agora de um sistema para gerenciar **Pedidos** de uma loja. Um pedido possui itens, cada item referencia um produto, e cada produto tem um fornecedor. As relações são o que dão vida ao sistema.

**Sua missão como Deus Criador:**

1. Crie a classe `Fornecedor` com essência: nome e cnpj
2. Crie a classe `Produto` com essência: nome, preço e fornecedor (🎒 **agregação** — o fornecedor existe fora do produto)
3. Crie a classe `ItemPedido` com essência: produto, quantidade e um método que calcula o subtotal
4. Crie a classe `Pedido` com essência: número, cliente (String) e uma lista de itens. O pedido deve **criar** os itens internamente ao adicionar um produto (🫀 **composição**)
5. Implemente `toString()` em **todas** as classes
6. No `main`, demonstre:
   - Um fornecedor que fornece para múltiplos produtos
   - Um pedido com pelo menos 3 itens
   - O total do pedido calculado corretamente

**Requisitos técnicos obrigatórios:**

- [ ] Classe `Fornecedor` com atributos `String nome`, `String cnpj` e construtor
- [ ] Classe `Produto` com atributos `String nome`, `double preco`, `Fornecedor fornecedor` — agregação (fornecedor vem por parâmetro)
- [ ] Classe `ItemPedido` com atributos `Produto produto`, `int quantidade` e método `double getSubtotal()`
- [ ] Classe `Pedido` com atributo `List<ItemPedido> itens` — composição (itens são criados internamente pelo método `adicionarProduto`)
- [ ] Método `void adicionarProduto(Produto produto, int quantidade)` no `Pedido` que cria o `ItemPedido` internamente
- [ ] Método `double calcularTotal()` no `Pedido`
- [ ] `toString()` implementado em todas as 4 classes
- [ ] Demonstração no `main` com pelo menos 1 fornecedor, 3 produtos e 1 pedido com 3+ itens

**Critérios de avaliação:**

| Critério                                        | Pontos      |
| ----------------------------------------------- | ----------- |
| Classe `Fornecedor` com construtor e `toString`  | 10 pts      |
| Classe `Produto` com agregação de `Fornecedor`   | 15 pts      |
| Classe `ItemPedido` com `getSubtotal`            | 15 pts      |
| Classe `Pedido` com composição de `ItemPedido`   | 25 pts      |
| Método `calcularTotal` correto                   | 10 pts      |
| `toString()` funcional em todas as classes       | 15 pts      |
| Demonstração no `main` com dados válidos         | 10 pts      |
| **Total**                                        | **100 pts** |

**Dica do Oráculo:** _"Se o Pedido recebe o Produto de fora mas cria o ItemPedido por dentro, você tem agregação e composição no mesmo sistema. Observe quem cria quem — essa é a chave."_

## 🗣️ Palavras de inspiração

> _"A composição é o elo mais forte entre criaturas. É como a relação entre um corpo e seus órgãos: inseparáveis, interdependentes, essenciais."_

> _"Um guerreiro sem coração é apenas pedra. Mas um guerreiro sem espada ainda é um guerreiro — desarmado, mas vivo. Essa é a diferença entre composição e agregação."_

> _"Se o todo morre e a parte continua existindo, é agregação. Se o todo morre e a parte morre junto, é composição. A pergunta decisiva é: quem depende de quem?"_

> _"As relações entre criaturas definem a arquitetura do universo. Um universo sem relações é apenas um conjunto de seres isolados — sem vida, sem propósito, sem história."_

> _"Não basta criar criaturas poderosas. Você precisa conectá-las. O verdadeiro poder está nas relações."_
