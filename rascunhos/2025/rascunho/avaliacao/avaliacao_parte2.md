# Avaliação de Programação Orientada a Objetos com Java e Greenfoot - Parte 2

## Parte 1: Fundamentos de Java e Lógica de Programação

**1. Qual é a principal diferença entre os tipos de dados primitivos e os tipos por referência (objetos) em Java?**
   a) Tipos primitivos são mais rápidos, enquanto tipos por referência são mais lentos.
   b) Tipos primitivos armazenam o valor diretamente na variável, enquanto tipos por referência armazenam o endereço de memória do objeto.
   c) Tipos primitivos só podem ser usados em métodos estáticos.
   d) Tipos primitivos não podem ter métodos, enquanto tipos por referência podem.
   e) As alternativas 'b' e 'd' estão corretas.
   **Resposta correta**: e) As alternativas 'b' e 'd' estão corretas.

**2. O que o JRE (Java Runtime Environment) inclui?**
   a) Apenas o compilador Java (javac).
   b) A JVM e as bibliotecas padrão do Java, mas não as ferramentas de desenvolvimento.
   c) O JDK completo, incluindo o compilador e o depurador.
   d) Apenas a JVM.
   e) Ferramentas para desenvolvimento de interfaces gráficas, como o Scene Builder.
   **Resposta correta**: b) A JVM e as bibliotecas padrão do Java, mas não as ferramentas de desenvolvimento.

**3. Qual é a saída do seguinte código?**
```java
String s1 = "Olá";
String s2 = new String("Olá");
String s3 = "Olá";

System.out.println(s1 == s3);
```
   a) true
   b) false
   c) Erro de compilação
   d) Olá
   e) Nada é impresso.
   **Resposta correta**: a) true

**4. Qual operador é usado para negação lógica em Java?**
   a) `&&`
   b) `||`
   c) `!`
   d) `~`
   e) `NOT`
   **Resposta correta**: c) `!`

**5. O que acontece se você tentar acessar um índice de array que não existe (por exemplo, índice 5 em um array de 5 elementos)?**
   a) O programa retorna o valor `null`.
   b) O programa retorna o valor `0`.
   c) Ocorre um erro de compilação.
   d) Ocorre uma exceção em tempo de execução (`ArrayIndexOutOfBoundsException`).
   e) O programa ignora a linha e continua a execução.
   **Resposta correta**: d) Ocorre uma exceção em tempo de execução (`ArrayIndexOutOfBoundsException`).

**6. Qual é a finalidade do laço `do-while`?**
   a) É idêntico ao laço `while`, não há diferença.
   b) Executa o bloco de código pelo menos uma vez, e depois verifica a condição.
   c) É usado exclusivamente para percorrer arrays.
   d) Executa o bloco de código apenas se a condição for falsa.
   e) É uma versão mais antiga e obsoleta do laço `for`.
   **Resposta correta**: b) Executa o bloco de código pelo menos uma vez, e depois verifica a condição.

**7. Como se declara uma constante em Java?**
   a) Usando a palavra-chave `const`.
   b) Usando as palavras-chave `final` e `static`.
   c) Apenas declarando a variável com letras maiúsculas.
   d) Usando a palavra-chave `constant`.
   e) Não é possível declarar constantes em Java.
   **Resposta correta**: b) Usando as palavras-chave `final` e `static`.

**8. O que o comando `continue` faz dentro de um laço?**
   a) Interrompe o laço imediatamente.
   b) Pula a iteração atual e vai para a próxima.
   c) Retorna ao início do método.
   d) Causa um erro de compilação.
   e) Finaliza o programa.
   **Resposta correta**: b) Pula a iteração atual e vai para a próxima.

**9. Qual é o valor da variável `resultado` após a execução deste código?**
```java
int a = 5;
int b = 2;
double resultado = (double) a / b;
```
   a) 2.0
   b) 2.5
   c) 2
   d) 3
   e) Erro de compilação
   **Resposta correta**: b) 2.5

**10. O que é um `enum` em Java?**
   a) Um tipo especial de classe usado para representar um grupo de constantes.
   b) Um tipo de laço de repetição.
   c) Uma biblioteca para entrada e saída de dados.
   d) Um método para ordenar arrays.
   e) Um operador matemático.
   **Resposta correta**: a) Um tipo especial de classe usado para representar um grupo de constantes.

**11. Qual a principal característica do paradigma de programação imperativo?**
   a) Descreve "o que" fazer, não "como" fazer.
   b) É baseado em funções matemáticas puras.
   c) Descreve o fluxo de controle do programa como uma sequência de comandos que mudam o estado do programa.
   d) É baseado em fatos e regras lógicas.
   e) É focado na resposta a eventos.
   **Resposta correta**: c) Descreve o fluxo de controle do programa como uma sequência de comandos que mudam o estado do programa.

**12. Qual método da classe `String` retorna o número de caracteres da string?**
   a) `size()`
   b) `length()`
   c) `count()`
   d) `capacity()`
   e) `length`
   **Resposta correta**: b) `length()`

**13. O que é a "pilha de execução" (stack) em Java?**
   a) Uma estrutura de dados para armazenar objetos criados com `new`.
   b) Uma área de memória onde são armazenadas as chamadas de métodos e variáveis locais.
   c) Uma fila de processos esperando para serem executados pela JVM.
   d) O local onde o bytecode é armazenado.
   e) Uma biblioteca para operações matemáticas.
   **Resposta correta**: b) Uma área de memória onde são armazenadas as chamadas de métodos e variáveis locais.

**14. Qual a forma correta de comparar se duas strings `s1` e `s2` são iguais, ignorando maiúsculas e minúsculas?**
   a) `s1.equals(s2, ignoreCase=true)`
   b) `s1.equalsIgnoreCase(s2)`
   c) `s1.toLowerCase() == s2.toLowerCase()`
   d) `s1.matches(s2)`
   e) `s1.compare(s2, case=insensitive)`
   **Resposta correta**: b) `s1.equalsIgnoreCase(s2)`

**15. Para que serve o `Maven` em um projeto Java?**
   a) Para escrever código Java.
   b) Para compilar e executar o código.
   c) Para gerenciar as dependências do projeto e automatizar o processo de build.
   d) Para criar interfaces gráficas.
   e) Para depurar o código.
   **Resposta correta**: c) Para gerenciar as dependências do projeto e automatizar o processo de build.

## Parte 2: Conceitos de Programação Orientada a Objetos (POO)

**16. O que é um objeto em POO?**
   a) Um modelo para criar outras classes.
   b) Uma instância de uma classe.
   c) Um tipo de dado primitivo.
   d) Um método estático.
   e) Um pacote de classes.
   **Resposta correta**: b) Uma instância de uma classe.

**17. Qual dos seguintes não é um pilar da Programação Orientada a Objetos?**
   a) Herança
   b) Polimorfismo
   c) Encapsulamento
   d) Abstração
   e) Sequencialidade
   **Resposta correta**: e) Sequencialidade

**18. O que acontece se uma classe não define explicitamente um construtor?**
   a) A classe não pode ser instanciada.
   b) Ocorre um erro de compilação.
   c) O compilador Java fornece um construtor padrão (sem argumentos) automaticamente.
   d) É necessário chamar um método `init()` para criar o objeto.
   e) A classe só pode ter métodos estáticos.
   **Resposta correta**: c) O compilador Java fornece um construtor padrão (sem argumentos) automaticamente.

**19. O que a palavra-chave `this` representa dentro de um método de instância?**
   a) A superclasse.
   b) A classe atual.
   c) A instância atual do objeto sobre o qual o método foi chamado.
   d) Um novo objeto que será criado.
   e) O pacote onde a classe está localizada.
   **Resposta correta**: c) A instância atual do objeto sobre o qual o método foi chamado.

**20. Qual é a principal vantagem do encapsulamento?**
   a) Permite que o código seja executado mais rapidamente.
   b) Reduz a quantidade de código necessária.
   c) Aumenta a segurança e o controle sobre o estado interno do objeto, evitando modificações indevidas.
   d) Facilita a herança múltipla.
   e) Permite o acesso direto aos atributos de qualquer parte do código.
   **Resposta correta**: c) Aumenta a segurança e o controle sobre o estado interno do objeto, evitando modificações indevidas.

**21. Uma classe `Carro` "tem um" `Motor`. Que tipo de relação de POO isso representa?**
   a) Herança
   b) Polimorfismo
   c) Abstração
   d) Associação (Agregação ou Composição)
   e) Interface
   **Resposta correta**: d) Associação (Agregação ou Composição)

**22. Qual é a classe raiz (superclasse) de todas as classes em Java?**
   a) `Main`
   b) `System`
   c) `Class`
   d) `Object`
   e) `Java`
   **Resposta correta**: d) `Object`

**23. O que é um método `static`?**
   a) Um método que pertence à instância do objeto, não à classe.
   b) Um método que não pode ser modificado.
   c) Um método que pertence à classe em si, e não a uma instância específica. Pode ser chamado sem criar um objeto da classe.
   d) Um método que só pode ser chamado de dentro da mesma classe.
   e) Um método que é executado automaticamente quando o programa inicia.
   **Resposta correta**: c) Um método que pertence à classe em si, e não a uma instância específica. Pode ser chamado sem criar um objeto da classe.

**24. Qual é a saída do código a seguir?**
```java
class Pai {
    Pai() {
        System.out.print("Pai ");
    }
}
class Filho extends Pai {
    Filho() {
        // super() é chamado implicitamente aqui
        System.out.print("Filho");
    }
}
public class Teste {
    public static void main(String[] args) {
        new Filho();
    }
}
```
   a) Filho
   b) Pai
   c) Filho Pai
   d) Pai Filho
   e) Erro de compilação
   **Resposta correta**: d) Pai Filho

**25. O que é polimorfismo de sobrecarga (overloading)?**
   a) A capacidade de uma subclasse redefinir um método da superclasse.
   b) A capacidade de ter vários métodos com o mesmo nome em uma classe, mas com listas de parâmetros diferentes.
   c) A capacidade de uma variável de referência ter diferentes formas de objeto.
   d) A capacidade de uma classe herdar de múltiplas classes.
   e) A capacidade de um método chamar a si mesmo.
   **Resposta correta**: b) A capacidade de ter vários métodos com o mesmo nome em uma classe, mas com listas de parâmetros diferentes.

**26. Se um método na superclasse é declarado como `private`, ele pode ser sobrescrito (`@Override`) na subclasse?**
   a) Sim, mas ele também deve ser `private` na subclasse.
   b) Sim, e pode ter qualquer modificador de acesso na subclasse.
   c) Não, porque o método não é visível para a subclasse.
   d) Apenas se a subclasse estiver no mesmo pacote.
   e) Sim, mas causa um aviso de compilação.
   **Resposta correta**: c) Não, porque o método não é visível para a subclasse.

**27. Em UML, qual símbolo representa o modificador de acesso `protected`?**
   a) `+` (mais)
   b) `-` (menos)
   c) `*` (asterisco)
   d) `~` (til)
   e) `#` (cerquilha)
   **Resposta correta**: e) `#` (cerquilha)

**28. Qual a principal diferença entre a API de Datas legada (`java.util.Date`) e a nova API (`java.time`)?**
   a) A nova API é mais lenta, mas mais precisa.
   b) A nova API é imutável e mais fácil de usar, enquanto a antiga é mutável e propensa a erros.
   c) A nova API só funciona com o fuso horário UTC.
   d) A antiga API é mais completa e tem mais funcionalidades.
   e) Não há grandes diferenças, a nova API é apenas uma renomeação da antiga.
   **Resposta correta**: b) A nova API é imutável e mais fácil de usar, enquanto a antiga é mutável e propensa a erros.

**29. O que é uma classe `sealed` (selada), introduzida em versões mais recentes do Java?**
   a) Uma classe que não pode ser instanciada.
   b) Uma classe que restringe quais outras classes podem herdá-la.
   c) Uma classe cujos objetos são imutáveis.
   d) Uma classe que só pode ser usada dentro do pacote onde foi declarada.
   e) Um sinônimo para uma classe `final`.
   **Resposta correta**: b) Uma classe que restringe quais outras classes podem herdá-la.

**30. Qual método do `ArrayList` é usado para verificar se a lista está vazia?**
   a) `hasElements()`
   b) `isEmpty()`
   c) `size() == 0`
   d) `isNull()`
   e) As alternativas 'b' e 'c' funcionam.
   **Resposta correta**: e) As alternativas 'b' e 'c' funcionam.

**31. O que é "acoplamento" em POO?**
   a) O grau de interdependência entre as classes. Um baixo acoplamento é desejável.
   b) O grau de responsabilidade de uma única classe. Uma alta coesão é desejável.
   c) A forma como os objetos são ligados na memória.
   d) O processo de juntar classes em um pacote.
   e) A velocidade com que os métodos de uma classe são executados.
   **Resposta correta**: a) O grau de interdependência entre as classes. Um baixo acoplamento é desejável.

**32. O que é "coesão" em POO?**
   a) O grau de interdependência entre as classes.
   b) A medida em que os elementos de uma classe pertencem uns aos outros, ou seja, o quão focada a classe é em uma única responsabilidade.
   c) A relação entre uma superclasse e uma subclasse.
   d) A prática de esconder os dados de uma classe.
   e) A capacidade de um objeto assumir várias formas.
   **Resposta correta**: b) A medida em que os elementos de uma classe pertencem uns aos outros, ou seja, o quão focada a classe é em uma única responsabilidade.

**33. Qual a finalidade de um pacote (`package`) em Java?**
   a) Agrupar classes relacionadas e evitar conflitos de nomes.
   b) Definir o ponto de entrada de um programa.
   c) Criar um arquivo executável.
   d) Declarar variáveis globais.
   e) Controlar o fluxo de execução do programa.
   **Resposta correta**: a) Agrupar classes relacionadas e evitar conflitos de nomes.

**34. Se um atributo é declarado como `protected`, onde ele pode ser acessado?**
   a) Apenas dentro da própria classe.
   b) Em qualquer lugar do programa.
   c) Dentro da própria classe, por subclasses e por outras classes no mesmo pacote.
   d) Apenas por subclasses.
   e) Apenas por outras classes no mesmo pacote.
   **Resposta correta**: c) Dentro da própria classe, por subclasses e por outras classes no mesmo pacote.

**35. O que é refatoração de código?**
   a) O processo de escrever um código novo do zero.
   b) O processo de encontrar e corrigir bugs no código.
   c) O processo de reescrever o código para adicionar novas funcionalidades.
   d) O processo de reestruturar o código existente, sem alterar seu comportamento externo, para melhorar sua legibilidade, manutenibilidade e design.
   e) O processo de otimizar o código para que ele execute mais rápido.
   **Resposta correta**: d) O processo de reestruturar o código existente, sem alterar seu comportamento externo, para melhorar sua legibilidade, manutenibilidade e design.

## Parte 3: Aplicação com Greenfoot e Desenvolvimento de Jogos

**36. Qual é o propósito do construtor de uma classe `World` no Greenfoot?**
   a) Definir a imagem de fundo do ator.
   b) Inicializar o tamanho do mundo (largura, altura) e o tamanho da célula.
   c) Adicionar os atores ao mundo.
   d) Iniciar o loop do jogo.
   e) Definir a velocidade de execução do cenário.
   **Resposta correta**: b) Inicializar o tamanho do mundo (largura, altura) e o tamanho da célula.

**37. Como você pode parar a execução do cenário do jogo a partir do código?**
   a) `Greenfoot.endGame();`
   b) `Greenfoot.stop();`
   c) `System.exit(0);`
   d) `getWorld().stop();`
   e) `this.stop();`
   **Resposta correta**: b) `Greenfoot.stop();`

**38. O que o método `turn(int amount)` faz em um ator?**
   a) Move o ator para a frente na quantidade especificada.
   b) Vira o ator para um ângulo absoluto.
   c) Gira a imagem do ator em um determinado número de graus a partir de sua orientação atual.
   d) Define a transparência da imagem do ator.
   e) Vira a imagem do ator horizontalmente.
   **Resposta correta**: c) Gira a imagem do ator em um determinado número de graus a partir de sua orientação atual.

**39. Qual método retorna uma referência ao mundo em que o ator está?**
   a) `getWorld()`
   b) `getParent()`
   c) `getScene()`
   d) `getContext()`
   e) `getEnvironment()`
   **Resposta correta**: a) `getWorld()`

**40. Para exibir um texto (como uma pontuação) na tela do jogo, o que você pode fazer?**
   a) Usar `System.out.println()`.
   b) Criar uma imagem com o texto e atribuí-la a um ator.
   c) Usar o método `getWorld().showText("Pontos: " + score, x, y)`.
   d) Usar `Greenfoot.drawText()`.
   e) As alternativas 'b' e 'c' são abordagens comuns.
   **Resposta correta**: e) As alternativas 'b' e 'c' são abordagens comuns.

**41. O que o método `isAtEdge()` verifica?**
   a) Se o ator está tocando em outro ator na borda.
   b) Se o ator está no centro do mundo.
   c) Se o ator está tocando uma das quatro bordas do mundo.
   d) Se o mouse está na borda do mundo.
   e) Se o jogo está prestes a terminar.
   **Resposta correta**: c) Se o ator está tocando uma das quatro bordas do mundo.

**42. Como você pode obter uma lista de todos os objetos de uma determinada classe no mundo?**
   a) `getWorld().getObjects(Classe.class)`
   b) `Greenfoot.getActors(Classe.class)`
   c) `World.findObjects(Classe.class)`
   d) `getObjectsInRange(Integer.MAX_VALUE, Classe.class)`
   e) `getWorld().getAll(Classe.class)`
   **Resposta correta**: a) `getWorld().getObjects(Classe.class)`

**43. Qual é a principal vantagem de usar herança para criar diferentes tipos de atores (por exemplo, `InimigoVoador` e `InimigoTerrestre` herdando de `Inimigo`)?**
   a) Melhora o desempenho do jogo.
   b) Permite reutilizar código e tratar diferentes tipos de inimigos de forma polimórfica (por exemplo, em uma lista de `Inimigo`).
   c) Facilita a definição da imagem de cada inimigo.
   d) É a única maneira de adicionar múltiplos inimigos ao mundo.
   e) Reduz o tamanho do arquivo do cenário.
   **Resposta correta**: b) Permite reutilizar código e tratar diferentes tipos de inimigos de forma polimórfica (por exemplo, em uma lista de `Inimigo`).

**44. O que a classe `MouseInfo` do Greenfoot permite obter?**
   a) Apenas se o botão do mouse foi clicado.
   b) As coordenadas X e Y do ponteiro do mouse, qual botão foi pressionado e qual ator está sob o mouse.
   c) A marca e o modelo do mouse do usuário.
   d) A velocidade de movimento do mouse.
   e) O número de cliques realizados durante o jogo.
   **Resposta correta**: b) As coordenadas X e Y do ponteiro do mouse, qual botão foi pressionado e qual ator está sob o mouse.

**45. Se você quer que um ator faça algo apenas uma vez quando é adicionado ao mundo, em que método você colocaria esse código?**
   a) No método `act()`, dentro de um `if`.
   b) No construtor da classe do ator.
   c) Em um método especial chamado `addedToWorld(World world)`.
   d) No construtor da classe `World`.
   e) As alternativas 'b' e 'c' são locais apropriados para isso.
   **Resposta correta**: e) As alternativas 'b' e 'c' são locais apropriados para isso.

**46. Para que serve o método `setRotation(int angle)`?**
   a) Gira o ator em `angle` graus a partir da posição atual.
   b) Define a rotação absoluta do ator para `angle` graus (0 é para a direita).
   c) Define a velocidade de rotação do ator.
   d) Rotaciona a imagem do mundo.
   e) Inicia uma animação de rotação.
   **Resposta correta**: b) Define a rotação absoluta do ator para `angle` graus (0 é para a direita).

**47. Como você pode remover o próprio ator de dentro de sua classe?**
   a) `getWorld().removeObject(this);`
   b) `remove(this);`
   c) `delete this;`
   d) `this.destroy();`
   e) `Greenfoot.removeActor(this);`
   **Resposta correta**: a) `getWorld().removeObject(this);`

**48. Qual a diferença entre `getOneIntersectingObject()` e `getOneObjectAtOffset()`?**
   a) Não há diferença, eles fazem a mesma coisa.
   b) `getOneIntersectingObject` verifica a colisão na posição atual, enquanto `getOneObjectAtOffset` verifica em uma posição relativa ao ator.
   c) `getOneIntersectingObject` retorna uma lista, enquanto `getOneObjectAtOffset` retorna um único objeto.
   d) `getOneIntersectingObject` é para colisões precisas, enquanto `getOneObjectAtOffset` é para colisões de caixa (bounding box).
   e) `getOneObjectAtOffset` é mais rápido e menos preciso.
   **Resposta correta**: b) `getOneIntersectingObject` verifica a colisão na posição atual, enquanto `getOneObjectAtOffset` verifica em uma posição relativa ao ator.

**49. No Greenfoot, como você pode criar um contador simples no mundo?**
   a) Criando uma classe `Counter` que herda de `Actor` e atualiza sua própria imagem para exibir o valor.
   b) Usando `Greenfoot.setScore()`.
   c) Desenhando o texto diretamente no fundo do mundo a cada quadro.
   d) Usando `getWorld().showText()` repetidamente dentro do método `act()` do mundo.
   e) As alternativas 'a' e 'd' são abordagens válidas.
   **Resposta correta**: e) As alternativas 'a' e 'd' são abordagens válidas.

**50. Qual é o sistema de coordenadas do Greenfoot?**
   a) O ponto (0,0) está no canto superior esquerdo, com X aumentando para a direita e Y aumentando para baixo.
   b) O ponto (0,0) está no centro do mundo.
   c) O ponto (0,0) está no canto inferior esquerdo, com X aumentando para a direita e Y aumentando para cima.
   d) O sistema de coordenadas é polar, baseado em ângulos e raios.
   e) O sistema de coordenadas pode ser definido pelo programador no construtor do mundo.
   **Resposta correta**: a) O ponto (0,0) está no canto superior esquerdo, com X aumentando para a direita e Y aumentando para baixo.
