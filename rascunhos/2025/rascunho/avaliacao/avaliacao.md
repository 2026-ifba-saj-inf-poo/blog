# Avaliação de Programação Orientada a Objetos com Java e Greenfoot

## Parte 1: Fundamentos de Java e Lógica de Programação

**1. Qual dos seguintes paradigmas de programação é o principal foco do Java?**
   a) Funcional
   b) Lógico
   c) Orientado a Eventos
   d) Orientado a Objetos
   e) Declarativo
   **Resposta correta**: d) Orientado a Objetos

**2. O que a sigla JDK significa no contexto do desenvolvimento Java?**
   a) Java Development Kit - Kit de Desenvolvimento Java
   b) Java Runtime Kit - Kit de Execução Java
   c) Java Deployment Kit - Kit de Implantação Java
   d) Java Dynamic Kit - Kit Dinâmico Java
   e) Java Developer Kernel - Núcleo de Desenvolvimento Java
   **Resposta correta**: a) Java Development Kit - Kit de Desenvolvimento Java

**3. Qual é a função da JVM (Java Virtual Machine)?**
   a) Compilar o código-fonte Java (.java) em bytecode (.class).
   b) Fornecer um ambiente para executar o bytecode Java em qualquer plataforma.
   c) Depurar o código Java durante o desenvolvimento.
   d) Gerenciar as dependências do projeto.
   e) Escrever código Java automaticamente.
   **Resposta correta**: b) Fornecer um ambiente para executar o bytecode Java em qualquer plataforma.

**4. Qual dos seguintes tipos de dados em Java é usado para armazenar números inteiros?**
   a) `double`
   b) `float`
   c) `int`
   d) `char`
   e) `boolean`
   **Resposta correta**: c) `int`

**5. Qual é a saída do código a seguir?**
```java
int x = 10;
if (x > 10) {
    System.out.println("Maior que 10");
} else {
    System.out.println("Não é maior que 10");
}
```
   a) Maior que 10
   b) Não é maior que 10
   c) Erro de compilação
   d) Nenhuma saída
   e) 10
   **Resposta correta**: b) Não é maior que 10

**6. Qual estrutura de repetição é mais adequada quando não se sabe o número exato de iterações, mas se conhece a condição de parada?**
   a) `for`
   b) `foreach`
   c) `while`
   d) `if-else`
   e) `switch`
   **Resposta correta**: c) `while`

**7. Como se declara corretamente um array de 5 números inteiros em Java?**
   a) `int[] numeros = new int(5);`
   b) `int numeros[] = new int{5};`
   c) `int[] numeros = new int[5];`
   d) `int numeros = new int[5];`
   e) `array<int> numeros = new array<int>(5);`
   **Resposta correta**: c) `int[] numeros = new int[5];`

**8. Qual classe é comumente usada para ler entradas do teclado no console em Java?**
   a) `System.in`
   b) `ConsoleReader`
   c) `Input`
   d) `Scanner`
   e) `Keyboard`
   **Resposta correta**: d) `Scanner`

**9. O que o comando `break` faz dentro de um laço de repetição?**
   a) Pula para a próxima iteração do laço.
   b) Interrompe a execução do laço imediatamente.
   c) Retorna um valor do método.
   d) Causa um erro de compilação.
   e) Finaliza a execução do programa.
   **Resposta correta**: b) Interrompe a execução do laço imediatamente.

**10. Qual é a convenção de nomenclatura para variáveis e métodos em Java?**
   a) PascalCase (Ex: MinhaVariavel)
   b) snake_case (Ex: minha_variavel)
   c) kebab-case (Ex: minha-variavel)
   d) camelCase (Ex: minhaVariavel)
   e) UPPERCASE (Ex: MINHAVARIAVEL)
   **Resposta correta**: d) camelCase (Ex: minhaVariavel)

**11. Qual o resultado da expressão `10 % 3` em Java?**
   a) 3
   b) 3.33
   c) 1
   d) 0
   e) Erro de compilação
   **Resposta correta**: c) 1

**12. Para que serve a classe `JOptionPane`?**
   a) Para realizar cálculos matemáticos complexos.
   b) Para criar interfaces gráficas de usuário (GUI) em modo texto.
   c) Para exibir caixas de diálogo gráficas para entrada e saída de dados.
   d) Para manipular arquivos no sistema.
   e) Para conectar a um banco de dados.
   **Resposta correta**: c) Para exibir caixas de diálogo gráficas para entrada e saída de dados.

**13. Qual é a forma correta de percorrer todos os elementos de um `ArrayList` chamado `nomes`?**
   a) `for (int i = 0; i <= nomes.size(); i++)`
   b) `for (String nome : nomes)`
   c) `for (nome in nomes)`
   d) `while (nomes.hasNext())`
   e) `foreach (String nome in nomes)`
   **Resposta correta**: b) `for (String nome : nomes)`

**14. O que é o escopo de uma variável?**
   a) O valor máximo que a variável pode armazenar.
   b) O tipo de dado da variável.
   c) A região do código onde a variável é acessível.
   d) O nome único da variável.
   e) O tempo de vida da variável na memória.
   **Resposta correta**: c) A região do código onde a variável é acessível.

**15. Qual método converte uma `String` para um número inteiro em Java?**
   a) `Integer.toInt()`
   b) `String.parseInteger()`
   c) `Integer.parseInt()`
   d) `Convert.toInt()`
   e) `(int) myString`
   **Resposta correta**: c) `Integer.parseInt()`

## Parte 2: Conceitos de Programação Orientada a Objetos (POO)

**16. O que é uma classe em POO?**
   a) Um objeto em execução.
   b) Um modelo ou planta para criar objetos.
   c) Uma função que retorna um valor.
   d) Uma variável que armazena dados.
   e) Um evento do sistema.
   **Resposta correta**: b) Um modelo ou planta para criar objetos.

**17. O que são atributos em uma classe?**
   a) As ações que um objeto pode realizar.
   b) As características ou dados que um objeto possui.
   c) Os eventos que um objeto pode disparar.
   d) Os construtores da classe.
   e) As classes das quais ela herda.
   **Resposta correta**: b) As características ou dados que um objeto possui.

**18. Qual é o objetivo de um construtor em uma classe Java?**
   a) Destruir um objeto quando ele não é mais necessário.
   b) Inicializar um objeto quando ele é criado.
   c) Definir os métodos que o objeto pode executar.
   d) Retornar o valor de um atributo privado.
   e) Comparar dois objetos.
   **Resposta correta**: b) Inicializar um objeto quando ele é criado.

**19. O que é encapsulamento?**
   a) A capacidade de uma classe herdar características de outra.
   b) A prática de agrupar dados (atributos) e os métodos que operam nesses dados em uma única unidade (classe), escondendo os detalhes internos.
   c) A capacidade de um objeto ter múltiplas formas.
   d) A criação de múltiplos objetos a partir da mesma classe.
   e) A organização de classes em pacotes.
   **Resposta correta**: b) A prática de agrupar dados (atributos) e os métodos que operam nesses dados em uma única unidade (classe), escondendo os detalhes internos.

**20. Qual modificador de acesso torna um atributo ou método acessível apenas dentro da própria classe?**
   a) `public`
   b) `protected`
   c) `default`
   d) `private`
   e) `static`
   **Resposta correta**: d) `private`

**21. Para que servem os métodos `get` e `set` (getters e setters)?**
   a) Para criar e destruir objetos, respectivamente.
   b) Para fornecer acesso controlado aos atributos privados de uma classe.
   c) Para comparar e definir a ordem dos objetos.
   d) Para iniciar e parar a execução de threads.
   e) Para converter objetos em Strings.
   **Resposta correta**: b) Para fornecer acesso controlado aos atributos privados de uma classe.

**22. O que é herança em POO?**
   a) Um mecanismo que permite a uma classe (subclasse) adquirir os atributos e métodos de outra classe (superclasse).
   b) A criação de uma cópia exata de um objeto.
   c) A capacidade de um método ter o mesmo nome mas diferentes parâmetros.
   d) A prática de esconder a complexidade interna de um objeto.
   e) A relação onde um objeto contém outro.
   **Resposta correta**: a) Um mecanismo que permite a uma classe (subclasse) adquirir os atributos e métodos de outra classe (superclasse).

**23. Qual palavra-chave é usada em Java para indicar que uma classe herda de outra?**
   a) `implements`
   b) `inherits`
   c) `extends`
   d) `super`
   e) `derives`
   **Resposta correta**: c) `extends`

**24. O que a anotação `@Override` indica?**
   a) Que o método está sobrecarregado.
   b) Que o método está sendo sobrescrito de uma superclasse.
   c) Que o método é a versão final e não pode ser modificado.
   d) Que o método é obsoleto e não deve ser usado.
   e) Que o método é estático.
   **Resposta correta**: b) Que o método está sendo sobrescrito de uma superclasse.

**25. Qual é a saída do código a seguir?**
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
   a) Veículo se move
   b) Carro acelera
   c) Erro de compilação
   d) Veículo se moveCarro acelera
   e) Nenhuma saída
   **Resposta correta**: b) Carro acelera

**26. O conceito demonstrado na questão anterior, onde uma variável do tipo `Veiculo` referencia um objeto do tipo `Carro` e chama o método específico de `Carro`, é um exemplo de:**
   a) Encapsulamento
   b) Herança
   c) Polimorfismo
   d) Abstração
   e) Composição
   **Resposta correta**: c) Polimorfismo

**27. Qual a diferença entre sobrecarga (overloading) e sobrescrita (overriding) de métodos?**
   a) Sobrecarga é em classes diferentes, sobrescrita é na mesma classe.
   b) Sobrecarga usa a mesma assinatura, sobrescrita usa assinaturas diferentes.
   c) Sobrecarga é criar métodos com o mesmo nome mas assinaturas diferentes na mesma classe; sobrescrita é redefinir um método da superclasse na subclasse.
   d) Sobrecarga é para construtores, sobrescrita é para métodos comuns.
   e) Não há diferença, são termos sinônimos.
   **Resposta correta**: c) Sobrecarga é criar métodos com o mesmo nome mas assinaturas diferentes na mesma classe; sobrescrita é redefinir um método da superclasse na subclasse.

**28. O que a palavra-chave `super` faz dentro de um método de uma subclasse?**
   a) Chama um método da própria classe (subclasse).
   b) Refere-se à instância atual do objeto.
   c) Chama um método ou construtor da superclasse.
   d) Cria uma nova instância da superclasse.
   e) Finaliza a execução do método.
   **Resposta correta**: c) Chama um método ou construtor da superclasse.

**29. Em UML, qual tipo de seta representa a relação de Herança?**
   a) Seta pontilhada com ponta aberta.
   b) Linha contínua com um losango vazio na ponta.
   c) Linha contínua com um losango preenchido na ponta.
   d) Linha contínua com uma seta triangular fechada e vazia.
   e) Linha contínua com uma seta simples na ponta.
   **Resposta correta**: d) Linha contínua com uma seta triangular fechada e vazia.

**30. Qual a diferença fundamental entre Agregação e Composição?**
   a) Na Composição, as partes podem existir sem o todo; na Agregação, não.
   b) Na Agregação, as partes podem existir sem o todo; na Composição, as partes dependem do ciclo de vida do todo.
   c) Agregação é uma relação "é um", enquanto Composição é "tem um".
   d) Não há diferença, são a mesma coisa.
   e) Composição usa a palavra-chave `composes`, enquanto Agregação usa `aggregates`.
   **Resposta correta**: b) Na Agregação, as partes podem existir sem o todo; na Composição, as partes dependem do ciclo de vida do todo.

**31. Qual coleção é mais indicada para armazenar uma lista dinâmica de objetos, cujo tamanho pode aumentar ou diminuir?**
   a) `Array`
   b) `ArrayList`
   c) `Enum`
   d) `String[]`
   e) `int[]`
   **Resposta correta**: b) `ArrayList`

**32. O que o método `toString()` da classe `Object` faz por padrão?**
   a) Retorna uma representação em String vazia do objeto.
   b) Retorna o nome da classe seguido por um "@" e o código hash do objeto.
   c) Retorna `null`.
   d) Lança uma exceção.
   e) Retorna uma lista de todos os atributos e seus valores.
   **Resposta correta**: b) Retorna o nome da classe seguido por um "@" e o código hash do objeto.

**33. Se uma classe é declarada como `final`, o que isso significa?**
   a) Que ela não pode ser instanciada.
   b) Que todos os seus métodos são estáticos.
   c) Que ela não pode ser herdada por outra classe.
   d) Que ela só pode ter um único objeto.
   e) Que seus atributos não podem ser modificados.
   **Resposta correta**: c) Que ela não pode ser herdada por outra classe.

**34. Qual é o resultado de comparar duas referências de objetos com `==`?**
   a) Verifica se os objetos são do mesmo tipo.
   b) Verifica se os valores dos atributos dos objetos são iguais.
   c) Verifica se as duas referências apontam para o mesmo objeto na memória.
   d) Chama o método `.equals()` automaticamente.
   e) Sempre retorna `false`.
   **Resposta correta**: c) Verifica se as duas referências apontam para o mesmo objeto na memória.

**35. Para comparar o conteúdo de dois objetos do tipo `String`, qual método deve ser usado?**
   a) `==`
   b) `compare()`
   c) `isEqual()`
   d) `equals()`
   e) `match()`
   **Resposta correta**: d) `equals()`

## Parte 3: Aplicação com Greenfoot e Desenvolvimento de Jogos

**36. No Greenfoot, qual classe representa o "palco" ou o cenário do jogo?**
   a) `Actor`
   b) `Stage`
   c) `Scene`
   d) `World`
   e) `Canvas`
   **Resposta correta**: d) `World`

**37. Para criar um personagem, um inimigo ou qualquer objeto que possa ser adicionado ao mundo, sua classe deve herdar de:**
   a) `World`
   b) `Object`
   c) `Actor`
   d) `Sprite`
   e) `Entity`
   **Resposta correta**: c) `Actor`

**38. Qual método é chamado repetidamente em cada ator no cenário, constituindo o loop principal do jogo?**
   a) `run()`
   b) `update()`
   c) `loop()`
   d) `act()`
   e) `execute()`
   **Resposta correta**: d) `act()`

**39. Qual método do Greenfoot é usado para verificar se uma tecla específica está sendo pressionada?**
   a) `Greenfoot.isKeyPressed()`
   b) `Greenfoot.isKeyDown()`
   c) `Greenfoot.getKey()`
   d) `Greenfoot.checkKey()`
   e) `Greenfoot.isPressed()`
   **Resposta correta**: b) `Greenfoot.isKeyDown()`

**40. Para mover um ator 5 pixels para a direita, qual comando seria usado dentro do método `act()`?**
   a) `setLocation(getX() + 5, getY());`
   b) `move(5);`
   c) `setX(getX() + 5);`
   d) `moveRight(5);`
   e) `location.x += 5;`
   **Resposta correta**: a) `setLocation(getX() + 5, getY());` (Nota: `move(5)` move na direção atual, que pode não ser para a direita)

**41. Qual método é usado para detectar se um ator está tocando em outro de uma classe específica (por exemplo, `Inimigo.class`)?**
   a) `isTouching(Inimigo.class)`
   b) `isColliding(Inimigo.class)`
   c) `intersects(Inimigo.class)`
   d) `hasContact(Inimigo.class)`
   e) `onCollision(Inimigo.class)`
   **Resposta correta**: a) `isTouching(Inimigo.class)`

**42. Como você removeria do mundo um objeto da classe `Moeda` que o ator atual está tocando?**
   a) `removeTouching(Moeda.class);`
   b) `delete(Moeda.class);`
   c) `getWorld().removeObject(getTouching(Moeda.class));`
   d) `destroy(Moeda.class);`
   e) `getWorld().removeTouching(Moeda.class);`
   **Resposta correta**: a) `removeTouching(Moeda.class);`

**43. Para adicionar um novo ator (por exemplo, `new Bala()`) no mundo na posição (100, 150), qual comando é usado?**
   a) `addObject(new Bala(), 100, 150);` (dentro da classe World)
   b) `getWorld().addObject(new Bala(), 100, 150);` (dentro da classe Actor)
   c) `Greenfoot.addObject(new Bala(), 100, 150);`
   d) `new Bala(100, 150);`
   e) `World.add(new Bala(), 100, 150);`
   **Resposta correta**: b) `getWorld().addObject(new Bala(), 100, 150);` (dentro da classe Actor)

**44. Qual método do Greenfoot gera um número inteiro aleatório até um limite especificado (exclusive)?**
   a) `Greenfoot.random(limit);`
   b) `Greenfoot.getRandom(limit);`
   c) `Greenfoot.getRandomNumber(limit);`
   d) `Greenfoot.nextInt(limit);`
   e) `Greenfoot.randomInteger(limit);`
   **Resposta correta**: c) `Greenfoot.getRandomNumber(limit);`

**45. Se você tem várias classes de inimigos (`InimigoA`, `InimigoB`) que compartilham comportamentos, qual seria a melhor abordagem de POO?**
   a) Copiar e colar o código comum em todas as classes.
   b) Criar uma superclasse `Inimigo` com o comportamento comum e fazer `InimigoA` e `InimigoB` herdarem dela.
   c) Criar um método estático em uma classe `Util` para o comportamento comum.
   d) Colocar todo o código na classe `World`.
   e) Usar uma interface para cada tipo de comportamento.
   **Resposta correta**: b) Criar uma superclasse `Inimigo` com o comportamento comum e fazer `InimigoA` e `InimigoB` herdarem dela.

**46. Para tocar um arquivo de som chamado "explosao.wav", qual comando você usaria?**
   a) `Greenfoot.playSound("explosao.wav");`
   b) `Greenfoot.play("explosao.wav");`
   c) `Greenfoot.sound("explosao.wav");`
   d) `Greenfoot.startSound("explosao.wav");`
   e) `Greenfoot.music("explosao.wav");`
   **Resposta correta**: a) `Greenfoot.playSound("explosao.wav");`

**47. O que o método `getOneIntersectingObject(Classe.class)` retorna se o ator não está intersectando nenhum objeto da classe especificada?**
   a) `false`
   b) `0`
   c) `null`
   d) Lança uma exceção `NullPointerException`.
   e) `-1`
   **Resposta correta**: c) `null`

**48. Como você pode obter a largura do mundo atual dentro de um ator?**
   a) `getWorld().width()`
   b) `World.getWidth()`
   c) `getWorld().getWidth()`
   d) `Greenfoot.getWorldWidth()`
   e) `this.World.width`
   **Resposta correta**: c) `getWorld().getWidth()`

**49. No tutorial do jogo estilo "Hole.io", por que foi criada a classe `Swallowable`?**
   a) Para representar o jogador.
   b) Para ser uma superclasse para todos os objetos que podem ser "engolidos", aplicando herança e polimorfismo.
   c) Para controlar o placar do jogo.
   d) Para definir os limites do mundo.
   e) Para tocar os sons do jogo.
   **Resposta correta**: b) Para ser uma superclasse para todos os objetos que podem ser "engolidos", aplicando herança e polimorfismo.

**50. Para fazer um ator se mover em direção ao mouse, qual informação você precisaria obter primeiro?**
   a) A posição do centro do mundo.
   b) O número de atores no cenário.
   c) As informações do mouse, usando `Greenfoot.getMouseInfo()`.
   d) A última tecla pressionada pelo usuário.
   e) A velocidade de execução do cenário.
   **Resposta correta**: c) As informações do mouse, usando `Greenfoot.getMouseInfo()`.
