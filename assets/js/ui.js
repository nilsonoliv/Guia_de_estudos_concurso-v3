//Funções de renderização (renderFases, renderCharts)
//Cole as funções como renderRoadmap(), abrirModal(), etc.

//imports
import { estadoApp, dbRoadmap, dbEscada, dbChecklist } from './dataState.js';
import { showToast } from './utils.js';
import { renderProgressoGamificado, renderCharts } from './charts.js';



/* ============================================================================
 * 3. MÓDULO: UI & DOM (Lógica de Negócio)
 * Responsabilidade: Manipular o DOM baseado no estadoApp (Renderização).
 * Futuro: Extrair para `ui.js` ou divido por componentes.
 * ============================================================================ */

/**
 * Atualiza a data de início e recalcula o contador.
 */
export function atualizarDataInicio(e) { 
    estadoApp.dataInicio = e.target.value; 
    renderCountdown(); 
    if(window.salvarNaNuvem) window.salvarNaNuvem(); 
}

/**
 * Renderiza a contagem regressiva para a data da prova.
 */
export function renderCountdown() { 
    if (estadoApp.dataInicio) {
        document.getElementById('input-data-inicio').value = estadoApp.dataInicio; 
    }
    const dataAlvo = new Date(estadoApp.dataProva);
    const dataReferencia = estadoApp.dataInicio ? new Date(estadoApp.dataInicio) : new Date(); 
    
    dataReferencia.setHours(0,0,0,0); 
    dataAlvo.setHours(0,0,0,0);
                
    const el = document.getElementById('ui-countdown'); 
    
    if (dataReferencia >= dataAlvo) { 
        el.innerText = "Chegou o Dia!"; 
        el.style.color = "var(--accent-yellow)"; 
    } else { 
        el.innerText = Math.ceil(Math.abs(dataAlvo - dataReferencia) / 86400000) + " dias"; 
    }
}

/**
 * Renderiza o Roadmap e gerencia as fases.
 */
export function renderRoadmap() {
    const contA = document.getElementById('container-fases-ativas');
    const contC = document.getElementById('container-fases-concluidas');
    if(!contA) return;
    
    const ativas = dbRoadmap.filter(f => !estadoApp.fasesConcluidas.includes(f.id));
    const concluidas = dbRoadmap.filter(f => estadoApp.fasesConcluidas.includes(f.id));
    
    contA.innerHTML = ativas.map(f => `
        <div class="card-fase" style="border-left-color: var(--${f.color}-500, #3b82f6);">
            <div style="display:flex; justify-content:space-between;">
                <div style="font-size:0.75rem; font-weight:bold; opacity:0.6;">${f.meses}</div>
                <button class="btn-icon-acao btn-concluir-fase" onclick="concluirFase(${f.id})">
                    <i data-lucide="check-circle" style="width:20px;"></i>
                </button>
            </div>
            <h3 style="color: var(--primary)">${f.titulo}</h3>
            <h2 style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${f.objetivo}</h2>
            <button class="btn-abrir-planejamento" onclick="abrirModal(${f.id})">Ver Planejamento<i data-lucide="arrow-right" style="width:16px;"></i></button>
        </div>`
    ).join('');            
    
    if (concluidas.length > 0) {
        document.getElementById('wrapper-concluidas').style.display = 'block';
        contC.innerHTML = concluidas.map(f => `
            <div class="card-fase" style="border-left-color: var(--border-color); background: var(--bg-body); opacity: 0.8;">
                <div style="display:flex; justify-content:space-between;">
                    <div style="font-size:0.75rem; font-weight:bold; opacity:0.6;"><strike>${f.meses}</strike></div>
                    <button class="btn-icon-acao btn-desfazer-fase" onclick="desfazerFase(${f.id})">
                        <i data-lucide="rotate-ccw" style="width:16px;"></i>
                    </button>
                </div>
                <h3 style="color: var(--text-muted)"><strike>${f.titulo}</strike></h3>
                <div style="font-size: 0.85rem; color: var(--success); font-weight: bold; margin-top: 8px; display:flex; align-items:center; gap:4px;">
                    <i data-lucide="check" style="width:14px;"></i> Fase Superada
                </div>
            </div>`
        ).join('');
    } else {
        document.getElementById('wrapper-concluidas').style.display = 'none';
    }
    lucide.createIcons();
}

export function concluirFase(id) { 
    estadoApp.fasesConcluidas.push(id); 
    renderRoadmap(); 
    showToast("Fase superada!"); 
    if(window.salvarNaNuvem) window.salvarNaNuvem(); 
}

export function desfazerFase(id) { 
    estadoApp.fasesConcluidas = estadoApp.fasesConcluidas.filter(fid => fid !== id); 
    renderRoadmap(); 
    showToast("Ação desfeita."); 
    if(window.salvarNaNuvem) window.salvarNaNuvem(); 
}

export function abrirModal(id) {
    const f = dbRoadmap.find(x => x.id === id);
    document.getElementById('modal-fase-titulo').textContent = f.titulo; 
    document.getElementById('modal-fase-badge').textContent = f.meses; 
    document.getElementById('modal-fase-objetivo').textContent = f.objetivo;
    document.getElementById('modal-semana-container').innerHTML = f.semana.map(d => `<div class="dia-item"><div class="dia-nome">${d.dia}</div><div class="dia-materia">${d.mat}</div></div>`).join('');
    document.getElementById('modal-metas-container').innerHTML = f.metas.map(m => `<li style="display:flex; gap:10px; margin-bottom:8px; font-size:0.9rem;"><i data-lucide="check-circle-2" style="width:16px; color:#22c55e;"></i> ${m}</li>`).join('');
    lucide.createIcons({ root: document.getElementById('modal-roadmap') });
    const m = document.getElementById('modal-roadmap'); 
    m.style.display = 'flex'; 
    setTimeout(() => m.classList.add('active'), 10); 
    document.body.style.overflow = 'hidden';
}

export function fecharModal() { 
    const m = document.getElementById('modal-roadmap'); 
    m.classList.remove('active'); 
    setTimeout(() => { m.style.display = 'none'; document.body.style.overflow = ''; }, 300); 
}

export function fecharModalFora(e) { 
    if(e.target.id === 'modal-roadmap') fecharModal(); 
}

/**
 * Escada de Conhecimento e Filtros.
 */
export let escadaExpandida = 1; // Variável de controle visual

export function filtrarEscada(areaID) {
    const cards = document.querySelectorAll('.lp, .ti, .mt');
    cards.forEach(card => {
        if (areaID === 'all') {
            card.style.display = 'block';
        } else if (areaID === 'ti') {
            card.style.display = 'block'; 
            document.querySelectorAll('.lp, .mt').forEach(c => c.style.display = 'none'); 
        } else if (areaID === 'lp') {
            card.style.display = 'block'; 
            document.querySelectorAll('.ti, .mt').forEach(c => c.style.display = 'none'); 
        } else if (areaID === 'mt') { 
            card.style.display = 'block'; 
            document.querySelectorAll('.ti, .lp').forEach(c => c.style.display = 'none'); 
        } else {
            card.style.display = 'none';
        }          
        estadoApp.filtroEscada = areaID; 
    });
}

export function manterEscada() {
    const cards = document.querySelectorAll('.lp, .ti, .mt');
    cards.forEach(card => {
        if (estadoApp.filtroEscada === 'all') {
            card.style.display = 'block';
        } else if (estadoApp.filtroEscada === 'ti') {
            card.style.display = 'block'; 
            document.querySelectorAll('.lp, .mt').forEach(c => c.style.display = 'none'); 
        } else if (estadoApp.filtroEscada === 'lp') {
            card.style.display = 'block'; 
            document.querySelectorAll('.ti, .mt').forEach(c => c.style.display = 'none'); 
        } else if (estadoApp.filtroEscada === 'mt') { 
            card.style.display = 'block'; 
            document.querySelectorAll('.ti, .lp').forEach(c => c.style.display = 'none'); 
        } else {
            card.style.display = 'none';
        }          
    });
}

export function renderEscada() { 
    const container = document.getElementById('container-escada'); 
    if(!container) return; 
    
    let concluidos = 0; 
    container.innerHTML = ''; 
    
    dbEscada.forEach(nivelFix => {      
        const status = (estadoApp.escada.find(n => n.id === nivelFix.id) || {}).status || 'bloqueado'; 
        if (status === 'concluido') concluidos++;  
        
        const isExpandido = escadaExpandida === nivelFix.id ? 'expandido' : '';  
        container.innerHTML += `
            <div class="timeline-item ${nivelFix.tipo} ${status} ${isExpandido}">
                <div class="timeline-node">
                    ${status==='concluido'?'<i data-lucide="check" style="width:18px;"></i>':(status==='bloqueado'?'<i data-lucide="lock" style="width:14px;"></i>':nivelFix.id)}
                </div>
                <div class="timeline-content ${nivelFix.tipo}" onclick="toggleEscada(${nivelFix.id})">
                    <div class="timeline-header">
                        <div style="display:flex; align-items:center; gap:8px;">
                            <div style="font-size:1.5rem; font-weight:bold;">${nivelFix.titulo}</div>
                            ${status==='concluido'?'<span class="badge-trophy"><i data-lucide="award" style="width:12px;"></i> Dominado</span>':''}
                        </div>
                        <i data-lucide="chevron-${isExpandido?'up':'down'}" style="width:20px;"></i>
                    </div>
                    <div class="timeline-body">
                        <div style="font-size:1.2rem; margin-bottom:1rem; color:var(--text-muted);">${nivelFix.desc}</div>
                        <div style="margin-bottom:1rem; display:flex; gap:6px; flex-wrap:wrap;">
                            ${nivelFix.topicos.map(t=>`<span class="tag-ti">${t}</span>`).join('')}
                        </div>
                        ${status==='ativo'?`<button class="btn-concluir-nivel" onclick="concluirEscada(event, ${nivelFix.id})"><i data-lucide="award" style="width:16px;"></i> Concluir Nível</button>`:''}
                    </div>
                </div>
            </div>`; 
        manterEscada();
    }); 
    
    document.getElementById('barra-progresso-escada').style.width = `${(concluidos/dbEscada.length)*100}%`; 
    lucide.createIcons();  
}  

export function toggleEscada(id) { 
    if((estadoApp.escada.find(n=>n.id===id)||{}).status!=='bloqueado'){ 
        escadaExpandida = escadaExpandida===id?null:id; 
        renderEscada(); 
    } 
} 

export function concluirEscada(e, id) { 
    e.stopPropagation(); 
    const c = estadoApp.escada.find(n=>n.id===id); 
    if(c) c.status='concluido'; 
    const nx = estadoApp.escada.find(n=>n.id===id+1); 
    if(nx){ 
        nx.status='ativo'; 
        escadaExpandida=nx.id;
    } 
    renderEscada(); 
    showToast("Nível Dominado!"); 
    if(window.salvarNaNuvem) window.salvarNaNuvem(); 
} 

/**
 * Checklist Integrado
 */
export function renderChecklist() {
    const container = document.getElementById('container-checklist'); 
    if(!container) return;
    
    container.innerHTML = dbChecklist.map(grupo => {
        const tConcluidos = grupo.itens.map(i=>i.id).every(id=>estadoApp.checklist.includes(id));
        return `
            <div class="checklist-group">
                <div class="checklist-header">
                    <span>${grupo.areaNome}</span> 
                    ${tConcluidos?'<span class="badge-trophy"><i data-lucide="star" style="width:12px;"></i> Bloco Fechado</span>':''}
                </div>
                <div>
                    ${grupo.itens.map(item => `
                        <div class="checklist-item ${estadoApp.checklist.includes(item.id)?'checked':''}" onclick="toggleChecklist('${item.id}')">
                            <div class="checklist-checkbox"><i data-lucide="check" style="width:16px;"></i></div>
                            <div class="checklist-text">${item.text}</div>
                            <span class="badge-priority priority-${item.priority}">${item.priority}</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    }).join('');
    lucide.createIcons();
}

export function toggleChecklist(id) {
    if(estadoApp.checklist.includes(id)) {
        estadoApp.checklist = estadoApp.checklist.filter(i=>i!==id);
    } else { 
        estadoApp.checklist.push(id); 
        showToast("Tópico dominado!"); 
    }
    renderChecklist(); 
    renderProgressoGamificado(); 
    if(window.salvarNaNuvem) window.salvarNaNuvem();
}

/**
 * Streak (Ofensiva diária)
 */
export function renderStreak() {
    document.getElementById('ui-streak-count').querySelector('span').innerText = estadoApp.streak.count;
    const icon = document.getElementById('ui-streak-icon');
    if(estadoApp.streak.count > 0) { 
        icon.classList.add('streak-active'); 
        icon.style.color = '#f97316'; 
    } else { 
        icon.classList.remove('streak-active'); 
        icon.style.color = 'currentColor'; 
    }
}

export function marcarMetaDiaria() { 
    const hj = new Date().toDateString();
    console.log( "const hj é igual a: " + hj);
    
    if(estadoApp.streak.lastDate === hj) { 
        showToast("Fogo já alimentado hoje!", false); 
        return; 
    } 
    
    const ont = new Date(); 
    console.log( "const ont é igual a: " + ont);
    
    ont.setDate(ont.getDate() - 1); 
    console.log( "const ont.setDate é igual a: " + ont.setDate(ont.getDate() - 1));
    
    console.log( "estadoApp.streak.count antes de entrar no if é igual a: " + estadoApp.streak.count);
    
    if(estadoApp.streak.lastDate === ont.toDateString()) {
        estadoApp.streak.count++; 
        console.log( "estadoApp.streak.count depois de entrar no if é igual a: " + estadoApp.streak.count);
    } else {
        estadoApp.streak.count = 1; 
    }
    
    console.log( "estadoApp.streak.count depois do else é igual a: " + estadoApp.streak.count);

    estadoApp.streak.lastDate = hj;         
    console.log( "estadoApp.streak.lastDate é igual a: " + estadoApp.streak.lastDate);

    renderStreak(); 
    showToast("🔥 Disciplina blindada!"); 
    if(window.salvarNaNuvem) window.salvarNaNuvem();  
}

/**
 * SWOT (Forças, Fraquezas, Táticas)
 */
export function renderSwot() {
    const container = document.getElementById('container-swot'); 
    if(!container) return;
    
    const rL = (t, a) => `
        <ul class="swot-list">
            ${a.map((i, idx) => `
                <li class="swot-item-row">
                    <span class="swot-item-text">${i}</span>
                    <button class="swot-btn-del" onclick="removerSwot('${t}', ${idx})">
                        <i data-lucide="x" style="width:14px;"></i>
                    </button>
                </li>
            `).join('')}
        </ul>
        <div class="swot-input-group">
            <input type="text" id="input-swot-${t}" class="swot-input" placeholder="Adicionar..." onkeypress="if(event.key==='Enter') adicionarSwot('${t}')">
            <button class="swot-btn-add" onclick="adicionarSwot('${t}')">
                <i data-lucide="plus" style="width:16px;"></i>
            </button>
        </div>`;
        
    container.innerHTML = `
        <div class="swot-quadrant swot-s"><div class="swot-title"><i data-lucide="trending-up" style="color:#16a34a;"></i> Forças</div>${rL('forcas', estadoApp.swot.forcas)}</div>
        <div class="swot-quadrant swot-w"><div class="swot-title"><i data-lucide="trending-down" style="color:#dc2626;"></i> Fraquezas</div>${rL('fraquezas', estadoApp.swot.fraquezas)}</div>
        <div class="swot-quadrant swot-o" style="grid-column: 1 / -1;"><div class="swot-title"><i data-lucide="target" style="color:#2563eb;"></i> Táticas (POTS)</div>${rL('taticas', estadoApp.swot.taticas)}</div>`;
    lucide.createIcons();
}

export function adicionarSwot(t) { 
    const v = document.getElementById(`input-swot-${t}`).value.trim(); 
    if(v) { 
        estadoApp.swot[t].push(v); 
        renderSwot(); 
        if(window.salvarNaNuvem) window.salvarNaNuvem(); 
    } 
}

export function removerSwot(t, idx) { 
    estadoApp.swot[t].splice(idx, 1); 
    renderSwot(); 
    if(window.salvarNaNuvem) window.salvarNaNuvem(); 
}

/**
 * Configuração e Navegação de Tabs
 */
export function configurarTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
            btn.classList.add('active'); 
            const t = btn.getAttribute('data-target'); 
            document.getElementById(t).classList.add('active');
            if(t === 'tab-analytics') setTimeout(renderCharts, 50);
            if(t === 'tab-progresso') setTimeout(renderProgressoGamificado, 50); // Redesenha gráfico do Doughnut
        });
    });
}
