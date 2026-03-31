---
article: false
index: false
title: Desafio 03 - Objetos, Referência, Comparação e toString
date: 2026-03-31 14:00:00.00 -3
category:
  - exercicio
---

## 🔨 O Desafio do Criador

### Missão: O Registro das Criaturas — Identidade e Interação

**Contexto narrativo:**

O universo está crescendo. As criaturas se multiplicam, e o Deus Criador percebe que precisa de um sistema para **identificá-las**, **compará-las** e permitir que elas **se apresentem** ao universo. Sem isso, o caos retorna — criaturas sem nome, sem identidade, sem voz.

**Sua missão como Deus Criador:**

1. Crie a classe `Guerreiro` com essência própria: nome, vida, força e clã (uma String que identifica o grupo do guerreiro)
2. Implemente o **Ritual de Nascimento** que garanta que todo guerreiro nasça com identidade completa
3. Conceda o poder de `atacar(Guerreiro alvo)` — onde o alvo perde vida igual à força do atacante
4. Dê voz à criatura: implemente o `toString()` para que o guerreiro se apresente no formato: `"[Clã] NomeGuerreiro - Vida: X | Força: Y"`
5. Defina o critério de igualdade: dois guerreiros são considerados **iguais** se tiverem o **mesmo nome** e pertencerem ao **mesmo clã**
6. No BlueJ, crie pelo menos **4 guerreiros** (dois do mesmo clã com mesmo nome, dois diferentes) e demonstre:
   - A diferença entre `==` e `equals()`
   - O `toString()` funcionando
   - Um guerreiro atacando outro

**Requisitos técnicos obrigatórios:**

- [ ] Classe `Guerreiro` com atributos: `String nome`, `int vida`, `int forca`, `String cla`
- [ ] Construtor que recebe todos os atributos
- [ ] Método `void atacar(Guerreiro alvo)` — exibe mensagem e aplica dano
- [ ] Método `@Override public String toString()` — retorna representação formatada
- [ ] Método `public boolean equals(Guerreiro outro)` — compara por nome E clã
- [ ] Teste no BlueJ demonstrando `==` vs `equals()` com guerreiros idênticos e diferentes
- [ ] Teste no BlueJ demonstrando o `toString()`

**Critérios de avaliação:**

| Critério                                | Pontos      |
| --------------------------------------- | ----------- |
| Classe com atributos e construtor       | 15 pts      |
| Método `atacar` funcional               | 15 pts      |
| `toString()` com formato correto        | 20 pts      |
| `equals()` comparando nome E clã        | 25 pts      |
| Testes no BlueJ (`==` vs `equals`)      | 15 pts      |
| Teste de `toString` e `atacar` no BlueJ | 10 pts      |
| **Total**                               | **100 pts** |

**Dica do Oráculo:** _"O `equals` é a pergunta que o Deus faz para saber se duas criaturas são equivalentes. Mas quem define o critério é ele — o Criador. Escolha bem o que torna duas criaturas 'iguais' no seu universo."_

## 🗣️ Palavras de inspiração

> _"A variável não é a criatura. É o dedo que aponta para ela. Dois dedos podem apontar para o mesmo ser — ou para seres diferentes que parecem iguais."_

> _"O `==` pergunta: vocês moram no mesmo endereço? O `equals` pergunta: vocês são equivalentes? São perguntas muito diferentes."_

> _"Sem `toString()`, a criatura é um número na memória. Com `toString()`, ela tem voz. E toda criatura merece ser ouvida."_

> _"Quando você passa um objeto como parâmetro, não está enviando uma cópia — está enviando a própria criatura. Trate-a com cuidado."_

> _"Duas criaturas idênticas não são a mesma criatura — assim como dois gêmeos idênticos não são a mesma pessoa. O `new` garante isso."_
