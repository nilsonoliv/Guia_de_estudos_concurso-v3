/* ============================================================================
 * 5. MÓDULO: SYNC & BACKUP
 * Responsabilidade: Sincronizar com Firebase e realizar Backup Local.
 * Futuro: Extrair para `sync.js` (ou `firebase.js` dependendo da config).
 * ============================================================================ */

//IMPORTS
import { estadoApp } from './dataState.js';
import { showToast } from './utils.js';
import * as UI from './ui.js';
import * as Charts from './charts.js';

export function aplicarEstadoApp(d) { 
    // Atualiza o conteúdo do objeto sem mudar a referência (Boas práticas ES6)
    Object.assign(estadoApp, d); 
    
    // Redesenha a interface completa com os novos dados importados
    UI.renderCountdown(); 
    UI.renderRoadmap(); 
    UI.renderEscada(); 
    UI.renderChecklist(); 
    UI.renderStreak(); 
    UI.renderSwot(); 
    Charts.renderProgressoGamificado(); 
    
    // Se estiver na aba de analytics, redesenha o gráfico de linha
    const tabAnalytics = document.getElementById('tab-analytics');
    if(tabAnalytics && tabAnalytics.classList.contains('active')) {
        Charts.renderCharts();
    }
}

export async function exportarJSON() {
    try {
        if (!window.showSaveFilePicker) {
            // fallback compatível
            const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(estadoApp));
            const a = document.createElement('a');
            a.setAttribute("href", str);
            a.setAttribute("download", "plano.json");
            a.click();
            showToast("Backup baixado (modo compatível)");
            return;
        }

        const handle = await window.showSaveFilePicker({
            suggestedName: "plano.json",
            types: [{ description: "Arquivo JSON", accept: { "application/json": [".json"] } }]
        });

        const writable = await handle.createWritable();
        await writable.write(JSON.stringify(estadoApp, null, 2));
        await writable.close();

        showToast("Backup salvo com sucesso!");

    } catch (err) {
        console.log("Erro ou cancelamento:", err);
        if (err.name === "AbortError") {
            showToast("Operação cancelada.");
        } else {
            showToast("Erro ao salvar backup.", true);
        }
    }
}
        
export function importarJSON(e) { 
    const f = e.target.files[0]; 
    if(!f) return; 
    const r = new FileReader(); 
    r.onload = function(ev) { 
        try { 
            aplicarEstadoApp(JSON.parse(ev.target.result)); 
            showToast("Restaurado!"); 
        } catch(err) { 
            showToast("Inválido.", true); 
        } 
    }; 
    r.readAsText(f); 
    e.target.value = ''; 
}

// Configuração assíncrona e importação do Firebase
export const initFirebase = (async () => {
    try {
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'); 
        const { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js'); 
        const { getFirestore, doc, setDoc, getDoc } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null; 
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        
        if(firebaseConfig) {
            const app = initializeApp(firebaseConfig); 
            const auth = getAuth(app); 
            const db = getFirestore(app);
            
            if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                await signInWithCustomToken(auth, __initial_auth_token); 
            } else {
                await signInAnonymously(auth);
            }
            
            onAuthStateChanged(auth, async (user) => {
                const statusEl = document.getElementById('cloud-status');
                if (user) {
                    statusEl.innerHTML = '<span style="color: var(--success)">● Conectado (Auto-Sync)</span>';
                    window.salvarNaNuvem = async () => await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'appData', 'state'), estadoApp);
                    window.carregarDaNuvem = async () => { 
                        const snap = await getDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'appData', 'state')); 
                        if(snap.exists()) { 
                            aplicarEstadoApp(snap.data()); 
                            showToast("Nuvem sincronizada."); 
                        } 
                    };
                    window.carregarDaNuvem();
                } else { 
                    statusEl.innerHTML = '<span style="color: var(--danger)">● Offline</span>'; 
                }
            });
        }
    } catch(e) { 
        console.error("Firebase indisponível.", e); 
    }
})();

// Backup via LocalStorage (Fallback automático caso Firebase falhe)
  (() => {
    try {
        const backup = localStorage.getItem('planoEstudoBackup');
        if(backup) aplicarEstadoApp(JSON.parse(backup));
        window.addEventListener('beforeunload', () => localStorage.setItem('planoEstudoBackup', JSON.stringify(estadoApp)));
    } catch(e) { 
        console.error("LocalStorage indisponível.", e); 
    }
})();
