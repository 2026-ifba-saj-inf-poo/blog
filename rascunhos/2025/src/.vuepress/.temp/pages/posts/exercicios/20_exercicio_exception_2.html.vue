<template><div><h1 id="exercicio-autenticacaoinvalidaexception" tabindex="-1"><a class="header-anchor" href="#exercicio-autenticacaoinvalidaexception"><span>Exercício AutenticacaoInvalidaException</span></a></h1>
<p>Crie um código que atenda a seguinte descrição:</p>
<ol>
<li>Deve existir uma classe <code v-pre>Usuario</code> que representa um usuário com login (<code v-pre>getLogin</code>) e senha (<code v-pre>getSenha</code>).</li>
<li>Deve existir uma classe <code v-pre>UsuarioDAO</code> que irá armazenar as instancias de usuário.
<ol>
<li>O método <code v-pre>autenticar</code> que realiza a autenticação, verificando se o login de usuário e a senha fornecidos correspondem a algum usuário no DAO.</li>
</ol>
</li>
<li>Se a autenticação não for bem-sucedida a exceção <code v-pre>AutenticacaoInvalidaException</code> é lançada com uma mensagem de erro apropriada (&quot;Usuario (login tal) não foi encontrado ou a senha está errada&quot;).</li>
<li>No método <code v-pre>main</code>, um exemplo de autenticação é realizado chamando o método <code v-pre>autenticar</code> do <code v-pre>UsuarioDAO</code> com um usuário válido. Se a autenticação for bem-sucedida, será exibida uma mensagem indicando que o usuário foi autenticado. Caso contrário, a mensagem de erro será exibida.</li>
</ol>
</div></template>


