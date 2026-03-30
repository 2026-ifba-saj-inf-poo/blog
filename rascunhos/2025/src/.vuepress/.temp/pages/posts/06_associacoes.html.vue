<template><div><h1 id="associacoes" tabindex="-1"><a class="header-anchor" href="#associacoes"><span>Associações</span></a></h1>
<ul>
<li>Forma como uma classe se relaciona com outra classe</li>
<li>Uma classe pode conter atributos que geram instâncias de outra classe
<ul>
<li>Uma classe pode conter outra classe como atributo</li>
<li>Quando isto ocorre dizemos que uma classe possui outra classe associada a ela</li>
</ul>
</li>
</ul>
<figure>
<img src="https://www.plantuml.com/plantuml/svg/LP313i8W38RlF4MFCswlO9Peucaddw02qIP0JM6x6D_TZJ4T70hvcl_dR_kOKDBedUf_BwKTnWXd5E6tWlbqS4j2uG6QfGOUHMED9kjOaq5Z2nyuiO1VQYR7rRhvUxQLNRjN78faOZA0sZehA4r5NxYYpvOyoxVa519edD1nt17XX9fjtFiOyXH6aYi9n_eB7BqDytxgrcAK1E_eddpXWOLBZ3mVTASoYEfjC7d7w_q5" alt="{kroki}" kroki="" loading="lazy">
<figcaption>Exemplo de Associação.</figcaption>
</figure>
<h2 id="agregacao" tabindex="-1"><a class="header-anchor" href="#agregacao"><span>Agregação</span></a></h2>
<ul>
<li>
<p>A classe contida não é instanciada no escopo da classe principal</p>
<ul>
<li>Não depende da principal para existir</li>
<li>Normalmente é passada por parâmetro</li>
</ul>
</li>
<li>
<p>Agregação é uma associação em que um objeto é parte de outro, de tal forma que a parte pode existir sem o todo.</p>
</li>
<li>
<p>Em mais baixo nível, uma agregação consiste de um objeto contendo referências para outros objetos, de tal forma que o primeiro seja o todo, e que os objetos referenciados sejam as partes do todo.</p>
</li>
</ul>
<figure>
<img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNA0ixYISnABYnK2Yl9JIalogxaKW41N8RYaA3ClNI4lFpSLAkAMNvINcfoQab-aa0PdSjN2z2EaSHa1KWkrHK4t7zayBeVKl1Imgo0q0000" alt="{kroki}" kroki="" loading="lazy">
<figcaption>Exemplo de Agregação.</figcaption>
</figure>
<h2 id="composicao" tabindex="-1"><a class="header-anchor" href="#composicao"><span>Composição</span></a></h2>
<ul>
<li>A classe contida é instanciada pela classe principal</li>
<li>Quando uma instancia da classe principal é retirada da memória, as instancias das outras classes também são.</li>
<li>O todo contém as partes (e não referências para as partes). Quando o todo desaparece, todas as partes também desaparecem.</li>
</ul>
<figure>
<img src="https://www.plantuml.com/plantuml/svg/NL0v3i8m4EpzYgsHyWE4Wb8XKL3mWLNi10jdDzYRD8ZNKF2GV8mSJYpOPaOpE-CZ3u9UkiQfV6EgT1W2dCGq1JUjnwU2SJAuUDQTCBGBHjMImAD34gjHcoWMwBsb6qCPYNgjlQkrjbQEKQ17n_xAWYxAPnjad-vm02k6mcnENSc1R9UEKyHYW0cSfJkeQOE37Jx3cvKX3PFzayruUzQITQQIL72ilQdnBv-FRFwo1Ry0" alt="{kroki}" kroki="" loading="lazy">
<figcaption>Exemplo de Composição.</figcaption>
</figure>
<h2 id="exercicios" tabindex="-1"><a class="header-anchor" href="#exercicios"><span>Exercícios</span></a></h2>
<ul>
<li><RouteLink to="/posts/exercicios/08_exercicio_associacao1.html">Exercício Associação 1</RouteLink></li>
<li><RouteLink to="/posts/exercicios/09_exercicio_associacao2.html">Exercício Associação 2</RouteLink></li>
</ul>
</div></template>


