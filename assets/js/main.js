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

// 1. MAPEAMENTO PARA ESCOPO GLOBAL (Resolve os 'onclick' do HTML)
// UI e Eventos
window.marcarMetaDiaria = UI.marcarMetaDiaria;
window.atualizarDataInicio = UI.atualizarDataInicio;
window.filtrarEscada = UI.filtrarEscada;
window.concluirFase = UI.concluirFase;
window.desfazerFase = UI.desfazerFase;
window.abrirModal = UI.abrirModal;
window.fecharModal = UI.fecharModal;
window.fecharModalFora = UI.fecharModalFora;
window.toggleEscada = UI.toggleEscada;
window.concluirEscada = UI.concluirEscada;
window.toggleChecklist = UI.toggleChecklist;
window.adicionarSwot = UI.adicionarSwot;
window.removerSwot = UI.removerSwot;

// Gráficos e Dados
window.inserirSimulado = Charts.inserirSimulado;

// Backup e Sincronização
window.exportarJSON = Sync.exportarJSON;
window.importarJSON = Sync.importarJSON;

// 2. INICIALIZAÇÃO ÚNICA DA APLICAÇÃO
document.addEventListener('DOMContentLoaded', () => { 
    console.log("🚀 Sistema Modular Iniciado");
    
    // Renderiza todos os componentes iniciais
    UI.renderCountdown(); 
    UI.renderRoadmap(); 
    UI.renderEscada(); 
    UI.renderChecklist(); 
    UI.renderStreak(); 
    UI.renderSwot(); 
    UI.configurarTabs(); 
    
    // Inicializa gráficos
    Charts.renderProgressoGamificado(); 
    
    // Ativa ícones do Lucide
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