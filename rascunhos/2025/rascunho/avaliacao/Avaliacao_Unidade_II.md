1) O que a sigla JDK significa no contexto do desenvolvimento Java?
   Java Runtime Kit - Kit de Execução Java
   **Java Development Kit - Kit de Desenvolvimento Java
   Java Deployment Kit - Kit de Implantação Java
   Java Dynamic Kit - Kit Dinâmico Java
   Java Developer Kernel - Núcleo de Desenvolvimento Java

2) Qual é a função da JVM (Java Virtual Machine)?
   Compilar o código-fonte Java (.javem bytecode (.class).
   **Fornecer um ambiente para executar o bytecode Java em qualquer plataforma.
   Depurar o código Java durante o desenvolvimento.
   Gerenciar as dependências do projeto.
   Escrever código Java automaticamente.

3) O que o JRE (Java Runtime Environment) inclui?
   Apenas o compilador Java (javac).
   **A JVM e as bibliotecas padrão do Java, mas não as ferramentas de desenvolvimento.
   O JDK completo.
   Apenas a JVM.
   Ferramentas como o VSCode.

4) No contexto da JVM, JRE e JDK, qual deles é necessário apenas para executar uma aplicação Java, sem a necessidade de compilá-la?
   JVM
   **JRE
   JDK
   Javac
   Maven

5) Qual a principal diferença entre tipos primitivos e tipos por referência em Java?
   Tipos primitivos são mais rápidos.
   Tipos primitivos armazenam o valor, enquanto tipos por referência armazenam um endereço de memória.
   Tipos primitivos não podem ter métodos.
   Tipos por referência são sempre mutáveis.
   **As alternativas 'b' e 'c' estão corretas.

6) Como se declara uma constante em Java?
   Usando a palavra-chave 'const'.
   **Usando as palavras-chave 'final' e 'static'.
   Apenas declarando a variável com letras maiúsculas.
   Usando a palavra-chave 'constant'.
   Não é possível declarar constantes em Java.
   Resposta correta: b

7) O que é a "pilha de execução"(stack) em Java?
   Uma estrutura de dados para armazenar objetos criados com 'new'.
   **Uma área de memória onde são armazenadas as chamadas de métodos e variáveis locais.
   Uma fila de processos esperando para serem executados pela JVM.
   O local onde o bytecode é armazenado.
   Uma biblioteca para operações matemáticas.
   Resposta correta: b

8) Qual a principal desvantagem de usar ‘==’ para comparar Strings?
   É mais lento que '.equals()'.
   Lança uma exceção se as strings forem diferentes.
   **Compara as referências de memória, não o conteúdo, o que pode levar a resultados inesperados.
   Não funciona para strings criadas com 'new String()'.
   Só funciona se as strings estiverem em letras minúsculas.
   Resposta correta: c

9) Qual é a saída do código a seguir?
```java
String s1 = "Olá";
String s2 = new String("Olá");
System.out.println(s1 == s2);
```
   true
   **false
   Erro de compilação
   Olá
   Nada é impresso.
   Resposta correta: b

10) Qual é a saída do código a seguir?
```java
int i = 0;
for (i = 0; i < 5; i++) {
    // loop
}
System.out.println(i);
```
   4
   **5
   0
   Erro de compilação, 'i' fora de escopo.
   6
   Resposta correta: b

11) Qual dos seguintes tipos de dados em Java é usado para armazenar números inteiros?
   double
   float
   int
   char
   boolean
   Resposta correta: c

12) Qual operador é usado para negação lógica em Java?
   '&&'
   '||'
   '!'
   '~'
   'NOT'
   Resposta correta: c

13) Qual das seguintes opções é a melhor prática para definir o nome de uma classe em Java?
   'minhaClasse'
   'MinhaClasse'
   'minha_classe'
   'MINHA_CLASSE'
   'minha-classe'
   Resposta correta: b

14) Qual estrutura de repetição é mais adequada quando não se sabe o número exato de iterações, mas se conhece a condição de parada?
   for
   foreach
   while
   if-else
   switch
   Resposta correta: c

15) O que a anotação ‘@Override’ indica?
   Que o método está sobrecarregado.
   Que o método está sendo sobrescrito de uma superclasse.
   Que o método é a versão final e não pode ser modificado.
   Que o método é obsoleto e não deve ser usado.
   Que o método é estático.
   Resposta correta: b

16) Qual a diferença entre sobrecarga (overloading) e sobrescrita (overriding)?
   Sobrecarga é em classes diferentes, sobrescrita é na mesma classe.
   Sobrecarga usa a mesma assinatura, sobrescrita usa assinaturas diferentes.
   Sobrecarga é ter métodos com mesmo nome e parâmetros diferentes na mesma classe; sobrescrita é redefinir um método da superclasse na subclasse.
   Sobrecarga é para construtores, sobrescrita é para métodos comuns.
   Não há diferença, são termos sinônimos.
   Resposta correta: c

17) Qual a diferença fundamental entre Agregação e Composição?
   Na Composição, as partes podem existir sem o todo; na Agregação, não.
   Na Agregação, as partes podem existir sem o todo; na Composição, as partes dependem do ciclo de vida do todo.
   Agregação é uma relação “é um", enquanto Composição é "tem um".
   Não há diferença, são a mesma coisa.
   Composição usa a palavra-chave 'composes', enquanto Agregação usa 'aggregates'.
   Resposta correta: b

18) Se uma classe é declarada como 'final', o que isso significa?
   Que ela não pode ser instanciada.
   Que todos os seus métodos são estáticos.
   Que ela não pode ser herdada por outra classe.
   Que ela só pode ter um único objeto.
   Que seus atributos não podem ser modificados.
   Resposta correta: c

19) Qual é a saída do código a seguir?
```java
class Veiculo {
    public void mover() {
        System.out.println("Veículo se move");
    }
}
class Carro extends Veiculo {
    @Override
    public void mover() {
        System.out.println("Carro acelera");
    }
}
public class Teste {
    public static void main(String[] args) {
        Veiculo meuVeiculo = new Carro();
        meuVeiculo.mover();
    }
}
```
   'Veículo se move'
   'Carro acelera'
   Erro de compilação
   'Veículo se move''Carro acelera'
   Nenhuma saída
   Resposta correta: b

20) Qual é a saída do código a seguir?
```java
class Pai {
    Pai() { System.out.print("Pai "); }
}
class Filho extends Pai {
    Filho() { System.out.print("Filho"); }
}
public class Teste {
    public static void main(String[] args) {
        new Filho();
    }
}
```
   'Filho'
   'Pai'
   'Filho 'Pai'
   'Pai 'Filho'
   Erro de compilação
   Resposta correta: d

21) O que é encapsulamento?
   A capacidade de uma classe herdar características de outra.
   A prática de agrupar dados e métodos em uma unidade, escondendo os detalhes internos.
   A capacidade de um objeto ter múltiplas formas.
   A criação de múltiplos objetos a partir da mesma classe.
   A organização de classes em pacotes.
   Resposta correta: b

22) O que é herança em POO?
   A criação de uma cópia exata de um objeto.
   Um mecanismo que permite a uma classe adquirir os atributos e métodos de outra.
   A capacidade de um método ter o mesmo nome mas diferentes parâmetros.
   A prática de esconder a complexidade interna de um objeto.
   A relação onde um objeto contém outro.
   Resposta correta: b

23) Qual é a classe raiz (superclassde todas as classes em Java?
   'Main'
   'System'
   'Class'
   'Object'
   'Java'
   Resposta correta: d

24) O que o método 'toString()' da classe 'Object' faz por padrão?
   Retorna uma representação em String vazia do objeto.
   Retorna o nome da classe seguido por "@"e o código hash do objeto.
   Retorna 'null'.
   Lança uma exceção.
   Retorna uma lista de todos os atributos e seus valores.
   Resposta correta: b

25) Uma classe ‘Carro’"tem um"‘Motor'. Que tipo de relação de POO isso representa?
   Herança
   Polimorfismo
   Abstração
   Associação (Agregação ou Composição)
   Interface
   Resposta correta: d

26) O que acontece se uma classe não define explicitamente um construtor?
   A classe não pode ser instanciada.
   Ocorre um erro de compilação.
   O compilador Java fornece um construtor padrão (sem argumentos) automaticamente.
   É necessário chamar um método ‘init()‘ para criar o objeto.
   A classe só pode ter métodos estáticos.
   Resposta correta: c

27) Qual modificador de acesso torna um atributo ou método acessível apenas instâncias da própria classe?
   public
   protected
   default
   private
   static
   Resposta correta: d

28) Qual método é usado para detectar se um ator está tocando em outro de uma classe específica?
   'isColliding(Classe.class)'
   'intersects(Classe.class)'
   'hasContact(Classe.class)'
   'onCollision(Classe.class)'
   'isTouching(Classe.class)'
   Resposta correta: e

29) Como você removeria do mundo um objeto da classe 'Moeda' que o ator atual está tocando?
   'delete(Moeda.class);'
   'removeTouching(Moeda.class);'
   'getWorld().removeObject(getTouching(Moeda.class));'
   'destroy(Moeda.class);'
   'getWorld().removeTouching(Moeda.class);'
   Resposta correta: b

30) O que o método 'getOneIntersectingObject(Classe.class)' retorna se não há intersecção?
   'false'
   '0'
   'null'
   Lança uma exceção 'NullPointerException'.
   '-1'
   Resposta correta: c

31) Qual método do Greenfoot é usado para verificar se uma tecla específica está sendo pressionada?
   'Greenfoot.isKeyPressed()'
   'Greenfoot.isKeyDown()'
   'Greenfoot.getKey()'
   'Greenfoot.checkKey()'
   'Greenfoot.isPressed()'
   Resposta correta: b

32) Qual método retorna uma referência ao mundo em que o ator está?
   'getParent()'
   'getScene()'
   'getContext()'
   'getWorld()'
   'getEnvironment()'
   Resposta correta: d

33) Se você quer que um ator faça algo apenas uma vez quando é adicionado ao mundo, onde você colocaria esse código?
   No método 'act()', dentro de um 'if'.
   No construtor da classe do ator.
   No construtor da classe 'World'.
   Na classe pai 'Actor'.
   Resposta correta: b

34) Como você pode remover o próprio ator de dentro de sua classe?
   'remove(this);'
   'delete this;'
   'getWorld().removeObject(this);'
   'this.destroy();'
   'Greenfoot.removeActor(this);'
   Resposta correta: c

35) Qual é o sistema de coordenadas do Greenfoot?
   O ponto (0,0) está no centro do mundo.
   O ponto (0,0) está no canto inferior esquerdo, com Y para cima.
   O sistema de coordenadas é polar.
   O sistema de coordenadas é definido pelo programador.
   O ponto (0,0) está no canto superior esquerdo, com X para a direita e Y para baixo.
   Resposta correta: e
