---
icon: pen-to-square
title: Exemplos de Uso
date: 2022-01-12
category:
  - Vegetable
tag:
  - red
  - round
---

## Exemplos de Uso de tabelas e diagramas

### Tabelas

|         | Homem        | Cão              | Mosca           |
| ------- | ------------ | ---------------- | --------------- |
| Reino   | Animalia     | Animalia         | Animalia        |
| Filo    | Chordata     | Chordata         | Arthropoda      |
| Classe  | Mammalia     | Mammalia         | Insecta         |
| Ordem   | Primata      | Carnívora        | Díptera         |
| Família | Hominidae    | Canidae          | Muscidae        |
| Gênero  | Homo         | Canis            | Musca           |
| Espécie | Homo sapiens | Canis familiaris | Musca domestica |

:Tabela de taxonomia de Linnaeus para classificação de Homem, Cão e Mosca

### Figuras

#### modo 1
<figure>

```plantuml
@startuml
node "Código binário para \nS.O. específico" as n1
artifact f1 as "Código fonte \nem C"
f1 -> n1 : compilação
@enduml
```

<figcaption> Representação do processo de compilação.</figcaption>
</figure>


#### modo 2

::: figure Representação do processo de compilação.

```plantuml
@startuml
node "Código binário para \nS.O. específico" as n1
artifact f1 as "Código fonte \nem C"
f1 -> n1 : compilação
@enduml
```

:::



#### Heading 3

Here is the content.
