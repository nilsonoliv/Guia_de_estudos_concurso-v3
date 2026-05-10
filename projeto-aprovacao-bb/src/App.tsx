import React, { useState } from 'react'
import './assets/css/style.css';
import './assets/css/header.css';
import './assets/css/main.css';
import './assets/css/nav.css';

import { Award, Flame, Timer, Calendar, TrendingUp, Target, CheckSquare, PieChart, Cloud } from 'lucide-react';

/* =============================================================================
  NOTA DE ARQUITETURA BB:
  No ambiente final, estas interfaces residirão em 'src/types/index.ts'
  =============================================================================
*/
interface HeaderProps {
  streakCount: number;
  daysRemaining: number;
  startDate: string;
}

/* =============================================================================
  MÓDULO: COMPONENTS / LAYOUT
  Estes componentes estarão em arquivos separados dentro de 'src/components/layout/'
  =============================================================================
*/

// Componente: Header.tsx
const Header: React.FC<HeaderProps> = ({ streakCount, daysRemaining, startDate }) => {
  return (
    <header className="app-header" style={localInlineFallback.header}>
      <div className="header-left">
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award style={{ color: '#facc15' }} /> Projeto Aprovação TI Bancária
        </h1>
        <p style={{ color: '#bfdbfe', marginTop: '0.5rem' }}>
          Centro de Comando Estratégico | Foco: CEF / Banco do Brasil
        </p>
      </div>
      
      <div className="header-actions" style={{ display: 'flex', gap: '1rem' }}>
        <div className="streak-panel" title="Clique para marcar o estudo de hoje!" style={localInlineFallback.streakPanel}>
          <div className="streak-count" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Flame className={streakCount > 0 ? "streak-active" : ""} color={streakCount > 0 ? "#f97316" : "currentColor"} /> 
            <span>{streakCount}</span>
          </div>
          <div className="streak-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Dias Seguidos</div>
        </div>
        
        <div className="header-stats" style={localInlineFallback.headerStats}>
          <div className="stats-label" style={{ color: '#facc15', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
            <Timer size={14} style={{ display: 'inline' }} /> Contagem Regressiva
          </div>
          <div className="stats-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{daysRemaining} dias</div>
          <div className="stats-sub" style={{ fontSize: '0.8rem' }}>
            Início: <input type="date" value={startDate} className="input-data" readOnly style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: '4px' }} />
          </div>
        </div>
      </div>
    </header>
  );
};

// Componente: Navigation.tsx
interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'tab-fases', icon: <Calendar size={18} />, label: 'Roadmap' },
    { id: 'tab-escada', icon: <TrendingUp size={18} />, label: 'Escada de Conhecimento' },
    { id: 'tab-progresso', icon: <Target size={18} />, label: 'Progresso Global' },
    { id: 'tab-checklist', icon: <CheckSquare size={18} />, label: 'Checklist Quente' },
    { id: 'tab-analytics', icon: <PieChart size={18} />, label: 'Analytics' },
    { id: 'tab-backup', icon: <Cloud size={18} />, label: 'Sync' },
  ];

  return (
    <nav className="nav-container" style={localInlineFallback.navContainer}>
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
          style={{
            ...localInlineFallback.tabBtn,
            ...(activeTab === tab.id ? localInlineFallback.tabBtnActive : {})
          }}
        >
          {tab.icon} {tab.label}
        </button>
      ))}
    </nav>
  );
};

/* =============================================================================
  COMPONENTE PRINCIPAL: App.tsx
  Atua como orquestrador das Views.
  =============================================================================
*/
export default function App() {
  // Estado local temporário para controlar a navegação de abas.
  // Futuramente, moveremos estados complexos para o Contexto.
  const [activeTab, setActiveTab] = useState<string>('tab-fases');

  return (
    <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif', color: '#1e293b' }}>
      
      {/* O Header recebe os dados vitais de progresso via Props */}
      <Header 
        streakCount={0} 
        daysRemaining={730} 
        startDate={"2026-05-01"} 
      />

      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <main className="main-content" style={localInlineFallback.mainContent}>
        {activeTab === 'tab-fases' && (
          <section className="tab-pane active">
            <h2>O Roadmap de 2 Anos</h2>
            <p className="section-desc" style={{ color: '#64748b' }}>A interface React base está configurada. A migração dos dados começará no próximo passo.</p>
          </section>
        )}
        
        {activeTab !== 'tab-fases' && (
          <section className="tab-pane active">
            <h2>Módulo em construção...</h2>
            <p style={{ color: '#64748b' }}>A tela <b>{activeTab}</b> será renderizada aqui nas próximas etapas.</p>
          </section>
        )}
      </main>

    </div>
  );
}

/*
  Fallback Temporário de CSS apenas para o Preview deste Sandbox.
  No seu ambiente local, apague isto, pois os seus arquivos .css já possuem estas regras.
*/
const localInlineFallback = {
  header: { background: 'linear-gradient(135deg, #1e3a8a, #4f46e5)', borderRadius: '16px', padding: '2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
  streakPanel: { backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', cursor: 'pointer' },
  headerStats: { backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center' as const },
  navContainer: { backgroundColor: '#ffffff', padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' as const },
  tabBtn: { display: 'flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1rem', border: 'none', backgroundColor: 'transparent', color: '#64748b', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, flexGrow: 1, justifyContent: 'center' },
  tabBtnActive: { backgroundColor: '#dbeafe', color: '#3b82f6' },
  mainContent: { backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '2rem', minHeight: '500px' }
};