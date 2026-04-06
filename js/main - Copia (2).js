 /**
         
                         let prazoEstudo = 24; // meses para a prova (configurável)
        let estadoApp = {
            dataInicio: '', 
            dataProva: '2028-05-01', // Data alvo (2 anos)
            fasesConcluidas: [], // Array de IDs de fases finalizadas no Roadmap
            streak: { count: 0, lastDate: null }, // Controle diário de gamificação
            checklist: [], // Array de IDs de tarefas do checklist marcadas como feitas
            escada: [
                { id: 1, status: 'ativo' }, { id: 2, status: 'bloqueado' },
                { id: 3, status: 'bloqueado' }, { id: 4, status: 'bloqueado' }
            ],
            simulados: [{ data: "Diagnóstico", nota: 35 }], // Histórico para o Chart.js
            swot: {
                forcas: ["Lógica de programação", "Consistência de 10h/semana"],
                fraquezas: ["Polimorfismo em Java", "Matemática Financeira"],
                taticas: ["Resolver 30 questões de Java OOP", "Revisar Fórmulas"]
            }
        };




        * 1. STATE MANAGEMENT (SINGLE SOURCE OF TRUTH)
         * O objeto `estadoApp` guarda todos os dados MUTÁVEIS da aplicação.
         * Nenhuma função deve alterar o DOM diretamente se houver mudança de dados;
         * a função deve alterar este objeto e depois chamar o render() correspondente.
         * Isso permite salvar este objeto inteiro no Firebase ou num arquivo JSON facilmente.
         */
        let prazoEstudo = 24; // meses para a prova (configurável)
        let estadoApp = {
            dataInicio: '', 
            dataProva: '2028-05-01', // Data alvo (2 anos)
            fasesConcluidas: [], // Array de IDs de fases finalizadas no Roadmap
            streak: { count: 0, lastDate: null }, // Controle diário de gamificação
            checklist: [], // Array de IDs de tarefas do checklist marcadas como feitas
            escada: [
                { id: 1, status: 'ativo' }, { id: 2, status: 'bloqueado' },
                { id: 3, status: 'bloqueado' }, { id: 4, status: 'bloqueado' },
                { id: 5, status: 'bloqueado' }, { id: 6, status: 'bloqueado' }
            ],
            simulados: [{ data: "Diagnóstico", nota: 35 }], // Histórico para o Chart.js
            swot: {
                forcas: ["Lógica de programação", "Consistência de 10h/semana"],
                fraquezas: ["Polimorfismo em Java", "Matemática Financeira"],
                taticas: ["Resolver 30 questões de Java OOP", "Revisar Fórmulas"]
            }
        };

        /**
         * 2. CONSTANTES DA APLICAÇÃO (Data Dictionaries estáticos)
         * Estes arrays guardam os conteúdos de texto (Edital, Matérias).
         * Como não mudam pelo utilizador, não precisam ser salvos no backup.
         */
        const dbRoadmap = [
            {
                id: 1, titulo: "Alfabetização Tecnológica", meses: "Mês 1 a 3", color: "blue",
                objetivo: " Construir a base de raciocínio lógico e gramatical.",
                semana: [
                    { dia: "Seg", mat: "Tecnologia da Informação)." },
                    { dia: "Ter", mat: "Língua Portuguesa." },
                    { dia: "Qua", mat: "Tecnologia da Informação." },
                    { dia: "Qui", mat: "Língua Portuguesa." },
                    { dia: "Sex", mat: "Matemática Financeira" }
                ],
                metas: ["Resolver 150 questões de Lógica (Foco em Teste de Mesa).", "Finalizar 100% da teoria de Gramática Básica (Morfologia).", "Manter 100% de frequência nas 12 semanas iniciais (Construção de Hábito)", "Checkpoint: Acertar >70% no mini-simulado de Lógica."]
            },
            {
                id: 2, titulo: "Fundamentos de Dados e Texto", meses: "Mês 4 a 6", color: "indigo",
                objetivo: "Dominar a organização da informação e interpretação profunda.",
                semana: [
                    { dia: "Seg", mat: "Tecnologia da Informação" },
                    { dia: "Ter", mat: "Língua Portuguesa" },
                    { dia: "Qua", mat: "Tecnologia da Informação" },
                    { dia: "Qui", mat: "Língua Portuguesa" },
                    { dia: "Sex", mat: "Tecnologia da Informação" }
                ],
                metas: ["Dominar os conceitos de Normalização de Dados (1FN, 2FN e 3FN).s", "Alcançar > 80% de acerto em questões de Interpretação de Texto.", "Criar um banco de dados local (MySQL/PostgreSQL) e realizar operações CRUD", "Resolver 200 questões integradas de Português + TI.", "Mapear Estruturas de Dados (Pilhas/Filas) com exemplos reais bancários."]
            },
            {
                id: 3, titulo: "Programação e Finanças", meses: "Mês 7 a 9", color: "purple",
                objetivo: "Codificação orientada à objeto e domínio do valor do dinheiro (Java e Juros).",
                semana: [
                    { dia: "Seg", mat: "Tecnologia da Informação" },
                    { dia: "Ter", mat: "Matemática Financeira" },
                    { dia: "Qua", mat: "Tecnologia da Informação" },
                    { dia: "Qui", mat: "Matemática Financeira" },
                    { dia: "Sex", mat: "Tecnologia da Informação" }
                ],
                metas: ["Codificar 10 algoritmos básicos em Java para fixar sintaxe OO.", "Resolver 150 questões de Sistemas de Amortização (SAC/PRICE).", "Dominar comandos SQL de Join e Agrupamento (GroupBy/Having).", "Realizar o primeiro Simulado Parcial (TI + Mat. Financeira).","Resolver 100 questões de Juros Compostos sem calculadora.", "Implementar um sistema de \"Conta Corrente\" simples em Java (POO)."]
            },
            {
                id: 4, titulo: "O Ecossistema Bancário Moderno", meses: "Mês 10 a 12", color: "green",
                objetivo: "Ciência de dados aplicada e vocabulário técnico (Python e Amortização).",
                semana: [
                    { dia: "Seg", mat: "Tecnologia da Informação" },
                    { dia: "Ter", mat: "Noções de Probabilidade e Estatística" },
                    { dia: "Qua", mat: "Tecnologia da Informação" },
                    { dia: "Qui", mat: "Língua Inglesa + Matemática Financeira" },
                    { dia: "Sex", mat: "Tecnologia da Informação" }
                ],
                metas: ["Manipular DataFrames em Python usando bibliotecas Pandas/NumPy.", "Criar uma lista de 200 termos técnicos em Inglês recorrentes na Cesgranrio (+ Leitura de documentação).", "Resolver 100 questões de Estatística Descritiva.", "Criar um script Python para ler um CSV de transações bancárias (Pandas)..","Finalizar a leitura de todos os tópicos de Ciência de Dados do edital." , "Construir planilhas de evolução PRICE e SAC manualmente."]
            },
            {
                id: 5, titulo: "Engenharia e Nuvem", meses: "Mês 13 a 15", color: "warm-gray",
                objetivo: "Visão sistêmica, arquitetura moderna e probabilidade avançada.",
                semana: [
                    { dia: "Seg", mat: "Tecnologia da Informação" },
                    { dia: "Ter", mat: "Noções de Probabilidade e Estatística + Língua Inglesa" },
                    { dia: "Qua", mat: "Tecnologia da Informação" },
                    { dia: "Qui", mat: "Noções de Probabilidade e Estatística + Língua Portuguesa" },
                    { dia: "Sex", mat: "Tecnologia da Informação" }
                ],
                metas: ["Diferenciar com 100% de precisão modelos IaaS, PaaS e SaaS com exemplos de AWS/Azure.", "Resolver 100 questões de Probabilidade Condicional e Teorema de Bayes.", "Mapear os Status Codes HTTP e Verbos REST mais cobrados.", "Desenhar um diagrama de Microsserviços para um sistema de PIX.", "Finalizar a leitura de todos os tópicos de Arquitetura e Nuvem do edital.","Consolidar o entendimento de Microservices vs Monólitos."]
            },
            {
                id: 6, titulo: "Governança, Ética e Agilidade", meses: "Mês 16 a 18", color: "dark-blue",
                objetivo: "Gestão, normas éticas e conformidade bancária (Foco: Compliance e Gestão).",
                semana: [
                    { dia: "Seg", mat: "Tecnologia da Informação" },
                    { dia: "Ter", mat: " Ética e Compliance." },
                    { dia: "Qua", mat: "Tecnologia da Informação" },
                    { dia: "Qui", mat: " Ética e Compliance." },
                    { dia: "Sex", mat: "Tecnologia da Informação" }
                ],
                metas: ["Leitura completa e fichamento da LGPD e Lei de Lavagem de Dinheiro..", "Memorizar ritos do Scrum e métricas do Kanban.", "Resolver 100 questões sobre Lavagem de Dinheiro (Lei 9.613).", "Simulado de Governança (ITIL/COBIT).", "Memorizar as Práticas da ITIL v4 e as 4 Dimensões do Gerenciamento, com foco especial em Gerenciamento de Incidentes, Mudanças e Nível de Serviço."]
            },
            {
                id: 7, titulo: "Estudo Reverso e Redação", meses: "Mês 19 a 21", color: "emerald",
                objetivo: "Velocidade de prova e correção de lacunas residuais.",
                semana: [
                    { dia: "Seg", mat: "Tecnologia da Informação" },
                    { dia: "Ter", mat: "Básicas" },
                    { dia: "Qua", mat: "Tecnologia da Informação" },
                    { dia: "Qui", mat: "Redação" },
                    { dia: "Sex", mat: "Tecnologia da Informação" }
                ],
                metas: ["Alcançar média de acertos > 75% em todas as baterias de TI.", "Resolver 2.500 questões no trimestre", "Reduzir o tempo médio de resolução para 2,5 minutos por questão.", "Produzir 1 redação por semana sobre tecnologia/bancos."]
            },
            {
                id: 8, titulo: "Simulação Total e Reta Final", meses: "Mês 22 a 24", color: "yellow",
                objetivo: "Preparação para a prova final (Foco: Ajuste Fino e Psicológico).",
                semana: [
                    { dia: "Seg", mat: "Revisão Ativa + Tecnologia da Informação" },
                    { dia: "Ter", mat: "Revisão Ativa + Comportamentos Éticos e Compliance" },
                    { dia: "Qua", mat: "Revisão Ativa + Matemática Financeira e Estatística" },
                    { dia: "Qui", mat: "Revisão Ativa + Lingua Portuguesa" },
                    { dia: "Sex", mat: "Simulado Geral." }
                ],
                metas: ["Realizar 10 simulados completos com preenchimento de gabarito.", "Estabilizar média de acertos em TI acima de 85%.", "Simular o dia da prova (Alimentação, tempo e silêncio).", "Memorizar todas as fórmulas financeiras e estatísticas para prova."]
            }

        ];
      /*  const dbEscada = [
            { id: 1, titulo: "Nível 1: Alicerce", desc: "A base fundamental.", topicos: ["Lógica", "Algoritmos", "Estrutura Dados"] },
            { id: 2, titulo: "Nível 2: Coração da Prova", desc: "Onde a Cesgranrio ataca com código.", topicos: [ "Bancos Relacionais", "Python", "SQL ANSI", "Modelagem ER e Normalização"] },
            { id: 3, titulo: "Nível 3: Linguagens", desc: "Desenvolvimento de software.", topicos: ["Java SE (POO)","APIs REST", "Microsserviços", "Agilidade (Scrum)", "Análise de Dados"] },
            { id: 4, titulo: "Nível 4: Arquitetura", desc: "Sistemas e arquitetura moderna.", topicos: ["Microsserviços", "Web Services", "APIs REST e Cloud Computing."] },
            { id: 5, titulo: "Nível 5: Gestão", desc: "Gestão de projetos e governança.", topicos: ["Scrum (Agilidade)", "ITIL e COBIT (Governança)."] },
            { id: 6, titulo: "Nível 6: Avançado & Decoreba", desc: "Diferenciais para o topo da lista.", topicos: ["Governança (ITIL)", "Cloud/DevSecOps", "Estatística"] }
        ];*/
                //  BANCO DE DADOS LOCAL: O Edital (Checklist) 
                //código da nova ABA PROGRESSO ESTRATÉGICO
        const dbEscada = [
            // TI
            { id: 'c1', area: 'ti', priority: 'quente', title: 'Bancos de Dados - SQL: Select, Insert, Update, Delete, Joins, Group By, Subqueries' },
            { id: 'c2', area: 'ti', priority: 'quente', title: 'Bancos de Dados: Modelagem Relacional e Normalização (1FN, 2FN, 3FN)' },
            { id: 'c3', area: 'ti', priority: 'quente', title: 'Linguagens - Java SE 21: Sintaxe, Herança, Polimorfismo, Interfaces' },
            { id: 'c4', area: 'ti', priority: 'quente', title: 'Linguagens - Python 3.9: Bibliotecas Pandas e NumPy' },
            { id: 'c5', area: 'ti', priority: 'quente', title: 'Agilidade: SCRUM (Framework completo: Papéis, Cerimônias e Artefatos)' },
            { id: 'c6', area: 'ti', priority: 'quente', title: 'Desenvolvimento Web: Padrões REST, Verbos HTTP (GET, POST, etc.) e Status Codes' },
            { id: 'c7', area: 'ti', priority: 'quente', title: 'Arquitetura Microsserviço, Nuvem Pública/Privada' },
            { id: 'c30', area: 'ti', priority: 'quente', title: 'Arquitetura de Software: Microsserviços e Arquitetura em Camadas (MVC)' },
            { id: 'c31', area: 'ti', priority: 'quente', title: 'Comportamentos Digitais: Mindset de Crescimento e OKRs (Objectives and Key Results)' },
            { id: 'c32', area: 'ti', priority: 'quente', title: 'Agilidade: Kanban e Fluxo de Valor)' },
            { id: 'c33', area: 'ti', priority: 'quente', title: 'Segurança: Segurança Cibernética (Resolução CMN 4893)' },
            { id: 'c12', area: 'ti', priority: 'morno', title: 'Engenharia de Software: Engenharia de Requisitos (Funcionais vs Não Funcionais)' },
            { id: 'c35', area: 'ti', priority: 'morno', title: 'Engenharia de Software: UML (Diagramas de Classe e Caso de Uso).' },
            { id: 'c36', area: 'ti', priority: 'morno', title: 'Desenvolvimento Web: JSON, XML e Sistemas Distribuídos' },
            { id: 'c37', area: 'ti', priority: 'morno', title: 'Cloud Computing: IaaS, PaaS, SaaS, Nuvem Pública e Privada' },
            { id: 'c13', area: 'ti', priority: 'morno', title: 'Estrutura de Dados: Busca Binária, Ordenação (Bubble, Selection, Insertion)' },
            { id: 'c34', area: 'ti', priority: 'morno', title: 'Estrutura de Dados: Pilha, Fila, Lista Encadeada e Noções de Árvore Binária' },
            { id: 'c14', area: 'ti', priority: 'morno', title: 'Teste de Software: Teste de Unidade, Integração e Regressão' },
            { id: 'c15', area: 'ti', priority: 'morno', title: 'Sistemas Operacionais: Processos (Comunicação/Escalonamento) e Gerência de Memória.' },
            { id: 'c38', area: 'ti', priority: 'morno', title: 'Sistemas Operacionais: Windows 10 e Ambiente Linux (SUSE).' },
            { id: 'c16', area: 'ti', priority: 'morno', title: 'Governança de TI: ITIL v4 e COBIT 2019 (Visão Geral)' },
            { id: 'c21', area: 'ti', priority: 'frio', title: 'Linguagens: Cobol, R, Scala, Objective-C, Swift' },
            { id: 'c39', area: 'ti', priority: 'morno', title: 'Linguagens: JavaScript e TypeScript 4.X' },
            { id: 'c40', area: 'ti', priority: 'morno', title: 'Comportamentos Digitais: Design Thinking e Ciência de Dados (Conceitos)' },
            { id: 'c41', area: 'ti', priority: 'morno', title: 'Comportamentos Digitais: Metodologias Ágeis e Lean Manufacturing' },
            { id: 'c42', area: 'ti', priority: 'frio', title: 'Linguagens/Frameworks: C# 12, .NET, AngularJS, Angular, JSF, JSP, Ajax' },
            { id: 'c43', area: 'ti', priority: 'frio', title: 'Sistemas Operacionais Legados: IBM z/OS' },
            { id: 'c44', area: 'ti', priority: 'frio', title: 'Outros: Portais corporativos (RSS, Portlets), Acessibilidade (e-MAG) e Pontos de Função.' },            
            { id: 'c45', area: 'ti', priority: 'frio', title: 'Agilidade: SAFe, Nexus, Management 3.0 e Lean UX' },
            { id: 'c22', area: 'ti', priority: 'frio', title: 'Desenvolvimento Web: Quarkus, SOA, Web Services (UDDI, WSDL, SOAP)' },
            { id: 'c23', area: 'ti', priority: 'frio', title: 'Arquitetura de Computadores: CPU, Base Binária, Endereçamento e Hierarquia de Memória' },
            { id: 'c24', area: 'ti', priority: 'frio', title: 'Qualidade de Software: CMMI e MPS-BR (Conceitos e Níveis)' },
            
            // CONHECIMENTOS BÁSICOS
            { id: 'c8', area: 'basico', priority: 'quente', title: 'Português: Compreensão e Interpretação de Textos (O foco principal da banca)' },
            { id: 'c45', area: 'basico', priority: 'quente', title: 'Português: Concordância (Verbal e Nominal) e Regência' },
            { id: 'c46', area: 'basico', priority: 'quente', title: 'Português: Emprego do sinal indicativo de crase' },
            { id: 'c47', area: 'basico', priority: 'quente', title: 'Compliance: Sigilo Bancário (LC 105/2001) e Segurança da Informação' },
            { id: 'c48', area: 'basico', priority: 'quente', title: 'Estatística: Medidas de Tendência Central (Média, Moda e Mediana)' },
            { id: 'c9', area: 'basico', priority: 'quente', title: 'Matemática Financeira: Juros Compostos (Montante, Taxas, Prazos)' },
            { id: 'c10', area: 'basico', priority: 'quente', title: 'Estatística: Probabilidade de Laplace/Condicional' },
            { id: 'c11', area: 'basico', priority: 'quente', title: 'Compliance: LGPD (Lei 13.709/18) e Prevenção à Lavagem de Dinheiro (Lei 9.613/98)' },

            { id: 'c17', area: 'basico', priority: 'morno', title: 'Português: Coesão, Coerência e Organização Textual' },
            { id: 'c49', area: 'basico', priority: 'morno', title: 'Português: Pontuação e Colocação Pronominal' },
            { id: 'c50', area: 'basico', priority: 'morno', title: 'Estatística: Probabilidade Básica (Laplace, Eventos, Espaço Amostral)' },
            { id: 'c51', area: 'basico', priority: 'morno', title: 'Compliance: Artigo 37 da Constituição Federal (Princípios da ADM Pública)' },
            { id: 'c52', area: 'basico', priority: 'morno', title: 'Compliance: Legislação Anticorrupção (Lei 12.846/13 e Dec. 11.129/22)' },
            { id: 'c18', area: 'basico', priority: 'morno', title: 'Mat. Financeira: Equivalência de Capitais, Séries Uniformes' },
            { id: 'c19', area: 'basico', priority: 'morno', title: 'Estatística: Medidas de Dispersão (Variância e Desvio Padrão)' },
            { id: 'c20', area: 'basico', priority: 'morno', title: 'Inglês: Vocabulário Fundamental e Gramática Básica para Interpretação' },
            
            { id: 'c25', area: 'basico', priority: 'frio', title: 'Português: Ortografia oficial, Acentuação e Redação Oficial' },
            { id: 'c54', area: 'basico', priority: 'frio', title: 'Português: Argumentação e Persuasão' },
            { id: 'c55', area: 'basico', priority: 'frio', title: 'Matemática Financeira: Juros Simples, Descontos e Progressões (PA/PG)' },
            { id: 'c56', area: 'basico', priority: 'frio', title: 'Estatística: Distribuição Binomial e Medidas de Posição (Quartis/Percentis)' },
            { id: 'c57', area: 'basico', priority: 'frio', title: 'Compliance: Ética Profissional, Assédio Moral/Sexual e PRASC CAIXA' },
            { id: 'c58', area: 'basico', priority: 'frio', title: 'Compliance: Atualidades do Mercado Financeiro' },
            { id: 'c26', area: 'basico', priority: 'frio', title: 'Mat. Financeira: Juros Simples, Descontos, PA/PG' },
            
            // Digitais
            { id: 'c27', area: 'digital', priority: 'quente', title: 'Digitais: Mindset Ágil, OKRs, Pensamento Computacional' },
            { id: 'c53', area: 'digital', priority: 'morno', title: 'Digitais: Inteligência Emocional e Resolução de Problemas Complexos.' },
            { id: 'c28', area: 'digital', priority: 'morno', title: 'Digitais: Design Thinking, Ciência de Dados (Conceitos), I.E.' },
            { id: 'c29', area: 'digital', priority: 'frio', title: 'Digitais: Sustentabilidade (ODS), CX' },
            { id: 'c58', area: 'digital', priority: 'frio', title: 'Digitais: Intraempreendedorismo, Liderança e Aprendizagem Contínua' }
        ]; // Coloquei o codigo da variavel const checklistData dentro desta função para evitar que seja exposta globalmente, já que é um dado estático e não precisa ser mutável ou acessível fora do escopo de renderização do checklist.




        const dbChecklist = [
            { idGroup: 'g1', area: "TI - Linguagens e Bancos", itens: [
                { id: 'ti1', text: 'Java: POO, Herança, Polimorfismo', priority: 'Alta', classe: 'priority-alta' },
                { id: 'ti2', text: 'Python: Bibliotecas Pandas e NumPy', priority: 'Alta', classe: 'priority-alta' },
                { id: 'ti3', text: 'SQL: Comandos DML e Joins', priority: 'Alta', classe: 'priority-alta' }
            ]},
            { idGroup: 'g2', area: "TI - Engenharia e Web", itens: [
                { id: 'ti4', text: 'Arquitetura: Microsserviços vs Monolito', priority: 'Alta', classe: 'priority-alta' },
                { id: 'ti5', text: 'Padrão REST e Verbos HTTP', priority: 'Alta', classe: 'priority-alta' },
                { id: 'ti6', text: 'UML: Casos de Uso e Classes', priority: 'Média', classe: 'priority-media' }
            ]}
        ];

        // Variáveis de controle de instâncias e estado local da UI
        let chartEvolucaoInstance = null; // Guarda a instância do Chart.js para permitir destruição e re-renderização
        //let escadaExpandida = 1; // Guarda qual nó da aba Escada está aberto no formato Accordion

        // =========================================================================
        // 3. MOTORES DE RENDERIZAÇÃO E CONTROLE DE EVENTOS
        // =========================================================================

        /**
         * Renderiza e calcula a Contagem Regressiva no Header.
         */
        function atualizarDataInicio(e) {
            estadoApp.dataInicio = e.target.value;
            renderCountdown();
            if(window.salvarNaNuvem) window.salvarNaNuvem();
        }

        function renderCountdown() {
            const inputData = document.getElementById('input-data-inicio');
            if (estadoApp.dataInicio) {
                inputData.value = estadoApp.dataInicio;
            }
            
            const dataAlvo = new Date(estadoApp.dataProva);
            const dataHoje = new Date();
            const countdownEl = document.getElementById('ui-countdown');
            
            dataHoje.setHours(0, 0, 0, 0); dataAlvo.setHours(0, 0, 0, 0);
            
            if (dataHoje >= dataAlvo) {
                countdownEl.innerText = "Chegou o Dia!"; countdownEl.style.color = "var(--accent-yellow)";
            } else {
                const diffTime = Math.abs(dataAlvo - dataHoje);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                countdownEl.innerText = diffDays + " dias";
            }
        }

        /**
         * Renderiza a aba Roadmap (Fases de Estudo).
         * Separa as fases entre "Ativas" e "Concluídas" baseado no estadoApp.fasesConcluidas.
         */
        function renderRoadmap() {
            const contAtivas = document.getElementById('container-fases-ativas');
            const contConcluidas = document.getElementById('container-fases-concluidas');
            if(!contAtivas || !contConcluidas) return;

            const ativas = dbRoadmap.filter(f => !estadoApp.fasesConcluidas.includes(f.id));
            const concluidas = dbRoadmap.filter(f => estadoApp.fasesConcluidas.includes(f.id));

            // Mapeia Array para HTML (Template Literals)
            contAtivas.innerHTML = ativas.map(f => `
                <div class="card-fase" style="border-left-color: var(--${f.color}-500, #3b82f6);">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div style="font-size:0.75rem; font-weight:bold; opacity:0.6;">${f.meses}</div>
                        <button class="btn-icon-acao btn-concluir-fase" onclick="concluirFase(${f.id})" title="Marcar como Concluída">
                            <i data-lucide="check-circle" style="width:20px;"></i>
                        </button>
                    </div>  objetivo
                    <h3 style="color: var(--primary)">${f.titulo}</h3>
                    <h4 style="color: var(--text-muted); font-weight: normal; margin-top: 8px;">${f.objetivo}</h4>
                    <button class="btn-abrir-planejamento" onclick="abrirModal(${f.id})">
                        Ver Planejamento <i data-lucide="arrow-right" style="width:16px;"></i>
                    </button>

                </div>
            `).join('');

            if (concluidas.length > 0) {
                document.getElementById('wrapper-concluidas').style.display = 'block';
                contConcluidas.innerHTML = concluidas.map(f => `
                    <div class="card-fase" style="border-left-color: var(--border-color); background: var(--bg-body); opacity: 0.8;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div style="font-size:0.75rem; font-weight:bold; opacity:0.6;"><strike>${f.meses}</strike></div>
                            <button class="btn-icon-acao btn-desfazer-fase" onclick="desfazerFase(${f.id})" title="Desfazer Ação">
                                <i data-lucide="rotate-ccw" style="width:16px;"></i>
                            </button>
                        </div>
                        <h3 style="color: var(--text-muted)"><strike>${f.titulo}</strike></h3>
                        <div style="font-size: 0.85rem; color: var(--success); font-weight: bold; margin-top: 8px; display:flex; align-items:center; gap:4px;">
                            <i data-lucide="check" style="width:14px;"></i> Fase Superada
                        </div>
                    </div>
                `).join('');
            } else {
                document.getElementById('wrapper-concluidas').style.display = 'none';
            }
            lucide.createIcons(); // Re-renderiza SVGs
        }

        // Funções de manipulação de array para o Roadmap
        function concluirFase(id) {
            if(!estadoApp.fasesConcluidas.includes(id)) {
                estadoApp.fasesConcluidas.push(id);
                renderRoadmap(); showToast("Fase superada! Excelente progresso.");
                if(window.salvarNaNuvem) window.salvarNaNuvem();
            }
        }

        function desfazerFase(id) {
            estadoApp.fasesConcluidas = estadoApp.fasesConcluidas.filter(fid => fid !== id);
            renderRoadmap(); showToast("Ação desfeita. Fase reativada.", true);
            if(window.salvarNaNuvem) window.salvarNaNuvem();
        }

        /**
         * Controladores do Modal de Detalhamento do Roadmap
         */
        function abrirModal(id) {
            const fase = dbRoadmap.find(f => f.id === id);
            if(!fase) return;

            // Altera dados no DOM do Modal
            document.getElementById('modal-fase-titulo').textContent = fase.titulo;
            document.getElementById('modal-fase-badge').textContent = fase.meses;
            document.getElementById('modal-fase-objetivo').textContent = fase.objetivo;

            document.getElementById('modal-semana-container').innerHTML = fase.semana.map(d => `
                <div class="dia-item"><div class="dia-nome">${d.dia}</div><div class="dia-materia">${d.mat}</div></div>
            `).join('');

            document.getElementById('modal-metas-container').innerHTML = fase.metas.map(m => `
                <li style="display:flex; gap:10px; margin-bottom:8px; font-size:0.9rem;">
                    <i data-lucide="check-circle-2" style="width:16px; color:#22c55e; flex-shrink:0;"></i> <span>${m}</span>
                </li>
            `).join('');

            lucide.createIcons({ root: document.getElementById('modal-roadmap') });
            
            // Animação de entrada do Modal (Fade In e Translate Y)
            const modal = document.getElementById('modal-roadmap');
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
            document.body.style.overflow = 'hidden'; // Evita scroll do fundo
        }

        function fecharModal() {
            const modal = document.getElementById('modal-roadmap');
            modal.classList.remove('active');
            setTimeout(() => { modal.style.display = 'none'; document.body.style.overflow = ''; }, 300);
        }
        function fecharModalFora(e) { if(e.target.id === 'modal-roadmap') fecharModal(); }

        /**
         * Renderiza o Progresso Estratégico.
         * Cruza dbEscada (textos base) com estadoApp.escada (status: bloqueado/ativo/concluido).
         */
        function renderEscada() {
            const container = document.getElementById('container-escada');
            if(!container) return;
            container.innerHTML = '';
            let concluidos = 0;

            dbEscada.forEach((nivelFix) => {
                const stateNode = estadoApp.escada.find(n => n.id === nivelFix.id);
                const status = stateNode ? stateNode.status : 'bloqueado';
                if (status === 'concluido') concluidos++;
                
                const isExpandido = escadaExpandida === nivelFix.id ? 'expandido' : '';
                
                // Define se mostra ícone de check, cadeado ou número do nível na bolinha
                let nodeContent = status === 'concluido' ? `<i data-lucide="check" style="width:18px;"></i>` : (status === 'bloqueado' ? `<i data-lucide="lock" style="width:14px;"></i>` : nivelFix.id);
                const tagsHtml = nivelFix.topicos.map(t => `<span class="tag-ti">${t}</span>`).join('');

                let btnHtml = status === 'ativo' ? `<button class="btn-concluir-nivel" onclick="concluirEscada(event, ${nivelFix.id})"><i data-lucide="award" style="width:16px;"></i> Concluir Nível</button>` : '';

                container.innerHTML += `
                    <div class="timeline-item ${status} ${isExpandido}">
                        <div class="timeline-node">${nodeContent}</div>
                        <div class="timeline-content" onclick="toggleEscada(${nivelFix.id})">
                            <div class="timeline-header">
                                <div style="display:flex; align-items:center; gap: 8px;">
                                    <div style="font-size: 1.1rem; font-weight: bold; color: var(--text-main);">${nivelFix.titulo}</div>
                                    ${status === 'concluido' ? '<span class="badge-trophy"><i data-lucide="award" style="width:12px;"></i> Nível Dominado</span>' : ''}
                                </div>
                                <i data-lucide="chevron-${isExpandido ? 'up' : 'down'}" style="color: var(--text-muted); width: 20px;"></i>
                            </div>
                            <div class="timeline-body">
                                <div style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">${nivelFix.desc}</div>
                                <div style="margin-bottom: 1rem; display:flex; gap:6px; flex-wrap:wrap;">${tagsHtml}</div>
                                ${btnHtml}
                            </div>
                        </div>
                    </div>
                `;
            });
            // Calcula e preenche a barra de progresso CSS (width)
            document.getElementById('barra-progresso-escada').style.width = `${(concluidos / dbEscada.length) * 100}%`;
            lucide.createIcons();
        }

        // Sistema de Accordion (Apenas um nó da escada aberto por vez)
        function toggleEscada(id) {
            const state = estadoApp.escada.find(n => n.id === id);
            if (state && state.status !== 'bloqueado') {
                escadaExpandida = escadaExpandida === id ? null : id;
                renderEscada();
            }
        }

        // Lógica de desbloqueio do próximo nível ao concluir o atual
        function concluirEscada(event, id) {
            event.stopPropagation();
            const curr = estadoApp.escada.find(n => n.id === id);
            if(curr) curr.status = 'concluido';
            const next = estadoApp.escada.find(n => n.id === id + 1);
            if(next) { next.status = 'ativo'; escadaExpandida = next.id; } else { escadaExpandida = null; }
            renderEscada();
            showToast("🏆 Nível da escada conquistado!");
            if(window.salvarNaNuvem) window.salvarNaNuvem();
        }




        
        /**
         * Renderiza o Checklist de estudos focado na estatística da Cesgranrio.
         * Verifica também se um bloco inteiro foi concluído para atribuir a badge.
         */
        function renderChecklist() {
            const container = document.getElementById('container-checklist');
            if(!container) return;
            container.innerHTML = '';

            dbChecklist.forEach(grupo => {
                const idsDoGrupo = grupo.itens.map(i => i.id);
                // Verifica se todos os itens deste grupo estão no array estadoApp.checklist
                const todosConcluidos = idsDoGrupo.every(id => estadoApp.checklist.includes(id));
                const badgeHtml = todosConcluidos ? `<span class="badge-trophy"><i data-lucide="star" style="width:12px;"></i> Bloco Fechado</span>` : '';

                let itensHtml = '';
                grupo.itens.forEach(item => {
                    const isChecked = estadoApp.checklist.includes(item.id) ? 'checked' : '';
                    itensHtml += `
                        <div class="checklist-item ${isChecked}" onclick="toggleChecklist('${item.id}')">
                            <div class="checklist-checkbox"><i data-lucide="check" style="width: 16px;"></i></div>
                            <div class="checklist-text">${item.text}</div>
                            <span class="badge-priority ${item.classe}">${item.priority}</span>
                        </div>
                    `;
                });
                container.innerHTML += `<div class="checklist-group"><div class="checklist-header" style="justify-content:space-between;"><span>${grupo.area}</span> ${badgeHtml}</div><div>${itensHtml}</div></div>`;
            });
            lucide.createIcons();
        }

        function toggleChecklist(id) {
            if (estadoApp.checklist.includes(id)) estadoApp.checklist = estadoApp.checklist.filter(i => i !== id);
            else { estadoApp.checklist.push(id); showToast("✔️ Tópico dominado!"); }
            renderChecklist();
            if(window.salvarNaNuvem) window.salvarNaNuvem();
        }

        /**
         * Controle do Streak (Dias de Estudo Consecutivos / Gamificação)
         * Evita contagem múltipla no mesmo dia e reinicia se perder o dia consecutivo.
         */
        function renderStreak() {
            document.getElementById('ui-streak-count').querySelector('span').innerText = estadoApp.streak.count;
            const icon = document.getElementById('ui-streak-icon');
            if(estadoApp.streak.count > 0) { icon.classList.add('streak-active'); icon.style.color = '#f97316'; }
            else { icon.classList.remove('streak-active'); icon.style.color = 'currentColor'; }
        }

        function marcarMetaDiaria() {
            const hoje = new Date().toDateString();
            if (estadoApp.streak.lastDate === hoje) { showToast("Fogo já alimentado hoje! Bom descanso.", false); return; }
            const ontem = new Date(); ontem.setDate(ontem.getDate() - 1);
            // Se a última data for ontem, incrementa, senão recomeça do 1.
            if (estadoApp.streak.lastDate === ontem.toDateString()) estadoApp.streak.count++; else estadoApp.streak.count = 1;
            estadoApp.streak.lastDate = hoje;
            renderStreak();
            showToast(`🔥 Disciplina blindada! Dia ${estadoApp.streak.count} registado.`);
            if(window.salvarNaNuvem) window.salvarNaNuvem();
        }

        /**
         * Controle da Aba de Analytics e Estratégia
         * Renderiza o Gráfico de Evolução dos Simulados com Chart.js.
         */
        function renderCharts() {
            const ctx = document.getElementById('chartEvolucao');
            if(!ctx) return;
            const labels = estadoApp.simulados.map(s => s.data);
            const data = estadoApp.simulados.map(s => s.nota);
            if (chartEvolucaoInstance) chartEvolucaoInstance.destroy(); // Evita sobreposição (Memory Leak)
            
            chartEvolucaoInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        { label: 'Desempenho Geral (%)', data: data, borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderWidth: 2, tension: 0.3, fill: true, pointBackgroundColor: '#1e3a8a', pointRadius: 4 },
                        { label: 'Meta Corte (85%)', data: Array(labels.length).fill(85), borderColor: '#ef4444', borderDash: [5, 5], borderWidth: 1, pointRadius: 0, fill: false }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } }, plugins: { legend: { position: 'bottom' } } }
            });
        }

        function inserirSimulado() {
            const ref = document.getElementById('sim-data').value;
            const nota = parseFloat(document.getElementById('sim-nota').value);
            if(ref && !isNaN(nota)) {
                estadoApp.simulados.push({ data: ref, nota: nota });
                document.getElementById('sim-data').value = ''; document.getElementById('sim-nota').value = '';
                renderCharts(); showToast("📈 Resultado registado!");
                if(window.salvarNaNuvem) window.salvarNaNuvem();
            } else showToast("Preencha o mês e a nota corretamente.", true);
        }

        /**
         * Renderiza e controla a Matriz SWOT (Forças/Fraquezas) e POTS (Táticas)
         */
        function renderSwot() {
            const container = document.getElementById('container-swot');
            if(!container) return;
            
            const renderList = (tipo, arr) => `
                <ul class="swot-list">
                    ${arr.map((item, index) => `
                        <li class="swot-item-row">
                            <span class="swot-item-text">${item}</span>
                            <button class="swot-btn-del" onclick="removerSwot('${tipo}', ${index})" title="Remover item">
                                <i data-lucide="x" style="width:14px; height:14px;"></i>
                            </button>
                        </li>
                    `).join('')}
                </ul>
                <div class="swot-input-group">
                    <input type="text" id="input-swot-${tipo}" class="swot-input" placeholder="Adicionar novo..." onkeypress="if(event.key === 'Enter') adicionarSwot('${tipo}')">
                    <button class="swot-btn-add" onclick="adicionarSwot('${tipo}')"><i data-lucide="plus" style="width:16px; height:16px;"></i></button>
                </div>
            `;

            container.innerHTML = `
                <div class="swot-quadrant swot-s"><div class="swot-title"><i data-lucide="trending-up" style="color:#16a34a; width:18px;"></i> Forças</div>${renderList('forcas', estadoApp.swot.forcas)}</div>
                <div class="swot-quadrant swot-w"><div class="swot-title"><i data-lucide="trending-down" style="color:#dc2626; width:18px;"></i> Fraquezas</div>${renderList('fraquezas', estadoApp.swot.fraquezas)}</div>
                <div class="swot-quadrant swot-o" style="grid-column: 1 / -1;"><div class="swot-title"><i data-lucide="target" style="color:#2563eb; width:18px;"></i> Táticas de Ação Prática (POTS)</div>${renderList('taticas', estadoApp.swot.taticas)}</div>
            `;
            lucide.createIcons();
        }

        function adicionarSwot(tipo) {
            const input = document.getElementById(`input-swot-${tipo}`);
            const valor = input.value.trim();
            if (valor) {
                estadoApp.swot[tipo].push(valor);
                renderSwot(); if(window.salvarNaNuvem) window.salvarNaNuvem();
            }
        }

        function removerSwot(tipo, index) {
            estadoApp.swot[tipo].splice(index, 1);
            renderSwot(); if(window.salvarNaNuvem) window.salvarNaNuvem();
        }

        /**
         * Utilitários do Sistema (Navegação em Abas e Notificações)
         */
        function configurarTabs() {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
                    btn.classList.add('active');
                    const target = btn.getAttribute('data-target');
                    document.getElementById(target).classList.add('active');
                    // Workaround: Redesenha o Chart.js quando sua aba fica visível, ou ele não terá width
                    if(target === 'tab-analytics') setTimeout(renderCharts, 50); 
                });
            });
        }

        // Criador dinâmico de pop-ups no canto inferior da tela
        function showToast(msg, isError = false) {
            let container = document.getElementById('toast-container');
            if(!container){ container = document.createElement('div'); container.id = 'toast-container'; document.body.appendChild(container); }
            const t = document.createElement('div'); t.className = `toast ${isError ? 'error' : ''}`;
            t.innerHTML = `<span style="font-weight: 500;">${msg}</span>`;
            container.appendChild(t);
            setTimeout(() => { t.style.animation = 'fadeOut 0.3s forwards'; setTimeout(() => t.remove(), 300); }, 3000);
        }

        // =========================================================================
        // 4. MÓDULO DE SEGURANÇA E BACKUP (LOCAL & NUVEM FIREBASE)
        // =========================================================================
        
        function aplicarEstadoApp(dadosSalvos) {
            // Garante que estruturas novas existam se carregar um save antigo (Backward Compatibility)
            estadoApp = { 
                ...estadoApp, 
                ...dadosSalvos,
                fasesConcluidas: dadosSalvos.fasesConcluidas || [],
                dataInicio: dadosSalvos.dataInicio || ''
            };
            // Dispara todos os renders para refletir o novo estado carregado
            renderCountdown(); renderRoadmap(); renderEscada(); renderChecklist(); renderStreak(); renderSwot();
            if(document.getElementById('tab-analytics').classList.contains('active')) renderCharts();
        }

        // Lógica Backup Local (Transforma objeto num blob URI e baixa como .json)
        function exportarJSON() {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(estadoApp, null, 2));
            const a = document.createElement('a'); a.setAttribute("href", dataStr); a.setAttribute("download", "meu_plano_bancario_ti.json"); a.click();
            showToast("Backup local efetuado!");
        }

        // Lógica de Leitura Local de arquivo usando a File API nativa do Browser
        function importarJSON(e) {
            const file = e.target.files[0]; if(!file) return;
            const reader = new FileReader();
            reader.onload = function(ev) {
                try { aplicarEstadoApp(JSON.parse(ev.target.result)); showToast("Plano restaurado!"); }
                catch(err) { showToast("Ficheiro JSON inválido.", true); }
            };
            reader.readAsText(file); e.target.value = '';
        }

        // Integração assíncrona com Firebase (Apenas se as credenciais globais existirem)
        (async () => {
            try {
                // Utilização de importações modulares dinâmicas para evitar erro de CORS e Module Scope no script atual
                const { initializeApp } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js');
                const { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js');
                const { getFirestore, doc, setDoc, getDoc } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
                
                const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
                const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

                if(firebaseConfig) {
                    const app = initializeApp(firebaseConfig); const auth = getAuth(app); const db = getFirestore(app);
                    
                    // Estrutura MANDATÓRIA de Auth Antes de Query
                    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) await signInWithCustomToken(auth, __initial_auth_token); else await signInAnonymously(auth);
                    
                    onAuthStateChanged(auth, async (user) => {
                        const statusEl = document.getElementById('cloud-status');
                        if (user) {
                            statusEl.innerHTML = '<span style="color: var(--success)">● Conectado (Auto-Sync Ativo)</span>';
                            // Expõe as funções globalmente (window) para que os botões (onclick) no HTML consigam acessá-las
                            window.salvarNaNuvem = async () => await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'appData', 'state'), estadoApp);
                            window.carregarDaNuvem = async () => {
                                const snap = await getDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'appData', 'state'));
                                if(snap.exists()) { aplicarEstadoApp(snap.data()); showToast("Nuvem sincronizada."); }
                            };
                            window.carregarDaNuvem(); // Tenta puxar dados automaticamente ao carregar a página
                        } else { statusEl.innerHTML = '<span style="color: var(--danger)">● Offline</span>'; }
                    });
                }
            } catch(e) { console.error("Firebase Sync Indisponível no ambiente atual.", e); }
        })();

        // =========================================================================
        // 5. INICIALIZAÇÃO DA APLICAÇÃO NO DOM
        // =========================================================================
        document.addEventListener('DOMContentLoaded', () => {
            renderCountdown();
            renderRoadmap();
            renderEscada();
            renderChecklist();
            renderStreak();
            renderSwot();
            configurarTabs();
            lucide.createIcons(); // Transforma as tags <i data-lucide="..."> nos SVGs
        });