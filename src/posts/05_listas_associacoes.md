---
icon: book
date: 2026-04-14 13:00:00.00 -3
title: "Listas nas Associações: Modelando 1:N e N:N"
tag:
  - java
  - lista
  - associação
  - list
category:
  - aula
order: 5
---

::: tip

**Você já conhece associações. Agora vamos aprender como construir uma lista e usá-la para conectar várias criaturas.**

:::

## 📖 O que são associações com listas?

Quando uma classe está associada a outra através de um `List`, dizemos que ela mantém uma relação de **um para muitos** ou **muitos para muitos**.

- Um `Carro` pode ter muitos `Passageiros`
- Uma `Turma` pode ter muitos `Alunos`
- Um `Livro` pode pertencer a muitas `Categorias`
- Uma `Escola` pode ter muitas `Turmas`

Em Java, isso se modela escrevendo um atributo com tipo de coleção:

```java
List<Aluno> alunos;
List<Livro> livros;
List<Categoria> categorias;
```

Mas isso ainda não cria a lista em si. Para criar a lista, é preciso instanciar um objeto de `ArrayList`:

```java
List<Aluno> alunos = new ArrayList<>();
List<Livro> livros = new ArrayList<>();
List<Categoria> categorias = new ArrayList<>();
```

- `List<Aluno>` declara o tipo da lista.
- `new ArrayList<>()` cria a lista em memória.
- `<>` usa inferência de tipo, então o Java sabe que é `ArrayList<Aluno>`.

Esta é a forma mais comum de tornar uma associação **dinâmica** e **flexível**.

- Modele um sistema de **Gerenciamento de Escola** com `Turma`, `Aluno` e `Professor`. Uma turma deve poder listar vários alunos e vários professores.


::: figure UML de associações com listas para Turma/Aluno/Professor

```plantuml
@startuml
class Turma {
  - String nome
  - List<Aluno> alunos
  - List<Professor> professores
  Turma(String nome)
  + adicionarAluno(Aluno aluno)
  + adicionarProfessor(Professor professor)
}
class Aluno {
  - String nome
  - String matricula
  - List<Turma> turmas
  Aluno(String nome, String Matricula)
  + adicionarTurma(Turma turma)
}
class Professor {
  - String nome
  - List<Turma> turmas
  Professor(String nome)
  + adicionarTurma(Turma turma)
}

Turma --> "0..*" Aluno : alunos
Aluno --> "0..*" Turma : turmas
Turma --> "0..*" Professor : professores
Professor --> "0..*" Turma : turmas
@enduml

```

:::

- Modele um sistema de **Biblioteca Digital** com `Livro`, `Autor` e `Categoria`. Cada livro pode pertencer a várias categorias e cada autor pode ter vários livros.


::: figure UML de associações com listas para Livro/Autor/Categoria.

```plantuml
@startuml

class Livro {
  - String titulo
  - Autor autor
  - List<Categoria> categorias
  Livro(String titulo, Autor autor, List<Categoria> categorias)
}
class Autor {
  - String nome
  - List<Livro> livros
  Autor(String nome)
  + adicionarLivro(Livro livro)

}
class Categoria {
  - List<Livro> livros
  - String nome
    Categoria(String nome)
  + adicionarLivro(Livro livro)
}
Livro --> Autor : autor
Autor --> "0..*" Livro : livros
Livro --> "0..*" Categoria : categorias
Categoria --> "0..*" Livro : livros
@enduml
```

:::

## 🌌 Por que usar `ArrayList` nas associações?

`ArrayList` é uma coleção que permite:

- armazenar vários objetos relacionados
- adicionar e remover itens dinamicamente
- percorrer a lista com `for`, `foreach` ou `forEach`
- usar `contains` para verificar se um objeto já está presente

É perfeito para classes que representam entidades do tipo **todo** que contém ou referencia **muitas partes**.

## 🧠 Associações 1:N com listas


- `Cliente` possui `List<Conta>`
- `Agencia` possui `List<Conta>`
- `Conta` possui `List<CartaoDeCredito>`

Essa é uma associação de **um para muitos**: um cliente pode ter várias contas, e uma agência pode controlar várias contas.

### Exemplo: Turma, Aluno e Professor

Baseado no exercício de modelagem de listas, vamos ver como uma escola pode usar listas para associar turmas, alunos e professores.

```java
import java.util.ArrayList;
import java.util.List;

class Turma {
    String nome;
    List<Aluno> alunos;
    List<Professor> professores;

    Turma(String nome) {
        this.nome = nome;
        this.alunos = new ArrayList<>();
        this.professores = new ArrayList<>();
    }

    void adicionarAluno(Aluno aluno) {
        if (!alunos.contains(aluno)) {
            alunos.add(aluno);
        }
    }

    void adicionarProfessor(Professor professor) {
        if (!professores.contains(professor)) {
            professores.add(professor);
        }
    }

    List<Aluno> getAlunos() {
        return alunos;
    }

    List<Professor> getProfessores() {
        return professores;
    }
}
```

```java
class Aluno {
    String nome;
    String matricula;
    List<Turma> turmas;

    Aluno(String matricula, String nome) {
        this.nome = nome;
        this.matricula = matricula;
        this.turmas = new ArrayList<>();
    }

    void adicionarTurma(Turma turma) {
        if (!turmas.contains(turma)) {
            turmas.add(turma);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Aluno)) return false;
        Aluno outro = (Aluno) obj;
        return this.matricula.equals(outro.matricula);
    }

    @Override
    String toString() {
        return nome + " (" + matricula + ")";
    }
}

class Professor {
    String nome;
    String especialidade;

    Professor(String nome, String especialidade) {
        this.nome = nome;
        this.especialidade = especialidade;
    }

    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Professor)) return false;
        Professor outro = (Professor) obj;
        return this.nome.equals(outro.nome) && this.especialidade.equals(outro.especialidade);
    }

    @Override
    String toString() {
        return nome + " - " + especialidade;
    }
}

class AulaPrincipal {
    public static void main(String[] args) {
        Turma turma = new Turma("POO - 2026");
        Aluno aluno = new Aluno("A001", "João");
        Professor professor = new Professor("Mariana", "Java");

        turma.adicionarAluno(aluno);
        turma.adicionarProfessor(professor);

        //turma.getAlunos().forEach(System.out::println);
        for (int i = 0; i < turma.getAlunos().size(); i++) {
            Aluno a = turma.getAlunos().get(i);
            System.out.println(a);
        }
        //turma.getProfessores().forEach(System.out::println);
        for (Professor p : turma.getProfessores()) {
            System.out.println(p);
        }
    }
}
```

Neste exemplo:

- `Turma` tem uma associação com muitos `Aluno`
- `Turma` tem uma associação com muitos `Professor`

### Por que usar `contains`?

O método `contains` usa `equals` para comparar objetos na lista. Por isso, quando armazenamos objetos associados em uma lista, devemos implementar `equals` corretamente.

```java
@Override
boolean equals(Object obj) {
    if (this == obj) return true;
    if (!(obj instanceof Aluno)) return false;
    Aluno outro = (Aluno) obj;
    return this.matricula.equals(outro.matricula);
}
```

Sem isso, duas instâncias diferentes com mesmo conteúdo podem ser consideradas diferentes.

## 📚 Exemplo: Biblioteca digital com categorias e autores

Outro domínio rico em listas é a biblioteca digital do exercício. Um livro pode ser classificado em várias categorias e pertence a um autor.

```java
class Livro {
    String titulo;
    Autor autor;
    List<Categoria> categorias;

    Livro(String titulo, Autor autor, List<Categoria> categorias) {
        this.titulo = titulo;
        this.autor = autor;
        this.categorias = categorias;
    }

    void adicionarCategoria(Categoria categoria) {
        if (!categorias.contains(categoria)) {
            categorias.add(categoria);
        }
    }

    List<Categoria> getCategorias() {
        return categorias;
    }
}
```

Aqui temos:

- `Livro` associado a um único `Autor`
- `Livro` associado a muitas `Categoria` através de `List<Categoria>`
- `Categoria` e `Livro` formam um relacionamento de **muitos para muitos** quando cada categoria pode ter muitos livros e cada livro pode ter muitas categorias


## 🧭 Como percorrer associações com listas

### Usando `for` tradicional

```java
for (int i = 0; i < turma.getAlunos().size(); i++) {
    Aluno aluno = turma.getAlunos().get(i);
    System.out.println(aluno);
}
```

### Usando `foreach`

```java
for (Aluno aluno : turma.getAlunos()) {
    System.out.println(aluno);
}
```

### Usando Java 8 `forEach`

```java
turma.getAlunos().forEach(aluno -> System.out.println(aluno));
```

## 🚀 Conectando listas e associações

As listas são o principal recurso para modelar relações reais em seus sistemas:

- `List<Conta>` representa várias contas de um cliente
- `List<Aluno>` representa os alunos de uma turma
- `List<Categoria>` representa as categorias de um livro
- `List<CartaoDeCredito>` representa os cartões ligados a uma conta

Uma associação com lista deixa o seu modelo mais fiel ao mundo real e mais preparado para mudanças.

## Resumo

- `List` serve para representar associações 1:N e N:N
- Use `ArrayList` internamente para armazenar os objetos
- Implemente `equals()` quando usar `contains()` em listas de objetos
- Use laços e `forEach` para percorrer as relações associadas

> **A chave é entender que a lista não é um atributo qualquer: ela é a associação viva entre duas classes.**



## 🔨 O Desafio

 - [Desafio 05 - UML e classes](../desafios/05_listas_associacoes.md)

