/**
 * ============================================================================
 * PROJETO APROVAÇÃO TI BANCÁRIA - MAIN.JS (PREPARADO PARA MODULARIZAÇÃO)
 * ============================================================================
 * * Este arquivo foi reorganizado em blocos lógicos temáticos para facilitar
 * a extração manual para módulos ES6 (ex: export/import) futuramente.
 * * ÍNDICE DE MÓDULOS:
 * 1. STATE & DATA (Estado global e banco de dados)
 * 2. UTILS (Funções utilitárias e notificações)
 * 3. UI & DOM (Renderização de interface e interação)
 * 4. CHARTS (Gráficos e Analytics)
 * 5. SYNC & BACKUP (Nuvem, Firebase e LocalStorage)
 * 6. INIT (Inicialização do ciclo de vida da aplicação)
 * ============================================================================
 */

//IMPORTS (Futuro: Importar módulos ES6 aqui, ex: import { estadoApp, dbRoadmap } from './dataState.js';)
import * as UI from './ui.js';
import * as Charts from './charts.js';
import * as Sync from './sync.js';
import { estadoApp, dbRoadmap, dbEscada, dbChecklist } from './dataState.js';
import { atualizarDataInicio, renderCountdown, renderRoadmap, concluirFase, desfazerFase, abrirModal, fecharModal, fecharModalFora, escadaExpandida, filtrarEscada, manterEscada, renderEscada, toggleEscada, concluirEscada, renderChecklist, toggleChecklist, renderStreak, marcarMetaDiaria, renderSwot, adicionarSwot, removerSwot, configurarTabs } from './ui.js';
/*não importe as variaeis pq eu acho que nap precisa*/import { renderProgressoGamificado, renderCharts, inserirSimulado } from './charts.js';
import { aplicarEstadoApp, exportarJSON, importarJSON, } from './sync.js';
import { showToast } from './utils.js';


// 1. Resolver o problema do HTML (Tornar as funções globais)
window.marcarMetaDiaria = UI.marcarMetaDiaria;
window.atualizarDataInicio = UI.atualizarDataInicio;
window.filtrarEscada = UI.filtrarEscada;
window.inserirSimulado = Charts.inserirSimulado;
window.exportarJSON = Sync.exportarJSON;
window.importarJSON = Sync.importarJSON;
// ... faça isso para todas as funções que estão nos 'onclick' do HTML

// 2. Inicialização
document.addEventListener('DOMContentLoaded', () => { 
    UI.renderCountdown(); 
    UI.renderRoadmap(); 
    UI.renderEscada(); 
    UI.renderChecklist(); 
    Charts.renderProgressoGamificado(); 
    UI.renderStreak(); 
    UI.renderSwot(); 
    UI.configurarTabs(); 
    lucide.createIcons(); 
});


/* ============================================================================
 * 6. MÓDULO: INIT (Inicialização)
 * Responsabilidade: Iniciar a renderização principal após o carregamento do DOM.
 * Futuro: Extrair para `app.js` ou manter em `main.js`.
 * ============================================================================ */

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