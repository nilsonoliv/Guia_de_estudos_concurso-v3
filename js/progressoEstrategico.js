
       
            /*
  


💡 Dicas de Mentoria:

A Regra do 70/20/10: Dedique 70% do tempo à prática, 20% à teoria e 10% à revisão.

Foco Inicial: Como o plano agora tem 8 blocos, tente não avançar para o próximo sem completar um pequeno projeto prático no bloco atual.

Transição Lógica: A separação dos Bancos de Dados (Bloco 3) serve para que você aprenda a estruturar dados antes de tentar programar sistemas complexos no Bloco 5.
        

*/


/*
💡 Dicas do Mentor:

Ciclo de Revisão: Para cada 3 tópicos avançados, tire um dia para revisar o primeiro bloco.

Prática em Matemática: Não use calculadora. No dia da prova, seu cérebro é sua única ferramenta.

Leitura da Lei Seca: Para os tópicos de Compliance, leia o texto da lei original além dos resumos.
            */ 
/*

# ⚡ ORDEM RESUMIDA (MAPA RÁPIDO)

1. Interpretação de texto
2. Tipologia textual
3. Coesão e coerência
4. Vocabulário (PT + EN)
5. Ortografia + Acentuação
6. Sintaxe completa
7. Concordância + Regência
8. Pontuação + Crase
9. Argumentação
10. Redação
11. Inglês para leitura
12. Questões + simulados


*/
   


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
