        /**
         * Renderiza a Escada de TI Gamificada.
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
       
            /*
            Bloco 1:

🔘 Bloco 7: 








💡 Dicas de Mentoria:

A Regra do 70/20/10: Dedique 70% do tempo à prática, 20% à teoria e 10% à revisão.

Foco Inicial: Como o plano agora tem 8 blocos, tente não avançar para o próximo sem completar um pequeno projeto prático no bloco atual.

Transição Lógica: A separação dos Bancos de Dados (Bloco 3) serve para que você aprenda a estruturar dados antes de tentar programar sistemas complexos no Bloco 5.
            



Planejamento Estratégico de Estudos - Foco CAIXA

Este cronograma foi organizado de forma didática e sequencial, partindo dos fundamentos matemáticos e jurídicos até as aplicações mais complexas do mercado financeiro.

🏗️ Bloco 1: Fundamentos Matemáticos e Estatísticos (A Base)

Antes de entrar na matemática financeira aplicada, você precisa dominar as sequências e a organização de dados.

Sequências Numéricas: Leis de formação (geral e recursiva).

Progressão Aritmética (PA): Definição, termo geral e soma (base para Juros Simples).

Progressão Geométrica (PG): Definição, termo geral e soma (base para Juros Compostos).

Estatística Descritiva (Conceitos Gerais): Variáveis (tipos), população, amostra e frequências (absoluta, relativa e acumulada).

Representação Gráfica: Tabelas, linhas, colunas, setores e histogramas.

💰 Bloco 2: Matemática Financeira Essencial

Aqui aplicamos as progressões ao valor do dinheiro no tempo.

Conceitos Gerais: Valor do dinheiro no tempo, VP (Presente), VF (Futuro), juros, taxa e prazo.

Juros Simples: Fórmulas, cálculos e aplicações (Relação com PA).

Desconto Comercial Simples: O "desconto por fora" utilizado no mercado.

Juros Compostos: Fórmulas, capitalização e juros sobre juros (Relação com PG).

Desconto Racional Composto: O "desconto por dentro" tecnicamente correto.

Equivalência de Capitais: Fluxos regulares e irregulares, prazos e taxas de retorno (VP e VF).

📈 Bloco 3: Finanças Avançadas e Amortização

O coração da prova para bancários.

Séries Uniformes: Anuidades e prestações constantes.

Sistemas de Amortização - Teoria: Conceitos de saldo devedor e amortização.

Sistema de Amortização Constante (SAC): Características e cálculos.

Sistema Francês (Tabela PRICE): Prestações constantes e aplicação prática.

📊 Bloco 4: Probabilidade e Análise de Dados

Onde a estatística se torna ferramenta de decisão.

Medidas de Tendência Central: Média (aritmética, geométrica, ponderada), Moda e Mediana (dados brutos e agrupados).

Medidas de Posição: Quartis e Percentis.

Medidas de Dispersão: Amplitude, Variância, Desvio Padrão e Coeficiente de Variação.

Probabilidade Básica: Experimento aleatório, espaço amostral, evento e Probabilidade de Laplace.

Probabilidade Avançada: Teorema do produto, probabilidade condicional, independência e Distribuição Binomial.

⚖️ Bloco 5: Ética, Compliance e Direito Administrativo

Normas que regem a conduta do empregado público.

Ética e Virtudes: Atitudes éticas, respeito e valores. Ética empresarial e profissional.

Gestão da Ética: Ética em empresas públicas vs. privadas e o Código de Ética da CAIXA.

Artigo 37 da CF: Princípios da Administração Pública (LIMPE - Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência).

Boas Práticas de Governança Corporativa: Transparência e prestação de contas.

Assédio Moral e Sexual: Conceitos e medidas de enfrentamento no ambiente de trabalho.

🛡️ Bloco 6: Segurança, Sigilo e Proteção de Dados

Conhecimentos fundamentais para a era digital bancária.

Sigilo Bancário: Lei Complementar nº 105/2001.

LGPD (Lei Geral de Proteção de Dados): Lei nº 13.709/2018 (Conceitos e direitos do titular).

Segurança da Informação: Fundamentos, conceitos e mecanismos de segurança.

Segurança Cibernética: Resolução CMN nº 4893/2021.

🚔 Bloco 7: Combate a Ilícitos e Responsabilidade Social

Regras rígidas de controle bancário.

Prevenção à Lavagem de Dinheiro: Lei nº 9.613/98, Circular 3.978/2020, Carta Circular 4.001/2020 e Resolução CVM 50/2021.

Legislação Anticorrupção: Lei nº 12.846/2013 e Decreto nº 11.129/2022.

PRASC CAIXA: Política de Responsabilidade Social, Ambiental e Climática.

🌍 Bloco 8: Contexto e Atualidades

Leitura diária e acompanhamento de notícias.

Atualidades do Mercado Financeiro: Fintechs, Open Banking, Real Digital (Drex), COPOM, Inflação e tendências econômicas.

💡 Dicas do Mentor:

Ciclo de Revisão: Para cada 3 tópicos avançados, tire um dia para revisar o primeiro bloco.

Prática em Matemática: Não use calculadora. No dia da prova, seu cérebro é sua única ferramenta.

Leitura da Lei Seca: Para os tópicos de Compliance, leia o texto da lei original além dos resumos.
            */ 
   
   
   
   
   
  
        // 2. BANCO DE DADOS LOCAL: O Edital (Checklist)
        const checklistData = [
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
            { id: 'c39', area: 'ti', priority: 'morno', title: 'Linguagens: JavaScript e TypeScript 4.X' },
            { id: 'c40', area: 'ti', priority: 'morno', title: 'Comportamentos Digitais: Design Thinking e Ciência de Dados (Conceitos)' },
            { id: 'c41', area: 'ti', priority: 'morno', title: 'Comportamentos Digitais: Metodologias Ágeis e Lean Manufacturing' },
            
            { id: 'c21', area: 'ti', priority: 'frio', title: 'Linguagens: Cobol, R, Scala, Objective-C, Swift' },
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
        ];

        // 3. ESTADO DA APLICAÇÃO (A "Memória" da tela atual)
        let state = {
            completedItems: new Set(), // Usa Set para guardar IDs únicos de tarefas concluídas
            currentFilter: 'all'       // Guarda qual filtro está ativo no momento
        };

        // Variável para armazenar o gráfico (precisamos dela para atualizar o gráfico depois)
        let scoreChartInstance = null;

        // 4. FUNÇÕES DO GRÁFICO (Chart.js)
        function updateChart() {
            // Conta quantos itens existem no total para cada área
            const totalTi = checklistData.filter(i => i.area === 'ti').length;
            const totalBasico = checklistData.filter(i => i.area === 'basico').length;
            const totalDigital = checklistData.filter(i => i.area === 'digital').length;

            // Identifica quais itens o usuário já marcou como concluídos
            const completedItemsArr = Array.from(state.completedItems).map(id => checklistData.find(i => i.id === id));
            
            // Conta os concluídos por área
            const completedTi = completedItemsArr.filter(i => i.area === 'ti').length;
            const completedBasico = completedItemsArr.filter(i => i.area === 'basico').length;
            const completedDigital = completedItemsArr.filter(i => i.area === 'digital').length;

            // Calcula a pontuação baseada na porcentagem de conclusão (Regra de 3 simples)
            const ptsTi = totalTi ? (completedTi / totalTi) * 30 : 0;
            const ptsBasico = totalBasico ? (completedBasico / totalBasico) * 25 : 0;
            const ptsDigital = totalDigital ? (completedDigital / totalDigital) * 5 : 0;
            
            // O restante dos 60 pontos é "pontos em disputa"
            const ptsPending = 60 - (ptsTi + ptsBasico + ptsDigital);

            // Atualiza os textos numéricos na tela (.toFixed(1) deixa com 1 casa decimal)
            document.getElementById('pts-ti').textContent = ptsTi.toFixed(1);
            document.getElementById('pts-basico').textContent = ptsBasico.toFixed(1);
            document.getElementById('pts-digital').textContent = ptsDigital.toFixed(1);

            // Array com os dados exatos que o gráfico vai desenhar
            const dataArr = [ptsTi, ptsBasico, ptsDigital, ptsPending];

            // Se o gráfico já existe, apenas atualizamos os dados. 
            // Se não, nós o criamos do zero.
            if (scoreChartInstance) {
                scoreChartInstance.data.datasets[0].data = dataArr;
                scoreChartInstance.update();
            } else {
                const ctx = document.getElementById('scoreChart').getContext('2d');
                scoreChartInstance = new Chart(ctx, {
                    type: 'doughnut', // Gráfico tipo "rosca"
                    data: {
                        labels: ['TI (Dominado)', 'Básicos (Dominado)', 'Digitais (Dominado)', 'Pontos em Disputa'],
                        datasets: [{
                            data: dataArr,
                            backgroundColor: ['#e11d48', '#a8a29e', '#f59e0b', '#e7e5e4'], // Cores de cada fatia
                            borderWidth: 2,
                            borderColor: '#ffffff',
                            hoverOffset: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false, // Permite que o gráfico preencha o container do CSS
                        plugins: {
                            legend: { position: 'bottom', labels: { font: { family: 'Segoe UI' }, color: '#444' } },
                            tooltip: { // Configuração da janelinha preta ao passar o mouse
                                callbacks: {
                                    label: function(context) {
                                        return context.label + ': ' + context.raw.toFixed(1) + ' pts';
                                    }
                                }
                            }
                        },
                        cutout: '70%', // Espessura da "rosca"
                        animation: { animateScale: true, animateRotate: true }
                    }
                });
            }
        }

        // 5. FUNÇÕES DE RENDERIZAÇÃO DA TELA (Criar HTML via JS)
        
        // Desenha os cartões das 8 Fases
        function renderPhases() {
            const grid = document.getElementById('phasesGrid');
            grid.innerHTML = ''; // Limpa o container antes de desenhar
            
            // Para cada fase no nosso "Banco de Dados Local"...
            studyPhases.forEach(phase => {
                const card = document.createElement('div');
                card.className = 'phase-card';
                card.innerHTML = `
                    <div class="phase-period">${phase.period}</div>
                    <h3 class="phase-title">${phase.title}</h3>
                    <p style="font-size:0.875rem; color:#57534e;">▶ Clique para explorar.</p>
                `;
                // Adiciona o evento de clique que abre o detalhe daquela fase específica
                card.addEventListener('click', () => showPhaseDetail(phase));
                grid.appendChild(card); // Adiciona o cartão pronto na tela
            });
        }

        // Preenche o painel de detalhes com a fase que o usuário clicou
        function showPhaseDetail(phase) {
            document.getElementById('detailTitle').textContent = phase.title + " (" + phase.period + ")";
            document.getElementById('detailFocus').innerHTML = "<strong>Foco:</strong> " + phase.focus;
            document.getElementById('detailRoutine').innerHTML = "<strong>Rotina:</strong> " + phase.routine;
            
            const goalsList = document.getElementById('detailGoals');
            goalsList.innerHTML = ''; // Limpa os itens anteriores
            
            // Cria um <li> para cada meta
            phase.goals.forEach(goal => {
                const li = document.createElement('li');
                li.textContent = goal;
                li.style.marginBottom = '0.5rem'; // Um pequeno espaçamento
                goalsList.appendChild(li);
            });

            // Mostra o painel (adicionando a classe 'active') e rola a tela até ele
            const container = document.getElementById('phaseDetailContainer');
            container.classList.add('active');
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Desenha a lista de tarefas (Checklist)
        function renderChecklist() {
            const container = document.getElementById('checklistContainer');
            container.innerHTML = ''; 
            
            // 1º Passo: Filtrar os dados. Se não for 'all', procuramos só o que o usuário pediu.
            let filteredData = checklistData;
            if (state.currentFilter !== 'all') {
                if (state.currentFilter === 'ti') {
                    filteredData = checklistData.filter(item => item.area === 'ti');
                } else {
                    filteredData = checklistData.filter(item => item.priority === state.currentFilter);
                }
            }

            // Se o filtro não retornar nada, mostra aviso amigável
            if (filteredData.length === 0) {
                container.innerHTML = '<p style="color:#78716c; padding:1rem;">Nenhum item encontrado para este filtro.</p>';
                return;
            }

            // 2º Passo: Criar o HTML para cada item filtrado
            filteredData.forEach(item => {
                const row = document.createElement('div');
                
                // Define a classe de cor baseada na "temperatura" (quente, morno, frio)
                let prioClass = `priority-${item.priority}`;
                let prioLabel = item.priority;

                // Verifica se este item específico já foi marcado pelo usuário
                const isCompleted = state.completedItems.has(item.id);
                // Se completado, adiciona uma classe CSS extra (que risca o texto)
                const completedClass = isCompleted ? 'item-completed' : '';

                row.className = `check-item ${prioClass} ${completedClass}`;
                
                row.innerHTML = `
                    <input type="checkbox" id="${item.id}" ${isCompleted ? 'checked' : ''}>
                    <div style="flex: 1;">
                        <label for="${item.id}">${item.title}</label>
                        <span class="item-meta">${item.area} • ${prioLabel}</span>
                    </div>
                `;

                // Adiciona o "ouvinte de eventos" para quando o usuário clicar no checkbox
                const checkbox = row.querySelector('input');
                checkbox.addEventListener('change', (e) => {
                    if (e.target.checked) {
                        state.completedItems.add(item.id); // Adiciona na "memória"
                    } else {
                        state.completedItems.delete(item.id); // Tira da "memória"
                    }
                    // Atualiza tudo que depende dos checks
                    updateProgress();
                    updateChart(); 
                    renderChecklist(); 
                });

                container.appendChild(row);
            });
            updateProgress(); // Sempre garante que a barra está sincronizada
        }

        // Calcula e atualiza a barra preta de progresso no final do checklist
        function updateProgress() {
            const total = checklistData.length;
            const completed = state.completedItems.size;
            // Evita divisão por zero. Arredonda o valor para não ter casas decimais longas
            const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
            
            document.getElementById('progressText').textContent = `${completed} de ${total} tópicos concluídos (${percentage}%)`;
            
            // A mágica acontece aqui: mudamos a propriedade CSS "width" inline pelo JS
            document.getElementById('progressBar').style.width = `${percentage}%`;
        }

        // 6. INICIALIZAÇÃO E EVENTOS DE CLIQUE GERAIS
        function setupInteractions() {
            // Botão "X" para fechar o painel de detalhes da fase
            document.getElementById('closeDetail').addEventListener('click', () => {
                document.getElementById('phaseDetailContainer').classList.remove('active');
            });

            // Lógica dos botões de Filtro do Checklist
            const filterBtns = document.querySelectorAll('.btn-filter');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    // Remove a classe 'active' de todos os botões
                    filterBtns.forEach(b => b.classList.remove('active'));
                    
                    // Adiciona a classe 'active' apenas no botão clicado
                    e.target.classList.add('active');
                    
                    // Atualiza a "memória" dizendo qual o filtro atual (ex: 'quente')
                    state.currentFilter = e.target.getAttribute('data-filter');
                    
                    // Manda desenhar a lista de novo usando o novo filtro
                    renderChecklist();
                });
            });
        }

        // Quando o navegador terminar de carregar o HTML básico, rodamos as funções de inicialização
        document.addEventListener('DOMContentLoaded', () => {
            updateChart();      // Inicializa o gráfico zerado
            renderPhases();     // Desenha as fases
            renderChecklist();  // Desenha o checklist
            setupInteractions();// Prepara os botões de clique
        });
