    // --- 1. STATE MANAGEMENT ---
        let estadoApp = {
            dataInicio: '', dataProva: '2028-05-01', fasesConcluidas: [], 
            streak: { count: 0, lastDate: null }, checklist: [], 
            escada: [{ id: 1, status: 'ativo' }, { id: 2, status: 'bloqueado' }, { id: 3, status: 'bloqueado' }, { id: 4, status: 'bloqueado' }],
            simulados: [{ data: "Diagnóstico", nota: 35 }],
            swot: { forcas: ["Lógica de programação"], fraquezas: ["Java"], taticas: ["Resolver questões"] }
        };

        // --- 2. BANCOS DE DADOS ---
        const dbRoadmap = [
            { id: 1, titulo: "F1: Alfabetização e Setup", meses: "Meses 1-3", color: "green", objetivo: "Lógica e Preparação do Ambiente. Entender a lógica por trás da computação.", semana: [{dia: "Seg", mat: "TI (Lógica)"},{dia: "Ter", mat: "Português"}, {dia: "Qua", mat: "TI (Lógica)"}, {dia: "Qui", mat: "Português"}, {dia: "Sex", mat: "TI (Lógica)"}], metas: ["Instalar e configurar VS Code e Git/GitHub.", "Resolver 150 questões de Lógica (Teste de Mesa).", "Iniciar Deck de Anki com classes de palavras.", "Checkpoint: Acertar >70% em lógica."] },
            { id: 2, titulo: "F2: Estruturas e Persistência", meses: "Meses 4-6", color: "indigo", objetivo: "Onde os dados moram. Dominar a organização da informação.", semana: [{dia: "Seg", mat: "TI (Dados/SQL)"},{dia: "Ter", mat: "Português"}, {dia: "Qua", mat: "TI (Dados/SQL)"}, {dia: "Qui", mat: "Português"}, {dia: "Sex", mat: "TI (Dados/SQL)"}], metas: ["Criar DB local e realizar CRUD.", "Dominar 1ª, 2ª e 3ª Formas Normais.", "Mapear Pilhas/Filas com exemplos bancários.", "Alimentar Anki com regras de Crase e Pontuação."] },
            { id: 3, titulo: "F3: Codificação Core e Finanças", meses: "Meses 7-9", color: "purple", objetivo: "Java e Juros. Codificação orientada à banca e valor do dinheiro.", semana: [{dia: "Seg", mat: "TI (Java)"},{dia: "Ter", mat: "Mat. Financeira"}, {dia: "Qua", mat: "TI (Java)"}, {dia: "Qui", mat: "Mat. Financeira"}, {dia: "Sex", mat: "TI (Dados/SQL)"}], metas: ["Implementar sistema Conta Corrente em Java (POO).", "Resolver 100 questões de Juros Compostos.", "Dominar SQL Queries com 3+ JOINS.", "Checkpoint: Simulado Java Core + SQL."] },
            { id: 4, titulo: "F4: Inteligência e Finanças II", meses: "Meses 10-12", color: "blue", objetivo: "Python e Amortização. Ciência de dados aplicada.", semana: [{dia: "Seg", mat: "TI (Python)"},{dia: "Ter", mat: "Mat. Financeira"}, {dia: "Qua", mat: "TI (Python)"}, {dia: "Qui", mat: "Mat. Financeira"}, {dia: "Sex", mat: "TI (Python)"}], metas: ["Criar script Python lendo CSV bancário (Pandas).", "Construir planilhas PRICE e SAC manualmente.", "Anki com Estatística Descritiva.", "Vocabulário técnico em Inglês."] },
            { id: 5, titulo: "F5: Engenharia e Nuvem", meses: "Meses 13-15", color: "indigo", objetivo: "Arquitetura Moderna e Probabilidade. Escalabilidade de sistemas.", semana: [{dia: "Seg", mat: "TI (Cloud/Arquitetura)"},{dia: "Ter", mat: "Probabilidade e Estatística"}, {dia: "Qua", mat: "TI (Cloud/Arquitetura)"}, {dia: "Qui", mat: "Probabilidade e Estatística"}, {dia: "Sex", mat: "TI (Cloud/Arquitetura)"}], metas: ["Desenhar diagrama de Microsserviços para PIX.", "Resolver 80 questões de Probabilidade Condicional.", "Diferenciar IaaS, PaaS, SaaS.", "Estudo de APIs REST (Verbos/Status Codes)."] },
            { id: 6, titulo: "F6: Governança e Ética", meses: "Meses 16-18", color: "green", objetivo: "Compliance e Gestão. Normas éticas e conformidade.", semana: [{dia: "Seg", mat: "TI (Agilidade/Gestão)"},{dia: "Ter", mat: "Ética e Compliance"}, {dia: "Qua", mat: "TI (Agilidade/Gestão)"}, {dia: "Qui", mat: "Ética e Compliance"}, {dia: "Sex", mat: "TI (Agilidade/Gestão)"}], metas: ["Fichar LGPD focando em sanções e bases legais.", "Memorizar ritos do Scrum e Kanban.", "Resolver 100 questões sobre Lavagem de Dinheiro.", "Checkpoint: Simulado Governança (ITIL/COBIT)."] },
            { id: 7, titulo: "F7: Estudo Reverso e Redação", meses: "Meses 19-21", color: "blue", objetivo: "Velocidade e Escrita. Correção de lacunas residuais.", semana: [{dia: "Seg", mat: "TI (Questões)"},{dia: "Ter", mat: "Básicas"}, {dia: "Qua", mat: "TI (Questões)"}, {dia: "Qui", mat: "Redação"}, {dia: "Sex", mat: "TI (Questões)"}], goals: ["1 redação/semana sobre tecnologia/bancos.", "50 questões/dia via Estudo Reverso.", "Revisar Deck Anki Master (erros).", "Baixar tempo médio por questão para 2 min."] },
            { id: 8, titulo: "F8: Simulação Total e Véspera", meses: "Meses 22-24", color: "green", objetivo: "Ajuste Fino e Psicológico. Memorização de curto prazo.", semana: [{dia: "Seg", mat: "Revisão Ativa"}, {dia: "Qua", mat: "Revisão Ativa"}, {dia: "Qui", mat: "Revisão Ativa"}, {dia: "Sex", mat: "Simulado Geral"}], goals: ["10 simulados completos com gabarito.", "Revisar Leitura Suja (Prazos/Multas).", "Média de acertos em TI > 85%.", "Simular dia da prova (tempo/alimentação)."] }                
        ];

        const dbEscada = [
            { id: 1, titulo: "Nível 1: Alicerce", desc: "A base fundamental.", topicos: ["Lógica", "Estrutura Dados"] },
            { id: 2, titulo: "Nível 2: Coração da Prova", desc: "Onde a banca ataca com código.", topicos: ["Java SE", "SQL", "Python"] },
            { id: 3, titulo: "Nível 3: O Mundo Web", desc: "Sistemas modernos.", topicos: ["REST", "Microsserviços"] },
            { id: 4, titulo: "Nível 4: Avançado & Decoreba", desc: "Diferenciais.", topicos: ["Governança", "Cloud"] }
        ];

        // CHECKLIST INTEGRADO DO ARQUIVO base.html Mapeado por Grupos
        const dbChecklist = [
            { areaNome: "TI - Desenvolvimento e Bancos", areaID: 'ti', itens: [
                { id: 'c1', text: 'Bancos de Dados - SQL: Select, Insert, Update, Delete, Joins', priority: 'quente' },
                { id: 'c2', text: 'Bancos de Dados: Modelagem Relacional e Normalização', priority: 'quente' },
                { id: 'c3', text: 'Java SE 21: Sintaxe, Herança, Polimorfismo, Interfaces', priority: 'quente' },
                { id: 'c4', text: 'Python 3.9: Bibliotecas Pandas e NumPy', priority: 'quente' },
                { id: 'c13', text: 'Estrutura de Dados: Busca Binária, Ordenação', priority: 'morno' },
                { id: 'c34', text: 'Estrutura de Dados: Pilha, Fila, Lista Encadeada', priority: 'morno' }
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
                { id: 'c22', text: 'Web Services (UDDI, WSDL, SOAP)', priority: 'frio' },
                { id: 'c24', text: 'Qualidade de Software: CMMI e MPS-BR', priority: 'frio' }
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
                { id: 'c20', text: 'Inglês: Vocabulário e Interpretação', priority: 'morno' }
            ]},
            { areaNome: "Comportamentos Digitais", areaID: 'digital', itens: [
                { id: 'c27', text: 'Mindset Ágil, OKRs, Pensamento Computacional', priority: 'quente' },
                { id: 'c53', text: 'Inteligência Emocional e Resolução de Problemas', priority: 'morno' },
                { id: 'c28', text: 'Design Thinking e Ciência de Dados', priority: 'morno' },
                { id: 'c29', text: 'Sustentabilidade (ODS)', priority: 'frio' }
            ]}
        ];

        let chartEvolucaoInstance = null, progressoChartInstance = null, escadaExpandida = 1;

        // --- 3. MOTORES DE RENDERIZAÇÃO ---
        function atualizarDataInicio(e) { estadoApp.dataInicio = e.target.value; renderCountdown(); if(window.salvarNaNuvem) window.salvarNaNuvem(); }
        function renderCountdown() {
            if (estadoApp.dataInicio) document.getElementById('input-data-inicio').value = estadoApp.dataInicio;
            const dataAlvo = new Date(estadoApp.dataProva), dataHoje = new Date();
            dataHoje.setHours(0,0,0,0); dataAlvo.setHours(0,0,0,0);
            const el = document.getElementById('ui-countdown');
            if (dataHoje >= dataAlvo) { el.innerText = "Chegou o Dia!"; el.style.color = "var(--accent-yellow)"; } 
            else { el.innerText = Math.ceil(Math.abs(dataAlvo - dataHoje) / 86400000) + " dias"; }
        }

        function renderRoadmap() {
            const contA = document.getElementById('container-fases-ativas'), contC = document.getElementById('container-fases-concluidas');
            if(!contA) return;
            const ativas = dbRoadmap.filter(f => !estadoApp.fasesConcluidas.includes(f.id)), concluidas = dbRoadmap.filter(f => estadoApp.fasesConcluidas.includes(f.id));
            contA.innerHTML = ativas.map(f => `<div class="card-fase" style="border-left-color: var(--${f.color}-500, #3b82f6);"><div style="display:flex; justify-content:space-between;"><div style="font-size:0.75rem; font-weight:bold; opacity:0.6;">${f.meses}</div><button class="btn-icon-acao btn-concluir-fase" onclick="concluirFase(${f.id})"><i data-lucide="check-circle" style="width:20px;"></i></button></div><h3 style="color: var(--primary)">${f.titulo}</h3><button class="btn-abrir-planejamento" onclick="abrirModal(${f.id})">Ver Planejamento <i data-lucide="arrow-right" style="width:16px;"></i></button></div>`).join('');
            if (concluidas.length > 0) {
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

        function renderEscada() {
            const container = document.getElementById('container-escada'); if(!container) return;
            let concluidos = 0; container.innerHTML = '';
            dbEscada.forEach(nivelFix => {
                const status = (estadoApp.escada.find(n => n.id === nivelFix.id) || {}).status || 'bloqueado';
                if (status === 'concluido') concluidos++;
                const isExpandido = escadaExpandida === nivelFix.id ? 'expandido' : '';
                container.innerHTML += `<div class="timeline-item ${status} ${isExpandido}"><div class="timeline-node">${status==='concluido'?`<i data-lucide="check" style="width:18px;"></i>`:(status==='bloqueado'?`<i data-lucide="lock" style="width:14px;"></i>`:nivelFix.id)}</div><div class="timeline-content" onclick="toggleEscada(${nivelFix.id})"><div class="timeline-header"><div style="display:flex; align-items:center; gap:8px;"><div style="font-weight:bold;">${nivelFix.titulo}</div>${status==='concluido'?'<span class="badge-trophy"><i data-lucide="award" style="width:12px;"></i> Dominado</span>':''}</div><i data-lucide="chevron-${isExpandido?'up':'down'}" style="width:20px;"></i></div><div class="timeline-body"><div style="font-size:0.9rem; margin-bottom:1rem; color:var(--text-muted);">${nivelFix.desc}</div><div style="margin-bottom:1rem; display:flex; gap:6px; flex-wrap:wrap;">${nivelFix.topicos.map(t=>`<span class="tag-ti">${t}</span>`).join('')}</div>${status==='ativo'?`<button class="btn-concluir-nivel" onclick="concluirEscada(event, ${nivelFix.id})"><i data-lucide="award" style="width:16px;"></i> Concluir Nível</button>`:''}</div></div></div>`;
            });
            document.getElementById('barra-progresso-escada').style.width = `${(concluidos/dbEscada.length)*100}%`;
            lucide.createIcons();
        }
        function toggleEscada(id) { if((estadoApp.escada.find(n=>n.id===id)||{}).status!=='bloqueado'){ escadaExpandida = escadaExpandida===id?null:id; renderEscada(); } }
        function concluirEscada(e, id) { e.stopPropagation(); const c = estadoApp.escada.find(n=>n.id===id); if(c) c.status='concluido'; const nx = estadoApp.escada.find(n=>n.id===id+1); if(nx){ nx.status='ativo'; escadaExpandida=nx.id;} renderEscada(); showToast("Nível Dominado!"); if(window.salvarNaNuvem) window.salvarNaNuvem(); }

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
            const hj = new Date().toDateString(); if(estadoApp.streak.lastDate === hj) { showToast("Fogo já alimentado hoje!", false); return; }
            const ont = new Date(); ont.setDate(ont.getDate() - 1);
            if(estadoApp.streak.lastDate === ont.toDateString()) estadoApp.streak.count++; else estadoApp.streak.count = 1;
            estadoApp.streak.lastDate = hj; renderStreak(); showToast("🔥 Disciplina blindada!"); if(window.salvarNaNuvem) window.salvarNaNuvem();
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

        // INIT
        document.addEventListener('DOMContentLoaded', () => { renderCountdown(); renderRoadmap(); renderEscada(); renderChecklist(); renderProgressoGamificado(); renderStreak(); renderSwot(); configurarTabs(); lucide.createIcons(); });
  