import type { FaseRoadmap, NivelEscada, GrupoChecklist } from '../types';

/*===================================================================== =========================================
    * BANCO DE DADOS ESTÁTICO (Edital)
    * Os dados do seu dataState.js original, agora fortemente tipados.
    * Aqui é onde você vai colocar os dados que antes estavam no seu estadoApp, ou seja, os dados "estáticos" do edital.
    * Lembre-se: como estes dados são "estáticos", eles não vão mudar durante a execução do programa, ou seja, não precisam ser mutáveis.
    * Se precisar adicionar novos dados, basta criar novas variáveis aqui e exportá-las.
    * =======================================================================================================================
*/

export const dbRoadmap: FaseRoadmap[] = [
    { 
        id: 1, 
        titulo: "F1: Alfabetização e Setup", 
        meses: "Meses 1-3", 
        color: "green", 
        objetivo: "Lógica e Preparação do Ambiente. Entender a lógica por trás da computação.", 
        semana: [
            {dia: "Seg", mat: "TI (Lógica) + Inglês"},
            {dia: "Ter", mat: "Português"}, 
            {dia: "Qua", mat: "TI (Lógica)"}, 
            {dia: "Qui", mat: "Português"}, 
            {dia: "Sex", mat: "TI (Lógica)"}
        ], 
        metas: ["Instalar e configurar VS Code e Git/GitHub.", "Resolver 150 questões de Lógica (Teste de Mesa).", "Iniciar Deck de Anki com classes de palavras.", "Checkpoint: Acertar >70% em lógica."] 
    },
    { 
        id: 2, 
        titulo: "F2: Estruturas e Persistência", 
        meses: "Meses 4-6", 
        color: "indigo", 
        objetivo: "Onde os dados moram. Dominar a organização da informação.", 
        semana: [
            {dia: "Seg", mat: "TI (Dados/SQL) + Inglês"},
            {dia: "Ter", mat: "Português"}, 
            {dia: "Qua", mat: "TI (Dados/SQL)"}, 
            {dia: "Qui", mat: "Português"}, 
            {dia: "Sex", mat: "TI (Dados/SQL)"}
        ], 
        metas: ["Criar DB local e realizar CRUD.", "Dominar 1ª, 2ª e 3ª Formas Normais.", "Mapear Pilhas/Filas com exemplos bancários.", "Alimentar Anki com regras de Crase e Pontuação."] 
    },
    { 
        id: 3, 
        titulo: "F3: Codificação Core e Finanças", 
        meses: "Meses 7-9", 
        color: "purple", 
        objetivo: "Java e Juros. Codificação orientada à banca e valor do dinheiro.", 
        semana: [
            {dia: "Seg", mat: "TI (Java)"},
            {dia: "Ter", mat: "Mat. Financeira"}, 
            {dia: "Qua", mat: "TI (Java)"}, 
            {dia: "Qui", mat: "Mat. Financeira"}, 
            {dia: "Sex", mat: "TI (Dados/SQL)"}
        ], 
        metas: ["Implementar sistema Conta Corrente em Java (POO).", "Resolver 100 questões de Juros Compostos.", "Dominar SQL Queries com 3+ JOINS.", "Checkpoint: Simulado Java Core + SQL."] 
    },
    { 
        id: 4, 
        titulo: "F4: Inteligência e Finanças II", 
        meses: "Meses 10-12", 
        color: "blue", 
        objetivo: "Python e Amortização. Ciência de dados aplicada.", 
        semana: [
            {dia: "Seg", mat: "TI (Python)"},
            {dia: "Ter", mat: "Mat. Financeira"}, 
            {dia: "Qua", mat: "TI (Python)"}, 
            {dia: "Qui", mat: "Mat. Financeira"}, 
            {dia: "Sex", mat: "TI (Python)"}
        ], 
        metas: ["Criar script Python lendo CSV bancário (Pandas).", "Construir planilhas PRICE e SAC manualmente.", "Anki com Estatística Descritiva.", "Vocabulário técnico em Inglês."] 
    },
    { 
        id: 5, 
        titulo: "F5: Engenharia e Nuvem", 
        meses: "Meses 13-15", 
        color: "indigo", 
        objetivo: "Arquitetura Moderna e Probabilidade. Escalabilidade de sistemas.", 
        semana: [
            {dia: "Seg", mat: "TI (Cloud/Arquitetura)"},
            {dia: "Ter", mat: "Probabilidade e Estatística"}, 
            {dia: "Qua", mat: "TI (Cloud/Arquitetura)"}, 
            {dia: "Qui", mat: "Probabilidade e Estatística"}, 
            {dia: "Sex", mat: "TI (Cloud/Arquitetura)"}
        ], 
        metas: ["Desenhar diagrama de Microsserviços para PIX.", "Resolver 80 questões de Probabilidade Condicional.", "Diferenciar IaaS, PaaS, SaaS.", "Estudo de APIs REST (Verbos/Status Codes)."] 
    },
    { 
        id: 6, 
        titulo: "F6: Governança e Ética", 
        meses: "Meses 16-18", 
        color: "green", 
        objetivo: "Compliance e Gestão. Normas éticas e conformidade.", 
        semana: [
            {dia: "Seg", mat: "TI (Agilidade/Gestão)"},
            {dia: "Ter", mat: "Ética e Compliance"}, 
            {dia: "Qua", mat: "TI (Agilidade/Gestão)"}, 
            {dia: "Qui", mat: "Ética e Compliance"}, 
            {dia: "Sex", mat: "TI (Agilidade/Gestão)"}
        ], 
        metas: ["Fichar LGPD focando em sanções e bases legais.", "Memorizar ritos do Scrum e Kanban.", "Resolver 100 questões sobre Lavagem de Dinheiro.", "Checkpoint: Simulado Governança (ITIL/COBIT)."] 
    },
    { 
        id: 7, 
        titulo: "F7: Estudo Reverso e Redação", 
        meses: "Meses 19-21", 
        color: "blue", 
        objetivo: "Velocidade e Escrita. Correção de lacunas residuais.", 
        semana: [
            {dia: "Seg", mat: "TI (Questões)"},
            {dia: "Ter", mat: "Básicas"}, 
            {dia: "Qua", mat: "TI (Questões)"}, 
            {dia: "Qui", mat: "Redação"}, 
            {dia: "Sex", mat: "TI (Questões)"}
        ], 
        metas: ["1 redação/semana sobre tecnologia/bancos.", "50 questões/dia via Estudo Reverso.", "Revisar Deck Anki Master (erros).", "Baixar tempo médio por questão para 2 min."] 
    },
    { 
        id: 8, 
        titulo: "F8: Simulação Total e Véspera", 
        meses: "Meses 22-24", 
        color: "green", 
        objetivo: "Ajuste Fino e Psicológico. Memorização de curto prazo.", 
        semana: [
            {dia: "Seg", mat: "Revisão Ativa"}, 
            {dia: "Qua", mat: "Revisão Ativa"}, 
            {dia: "Qui", mat: "Revisão Ativa"}, 
            {dia: "Sex", mat: "Simulado Geral"}
        ], 
        metas: ["10 simulados completos com gabarito.", "Revisar Leitura Suja (Prazos/Multas).", "Média de acertos em TI > 85%.", "Simular dia da prova (tempo/alimentação)."] 
    }                
];

export const dbEscada: NivelEscada[] = [
    { id: 1, tipo: "ti", titulo: "Nível 1: Fundamentos e Pensamento Computacional", desc: "Entender como a máquina funciona e como o profissional se posiciona.", topicos: ["Mindset e Comportamento: Aprender a aprender (Life long learning) e inteligência emocional", "Arquitetura de Computadores: CPU, memória, binário, complemento a dois, ponto flutuante e instruções.", "Sistemas Operacionais: Funções, processos (escalonamento, sincronização), gestão de memória (virtual, swapping) e sistemas de arquivos.", "Laboratório: Familiarizar-se com Windows 10 e Linux (SUSE SLES). Ter uma noção teórica de IBM z/OS (Mainframe)."] },
    { id: 2, tipo: "ti", titulo: "Nível 2: Lógica, Algoritmos e Estruturas", desc: "A base lógica para a construção de qualquer software.", topicos: ["Algoritmos e Estrutura de Dados: Busca sequencial e binária.", "Ordenação: Bubble sort, Selection, Insertion.", "Estruturas Lineares: Listas encadeadas, Pilhas e Filas.", "Estruturas Não-Lineares: Noções de árvore binária."] },
    { id: 3, tipo: "ti", titulo: "Nível 3: Bancos de Dados Relacionais", desc: "O domínio da persistência de dados e da linguagem SQL.", topicos: ["Conceitos de SGBD: Sistemas gerenciadores de bancos de dados.", "Modelagem Conceitual: Abordagem entidade-relacionamento.", "Modelo Relacional: Conceitos básicos e Normalização.","Linguagem SQL: Essencial para a manipulação e consulta de dados."] },
    { id: 4, tipo: "ti", titulo: "Nível 4: Engenharia de Software e Orientação a Objetos", desc: "Aprender a desenhar e estruturar sistemas antes da codificação.", topicos: ["Engenharia de Requisitos: Entender o que o utilizador e o negócio precisam.", "Análise e Projeto Orientado a Objetos (OOAD): Conceitos de classes e objetos.","Linguagem UML: Modelos e diagramas principais para documentação.","Processos de Software: Processo Unificado (UP) - fases, papéis e artefatos.", "UX e Design Thinking: Conceitos básicos de User Experience e design de serviço."] },
    { id: 5, tipo: "ti", titulo: "Nível 5: Desenvolvimento de Software (Core)", desc: "Aplicação prática com as principais linguagens do mercado.", topicos: ["Fundamentos de Programação: Diferença entre linguagens procedurais e orientadas a objeto.", "Ecossistema Java: Java SE 21 e evolução para Java EE 8 / Jakarta EE.", "Ecossistema .NET: C# 12 e plataforma .NET.", "Desenvolvimento Web (Frontend): Padrões HTML 4.01, XHTML 1.0, XML e XSLT.", "Javascript e Typescript 4.X.", "AngularJS (Legado) e Angular (Moderno)."] },
    { id: 6, tipo: "ti", titulo: "Nível 6: Arquitetura, Web e Interoperabilidade", desc: "Como sistemas complexos se comunicam e se distribuem.", topicos: ["Padrões de Projeto (Design Patterns): MVC, Camadas e Padrões GoF.", "Arquitetura de Software: Monolítica vs Microsserviços vs Micro front-end.", "Web Services e Interoperabilidade: SOA, Padrões REST, SOAP, WSDL e UDDI.", "Quarkus e Microprofile.", "Nuvem (Cloud): Nuvem pública/privada, Serverless e estratégias de migração."] },
    { id: 7, tipo: "ti", titulo: "Nível 7: Qualidade, Testes e Agilidade", desc: "Garantir a entrega de valor contínua e a robustez do código.", topicos: ["Qualidade de Software: Modelos CMMI e MPS-BR. Controle estático (revisão/inspeção).", "Testes de Software: Unidade, Integração, Regressão, Segurança e Aceitação.", "TDD (Test Driven Development): Desenvolvimento dirigido por testes.", "Agilidade: Lean, Scrum, Kanban e XP.", "Ágil em escala (SAFe, Nexus).", "Gestão: OKR, Planning Poker, Priorização (Moscow) e User Stories.", "DevSecOps: Integração contínua (CI), Deploy contínuo (CD) e Gerência de Configuração."] },
    { id: 8, tipo: "ti", titulo: "Nível 8: Dados Avançados, Governança e Especialidades", desc: "Tópicos estratégicos e tecnologias especializadas.", topicos: ["Ciência de Dados e Python: Bibliotecas Pandas, NumPy, Scikit-learn, etc.", "BI e Big Data: Data Warehouse (multidimensional), preparação e soluções de Big Data.", "Linguagens Adicionais: Scala, R, Kotlin, Swift, Flutter, Objective-C e Cobol (Mainframe).", "Gestão e Governança de TI: ITIL v4 e COBIT 2019.", "Portais Corporativos: Acessibilidade (e-MAG) e Gestão de Conteúdo."] },
    { id: 9, tipo: "mt", titulo: "🏗️ Bloco 1: Fundamentos Matemáticos e Estatísticos (A Base)", desc: "Antes de entrar na matemática financeira aplicada, você precisa dominar as sequências e a organização de dados.", topicos: ["Sequências Numéricas: Leis de formação (geral e recursiva).", "Progressão Aritmética (PA): Definição, termo geral e soma (base para Juros Simples).", "Progressão Geométrica (PG): Definição, termo geral e soma (base para Juros Compostos).", "Estatística Descritiva (Conceitos Gerais): Variáveis (tipos), população, amostra e frequências (absoluta, relativa e acumulada).", "Representação Gráfica: Tabelas, linhas, colunas, setores e histogramas."] },
    { id: 10, tipo: "mt", titulo: "💰 Bloco 2: Matemática Financeira Essencial", desc: "Aqui aplicamos as progressões ao valor do dinheiro no tempo.", topicos: ["Conceitos Gerais: Valor do dinheiro no tempo, VP (Presente), VF (Futuro), juros, taxa e prazo.", "Juros Simples: Fórmulas, cálculos e aplicações (Relação com PA).", "Desconto Comercial Simples: O \"desconto por fora\" utilizado no mercado.", "Juros Compostos: Fórmulas, capitalização e juros sobre juros (Relação com PG).", "Desconto Racional Composto: O \"desconto por dentro\" tecnicamente correto.", "Equivalência de Capitais: Fluxos regulares e irregulares, prazos e taxas de retorno (VP e VF)."] },
    { id: 11, tipo: "mt", titulo: "📈 Bloco 3: Finanças Avançadas e Amortização", desc: "O coração da prova para bancários.", topicos: ["Séries Uniformes: Anuidades e prestações constantes.", "Sistemas de Amortização - Teoria: Conceitos de saldo devedor e amortização.", "Sistema de Amortização Constante (SAC): Características e cálculos.", "Sistema Francês (Tabela PRICE): Prestações constantes e aplicação prática."] },
    { id: 12, tipo: "mt", titulo: "📊 Bloco 4: Probabilidade e Análise de Dados", desc: "Onde a estatística se torna ferramenta de decisão.", topicos: ["Medidas de Tendência Central: Média (aritmética, geométrica, ponderada), Moda e Mediana (dados brutos e agrupados).", "Medidas de Posição: Quartis e Percentis.", "Medidas de Dispersão: Amplitude, Variância, Desvio Padrão e Coeficiente de Variação.", "Probabilidade Básica: Experimento aleatório, espaço amostral, evento e Probabilidade de Laplace.", "Probabilidade Avançada: Teorema do produto, probabilidade condicional, independência e Distribuição Binomial."] },
    { id: 13, tipo: "mt", titulo: "⚖️ Bloco 5: Ética, Compliance e Direito Administrativo", desc: "Normas que regem a conduta do empregado público.", topicos: ["Ética e Virtudes: Atitudes éticas, respeito e valores. Ética empresarial e profissional.", "Gestão da Ética: Ética em empresas públicas vs. privadas e o Código de Ética da CAIXA.", "Artigo 37 da CF: Princípios da Administração Pública (LIMPE - Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência).", "Boas Práticas de Governança Corporativa: Transparência e prestação de contas.", "Assédio Moral e Sexual: Conceitos e medidas de enfrentamento no ambiente de trabalho."] },
    { id: 14, tipo: "mt", titulo: "🛡️ Bloco 6: Segurança, Sigilo e Proteção de Dados", desc: "Conhecimentos fundamentais para a era digital bancária.", topicos: ["Sigilo Bancário: Lei Complementar nº 105/2001.", "LGPD (Lei Geral de Proteção de Dados): Lei nº 13.709/2018 (Conceitos e direitos do titular).", "Segurança da Informação: Fundamentos, conceitos e mecanismos de segurança.","Segurança Cibernética: Resolução CMN nº 4893/2021."] },
    { id: 15, tipo: "mt", titulo: "🚔 Bloco 7: Combate a Ilícitos e Responsabilidade Social", desc: "Regras rígidas de controle bancário.", topicos: ["Prevenção à Lavagem de Dinheiro: Lei nº 9.613/98, Circular 3.978/2020, Carta Circular 4.001/2020 e Resolução CVM 50/2021.", "Legislação Anticorrupção: Lei nº 12.846/2013 e Decreto nº 11.129/2022.", "PRASC CAIXA: Política de Responsabilidade Social, Ambiental e Climática."] },
    { id: 16, tipo: "mt", titulo: "🌍 Bloco 8: Contexto e Atualidades", desc: "Leitura diária e acompanhamento de notícias.", topicos: ["Atualidades do Mercado Financeiro: Fintechs, Open Banking, Real Digital (Drex), COPOM, Inflação e tendências econômicas."] },
    { id: 17, tipo: "lp", titulo: "🧠 Fase I — FUNDAMENTOS DA LEITURA E COMPREENSÃO", desc: "Base de tudo. Não avance sem dominar bem.", topicos: ["Compreensão e interpretação de textos", "Tipologia textual (narração, descrição, dissertação)", "Organização textual", "Coesão e coerência", "Significação das palavras", "Inglês - Vocabulário fundamental (palavras mais frequentes)", "Inglês - Estrutura básica de frases (Sujeito + Verbo + Complemento)"] },
    { id: 18, tipo: "lp", titulo: "🧠 Fase II — ESTRUTURA DA LÍNGUA (GRAMÁTICA ESSENCIAL)", desc: "Agora você entende textos — vamos entender como eles são construídos.", topicos: ["Ortografia oficial", "Novo Acordo Ortográfico", "Acentuação gráfica", "Inglês - Verbos mais comuns (to be, to have, to do)", "Inglês - Leitura guiada de textos simples"] },
    { id: 19, tipo: "lp", titulo: "🧠 Fase III — COMUNICAÇÃO E ARGUMENTAÇÃO", desc: "Aqui você começa a pensar como a banca.", topicos: ["Sintaxe da oração e do período","Concordância nominal e verbal","Regência nominal e verbal","Colocação do pronome átono", "Pontuação", "Emprego do sinal indicativo de crase", "Argumentação e persuasão", "Comunicação assertiva (clareza, objetividade, concisão)"] },
    { id: 20, tipo: "lp", titulo: "🧠 Fase IV — REDAÇÃO (CONSTRUÇÃO COMPLETA)", desc: "Aplicação prática de tudo que foi aprendido.", topicos: ["Interpretação avançada (inferência, intenção do autor, implícitos)","Organização de parágrafos", "Introdução, desenvolvimento e conclusão", "Coesão e coerência (nível avançado)", "Argumentação aplicada", "Elaboração de redação"] },
    { id: 21, tipo: "lp", titulo: "🧠 Fase V — REDAÇÃO OFICIAL + iNGLÊS", desc: " Redação oficial e foco em inglês.", topicos: ["Correção e reescrita guiada", "Escrita formal", "Manual de Redação da Presidência da República","Leitura técnica (textos de TI e bancários)", "Reconhecimento de cognatos"] },            
    { id: 22, tipo: "lp", titulo: "🔁 Fase VI — INGLÊS PARA PROVA (FOCO EM LEITURA)", desc: "Não é fluência — é estratégia de prova.", topicos: ["Interpretação de textos em inglês", "Estratégias de scanning (busca de informação)", "Estratégias de skimming (leitura rápida)", "Falsos cognatos"] }            
];

export const dbChecklist: GrupoChecklist[] = [
    { areaNome: "TI - Desenvolvimento e Bancos", areaID: 'ti', itens: [
        { id: 'c1', text: 'Bancos de Dados - SQL: Select, Insert, Update, Delete, Joins, Group By, Subqueries', priority: 'quente' },
        { id: 'c2', text: 'Bancos de Dados: Modelagem Relacional e Normalização (1FN, 2FN, 3FN)', priority: 'quente' },
        { id: 'c3', text: 'Java SE 21: Sintaxe, Herança, Polimorfismo, Interfaces', priority: 'quente' },
        { id: 'c4', text: 'Python 3.9: Bibliotecas Pandas e NumPy', priority: 'quente' },
        { id: 'c12', text: 'Engenharia de Software: Engenharia de Requisitos (Funcionais vs Não Funcionais)', priority: 'morno' },
        { id: 'c13', text: 'Estrutura de Dados: Busca Binária, Ordenação', priority: 'morno' },
        { id: 'c34', text: 'Estrutura de Dados: Pilha, Fila, Lista Encadeada', priority: 'morno' },
        { id: 'c36', text: 'Desenvolvimento Web: JSON, XML e Sistemas Distribuídos', priority: 'morno' },
        { id: 'c14', text: 'Teste de Software: Teste de Unidade, Integração e Regressão', priority: 'morno' },
        { id: 'c39', text: 'Linguagens: JavaScript e TypeScript 4.X', priority: 'morno' },
        { id: 'c24', text: 'Qualidade de Software: CMMI e MPS-BR', priority: 'frio' },
        { id: 'c21', text: 'Linguagens: Cobol, R, Scala, Objective-C, Swift', priority: 'frio' },
        { id: 'c42', text: 'Linguagens/Frameworks: C# 12, .NET, AngularJS, Angular, JSF, JSP, Ajax', priority: 'frio' },
    ]},
    { areaNome: "TI - Arquitetura, Nuvem e Gestão", areaID: 'ti', itens: [
        { id: 'c5', text: 'Agilidade: SCRUM (Papéis, Cerimônias e Artefatos)', priority: 'quente' },
        { id: 'c6', text: 'Web: Padrões REST, Verbos HTTP e Status Codes', priority: 'quente' },
        { id: 'c7', text: 'Arquitetura Microsserviço, Nuvem Pública/Privada', priority: 'quente' },
        { id: 'c30', text: 'Arquitetura de Software: MVC', priority: 'quente' },
        { id: 'c32', text: 'Agilidade: Kanban e Fluxo de Valor', priority: 'quente' },
        { id: 'c33', text: 'Segurança Cibernética (CMN 4893)', priority: 'quente' },
        { id: 'c35', text: 'Eng. de Software: UML (Diagramas de Classe e Caso de Uso)', priority: 'morno' },
        { id: 'c16', text: 'Governança de TI: ITIL v4 e COBIT 2019', priority: 'morno' },
        { id: 'c37', text: 'Cloud Computing: IaaS, PaaS, SaaS, Nuvem Pública e Privada', priority: 'morno' },
        { id: 'c22', text: 'Web Services (UDDI, WSDL, SOAP)', priority: 'frio' },
        { id: 'c59', text: 'Agilidade: SAFe, Nexus, Management 3.0 e Lean UX', priority: 'frio' },
    ]},
    { areaNome: "TI - Informática", areaID: 'ti', itens: [
        { id: 'c15', text: 'Sistemas Operacionais: Processos (Comunicação/Escalonamento) e Gerência de Memória.', priority: 'morno' },
        { id: 'c38', text: 'Sistemas Operacionais: Windows 10 e Ambiente Linux (SUSE).', priority: 'morno' },
        { id: 'c43', text: 'Sistemas Operacionais Legados: IBM z/OS', priority: 'frio' },
        { id: 'c44', text: 'Outros: Portais corporativos (RSS, Portlets), Acessibilidade (e-MAG) e Pontos de Função.', priority: 'frio' },
        { id: 'c23', text: 'Arquitetura de Computadores: CPU, Base Binária, Endereçamento e Hierarquia de Memória', priority: 'frio' },
    ]},
    { areaNome: "Conhecimentos Básicos", areaID: 'basico', itens: [
        { id: 'c8', text: 'Português: Compreensão e Interpretação de Textos', priority: 'quente' },
        { id: 'c45', text: 'Português: Concordância e Regência', priority: 'quente' },
        { id: 'c46', text: 'Português: Emprego da Crase', priority: 'quente' },
        { id: 'c47', text: 'Compliance: Sigilo Bancário e Segurança da Info', priority: 'quente' },
        { id: 'c11', text: 'Compliance: LGPD e Lavagem de Dinheiro', priority: 'quente' },
        { id: 'c9', text: 'Mat Financeira: Juros Compostos', priority: 'quente' },
        { id: 'c10', text: 'Estatística: Probabilidade de Laplace/Condicional', priority: 'quente' },
        { id: 'c48', text: 'Estatística: Medidas de Tendência Central', priority: 'quente' },
        { id: 'c18', text: 'Mat Financeira: Equivalência de Capitais', priority: 'morno' },
        { id: 'c19', text: 'Estatística: Medidas de Dispersão', priority: 'morno' },
        { id: 'c17', text: 'Português: Coesão, Coerência e Organização Textual', priority: 'morno' },
        { id: 'c49', text: 'Português: Pontuação e Colocação Pronominal', priority: 'morno' },
        { id: 'c50', text: 'Estatística: Probabilidade Básica (Laplace, Eventos, Espaço Amostral)', priority: 'morno' },
        { id: 'c51', text: 'Compliance: Artigo 37 da Constituição Federal (Princípios da ADM Pública)', priority: 'morno' },
        { id: 'c52', text: 'Compliance: Legislação Anticorrupção (Lei 12.846/13 e Dec. 11.129/22)', priority: 'morno' },
        { id: 'c20', text: 'Inglês: Vocabulário e Interpretação', priority: 'morno' },
        { id: 'c25', text: 'Português: Ortografia oficial, Acentuação e Redação Oficial', priority: 'frio' },
        { id: 'c54', text: 'Português: Argumentação e Persuasão', priority: 'frio' },
        { id: 'c55', text: 'Matemática Financeira: Juros Simples, Descontos e Progressões (PA/PG)', priority: 'frio' },
        { id: 'c56', text: 'Estatística: Distribuição Binomial e Medidas de Posição (Quartis/Percentis)', priority: 'frio' },
        { id: 'c57', text: 'Compliance: Ética Profissional, Assédio Moral/Sexual e PRASC CAIXA', priority: 'frio' },
        { id: 'c58', text: 'Compliance: Atualidades do Mercado Financeiro', priority: 'frio' },
        { id: 'c26', text: 'Mat. Financeira: Juros Simples, Descontos, PA/PG', priority: 'frio' },
        { id: 'c60', text: 'Digitais: Intraempreendedorismo, Liderança e Aprendizagem Contínua', priority: 'frio' },
    ]},
    { areaNome: "Comportamentos Digitais", areaID: 'digital', itens: [
        { id: 'c27', text: 'Mindset Ágil, OKRs, Pensamento Computacional', priority: 'quente' },
        { id: 'c31', text: 'Comportamentos Digitais: Mindset de Crescimento e OKRs (Objectives and Key Results)', priority: 'quente' },
        { id: 'c53', text: 'Inteligência Emocional e Resolução de Problemas', priority: 'morno' },
        { id: 'c28', text: 'Design Thinking, Ciência de Dados e I.E.', priority: 'morno' },
        { id: 'c40', text: 'Comportamentos Digitais: Design Thinking e Ciência de Dados (Conceitos)', priority: 'morno' },
        { id: 'c41', text: 'Comportamentos Digitais: Metodologias Ágeis e Lean Manufacturing', priority: 'morno' },
        { id: 'c29', text: 'Sustentabilidade (ODS), CX', priority: 'frio' }
    ]}
];