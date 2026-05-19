---
title: O Tesouro do Dragão Ancestral
date: 2026-05-19 15:30:00.00 -3
category:
  - exercicio
  - entrega
---

## 🔨 O Desafio do Criador

### Missão: A Guarda do Tesouro Ancestral

**Contexto narrativo:**
O Dragão Ancestral, Smaug, possui um tesouro colossal em sua montanha. No entanto, ele percebeu que pequenos ladrões e até outros deuses menores estavam tentando "ajustar" a contagem de seu ouro e diamantes durante seus sonhos profundos. Smaug não tolera que ninguém toque em sua riqueza sem a sua permissão ou sem seguir as leis da montanha.

**Sua missão como Deus Criador:**
Você deve construir um sistema de gestão de tesouro que seja absolutamente impenetrável. O tesouro não pode ser alterado por "mágicas externas" (acesso direto), apenas por rituais específicos (métodos) que sigam a vontade do dragão.

**Requisitos técnicos obrigatórios:**

1. **A Armadura Sagrada:** Crie uma classe `Tesouro` onde os atributos `quantidadeOuro` e `quantidadeDiamantes` sejam estritamente **privados**.
2. **O Ritual de Depósito:** Implemente um método `depositarOuro(int valor)`. 
   - Se o valor for positivo, o ouro é adicionado.
   - Se o valor for zero ou negativo, o sistema deve emitir um aviso: *"O Dragão não aceita oferendas vazias ou dívidas!"* e não alterar o saldo.
3. **O Ritual de Saque:** Implemente um método `sacarOuro(int valor)`.
   - O saque só é permitido se houver ouro suficiente no tesouro.
   - Se tentar sacar mais do que existe, exiba: *"Tentar roubar mais do que existe é um convite ao fogo do dragão!"*.
4. **A Lei dos Diamantes:** Crie um método `adicionarDiamantes(int valor)`. 
   - Diamantes são preciosos demais para serem retirados. Portanto, a classe **não deve possuir** um método de saque para diamantes.
5. **A Apresentação da Riqueza:** Implemente o método `toString()` ou `exibirInventario()` para mostrar a quantidade atual de ouro e diamantes de forma elegante.

**Critérios de avaliação:**
| Critério | Pontos |
|---|---|
| Atributos declarados como `private` | 30 pts |
| Validação correta no depósito de ouro (não negativo) | 10 pts |
| Validação correta no saque de ouro (não exceder saldo) | 20 pts |
| Validação correta no depósito de diamantes  | 10 pts |
| Impossibilidade de retirar diamantes (ausência de método de saque) | 15 pts |
| Implementação correta do `toString` ou `exibirInventario` | 15 pts |
| **Total** | **100 pts** |

**Dica do Oráculo:** Lembre-se que o construtor também deve usar os métodos de validação para garantir que o tesouro não nasça em um estado inválido!

## 🗣️ Palavras de inspiração

> _"O encapsulamento não é sobre esconder dados, é sobre proteger a verdade do seu sistema."_

> _"Um programador que deixa seus atributos públicos é como um rei que deixa a porta do cofre aberta e dorme no jardim."_

> _"A verdadeira beleza de um objeto está naquilo que ele escolhe NÃO mostrar ao mundo."_


## Link para entrega

[Entregar Desafio - O Tesouro do Dragão Ancestral](https://classroom.github.com/a/6OHPmZnz)
