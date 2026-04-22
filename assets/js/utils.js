/* ============================================================================
 * 2. MÓDULO: UTILS
 * Responsabilidade: Funções auxiliares genéricas para a UI.
 * Futuro: Extrair para `utils.js`.
 * ============================================================================ */


/**
 * Exibe um toast (notificação flutuante) para o usuário.
 */
export function showToast(msg, err = false) { 
    let c = document.getElementById('toast-container'); 
    if(!c) { 
        c = document.createElement('div'); 
        c.id = 'toast-container'; 
        document.body.appendChild(c); 
    } 
    const t = document.createElement('div'); 
    t.className = `toast ${err ? 'error' : ''}`; 
    t.innerHTML = `<span>${msg}</span>`; 
    c.appendChild(t); 
    
    setTimeout(() => { 
        t.style.animation = 'fadeOut 0.3s forwards'; 
        setTimeout(() => t.remove(), 300); 
    }, 3000); 
}

