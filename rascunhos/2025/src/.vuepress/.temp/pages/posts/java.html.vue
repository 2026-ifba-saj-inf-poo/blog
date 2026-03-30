<template><div><h1 id="testando-a-compilacao-de-java" tabindex="-1"><a class="header-anchor" href="#testando-a-compilacao-de-java"><span>Testando a Compilação de Java</span></a></h1>
<p>Aqui está um exemplo de um componente que exibe um arquivo Java e o resultado da sua compilação em tempo de build.</p>
<h2 id="exemplo-de-sucesso" tabindex="-1"><a class="header-anchor" href="#exemplo-de-sucesso"><span>Exemplo de Sucesso</span></a></h2>
<p>Este <code v-pre>AutenticadorDeUsuario.java</code> deve compilar sem problemas.</p>
<JavaCompile src="./code/abstract/AutenticadorDeUsuario.java" /><h2 id="exemplo-de-erro" tabindex="-1"><a class="header-anchor" href="#exemplo-de-erro"><span>Exemplo de Erro</span></a></h2>
<p>Se você introduzir um erro de sintaxe no arquivo <code v-pre>AutenticadorDeUsuario.java</code> (como remover um <code v-pre>;</code>) e rodar o build novamente, a caixa de resultado abaixo mostrará o erro de compilação retornado pelo <code v-pre>javac</code>.</p>
</div></template>


