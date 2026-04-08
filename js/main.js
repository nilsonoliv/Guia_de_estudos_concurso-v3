    // --- 1. STATE MANAGEMENT ---
        let estadoApp = {
            dataInicio: '', dataProva: '2028-04-07', fasesConcluidas: [], //2028-05-01 
            streak: { count: 0, lastDate: null }, checklist: [], 
            filtroEscada: 'all',
            escada: [{ id: 1, status: 'ativo', tipo:'ti' }, { id: 2, status: 'bloqueado', tipo:'ti' }, { id: 3, status: 'bloqueado', tipo:'ti' }, { id: 4, status: 'bloqueado', tipo:'ti' }, { id: 5, status: 'bloqueado', tipo:'ti' }, { id: 6, status: 'bloqueado', tipo:'ti' }, { id: 7, status: 'bloqueado', tipo:'ti' }, { id: 8, status: 'bloqueado', tipo:'ti' }, { id: 9, status: 'ativo', tipo:'mt' }, { id: 10, status: 'bloqueado', tipo:'mt' }, { id: 11, status: 'bloqueado', tipo:'mt' }, { id: 12, status: 'bloqueado', tipo:'mt' }, { id: 13, status: 'bloqueado', tipo:'mt' }, { id: 14, status: 'bloqueado', tipo:'mt' }, { id: 15, status: 'bloqueado', tipo:'mt' }, { id: 16, status: 'bloqueado', tipo:'mt' }, { id: 17, status: 'ativo', tipo:'lp' }, { id: 18, status: 'bloqueado', tipo:'lp' }, { id: 19, status: 'bloqueado', tipo:'lp' }, { id: 20, status: 'bloqueado', tipo:'lp' }, { id: 21, status: 'bloqueado', tipo:'lp' }, { id:22, status: 'bloqueado', tipo: 'lp' }], 
            simulados: [{ data: "Diagnóstico", nota: 35 }],
            swot: { forcas: ["Lógica de programação"], fraquezas: ["Java"], taticas: ["Resolver questões"] },
        };

        // --- 2. BANCOS DE DADOS ---
        const dbRoadmap = [
            { id: 1, titulo: "F1: Alfabetização e Setup", meses: "Meses 1-3", color: "green", objetivo: "Lógica e Preparação do Ambiente. Entender a lógica por trás da computação.", semana: [{dia: "Seg", mat: "TI (Lógica) + Inglês"},{dia: "Ter", mat: "Português"}, {dia: "Qua", mat: "TI (Lógica)"}, {dia: "Qui", mat: "Português"}, {dia: "Sex", mat: "TI (Lógica)"}], metas: ["Instalar e configurar VS Code e Git/GitHub.", "Resolver 150 questões de Lógica (Teste de Mesa).", "Iniciar Deck de Anki com classes de palavras.", "Checkpoint: Acertar >70% em lógica."] },
            { id: 2, titulo: "F2: Estruturas e Persistência", meses: "Meses 4-6", color: "indigo", objetivo: "Onde os dados moram. Dominar a organização da informação.", semana: [{dia: "Seg", mat: "TI (Dados/SQL) + Inglê"},{dia: "Ter", mat: "Português"}, {dia: "Qua", mat: "TI (Dados/SQL)"}, {dia: "Qui", mat: "Português"}, {dia: "Sex", mat: "TI (Dados/SQL)"}], metas: ["Criar DB local e realizar CRUD.", "Dominar 1ª, 2ª e 3ª Formas Normais.", "Mapear Pilhas/Filas com exemplos bancários.", "Alimentar Anki com regras de Crase e Pontuação."] },
            { id: 3, titulo: "F3: Codificação Core e Finanças", meses: "Meses 7-9", color: "purple", objetivo: "Java e Juros. Codificação orientada à banca e valor do dinheiro.", semana: [{dia: "Seg", mat: "TI (Java)"},{dia: "Ter", mat: "Mat. Financeira"}, {dia: "Qua", mat: "TI (Java)"}, {dia: "Qui", mat: "Mat. Financeira"}, {dia: "Sex", mat: "TI (Dados/SQL)"}], metas: ["Implementar sistema Conta Corrente em Java (POO).", "Resolver 100 questões de Juros Compostos.", "Dominar SQL Queries com 3+ JOINS.", "Checkpoint: Simulado Java Core + SQL."] },
            { id: 4, titulo: "F4: Inteligência e Finanças II", meses: "Meses 10-12", color: "blue", objetivo: "Python e Amortização. Ciência de dados aplicada.", semana: [{dia: "Seg", mat: "TI (Python)"},{dia: "Ter", mat: "Mat. Financeira"}, {dia: "Qua", mat: "TI (Python)"}, {dia: "Qui", mat: "Mat. Financeira"}, {dia: "Sex", mat: "TI (Python)"}], metas: ["Criar script Python lendo CSV bancário (Pandas).", "Construir planilhas PRICE e SAC manualmente.", "Anki com Estatística Descritiva.", "Vocabulário técnico em Inglês."] },
            { id: 5, titulo: "F5: Engenharia e Nuvem", meses: "Meses 13-15", color: "indigo", objetivo: "Arquitetura Moderna e Probabilidade. Escalabilidade de sistemas.", semana: [{dia: "Seg", mat: "TI (Cloud/Arquitetura)"},{dia: "Ter", mat: "Probabilidade e Estatística"}, {dia: "Qua", mat: "TI (Cloud/Arquitetura)"}, {dia: "Qui", mat: "Probabilidade e Estatística"}, {dia: "Sex", mat: "TI (Cloud/Arquitetura)"}], metas: ["Desenhar diagrama de Microsserviços para PIX.", "Resolver 80 questões de Probabilidade Condicional.", "Diferenciar IaaS, PaaS, SaaS.", "Estudo de APIs REST (Verbos/Status Codes)."] },
            { id: 6, titulo: "F6: Governança e Ética", meses: "Meses 16-18", color: "green", objetivo: "Compliance e Gestão. Normas éticas e conformidade.", semana: [{dia: "Seg", mat: "TI (Agilidade/Gestão)"},{dia: "Ter", mat: "Ética e Compliance"}, {dia: "Qua", mat: "TI (Agilidade/Gestão)"}, {dia: "Qui", mat: "Ética e Compliance"}, {dia: "Sex", mat: "TI (Agilidade/Gestão)"}], metas: ["Fichar LGPD focando em sanções e bases legais.", "Memorizar ritos do Scrum e Kanban.", "Resolver 100 questões sobre Lavagem de Dinheiro.", "Checkpoint: Simulado Governança (ITIL/COBIT)."] },
            { id: 7, titulo: "F7: Estudo Reverso e Redação", meses: "Meses 19-21", color: "blue", objetivo: "Velocidade e Escrita. Correção de lacunas residuais.", semana: [{dia: "Seg", mat: "TI (Questões)"},{dia: "Ter", mat: "Básicas"}, {dia: "Qua", mat: "TI (Questões)"}, {dia: "Qui", mat: "Redação"}, {dia: "Sex", mat: "TI (Questões)"}], goals: ["1 redação/semana sobre tecnologia/bancos.", "50 questões/dia via Estudo Reverso.", "Revisar Deck Anki Master (erros).", "Baixar tempo médio por questão para 2 min."] },
            { id: 8, titulo: "F8: Simulação Total e Véspera", meses: "Meses 22-24", color: "green", objetivo: "Ajuste Fino e Psicológico. Memorização de curto prazo.", semana: [{dia: "Seg", mat: "Revisão Ativa"}, {dia: "Qua", mat: "Revisão Ativa"}, {dia: "Qui", mat: "Revisão Ativa"}, {dia: "Sex", mat: "Simulado Geral"}], goals: ["10 simulados completos com gabarito.", "Revisar Leitura Suja (Prazos/Multas).", "Média de acertos em TI > 85%.", "Simular dia da prova (tempo/alimentação)."] }                
        ];

        const dbEscada = [
            //Escada de conhecimento para a área de TI - Desenvolvimento e Bancos de Dados
            { id: 1, tipo: "ti", titulo: "Nível 1: Fundamentos e Pensamento Computacional", desc: "Entender como a máquina funciona e como o profissional se posiciona.", topicos: ["Mindset e Comportamento: Aprender a aprender (Life long learning) e inteligência emocional", "Arquitetura de Computadores: CPU, memória, binário, complemento a dois, ponto flutuante e instruções.", "Sistemas Operacionais: Funções, processos (escalonamento, sincronização), gestão de memória (virtual, swapping) e sistemas de arquivos.", "Laboratório: Familiarizar-se com Windows 10 e Linux (SUSE SLES). Ter uma noção teórica de IBM z/OS (Mainframe)."] },
            { id: 2, tipo: "ti", titulo: "Nível 2: Lógica, Algoritmos e Estruturas", desc: "A base lógica para a construção de qualquer software.", topicos: ["Algoritmos e Estrutura de Dados: Busca sequencial e binária.", "Ordenação: Bubble sort, Selection, Insertion.", "Estruturas Lineares: Listas encadeadas, Pilhas e Filas.", "Estruturas Não-Lineares: Noções de árvore binária."] },
            { id: 3, tipo: "ti", titulo: "Nível 3: Bancos de Dados Relacionais", desc: "O domínio da persistência de dados e da linguagem SQL.", topicos: ["Conceitos de SGBD: Sistemas gerenciadores de bancos de dados.", "Modelagem Conceitual: Abordagem entidade-relacionamento.", "Modelo Relacional: Conceitos básicos e Normalização.","Linguagem SQL: Essencial para a manipulação e consulta de dados."] },
            { id: 4, tipo: "ti", titulo: "Nível 4: Engenharia de Software e Orientação a Objetos", desc: "Aprender a desenhar e estruturar sistemas antes da codificação.", topicos: ["Engenharia de Requisitos: Entender o que o utilizador e o negócio precisam.", "Análise e Projeto Orientado a Objetos (OOAD): Conceitos de classes e objetos.","Linguagem UML: Modelos e diagramas principais para documentação.","Processos de Software: Processo Unificado (UP) - fases, papéis e artefatos.", "UX e Design Thinking: Conceitos básicos de User Experience e design de serviço."] },
            { id: 5, tipo: "ti", titulo: "Nível 5: Desenvolvimento de Software (Core)", desc: "Aplicação prática com as principais linguagens do mercado.", topicos: ["Fundamentos de Programação: Diferença entre linguagens procedurais e orientadas a objeto.", "Ecossistema Java: Java SE 21 e evolução para Java EE 8 / Jakarta EE.", "Ecossistema .NET: C# 12 e plataforma .NET.", "Desenvolvimento Web (Frontend): Padrões HTML 4.01, XHTML 1.0, XML e XSLT.", "Javascript e Typescript 4.X.", "AngularJS (Legado) e Angular (Moderno)."] },
            { id: 6, tipo: "ti", titulo: "Nível 6: Arquitetura, Web e Interoperabilidade", desc: "Como sistemas complexos se comunicam e se distribuem.", topicos: ["Padrões de Projeto (Design Patterns): MVC, Camadas e Padrões GoF.", "Arquitetura de Software: Monolítica vs Microsserviços vs Micro front-end.", "Web Services e Interoperabilidade: SOA, Padrões REST, SOAP, WSDL e UDDI.", "Quarkus e Microprofile.", "Nuvem (Cloud): Nuvem pública/privada, Serverless e estratégias de migração."] },
            { id: 7, tipo: "ti", titulo: "Nível 7: Qualidade, Testes e Agilidade", desc: "Garantir a entrega de valor contínua e a robustez do código.", topicos: ["Qualidade de Software: Modelos CMMI e MPS-BR. Controle estático (revisão/inspeção).", "Testes de Software: Unidade, Integração, Regressão, Segurança e Aceitação.", "TDD (Test Driven Development): Desenvolvimento dirigido por testes.", "Agilidade: Lean, Scrum, Kanban e XP.", "Ágil em escala (SAFe, Nexus).", "Gestão: OKR, Planning Poker, Priorização (Moscow) e User Stories.", "DevSecOps: Integração contínua (CI), Deploy contínuo (CD) e Gerência de Configuração."] },
            { id: 8, tipo: "ti", titulo: "Nível 8: Dados Avançados, Governança e Especialidades", desc: "Tópicos estratégicos e tecnologias especializadas.", topicos: ["Ciência de Dados e Python: Bibliotecas Pandas, NumPy, Scikit-learn, etc.", "BI e Big Data: Data Warehouse (multidimensional), preparação e soluções de Big Data.", "Linguagens Adicionais: Scala, R, Kotlin, Swift, Flutter, Objective-C e Cobol (Mainframe).", "Gestão e Governança de TI: ITIL v4 e COBIT 2019.", "Portais Corporativos: Acessibilidade (e-MAG) e Gestão de Conteúdo."] },
            // Escada de conhecimento para Matemática Financeira e Estatística + Legislação 
            { id: 9, tipo: "mt", titulo: "🏗️ Bloco 1: Fundamentos Matemáticos e Estatísticos (A Base)", desc: "Antes de entrar na matemática financeira aplicada, você precisa dominar as sequências e a organização de dados.", topicos: ["Sequências Numéricas: Leis de formação (geral e recursiva).", "Progressão Aritmética (PA): Definição, termo geral e soma (base para Juros Simples).", "Progressão Geométrica (PG): Definição, termo geral e soma (base para Juros Compostos).", "Estatística Descritiva (Conceitos Gerais): Variáveis (tipos), população, amostra e frequências (absoluta, relativa e acumulada).", "Representação Gráfica: Tabelas, linhas, colunas, setores e histogramas."] },
            { id: 10, tipo: "mt", titulo: "💰 Bloco 2: Matemática Financeira Essencial", desc: "Aqui aplicamos as progressões ao valor do dinheiro no tempo.", topicos: ["Conceitos Gerais: Valor do dinheiro no tempo, VP (Presente), VF (Futuro), juros, taxa e prazo.", "Juros Simples: Fórmulas, cálculos e aplicações (Relação com PA).", "Desconto Comercial Simples: O \"desconto por fora\" utilizado no mercado.", "Juros Compostos: Fórmulas, capitalização e juros sobre juros (Relação com PG).", "Desconto Racional Composto: O \"desconto por dentro\" tecnicamente correto.", "Equivalência de Capitais: Fluxos regulares e irregulares, prazos e taxas de retorno (VP e VF)."] },
            { id: 11, tipo: "mt", titulo: "📈 Bloco 3: Finanças Avançadas e Amortização", desc: "O coração da prova para bancários.", topicos: ["Séries Uniformes: Anuidades e prestações constantes.", "Sistemas de Amortização - Teoria: Conceitos de saldo devedor e amortização.", "Sistema de Amortização Constante (SAC): Características e cálculos.", "Sistema Francês (Tabela PRICE): Prestações constantes e aplicação prática.",] },
            { id: 12, tipo: "mt", titulo: "📊 Bloco 4: Probabilidade e Análise de Dados", desc: "Onde a estatística se torna ferramenta de decisão.", topicos: ["Medidas de Tendência Central: Média (aritmética, geométrica, ponderada), Moda e Mediana (dados brutos e agrupados).", "Medidas de Posição: Quartis e Percentis.", "Medidas de Dispersão: Amplitude, Variância, Desvio Padrão e Coeficiente de Variação.", "Probabilidade Básica: Experimento aleatório, espaço amostral, evento e Probabilidade de Laplace.", "Probabilidade Avançada: Teorema do produto, probabilidade condicional, independência e Distribuição Binomial.",] },
            { id: 13, tipo: "mt", titulo: "⚖️ Bloco 5: Ética, Compliance e Direito Administrativo", desc: "Normas que regem a conduta do empregado público.", topicos: ["Ética e Virtudes: Atitudes éticas, respeito e valores. Ética empresarial e profissional.", "Gestão da Ética: Ética em empresas públicas vs. privadas e o Código de Ética da CAIXA.", "Artigo 37 da CF: Princípios da Administração Pública (LIMPE - Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência).", "Boas Práticas de Governança Corporativa: Transparência e prestação de contas.", "Assédio Moral e Sexual: Conceitos e medidas de enfrentamento no ambiente de trabalho."] },
            { id: 14, tipo: "mt", titulo: "🛡️ Bloco 6: Segurança, Sigilo e Proteção de Dados", desc: "Conhecimentos fundamentais para a era digital bancária.", topicos: ["Sigilo Bancário: Lei Complementar nº 105/2001.", "LGPD (Lei Geral de Proteção de Dados): Lei nº 13.709/2018 (Conceitos e direitos do titular).", "Segurança da Informação: Fundamentos, conceitos e mecanismos de segurança.","Segurança Cibernética: Resolução CMN nº 4893/2021."] },
            { id: 15, tipo: "mt", titulo: "🚔 Bloco 7: Combate a Ilícitos e Responsabilidade Social", desc: "Regras rígidas de controle bancário.", topicos: ["Prevenção à Lavagem de Dinheiro: Lei nº 9.613/98, Circular 3.978/2020, Carta Circular 4.001/2020 e Resolução CVM 50/2021.", "Legislação Anticorrupção: Lei nº 12.846/2013 e Decreto nº 11.129/2022.", "PRASC CAIXA: Política de Responsabilidade Social, Ambiental e Climática."] },
            { id: 16, tipo: "mt", titulo: "🌍 Bloco 8: Contexto e Atualidades", desc: "Leitura diária e acompanhamento de notícias.", topicos: ["Atualidades do Mercado Financeiro: Fintechs, Open Banking, Real Digital (Drex), COPOM, Inflação e tendências econômicas."] },
            // Escada de conhecimento para Lingua Portuguesa e Inglês
            { id: 17, tipo: "lp", titulo: "🧠 Fase I — FUNDAMENTOS DA LEITURA E COMPREENSÃO", desc: "Base de tudo. Não avance sem dominar bem.", topicos: ["Compreensão e interpretação de textos", "Tipologia textual (narração, descrição, dissertação)", "Organização textual", "Coesão e coerência", "Significação das palavras", "Inglês - Vocabulário fundamental (palavras mais frequentes)", "Inglês - Estrutura básica de frases (Sujeito + Verbo + Complemento)"] },
            { id: 18, tipo: "lp", titulo: "🧠 Fase II — ESTRUTURA DA LÍNGUA (GRAMÁTICA ESSENCIAL)", desc: "Agora você entende textos — vamos entender como eles são construídos.", topicos: ["Ortografia oficial", "Novo Acordo Ortográfico", "Acentuação gráfica", "Inglês - Verbos mais comuns (to be, to have, to do)", "Inglês - Leitura guiada de textos simples"] },
            { id: 19, tipo: "lp", titulo: "🧠 Fase III — COMUNICAÇÃO E ARGUMENTAÇÃO", desc: "Aqui você começa a pensar como a banca.", topicos: ["Sintaxe da oração e do período","Concordância nominal e verbal","Regência nominal e verbal","Colocação do pronome átono", "Pontuação", "Emprego do sinal indicativo de crase", "Argumentação e persuasão", "Comunicação assertiva (clareza, objetividade, concisão)"] },
            { id: 20, tipo: "lp", titulo: "🧠 Fase IV — REDAÇÃO (CONSTRUÇÃO COMPLETA)", desc: "Aplicação prática de tudo que foi aprendido.", topicos: ["Interpretação avançada (inferência, intenção do autor, implícitos)","Organização de parágrafos", "Introdução, desenvolvimento e conclusão", "Coesão e coerência (nível avançado)", "Argumentação aplicada", "Elaboração de redação", ] },
            { id: 21, tipo: "lp", titulo: "🧠 Fase V — REDAÇÃO OFICIAL + iNGLÊS", desc: " Redação oficial e foco em inglês.", topicos: ["Correção e reescrita guiada", "Escrita formal", "Manual de Redação da Presidência da República","Leitura técnica (textos de TI e bancários)", "Reconhecimento de cognatos",] },            
            { id: 22, tipo: "lp", titulo: "🔁 Fase VI — INGLÊS PARA PROVA (FOCO EM LEITURA)", desc: "Não é fluência — é estratégia de prova.", topicos: ["Interpretação de textos em inglês", "Estratégias de scanning (busca de informação)", "Estratégias de skimming (leitura rápida)", "Falsos cognatos"] },            

        ];

        //Função oculta os cards que não pertencem à área selecionada da aba "escada de conhecimento"
        function filtrarEscada(areaID) {
            const cards = document.querySelectorAll('.lp, .ti, .mt');
            cards.forEach(card => {
                if (areaID === 'all') {
                    card.style.display = 'block';
                   // card.style.display = 'block'; // Exibe os cards de TI
                    //card.style.display = 'block'; // Exibe os cards de LP
                    //card.style.display = 'block'; // Exibe os cards de MT
                } 
                else if (areaID === 'ti') {
                    card.style.display = 'block'; // Exibe os cards de TI
                    document.querySelectorAll('.lp, .mt').forEach(c => c.style.display = 'none'); // Esconde os cards de LP e MT
                } 
                    else if (areaID === 'lp') {
                    card.style.display = 'block'; // Exibe os cards de LP
                    document.querySelectorAll('.ti, .mt').forEach(c => c.style.display = 'none'); // Esconde os cards de TI e MT
                }
                    else if (areaID === 'mt') { 
                    card.style.display = 'block'; // Exibe os cards de MT
                    document.querySelectorAll('.ti, .lp').forEach(c => c.style.display = 'none'); // Esconde os cards de TI e LP
                }
                else  {
                    card.style.display = 'none';
                }          
                estadoApp.filtroEscada = areaID; // Salva o filtro escolhido
             //   renderEscada(); // Manda redesenhar a escada respeitando o filtro
            });

                
        }

             function manterEscada() {
            const cards = document.querySelectorAll('.lp, .ti, .mt');
            cards.forEach(card => {
                if (estadoApp.filtroEscada === 'all') {
                    card.style.display = 'block';
                   // card.style.display = 'block'; // Exibe os cards de TI
                    //card.style.display = 'block'; // Exibe os cards de LP
                    //card.style.display = 'block'; // Exibe os cards de MT
                } 
                else if (estadoApp.filtroEscada === 'ti') {
                    card.style.display = 'block'; // Exibe os cards de TI
                    document.querySelectorAll('.lp, .mt').forEach(c => c.style.display = 'none'); // Esconde os cards de LP e MT
                } 
                    else if (estadoApp.filtroEscada === 'lp') {
                    card.style.display = 'block'; // Exibe os cards de LP
                    document.querySelectorAll('.ti, .mt').forEach(c => c.style.display = 'none'); // Esconde os cards de TI e MT
                }
                    else if (estadoApp.filtroEscada === 'mt') { 
                    card.style.display = 'block'; // Exibe os cards de MT
                    document.querySelectorAll('.ti, .lp').forEach(c => c.style.display = 'none'); // Esconde os cards de TI e LP
                }
                else  {
                    card.style.display = 'none';
                }          
                
             //   renderEscada(); // Manda redesenhar a escada respeitando o filtro
            });

                
        }


        // BANCO DE DADOS LOCAL: O Edital (Checklist) Mapeado por Grupos
        const dbChecklist = [
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

        let chartEvolucaoInstance = null, progressoChartInstance = null, escadaExpandida = 1; // Variável para controlar qual nível da escada de conhecimento está expandido

        // --- 3. MOTORES DE RENDERIZAÇÃO ---
        //o valor da data da prova deve ser o resultado da soma entre a data de início e o prazo total do roadmap (24 meses). Para facilitar, o usuário só precisa informar a data de início, e a data da prova é calculada automaticamente.
        function atualizarDataInicio(e) { estadoApp.dataInicio = e.target.value; renderCountdown(); if(window.salvarNaNuvem) window.salvarNaNuvem(); } // Atualiza a data de início no estado e redesenha a contagem regressiva. Também salva na nuvem se a função estiver disponível.
        function renderCountdown() { // Renderiza a contagem regressiva para a data da prova. Se a data de início estiver definida, preenche o campo correspondente. Calcula a diferença entre a data atual e a data da prova, exibindo os dias restantes ou uma mensagem se a data já tiver chegado.
            if (estadoApp.dataInicio) document.getElementById('input-data-inicio').value = estadoApp.dataInicio; // Preenche o campo de data de início com o valor do estado, se estiver definido.
            const dataAlvo = new Date(estadoApp.dataProva)  //, dataHoje = new Date(); // Zera as horas para comparar apenas as datas (sem considerar o horário). Isso evita que a contagem regressiva mostre "0 dias" no dia da prova, mesmo que ainda faltem horas.   
            
            // Cria a data de referência usando a dataEscolhida. Se estiver vazio, usa a data do computador (hoje).
            const dataReferencia = estadoApp.dataInicio ? new Date(estadoApp.dataInicio) : new Date(); 
            
            dataReferencia.setHours(0,0,0,0); 
            dataAlvo.setHours(0,0,0,0);
                        
            //dataHoje.setHours(0,0,0,0); dataAlvo.setHours(0,0,0,0); // Obtém a data atual e a data da prova, e zera as horas para comparar apenas as datas.
            const el = document.getElementById('ui-countdown'); // Elemento onde a contagem regressiva será exibida.
            
            if (dataReferencia >= dataAlvo) { el.innerText = "Chegou o Dia!"; el.style.color = "var(--accent-yellow)"; } 
            else { el.innerText = Math.ceil(Math.abs(dataAlvo - dataReferencia) / 86400000) + " dias"; 
                // Agora o cálculo é feito usando a sua dataReferencia!
            }
            
            
           // if (dataHoje >= dataAlvo) { el.innerText = "Chegou o Dia!"; el.style.color = "var(--accent-yellow)"; }  // Se a data atual for igual ou superior à data da prova, exibe "Chegou o Dia!" e muda a cor para amarelo.
            //else { el.innerText = Math.ceil(Math.abs(dataAlvo - dataHoje) / 86400000) + " dias"; } // Caso contrário, calcula a diferença em dias entre a data da prova e a data atual, arredondando para cima, e exibe o número de dias restantes.
        }

        function renderRoadmap() {
            const contA = document.getElementById('container-fases-ativas'), contC = document.getElementById('container-fases-concluidas');
            if(!contA) return;
            const ativas = dbRoadmap.filter(f => !estadoApp.fasesConcluidas.includes(f.id)), concluidas = dbRoadmap.filter(f => estadoApp.fasesConcluidas.includes(f.id));
            contA.innerHTML = ativas.map(f => `<div class="card-fase" style="border-left-color: var(--${f.color}-500, #3b82f6);"><div style="display:flex; justify-content:space-between;"><div style="font-size:0.75rem; font-weight:bold; opacity:0.6;">${f.meses}</div><button class="btn-icon-acao btn-concluir-fase" onclick="concluirFase(${f.id})"><i data-lucide="check-circle" style="width:20px;"></i></button></div><h3 style="color: var(--primary)">${f.titulo}</h3><h2 style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${f.objetivo}</h2><button class="btn-abrir-planejamento" onclick="abrirModal(${f.id})">Ver Planejamento<i data-lucide="arrow-right" style="width:16px;"></i></button></div>`).join('');            if (concluidas.length > 0) {
                document.getElementById('wrapper-concluidas').style.display = 'block';
                contC.innerHTML = concluidas.map(f => `<div class="card-fase" style="border-left-color: var(--border-color); background: var(--bg-body); opacity: 0.8;"><div style="display:flex; justify-content:space-between;"><div style="font-size:0.75rem; font-weight:bold; opacity:0.6;"><strike>${f.meses}</strike></div><button class="btn-icon-acao btn-desfazer-fase" onclick="desfazerFase(${f.id})"><i data-lucide="rotate-ccw" style="width:16px;"></i></button></div><h3 style="color: var(--text-muted)"><strike>${f.titulo}</strike></h3><div style="font-size: 0.85rem; color: var(--success); font-weight: bold; margin-top: 8px; display:flex; align-items:center; gap:4px;"><i data-lucide="check" style="width:14px;"></i> Fase Superada</div></div>`).join('');
            } else document.getElementById('wrapper-concluidas').style.display = 'none';
            lucide.createIcons();
        }
        function concluirFase(id) { estadoApp.fasesConcluidas.push(id); renderRoadmap(); showToast("Fase superada!"); if(window.salvarNaNuvem) window.salvarNaNuvem(); }
        function desfazerFase(id) { estadoApp.fasesConcluidas = estadoApp.fasesConcluidas.filter(fid => fid !== id); renderRoadmap(); showToast("Ação desfeita."); if(window.salvarNaNuvem) window.salvarNaNuvem(); }
        function abrirModal(id) {
            const f = dbRoadmap.find(x => x.id === id);
            document.getElementById('modal-fase-titulo').textContent = f.titulo; document.getElementById('modal-fase-badge').textContent = f.meses; document.getElementById('modal-fase-objetivo').textContent = f.objetivo;
            document.getElementById('modal-semana-container').innerHTML = f.semana.map(d => `<div class="dia-item"><div class="dia-nome">${d.dia}</div><div class="dia-materia">${d.mat}</div></div>`).join('');
            document.getElementById('modal-metas-container').innerHTML = f.metas.map(m => `<li style="display:flex; gap:10px; margin-bottom:8px; font-size:0.9rem;"><i data-lucide="check-circle-2" style="width:16px; color:#22c55e;"></i> ${m}</li>`).join('');
            lucide.createIcons({ root: document.getElementById('modal-roadmap') });
            const m = document.getElementById('modal-roadmap'); m.style.display = 'flex'; setTimeout(() => m.classList.add('active'), 10); document.body.style.overflow = 'hidden';
        }
        function fecharModal() { const m = document.getElementById('modal-roadmap'); m.classList.remove('active'); setTimeout(() => { m.style.display = 'none'; document.body.style.overflow = ''; }, 300); }
        function fecharModalFora(e) { if(e.target.id === 'modal-roadmap') fecharModal(); }

        function renderEscada() { // Renderiza a escada de conhecimento com base no estado atual
            const container = document.getElementById('container-escada'); if(!container) return; // Conta quantos níveis foram concluídos para calcular o progresso
            let concluidos = 0; container.innerHTML = ''; // Itera sobre o banco de dados da escada e renderiza cada nível com seu status (ativo, bloqueado, concluído)
            dbEscada.forEach(nivelFix => {      // Busca o status do nível no estado da aplicação, se não encontrar assume 'bloqueado'
                const status = (estadoApp.escada.find(n => n.id === nivelFix.id) || {}).status || 'bloqueado'; // Incrementa o contador de concluídos se o status for 'concluido'
                if (status === 'concluido') concluidos++;  // Verifica se o nível atual é o expandido para aplicar a classe CSS correspondente
                const isExpandido = escadaExpandida === nivelFix.id ? 'expandido' : '';  // Renderiza o item da escada com ícones e informações, incluindo a lógica para mostrar o botão de concluir apenas se o nível estiver ativo
                container.innerHTML += `<div class="timeline-item ${nivelFix.tipo} ${status} ${isExpandido}"><div class="timeline-node">${status==='concluido'?`<i data-lucide="check" style="width:18px;"></i>`:(status==='bloqueado'?`<i data-lucide="lock" style="width:14px;"></i>`:nivelFix.id)}</div><div class="timeline-content ${nivelFix.tipo}" onclick="toggleEscada(${nivelFix.id})"><div class="timeline-header"><div style="display:flex; align-items:center; gap:8px;"><div style="font-weight:bold;">${nivelFix.titulo}</div>${status==='concluido'?'<span class="badge-trophy"><i data-lucide="award" style="width:12px;"></i> Dominado</span>':''}</div><i data-lucide="chevron-${isExpandido?'up':'down'}" style="width:20px;"></i></div><div class="timeline-body"><div style="font-size:0.9rem; margin-bottom:1rem; color:var(--text-muted);">${nivelFix.desc}</div><div style="margin-bottom:1rem; display:flex; gap:6px; flex-wrap:wrap;">${nivelFix.topicos.map(t=>`<span class="tag-ti">${t}</span>`).join('')}</div>${status==='ativo'?`<button class="btn-concluir-nivel" onclick="concluirEscada(event, ${nivelFix.id})"><i data-lucide="award" style="width:16px;"></i> Concluir Nível</button>`:''}</div></div></div>`; // Adiciona o item renderizado ao container da escada
                manterEscada();
            }); // Atualiza a barra de progresso com base na proporção de níveis concluídos em relação ao total
            document.getElementById('barra-progresso-escada').style.width = `${(concluidos/dbEscada.length)*100}%`; // Recria os ícones do Lucide para garantir que os novos elementos sejam renderizados corretamente
            lucide.createIcons();  // Exibe uma mensagem de progresso gamificado com base no número de níveis concluídos
        }  // Lógica para expandir ou recolher os detalhes de um nível da escada, bloqueando a interação se o nível estiver bloqueado
        function toggleEscada(id) { if((estadoApp.escada.find(n=>n.id===id)||{}).status!=='bloqueado'){ escadaExpandida = escadaExpandida===id?null:id; renderEscada(); } } // Lógica para concluir um nível da escada, atualizando o status do nível atual para 'concluido' e do próximo nível para 'ativo', além de renderizar a escada novamente e mostrar uma mensagem de conquista
        function concluirEscada(e, id) { e.stopPropagation(); const c = estadoApp.escada.find(n=>n.id===id); if(c) c.status='concluido'; const nx = estadoApp.escada.find(n=>n.id===id+1); if(nx){ nx.status='ativo'; escadaExpandida=nx.id;} renderEscada(); showToast("Nível Dominado!"); if(window.salvarNaNuvem) window.salvarNaNuvem(); } // --- CHECKLIST INTEGRADO DO ARQUIVO base.html ---
        // Renderiza a checklist de tópicos com base no estado atual, permitindo marcar itens como concluídos e mostrando um badge de "Bloco Fechado" quando todos os itens de um grupo são concluídos
        function renderChecklist() {
            const container = document.getElementById('container-checklist'); if(!container) return;
            container.innerHTML = dbChecklist.map(grupo => {
                const tConcluidos = grupo.itens.map(i=>i.id).every(id=>estadoApp.checklist.includes(id));
                return `<div class="checklist-group"><div class="checklist-header"><span>${grupo.areaNome}</span> ${tConcluidos?'<span class="badge-trophy"><i data-lucide="star" style="width:12px;"></i> Bloco Fechado</span>':''}</div><div>${grupo.itens.map(item => `<div class="checklist-item ${estadoApp.checklist.includes(item.id)?'checked':''}" onclick="toggleChecklist('${item.id}')"><div class="checklist-checkbox"><i data-lucide="check" style="width:16px;"></i></div><div class="checklist-text">${item.text}</div><span class="badge-priority priority-${item.priority}">${item.priority}</span></div>`).join('')}</div></div>`;
            }).join('');
            lucide.createIcons();
        }
        function toggleChecklist(id) {
            if(estadoApp.checklist.includes(id)) estadoApp.checklist = estadoApp.checklist.filter(i=>i!==id);
            else { estadoApp.checklist.push(id); showToast("Tópico dominado!"); }
            renderChecklist(); renderProgressoGamificado(); if(window.salvarNaNuvem) window.salvarNaNuvem();
        }

        // O NOVO GRÁFICO DOUGHNUT DO BASE.HTML
        function renderProgressoGamificado() {
            let tTi=0, tBasico=0, tDigital=0, cTi=0, cBasico=0, cDigital=0;
            dbChecklist.forEach(g => {
                g.itens.forEach(i => {
                    if(g.areaID === 'ti') { tTi++; if(estadoApp.checklist.includes(i.id)) cTi++; }
                    if(g.areaID === 'basico') { tBasico++; if(estadoApp.checklist.includes(i.id)) cBasico++; }
                    if(g.areaID === 'digital') { tDigital++; if(estadoApp.checklist.includes(i.id)) cDigital++; }
                });
            });
            const ptsTi = tTi ? (cTi/tTi)*30 : 0; const ptsBasico = tBasico ? (cBasico/tBasico)*25 : 0; const ptsDigital = tDigital ? (cDigital/tDigital)*5 : 0;
            document.getElementById('pts-ti').textContent = ptsTi.toFixed(1); document.getElementById('pts-basico').textContent = ptsBasico.toFixed(1); document.getElementById('pts-digital').textContent = ptsDigital.toFixed(1);
            
            const ctx = document.getElementById('scoreChart'); if(!ctx) return;
            const dataArr = [ptsTi, ptsBasico, ptsDigital, 60 - (ptsTi+ptsBasico+ptsDigital)];
            if(progressoChartInstance) { progressoChartInstance.data.datasets[0].data = dataArr; progressoChartInstance.update(); }
            else {
                progressoChartInstance = new Chart(ctx, {
                    type: 'doughnut', data: { labels: ['TI (Dominado)', 'Básicos (Dominado)', 'Digitais (Dominado)', 'Pontos Pendentes'], datasets: [{ data: dataArr, backgroundColor: ['#e11d48', '#57534e', '#d97706', '#e2e8f0'], borderWidth: 0, hoverOffset: 4 }] },
                    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: function(c) { return c.label + ': ' + c.raw.toFixed(1) + ' pts'; } } } }, cutout: '75%', animation: { animateScale: true, animateRotate: true } }
                });
            }
        }

        function renderStreak() {
            document.getElementById('ui-streak-count').querySelector('span').innerText = estadoApp.streak.count;
            const icon = document.getElementById('ui-streak-icon');
            if(estadoApp.streak.count > 0) { icon.classList.add('streak-active'); icon.style.color = '#f97316'; } else { icon.classList.remove('streak-active'); icon.style.color = 'currentColor'; }
        }
        function marcarMetaDiaria() { 
           const hj = new Date().toDateString();
           console.log( "const hj é igual a: " + hj);
           if(estadoApp.streak.lastDate === hj) { showToast("Fogo já alimentado hoje!", false); return; } 
           
            const ont = new Date(); 
            console.log( "const ont é igual a: " + ont);
            
            ont.setDate(ont.getDate() - 1); 
            console.log( "const ont.setDate é igual a: " + ont.setDate(ont.getDate() - 1));
            
            console.log( "estadoApp.streak.count antes de entrar no if é igual a: " + estadoApp.streak.count);
            if(estadoApp.streak.lastDate === ont.toDateString()) {
            estadoApp.streak.count++; 
                console.log( "estadoApp.streak.count depois de entrar no if é igual a: " + estadoApp.streak.count);
            }
            else estadoApp.streak.count = 1; 
            console.log( "estadoApp.streak.count depois do else é igual a: " + estadoApp.streak.count);

           
            estadoApp.streak.lastDate = hj;         
            console.log( "estadoApp.streak.lastDate é igual a: " + estadoApp.streak.lastDate);

            renderStreak(); 
            
            showToast("🔥 Disciplina blindada!"); 
            
            if(window.salvarNaNuvem) window.salvarNaNuvem();  
        }

        function renderCharts() {
            const ctx = document.getElementById('chartEvolucao'); if(!ctx) return;
            const labels = estadoApp.simulados.map(s => s.data), data = estadoApp.simulados.map(s => s.nota);
            if(chartEvolucaoInstance) chartEvolucaoInstance.destroy();
            chartEvolucaoInstance = new Chart(ctx, { type: 'line', data: { labels: labels, datasets: [{ label: 'Evolução %', data: data, borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)', fill: true, tension: 0.3 }, { label: 'Corte (85%)', data: Array(labels.length).fill(85), borderColor: '#ef4444', borderDash: [5,5], fill: false }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } } });
        }
        function inserirSimulado() { const r = document.getElementById('sim-data').value, n = parseFloat(document.getElementById('sim-nota').value); if(r && !isNaN(n)) { estadoApp.simulados.push({data:r,nota:n}); document.getElementById('sim-data').value=''; document.getElementById('sim-nota').value=''; renderCharts(); showToast("📈 Registado!"); if(window.salvarNaNuvem) window.salvarNaNuvem(); } }
        
        function renderSwot() {
            const container = document.getElementById('container-swot'); if(!container) return;
            const rL = (t, a) => `<ul class="swot-list">${a.map((i, idx) => `<li class="swot-item-row"><span class="swot-item-text">${i}</span><button class="swot-btn-del" onclick="removerSwot('${t}', ${idx})"><i data-lucide="x" style="width:14px;"></i></button></li>`).join('')}</ul><div class="swot-input-group"><input type="text" id="input-swot-${t}" class="swot-input" placeholder="Adicionar..." onkeypress="if(event.key==='Enter') adicionarSwot('${t}')"><button class="swot-btn-add" onclick="adicionarSwot('${t}')"><i data-lucide="plus" style="width:16px;"></i></button></div>`;
            container.innerHTML = `<div class="swot-quadrant swot-s"><div class="swot-title"><i data-lucide="trending-up" style="color:#16a34a;"></i> Forças</div>${rL('forcas', estadoApp.swot.forcas)}</div><div class="swot-quadrant swot-w"><div class="swot-title"><i data-lucide="trending-down" style="color:#dc2626;"></i> Fraquezas</div>${rL('fraquezas', estadoApp.swot.fraquezas)}</div><div class="swot-quadrant swot-o" style="grid-column: 1 / -1;"><div class="swot-title"><i data-lucide="target" style="color:#2563eb;"></i> Táticas (POTS)</div>${rL('taticas', estadoApp.swot.taticas)}</div>`;
            lucide.createIcons();
        }
        function adicionarSwot(t) { const v = document.getElementById(`input-swot-${t}`).value.trim(); if(v) { estadoApp.swot[t].push(v); renderSwot(); if(window.salvarNaNuvem) window.salvarNaNuvem(); } }
        function removerSwot(t, idx) { estadoApp.swot[t].splice(idx, 1); renderSwot(); if(window.salvarNaNuvem) window.salvarNaNuvem(); }

        function configurarTabs() {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
                    btn.classList.add('active'); const t = btn.getAttribute('data-target'); document.getElementById(t).classList.add('active');
                    if(t === 'tab-analytics') setTimeout(renderCharts, 50);
                    if(t === 'tab-progresso') setTimeout(renderProgressoGamificado, 50); // Redesenha gráfico do Doughnut
                });
            });
        }
        function showToast(msg, err=false) { let c = document.getElementById('toast-container'); if(!c){ c = document.createElement('div'); c.id = 'toast-container'; document.body.appendChild(c); } const t = document.createElement('div'); t.className = `toast ${err?'error':''}`; t.innerHTML = `<span>${msg}</span>`; c.appendChild(t); setTimeout(() => { t.style.animation = 'fadeOut 0.3s forwards'; setTimeout(() => t.remove(), 300); }, 3000); }

        // --- 4. BACKUP ---
        function aplicarEstadoApp(d) { estadoApp = { ...estadoApp, ...d, fasesConcluidas: d.fasesConcluidas || [], dataInicio: d.dataInicio || '' }; renderCountdown(); renderRoadmap(); renderEscada(); renderChecklist(); renderProgressoGamificado(); renderStreak(); renderSwot(); if(document.getElementById('tab-analytics').classList.contains('active')) renderCharts(); }
        function exportarJSON() { const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(estadoApp)); const a = document.createElement('a'); a.setAttribute("href", str); a.setAttribute("download", "plano.json"); a.click(); showToast("Backup local efetuado!"); }
        function importarJSON(e) { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.onload = function(ev) { try { aplicarEstadoApp(JSON.parse(ev.target.result)); showToast("Restaurado!"); } catch(err) { showToast("Inválido.", true); } }; r.readAsText(f); e.target.value = ''; }
        
        (async () => {
            try {
                const { initializeApp } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'); const { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js'); const { getFirestore, doc, setDoc, getDoc } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
                const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null; const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
                if(firebaseConfig) {
                    const app = initializeApp(firebaseConfig); const auth = getAuth(app); const db = getFirestore(app);
                    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) await signInWithCustomToken(auth, __initial_auth_token); else await signInAnonymously(auth);
                    onAuthStateChanged(auth, async (user) => {
                        const statusEl = document.getElementById('cloud-status');
                        if (user) {
                            statusEl.innerHTML = '<span style="color: var(--success)">● Conectado (Auto-Sync)</span>';
                            window.salvarNaNuvem = async () => await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'appData', 'state'), estadoApp);
                            window.carregarDaNuvem = async () => { const snap = await getDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'appData', 'state')); if(snap.exists()) { aplicarEstadoApp(snap.data()); showToast("Nuvem sincronizada."); } };
                            window.carregarDaNuvem();
                        } else { statusEl.innerHTML = '<span style="color: var(--danger)">● Offline</span>'; }
                    });
                }
            } catch(e) { console.error("Firebase indisponível.", e); }
        })();


        //Local Storege Backup (Fallback caso Firebase falhe ou não esteja configurado)
        (() => {
            try {
                const backup = localStorage.getItem('planoEstudoBackup');
                if(backup) aplicarEstadoApp(JSON.parse(backup));
                window.addEventListener('beforeunload', () => localStorage.setItem('planoEstudoBackup', JSON.stringify(estadoApp)));
            } catch(e) { console.error("LocalStorage indisponível.", e); }
        })();

        

        // INIT
        document.addEventListener('DOMContentLoaded', () => { 
            renderCountdown(); 
            renderRoadmap(); 
            renderEscada(); 
            renderChecklist(); 
            renderProgressoGamificado(); 
            renderStreak(); 
            renderSwot(); 
            configurarTabs(); 
            lucide.createIcons(); 
        });
  