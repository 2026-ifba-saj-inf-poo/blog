<template><div><h1 id="exercicios-sobre-exception-illegalargumentexception-saldoinsufucienteexception" tabindex="-1"><a class="header-anchor" href="#exercicios-sobre-exception-illegalargumentexception-saldoinsufucienteexception"><span>Exercícios sobre Exception (IllegalArgumentException, SaldoInsufucienteException)</span></a></h1>
<p>Considerando o exercicio <RouteLink to="/posts/exercicios/17_exercicio_Polimorfismo1.html">Modelagem Sistema Banco</RouteLink></p>
<ol>
<li>Na classe <code v-pre>Operacao</code>, modifique o construtor para ele lançar uma exception chamada <code v-pre>IllegalArgumentException</code> caso o valor da operação seja negativo. A <code v-pre>IllegalArgumentException</code> é uma exception  que já faz parte da biblioteca do Java.
<ol>
<li>Adicione o try/catch para tratar o erro</li>
<li>Ao lançar a <code v-pre>IllegalArgumentException</code>, passe via construtor uma mensagem a ser exibida. Lembre que a String recebida como parâmetro é acessível depois via o método getMessage() herdado por todas as Exceptions</li>
</ol>
</li>
<li>Modificar o sistema de controle de contas correntes para lançar uma exceção de <code v-pre>SaldoInsufucienteException</code> caso o valor de saque seja maior que o saldo disponível</li>
</ol>
</div></template>


