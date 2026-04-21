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