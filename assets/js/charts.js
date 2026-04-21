/* ============================================================================
 * 4. MÓDULO: CHARTS (Gráficos)
 * Responsabilidade: Renderizar gráficos via Chart.js
 * Futuro: Extrair para `charts.js`.
 * ============================================================================ */

let chartEvolucaoInstance = null;
let progressoChartInstance = null; 

function renderProgressoGamificado() {
    let tTi=0, tBasico=0, tDigital=0, cTi=0, cBasico=0, cDigital=0;
    
    dbChecklist.forEach(g => {
        g.itens.forEach(i => {
            if(g.areaID === 'ti') { tTi++; if(estadoApp.checklist.includes(i.id)) cTi++; }
            if(g.areaID === 'basico') { tBasico++; if(estadoApp.checklist.includes(i.id)) cBasico++; }
            if(g.areaID === 'digital') { tDigital++; if(estadoApp.checklist.includes(i.id)) cDigital++; }
        });
    });
    
    const ptsTi = tTi ? (cTi/tTi)*30 : 0; 
    const ptsBasico = tBasico ? (cBasico/tBasico)*25 : 0; 
    const ptsDigital = tDigital ? (cDigital/tDigital)*5 : 0;
    
    document.getElementById('pts-ti').textContent = ptsTi.toFixed(1); 
    document.getElementById('pts-basico').textContent = ptsBasico.toFixed(1); 
    document.getElementById('pts-digital').textContent = ptsDigital.toFixed(1);
    
    const ctx = document.getElementById('scoreChart'); 
    if(!ctx) return;
    
    const dataArr = [ptsTi, ptsBasico, ptsDigital, 60 - (ptsTi+ptsBasico+ptsDigital)];
    
    if(progressoChartInstance) { 
        progressoChartInstance.data.datasets[0].data = dataArr; 
        progressoChartInstance.update(); 
    } else {
        progressoChartInstance = new Chart(ctx, {
            type: 'doughnut', 
            data: { 
                labels: ['TI (Dominado)', 'Básicos (Dominado)', 'Digitais (Dominado)', 'Pontos Pendentes'], 
                datasets: [{ 
                    data: dataArr, 
                    backgroundColor: ['#e11d48', '#57534e', '#d97706', '#e2e8f0'], 
                    borderWidth: 0, 
                    hoverOffset: 4 
                }] 
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                plugins: { 
                    legend: { position: 'bottom' }, 
                    tooltip: { 
                        callbacks: { 
                            label: function(c) { return c.label + ': ' + c.raw.toFixed(1) + ' pts'; } 
                        } 
                    } 
                }, 
                cutout: '75%', 
                animation: { animateScale: true, animateRotate: true } 
            }
        });
    }
}

function renderCharts() {
    const ctx = document.getElementById('chartEvolucao'); 
    if(!ctx) return;
    
    const labels = estadoApp.simulados.map(s => s.data);
    const data = estadoApp.simulados.map(s => s.nota);
    
    if(chartEvolucaoInstance) chartEvolucaoInstance.destroy();
    
    chartEvolucaoInstance = new Chart(ctx, { 
        type: 'line', 
        data: { 
            labels: labels, 
            datasets: [
                { label: 'Evolução %', data: data, borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)', fill: true, tension: 0.3 }, 
                { label: 'Corte (85%)', data: Array(labels.length).fill(85), borderColor: '#ef4444', borderDash: [5,5], fill: false }
            ] 
        }, 
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            scales: { y: { min: 0, max: 100 } } 
        } 
    });
}

function inserirSimulado() { 
    const r = document.getElementById('sim-data').value;
    const n = parseFloat(document.getElementById('sim-nota').value); 
    if(r && !isNaN(n)) { 
        estadoApp.simulados.push({data:r,nota:n}); 
        document.getElementById('sim-data').value=''; 
        document.getElementById('sim-nota').value=''; 
        renderCharts(); 
        showToast("📈 Registado!"); 
        if(window.salvarNaNuvem) window.salvarNaNuvem(); 
    } 
}
