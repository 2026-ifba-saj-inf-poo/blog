---
name: avaliador-progressao-docente
description: "**DOMAIN SKILL** — Analyze, classify, and score documents submitted for IFBA faculty academic progression (progressão docente) processes. USE FOR: extracting precise activity information from progression documents (PDFs, certificates, declarations); classifying each document against the official 5-group barema (Ensino, Pesquisa, Extensão, Gestão, Capacitação); calculating partial and group scores without rounding; generating a structured JSON audit trail with document evidence and file paths. HANDLES: multi-PDF batch analysis; multi-page document splitting (one record per page/document); regime-aware calculations (DE/40h vs 20h multipliers); ambiguity documentation in JSON descriptions; barema period validation (checking document dates against evaluation window). NEVER USE FOR: general document reading unrelated to IFBA faculty progression; legal or policy interpretation beyond the barema criteria; payroll or salary calculations; progression decisions (only scoring evidence)."
---

# Avaliador de Documentos para Progressão Docente IFBA

## Propósito

Skill especializado para **análise, classificação e pontuação** de documentos submetidos em processos de progressão docente do IFBA, de acordo com o Barema de Referência oficial. Produz um **JSON auditável** com um registro por documento (ou por página), detalhando código do item, pontuação calculada e evidências textuais.

---

## Quando Ativar

**Ativar este skill quando o usuário:**
- Mencionar "progressão docente", "barema IFBA", "SIAPE" em contexto de análise documental
- Enviar PDFs ou documentos para classificação em itens do barema
- Pedir pontuação de atividades de ensino, pesquisa, extensão, gestão ou capacitação do IFBA
- Solicitar geração de JSON de auditoria de documentos

**NÃO ativar quando:**
- O documento não é relacionado a progressão docente do IFBA
- O usuário pede interpretação de políticas além do barema
- O usuário quer cálculo de salário ou parcelas financeiras

---

## Inputs Esperados

O usuário deve fornecer:
1. **Documentos** — PDFs, imagens ou texto extraído dos documentos comprobatórios
2. **Período de avaliação** — datas de início e fim do interstício avaliado
3. **Regime de trabalho** — DE/40h ou 20h (afeta o multiplicador do item 1.1.1)
4. **Nome e SIAPE** do docente (extrair dos documentos se não fornecido explicitamente)

---


## Fluxo de Trabalho

### 1. Identificação do Docente
- Extrair **nome completo** do docente
- Extrair **SIAPE** (Número de matrícula)
- Validar presença de ambas as informações

### 2. Análise de Cada Documento
Para cada documento fornecido:

#### 2.1 Extração de Informações
- **Data**: extrair data do documento (formato DD/MM/YYYY)
- **Tipo**: identificar tipo de atividade/documento
- **Evidências**: citar datas, números, períodos mencionados
- **Carga horária**: extrair horas/semestres quando relevante

#### 2.2 Classificação no Barema
- Determinar o **código do item** (ex: 1.1.1, 2.3.2, 4.5)
- Validar contra critérios específicos do item
- Identificar requisitos obrigatórios (editais, certificação IFBA, etc.)
- VERIFICA SE A DATA DO DOCUMENTO ESTÁ DENTRO DO PERÍODO DE AVALIAÇÃO

#### 2.3 Cálculo de Pontuação
- Aplicar fórmula específica do item
- **NUNCA arredondar** valores intermediários
- Usar valor calculado com precisão decimal completa
- Documentar cada etapa do cálculo na descrição

### 3. Tratamento de Múltiplos Documentos
- **Múltiplos PDFs**: cada PDF = registro separado
- **Páginas diferentes no mesmo PDF**: cada página/documento = registro separado
- Indicar número da página na descrição quando aplicável
- Exemplo: "Página 3: Participação em órgão colegiado de curso (Colegiado)."

### 4. Saída JSON
Gerar JSON único com todos os registros, seguindo o modelo:

```json
{
    "docente": "Nome Completo do Docente",
    "siape": 12345678,
    "dataAnalise": "13/04/2026",
    "documentos": [
        {
            "codigoItem": "1.1.1",
            "pathDoArquivo": "d:\\dev\\barema-gemini\\docs\\arquivo.pdf",
            "pontos": 15.1,
            "data": "31/07/2024",
            "descricao": "Descrição detalhada com cálculos e evidências"
        },
        {
            "codigoItem": "4.8",
            "pathDoArquivo": "d:\\dev\\barema-gemini\\docs\\outro.pdf",
            "pontos": 3.0,
            "data": "10/04/2023",
            "descricao": "Participação em órgão colegiado de curso (Colegiado). Página 2."
        }
    ]
}
```

## Barema de Referência

| Item | Atividade | Limite Max: 60 | Total de pontos |
| -- | -- | -- | -- |
| 1. | Atividades de Ensino | 106 | |
| 1.1 | Assiduidade (Avaliação conjunta do Departamento e Coordenação) | 28 | |
| 1.1.1 | Aulas (1,25 pontos para cada 01 hora/aula em regime de DE/40h ou 2,5 pontos para cada 01 hora/aula em regime 20h, sendo computada a hora média semanal do período de avaliação). [^Aulas] | 22 | |
| 1.1.2 | Reuniões de Departamento e Coordenação | 3 | |
| 1.1.3 | Reuniões de Áreas de conhecimento, Planejamento Pedagógico, Conselhos de Classe e/ou de Curso. | 3 | |
| 1.2 | Responsabilidade (avaliado pela Coordenação/Departamento) | 20 | |
| 1.2.1 | Elaboração e entrega de Planos de Curso, de Ensino ou Ensino especializado. | 5 | |
| 1.2.2 | Elaboração, entrega e aprovação do Plano Individual de Trabalho (PIT) e do Relatório Individual de Trabalho (RIT). | 5 | |
| 1.2.3 | Cumprimento das datas pré-fixadas no calendário acadêmico. | 5 | |
| 1.2.4 | Atendimento às solicitações do Departamento (avaliado pelo departamento). [^solicitaçõesdoDepartamento] | 5 | |
| 1.3 | Projetos de Ensino | 50 | |
| 1.3.1 | Disponibilização e atualização de material autoral [^MaterialAutoral] | 3 | |
| 1.3.2 | Experiência comprovada de ensino (01 ponto para cada semestre no qual o docente exerceu atividades de magistério). | 4 | |
| 1.3.3 | Projeto de ensino (com validação institucional, ex.: PPA, PPC) (03 pontos/projeto). | 6 | |
| 1.3.4 | Coordenador/Orientador de Olimpíadas do conhecimento (02 pontos/projeto). | 4 | |
| 1.3.5 | Tutor/Orientador/Supervisor de Programa Educacionais Certificados (0,25 ponto/mês). | 6 | |
| 1.3.6 | Coordenador Geral do Programa Residência Pedagógica ou Programa de Iniciação à Docência (PIBID) (0,5 ponto/mês). | 12 | |
| 1.3.7 | Coordenador/Supervisor de PIBID ou equivalentes (5 pontos/programa). | 5 | |
| 1.3.8 | Orientação de Residência Pedagógica ou PIBID (0,2 ponto/mês). (Portaria CAPES 38/2018) ou PIBID (Decreto 7219/2010). | 10 | |
| 1.4 | Avaliação Docente e Autoavaliação | 5 | |
| 1.4.1 | Avaliação pelo corpo discente (segundo dados fornecidos pela coordenação). | 2 | |
| 1.4.2 | Autoavaliação (segundo dados fornecidos pelo docente). | 3 | |

Subtotal 1: (somatório dos itens 1.1.1 até 1.4.2 obedecendo o limite máximo de 60 pontos). 


| Item | Atividade | Limite Max: 40 | Total de pontos |
| -- | ---- | -- | -- |
| 2 | Atividades de Pesquisa | 204 | |
| 2.1 | Participações | 85 | |
| 2.1.1 | Atuação como avaliador, revisor ou parecerista de artigos, livros e trabalhos submetidos em eventos técnico-científicos ou de difusão de conhecimento (02 pontos/avaliação). | 8 | |
| 2.1.2 | Atuação como avaliador, revisor ou parecerista de projetos submetidos a editais de pesquisa (01 ponto/avaliação). | 4 | |
| 2.1.3 | Atuação como avaliador, revisor ou parecerista de relatórios de pesquisa (01 ponto/avaliação). | 5 | |
| 2.1.4 | Bolsa de produtividade científica, tecnológica ou inovação (4 pontos/bolsa). | 4 | |
| 2.1.5 | Coordenação de grupo de pesquisa certificado pela CNPq/CAPES (Considerar 04 pontos para Coordenador e 2 pontos para Vice coordenador/por grupo). | 4 | |
| 2.1.6 | Coordenação de projetos de pesquisa (considerar projetos aprovados através de editais, sem financiamento – 02 pontos/projeto). | 4 | |
| 2.1.7 | Editor de revistas de divulgação e popularização da ciência com DOI ou ISSN (0,2 pontos/mês). | 5 | |
| 2.1.8 | Editor, organizador ou membro de corpo editorial de livros, revistas científicas, com registro em bases de dados, ISBN, DOI, ISSN ou equivalente (0,3 ponto/mês). | 6 | |
| 2.1.9 | Execução e coordenação de projetos de pesquisa (considerar projetos aprovados através de editais, com financiamento por parte de agência de fomento ou financiado pelo IFBA – 03 pontos/projeto). | 6 | |
| 2.1.10 | Organização/Coordenação de evento técnico-científico e de difusão do conhecimento considerando a tabela de áreas de conhecimento CNPq/CAPES (participação presencial ou on-line em encontro, congresso, seminário, oficina, feira de divulgação científica, webinar, colóquio, livre e equivalentes. Excetuando eventos caracterizados como ações de extensão – 03 pontos/evento) | 6 | |
| 2.1.11 | Participação como membro em grupo de pesquisa certificado pela CNPq/CAPES (02 pontos por grupo).Excetuando a função de coordenação. | 2 | |
| 2.1.12 | Participação de conselho ou comitê técnico-científico de revista com DOI, ISSN ou equivalente registro em bases de dados científicas (0,2 ponto/mês). | 4 | |
| 2.1.13 | Participação de conselho ou comitê técnico-científico de revista sem DOI ou ISSN (0,1 ponto/mês). | 3 | |
| 2.1.14 | Participação em banca de especialização, mestrado e doutorado (02 pontos/banca). | 6 | |
| 2.1.15 | Participação em banca de TCC de ensino médio integrado/EJA, cursos subsequentes e graduação (01 ponto/banca). | 6 | |
| 2.1.16 | Participação em Evento de Apoio à Ciência e/ou Popularização das Ciências e Tecnologia (Popciências) (01 ponto/participação). | 4 | |
| 2.1.17 | Participação em evento técnico-científico e de difusão do conhecimento considerando a tabela de áreas de conhecimento CNPq/CAPES (participação presencial ou on-line em encontro, congresso, seminário, oficina, feira de divulgação científica, webinar, colóquio, live e equivalentes. Excetuando eventos caracterizados como ações de extensão - 1 pontos/evento). | 4 | |
| 2.1.18 | Revisor gramatical e ortográfico ou de tradução de artigo em revista indexada (01 ponto por revisão). | 4 | |
| 2.2 | Produções Científicas | 70 | |
| 2.2.1 | Apresentação de palestra, mesas redondas, colóquio ou equivalentes (excetuando apresentação oral de trabalho em evento científico – 01 ponto por atividade). | 4 | |
| 2.2.2 | Apresentação e produção artística (considerar apresentações e/ou produção de concertos, recitais, peças teatrais, exposições e performances adequadamente comprovadas, excetuando atividades caracterizadas como ações de extensão – 03 pontos/atividade). | 6 | |
| 2.2.3 | Atuação como avaliador, revisor ou parecerista de projetos de pesquisa, excetuando os projetos submetidos a edital (01 ponto/avaliação). | 4 | |
| 2.2.4 | Comunicação em evento técnico-científico (apresentação oral ou de pôster) (0,5 ponto/apresentação ) | 2 | |
| 2.2.5 | Publicação de artigo completo em anais de eventos com registro DOI, ISBN ou ISSN (02 pontos/evento). | 6 | |
| 2.2.6 | Publicação de livro ou capítulo de livro (publicação com registro DOI ou ISBN e editora privada – 01 ponto/capítulo e 02 pontos/livro). | 6 | |
| 2.2.7 | Publicação de livro ou capítulo de livro (publicação com registro DOI ou ISBN e editora pública – 02 pontos/capítulo e 05 pontos/livro). | 6 | |
| 2.2.8 | Publicação de livro sem corpo editorial (publicações com registro DOI ou ISBN – 02 pontos/livro). | 4 | |
| 2.2.9 | Publicação de periódico científicos com DOI ou ISSN (02 pontos/artigo). | 10 | |
| 2.2.10 | Publicação de resumo em anais de eventos com DOI, ISBN ou ISSN (0,5 ponto/evento). | 2 | |
| 2.2.11 | Publicação de resumo expandido em anais de eventos com DOI, ISBN ou ISSN (0,5 ponto/evento). | 2 | |
| 2.2.12 | Publicação em jornais, revistas, magazines e outros (01 pontos/publicação). | 2 | |
| 2.2.13 | Registro de patentes ou similares (10 pontos/registro). Considerar somente registros de proteção de direitos autorais devidamente efetivados junto aos órgãos oficiais competentes | 10 | |
| 2.2.14 | Tradução/interpretação de livros, artigos, transcrição de partituras, tradução/interpretação/transcrição/ para acessibilidade de materiais artísticos, didáticos, científicos ou de difusão do conhecimento e atividades similares (03 pontos/artigo/partitura/ transcrição para acessibilidade de cada material e similares e 06 pontos/livro). | 6 | |
| 2.3 | Orientações | 54 | |
| 2.3.1 | Supervisão/orientação de monitores ou estagiários estudantes do IFBA ou de Instituições conveniadas (01 pontos/orientação). | 4 | |
| 2.3.2 | Orientação de iniciação cientifica (02 pontos/orientação). | 10 | |
| 2.3.3 | Orientação de estágio Pós-Doutorado (05 pontos/orientação e 03 pontos/ coorientação). | 10 | |
| 2.3.4 | Orientação/coorientação de Doutorado (05 pontos/orientação e 03 pontos/coorientação). | 10 | |
| 2.3.5 | Trabalho de Conclusão de Curso (TCC) ou Trabalho de Final de Curso (TFC) (02 Orientação/coorientação de Especialização, Projeto de Final de Curso (PFC), pontos/orientação e 01 ponto por coorientação). | 10 | |
| 2.3.6 | Orientação/coorientação de Mestrado (04 pontos/orientação e 02 pontos/coorientação). | 10 | |

Subtotal 2: (somatório dos itens 2.1.1 até 2.3.6 obedecendo o limite máximo de 40 pontos) 

| Item | Atividade | Limite Max: 40 | Total de pontos |
| -- | -- | -- | -- |
| 3 | Atividades de Extensão | 125 | |
| 3.1 | programas de extensão do IFBA ou de agências financiadoras (03 Execução e gerenciamento de programa ou projetos financiados através de pontos/programa ou projeto). | 6 | |
| 3.2 | executadas junto à comunidade tais como, minicursos, palestras, colóquios e Ações de divulgação e popularização do conhecimento (considerar ações apresentações – 02 pontos/atividade). | 6 | |
| 3.3 | Atuação como avaliador, revisor ou parecerista de relatórios de extensão (01 ponto/avaliação). | 5 | |
| 3.4 | Atuação do docente frente às ACEX (Ação de Curricularização da Extensão no ensino superior – 03 pontos/curso). | 9 | |
| 3.5 | Chefia de delegação/representante ou responsáveis por campus em eventos esportivos, artísticos e culturais (03 pontos/evento). | 6 | |
| 3.6 | Coordenação de eventos de extensão aprovados e reconhecidos pela Pró-Reitoria de Extensão ou pela coordenação de extensão do campus (02 pontos/evento). | 6 | |
| 3.7 | Participação de Projeto de Incubadora de Empresa (02 pontos/projeto). | 4 | |
| 3.8 | Coordenação de Projeto de Incubadora de Empresa (04 pontos/projeto). | 8 | |
| 3.9 | Consultor Ad hoc (04 pontos/trabalho). | 4 | |
| 3.10 | Desenvolvimento de materiais didáticos e tecnológicos para a comunidade externa (Inclusão de Material no Repositório Institucional do IFBA (RI-IFBA) através das Bibliotecas – 02 pontos/material. Exemplo: cartilhas, guias, manuais, aplicativos ou cursos voltados para a comunidade. | 4 | |
| 3.11 | Execução de curso livre de extensão - carga horária mínima de 8 horas e inferior a 40 horas (01 ponto/curso). | 6 | |
| 3.12 | Execução de projetos de extensão não financiados através de programas de extensão do IFBA - Aprovado em edital de fluxo contínuo do IFBA ou reconhecido pela coordenação de extensão do campus (02 pontos/projeto). | 6 | |
| 3.14 | Execução, coordenação de curso de Formação Inicial e Continuada (FIC) e/ou PROEJA-FIC (02 pontos/curso). | 6 | |
| 3.15 | Membro da equipe do evento de extensão (01 ponto/evento). | 8 | |
| 3.16 | Organização ou coordenação de evento esportivo no âmbito do IFBA (04 pontos/evento). | 8 | |
| 3.17 | Orientador de bolsista de Extensão (01 ponto/bolsista) | 4 | |
| 3.18 | Parcerias institucionais para ações de extensão aprovadas em editais internos ou externos. | 6 | |
| 3.19 | Participação em redes de colaboração extensionista - Fóruns, conselhos comunitários, comitês de extensão e equivalentes (02 pontos/participação). | 4 | |
| 3.20 | Produção/Edição de programas de rádio, cinema, vídeo, televisão, podcasts , mídias sociais, vinculada à atividade docente/IFBA (02 pontos/trabalho). | 4 | |
| 3.21 | Realização de visita técnica, certificados pela instituição (02 pontos/visita). | 6 | |
| 3.22 | Prestação de serviço (Análise laboratorial, laudo, perícia, consultoria e outros trabalhos técnicos (02 pontos/atividade). | 2 | |
| 3.23 | Atuação como avaliador, revisor ou parecerista de projetos de extensão (01 ponto/avaliação). | 5 | |
| 3.24 | Execução de atividades de certificação (Exame Nacional do Ensino Médio (Enem), Prova Nacional Docentes (PND) e equivalentes (01 ponto/atividade). | 2 | |

Subtotal 3: (somatório dos itens 3.1 até 3.22 obedecendo o limite máximo de 40 pontos) 


| Item | Atividade | Limite Max: 60 | Total de pontos |
| -- | ---- | -- | -- |
| 4 | Atividades de Gestão Institucional, Administração, Representações e Assessoramento | 265 | |
| 4.1 | Reitor(a), Diretor(a) Geral, Pró-reitores(as) (2,5 pontos/mês). | 60 | |
| 4.2 | Coordenação de área/Chefia de área (0,5 ponto/mês). | 12 | |
| 4.3 | Coordenação de curso (0,5 ponto/mês). Exceto de extensão FIC ou PROEJA-FIC. | 12 | |
| 4.4 | Coordenação de função/atividade não gratificada (0,5 ponto/mês). | 12 | |
| 4.5 | Coordenadores de Ensino EaD (0,5 pontos/mês). | 12 | |
| 4.6 | Coordenadores de Extensão/Estágio (0,5 pontos/mês). | 12 | |
| 4.7 | Coordenadores de Pesquisa (0,5 ponto/mês). | 12 | |
| 4.8 | Diretores(as) acadêmicos (Ensino, Pesquisa e Extensão), Diretores(as) Administrativos e demais CD-3 (1,25 pontos/mês). | 30 | |
| 4.9 | Diretores(as) Adjuntos(as)/Chefes/Assessor ou Assistente de Direção (01 ponto/mês). | 24 | |
| 4.10 | Elaboração/Correção de Prova de Concurso Público(01 ponto /concurso). | 5 | |
| 4.11 | Gestor ou fiscal de contrato (02 pontos por contrato). | 4 | |
| 4.12 | Membro de banca de Professor Titular (02 pontos/banca). | 8 | |
| 4.13 | Membro de comissão de avaliação de reconhecimento de saberes e competências (RSC) (01 ponto/banca). | 4 | |
| 4.14 | Participação como membro de ouvidoria interna ou representação em órgãos estaduais ou municipais (02 pontos/órgão). | 4 | |
| 4.15 | Participação como membro do Conselho de Campus (0,25 ponto/mês). | 6 | |
| 4.16 | Participação de órgão colegiado de curso (Colegiado de curso, Conselho de curso e NDE) (3 pontos/órgão). | 6 | |
| 4.17 | Participação em bancas de Heteroidentificação, Quilombola, Indígena, Renda e Biopsicossocial (0,5 ponto/banca). | 6 | |
| 4.18 | Participação em bancas examinadoras não remuneradas – exceto bancas referentes à atuação de avaliação de pesquisa ou extensão (01 pontos/banca). | 6 | |
| 4.19 | Participação em Comissão Permanente - Conselho Superior do IFBA (CONSUP), Conselho Superior de Ensino Pesquisa e Extensão (CONSEPE), Comissão Própria de Avaliação (CPA), Comissão Permanente de Progressão Docente (CPPD), Subcomissão Permanente de Progressão Docente (SCPPD), Comitê de Ética em Pesquisa (CEP), Comissão de Pesquisa e Pós-graduação (CPPG), Núcleo de Estudos Afro-Brasileiros e Indígenas (NEABI), Coordenação de Apoio à Pessoas com Necessidades Educacionais Específicas (CAPNEE), Comitê IC, CIPEA, NUPEGS e assemelhadas (0,5 pontos/mês). Entende-se por comissão permanente aquela que se constitui com finalidade específica, sem tempo de duração determinado ou prazo de conclusão e com regimento próprio. | 12 | |
| 4.20 | Participação em Comissões temporárias (03 pontos/comissão). Entende-se por comissão temporária aquela que se constitui com finalidade específica, com tempo de duração determinado ou prazo de conclusão. | 6 | |
| 4.21 | Tutor de Programa de Educação de Ensino à Distância (0,25 ponto/mês). | 6 | |
| 4.22 | Atuação na coordenação ou gestão de Sindicatos ou entidade de classe (0,25 pontos/mês). | 6 | |

Subtotal 4: (somatório dos itens 4.1 até 4.22 obedecendo o limite máximo de 60 pontos) 



| Item | Atividade | Limite Max: 10 | Total de pontos |
| -- | - | -- | -- |
| 5 | Capacitação Docente no interstício de avaliação. | 52 | |
| 5.1 | Conclusão de curso adicional de licenciatura ou graduação (5 pontos/curso). | 5 | |
| 5.2 | Conclusão de curso de aperfeiçoamento na área de atuação (1 ponto/curso – mínimo 100h). | 5 | |
| 5.3 | Curso de doutorado na área de atuação (5 pontos/curso). | 5 | | '' |
| 5.4 | Curso de especialização na área de atuação (2 pontos/curso – mínimo 300h). | 6 | |
| 5.5 | Curso de mestrado na área de atuação (3 pontos/curso). | 6 | |
| 5.6 | Cursos realizados pela ENAP (01 ponto/curso – mínimo 20h). | 5 | |
| 5.7 | Outros Cursos (01 ponto/curso – mínimo 20h). | 5 | |
| 5.8 | Participação em missão de trabalho (0,5 pontos/missão). | 5 | |
| 5.9 | Pós-doutorado (nacional, internacional) (5 pontos/curso). | 10 | |

Subtotal 5: (somatório dos itens 5.1 até 5.9 obedecendo o limite máximo de 10 pontos) 

Será obrigatório para efeitos avaliativos a apresentação de documentos comprobatórios em todos os itens. 


## Regras Críticas de Classificação

### Validações Obrigatórias
1. **Editais**: Projetos de pesquisa/extensão devem ser aprovados via edital
2. **Financiamento**: Pesquisa com fomento (agência + IFBA) = 2 pts por projeto
3. **Certificação IFBA**: Grupos de pesquisa devem ser certificados pelo IFBA
4. **Corpo Editorial**: Deve haver registro de Qualis/CAPES para periódicos
5. **ISBN/ISSN**: Publicações devem ter registro oficial
6. **Órgão Colegiado**: Identificar tipo específico (Colegiado, NDE, Conselho)

### Períodos Relevantes
- Semestres: calculado como média de horas/semana no período
- Anos: contar número de anos completos no cargo
- Regimes: DE/40h vs 20h utilizam multiplicadores diferentes

### Cálculos Frequentes
- **1.1.1 Aulas**: (horas_semana * 52) / semanas_periodo * multiplicador
- **Orientações**: contar cada orientação/coorientação separadamente
- **Cargos administrativos**: multiplicar (pontos_base × anos_exercício)

## Procedimento de Análise

### Passo 1: Confirmar Dados do Docente
```
Nome: [extraído do documento]
SIAPE: [extraído do documento]
```

### Passo 2: Por Cada Documento
```
1. Extrair data (DD/MM/YYYY)
2. Identificar tipo de atividade
3. Coletar evidências numéricas
4. Mapear para código do barema
5. Validar requisitos específicos
6. Calcular pontos (SEM ARREDONDAR)
7. Verificar página/localização
```

### Passo 3: Gerar Estrutura JSON
- Incluir metadados do docente
- Um registro por documento/página
- Descrever cálculos em detalhe
- Usar caminhos absolutos para arquivos

## Exemplos de Classificação

### Exemplo 1: Aulas (1.1.1)
**Entrada**: RIT mostrando 12 horas/semana em 4 semestres, regime DE/40h

**Cálculo**:
- Média: (12 + 12 + 12 + 12) / 4 = 12 horas/semana
- Pontos: 12 × 1,25 = 15 pontos

**JSON**:
```json
{
    "codigoItem": "1.1.1",
    "pontos": 15.0,
    "descricao": "Média de 12 horas/semana em 4 semestres. Regime DE/40h. Cálculo: 12 × 1,25 = 15.0"
}
```

### Exemplo 2: Múltiplas Participações em Órgãos Colegiados (4.8)
**Entrada**: Dois PDFs comprovando participação em Colegiado e NDE

**Registros no JSON**:
```json
{
    "codigoItem": "4.8",
    "pontos": 3.0,
    "data": "10/04/2023",
    "descricao": "Participação em órgão colegiado de curso (Colegiado de Cursos). Página 1."
},
{
    "codigoItem": "4.8",
    "pontos": 3.0,
    "data": "20/04/2023",
    "descricao": "Participação em órgão colegiado de curso (NDE - Núcleo Docente Estruturante). Página 1."
}
```

## Tratamento de Ambiguidades

### Quando Há Múltiplas Interpretações
1. Preferir interpretação que está **explicitamente documentada** no barema
2. Exigir **evidências** para itens com requisitos específicos
3. Documentar a **ambiguidade** na descrição JSON
4. Exemplo: "Edital não identificado no documento; classificado como projeto contínuo (3.2) com ressalva"

### Quando Faltam Informações
1. Indicar dados faltantes: "Data não especificada; usando data do documento"
2. Marcar com ressalva: "Cálculo parcial - faltam dados de 1 semestre"
3. NÃO assumir valores

## Checklist de Qualidade

- [ ] Docente identificado (nome + SIAPE)
- [ ] Cada documento tem código do barema válido
- [ ] Datas em formato DD/MM/YYYY
- [ ] Nenhum valor arredondado
- [ ] Cálculos documentados completamente
- [ ] Múltiplos documentos = múltiplos registros
- [ ] Páginas identificadas quando relevante
- [ ] JSON valido e bem formado
- [ ] Caminhos absolutos para arquivos

## Ativação do Skill

Use este skill quando:
- Analisar documentos de progressão docente do IFBA
- Classificar atividades conforme barema oficial
- Gerar relatórios de pontuação com evidências
- Validar conformidade de documentação

**Invoke**: Mencione "avaliação de progressão docente" ou "análise de barema IFBA"
