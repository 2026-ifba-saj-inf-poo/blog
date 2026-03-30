---
"markdown-preview-enhanced":
  "html_class": "prova-container"
---

<!-- 
    INSTRUÇÕES DE USO:
    1. O cabeçalho e o rodapé usam HTML para manter o layout complexo.
    2. As orientações e as questões agora usam a sintaxe de containers do MPE (`:::`).
    3. Para adicionar uma nova questão, copie e cole o bloco `::: { .questao } ... :::`.
    4. Para exportar como PDF, abra a visualização (preview) e use a opção "Export to Disk" -> "PDF".
-->

<!-- ==================== HEADER (HTML para layout complexo) ==================== -->
<div class="prova-header">
    <div class="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Instituto_Federal_da_Bahia_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_da_Bahia_-_Marca_Vertical_2015.svg.png" alt="IFBA Logo">
    </div>
    <div class="info">
        <table>
            <tr><td>Curso:</td><td>Tecnologia em Análise e Desenvolvimento de Sistemas</td></tr>
            <tr><td>Matéria:</td><td>Programação Orientada a Objetos</td></tr>
            <tr><td>Professor:</td><td>[Seu Nome]</td></tr>
            <tr><td>Aluno:</td><td>_________________________________________</td></tr>
            <tr><td>Turma:</td><td>[Turma]</td></tr>
            <tr><td>Data:</td><td>[Data]</td></tr>
        </table>
    </div>
</div>

<div class="prova-title">Prova Final</div>

<!-- ==================== ORIENTAÇÕES (Markdown com MPE Container) ==================== -->
::: { .orientacoes }

**Orientações para a avaliação (Duração: 1h 40min)**

1.  Confira e assine sua avaliação;
2.  Na avaliação deverá ser utilizada caneta apenas nas cores azul ou preta;
3.  Questões respondidas à lápis não darão direito a recorreção;
4.  Respostas deverão ser escritas no local designado para cada questão;
5.  A interpretação das questões faz parte da avaliação;
6.  Em questões objetivas deve ser preenchido todo o espaço para a marcação;
7.  Não é permitido qualquer tipo de consulta;
8.  Não é permitida a troca de materiais entre colegas;
9.  Não é permitido o uso de equipamentos eletrônicos;
10. Não é permitido destacar folhas da avaliação;
11. Não é permitido conversa entre os avaliados.
12. Não é permitido utilizar folhas extras.

:::

<!-- ==================== QUESTÕES (Markdown com MPE Containers) ==================== -->
::: { .questoes }

<!-- Exemplo de como formatar uma questão -->
::: { .questao }
**1) Qual dos seguintes paradigmas de programação é o principal foco do Java?**

1.  Funcional
2.  Lógico
3.  Orientado a Eventos
4.  Orientado a Objetos
5.  Declarativo
:::

<!-- Adicione a próxima questão aqui -->
::: { .questao }
**2) O que a sigla JDK significa no contexto do desenvolvimento Java?**

1.  Java Development Kit - Kit de Desenvolvimento Java
2.  Java Runtime Kit - Kit de Execução Java
3.  Java Deployment Kit - Kit de Implantação Java
4.  Java Dynamic Kit - Kit Dinâmico Java
5.  Java Developer Kernel - Núcleo de Desenvolvimento Java
:::

<!-- CONTINUE ADICIONANDO AS QUESTÕES AQUI... -->

:::

<!-- ==================== FOOTER (HTML para layout complexo) ==================== -->
<div class="prova-footer">
    <span>[Ano/Semestre]</span>
    <span>Página 1 de X</span> <!-- A paginação é manual -->
    <span>Programação Orientada a Objetos</span>
</div>
