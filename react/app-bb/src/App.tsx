import React, { useState } from 'react'
import { Award, Flame, Timer, Calendar, TrendingUp, Target, CheckSquare, PieChart, Cloud } from 'lucide-react';


/**
 * ============================================================================
 * PASSO 1 DA MIGRAÇÃO: APP SHELL (Layout Principal)
 * ============================================================================
 * Este ficheiro representa como o teu `index.html` e a lógica de navegação do `main.js`
 * se transformam num componente React.
 * * NOTA DE ARQUITETURA LOCAL: Na tua máquina, o Header, a Navegação e o Conteúdo 
 * seriam ficheiros separados dentro da pasta `src/components`. Aqui consolidamos
 * num ficheiro para poderes visualizar e interagir imediatamente.
 */

// --- Componente de Cabeçalho (Header) ---

function App() {
  
  
    const Header = () => {
      return (
        <header className="bg-gradient-to-br from-blue-900 to-indigo-700 rounded-2xl p-8 text-white shadow-lg flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="flex items-center gap-2 text-2xl font-bold"><Award className="text-yellow-400" size={32} /> Projeto Aprovação TI </h1>
            <p className="text-blue-200 mt-2 text-sm">Centro de Comando Estratégico | Foco: Banco do Brasil</p>
          </div>

          <div className="flex gap-4 items-stretch"> 
            {/* Painel de Ofensiva (Streak) */}
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm flex flex-col justify-center items-center cursor-pointer hover:bg-white/20 transition-all hover:-translate-y-1">
            
            </div>  
          </div>  
        </header>
      )
    }  
  
}

export default App
