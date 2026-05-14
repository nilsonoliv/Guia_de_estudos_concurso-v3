

import React, { createContext, useContext, useState, ReactNode} from 'react';
import { AppState, TipoEscada} from '../types';

/*===================================================================================================
    * CONTEXT API: APP CONTEXT
    * Atua como o "Simgle Source of Truth" (única fonte de verdade) do React.
    * Substitui o antigo objeto global 'estadoApp' do Vanilla JS.
    * Fornece um estado global e funções para atualizar esse estado, acessíveis por toda a aplicação.
===================================================================================================*/

// 1. Definição do Estado Inicial 
const initialState: AppState = {
    dataInicio: ' ',
    dataProva: '2028-04-07',
    fasesConcluidas: [],
    streak: { count: 0, lastDate: null },
    checklist: [],
    filtroEscada: 'all',
    escada: [
        { id: 1, status: 'ativo', tipo: 'ti'}, { id: 2, status: 'ativo', tipo: 'ti'}, { id: 3, status: 'ativo', tipo: 'ti'}, { id: 4, status: 'ativo', tipo: 'ti'},
        { id: 5, status: 'ativo', tipo: 'ti'}, { id: 6, status: 'ativo', tipo: 'ti'}, { id: 7, status: 'ativo', tipo: 'ti'}, { id: 8, status: 'ativo', tipo: 'ti'},
        { id: 9, status: 'ativo', tipo: 'ti'}, { id: 10, status: 'ativo', tipo: 'ti'}, { id: 11, status: 'ativo', tipo: 'ti'}, { id: 12, status: 'ativo', tipo: 'ti'},
        { id: 13, status: 'ativo', tipo: 'ti'}, { id: 14, status: 'ativo', tipo: 'ti'}, { id: 15, status: 'ativo', tipo: 'ti'}, { id: 16, status: 'ativo', tipo: 'ti'},
        { id: 17, status: 'ativo', tipo: 'ti'}, { id: 18, status: 'ativo', tipo: 'ti'}, { id: 19, status: 'ativo', tipo: 'ti'}, { id: 20, status: 'ativo', tipo: 'ti'}
    ],
    simulados: [
        { data: "Diagnóstico", nota: 35}
    ],
    swot: {
        forcas: ['Forte base de conhecimento em TI'],
        fraquezas: ['Java'],
        taticas: ['Praticar mais questões de Java']
    }    
};

// 2. Contrato do Contexto (Quais dados e funções ele exporta?)
interface AppContextProps {
    state: AppState;
    marcarMetaDiaria: () => void;
    concluirFase: ( id: number) => void;
    desfazerfaze: ( id: number) => void;
    toggleChecklist: (item: string) => void;
    //Mais funções serão adicionadas aqui conforme a necessidade (Escad, swot, etc)...
};

// 3. Criação do Contexto propriamente dito
const AppContext = createContext<AppContextProps | undefined>(undefined);

// 4. Componente Provider: Componente que envolve a aplicação e fornece o estado e funções para os filhos
//O embrolho que vai envolta do App
export const AppProvider: 
React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<AppState>(initialState);
};

/* --- MÉTODOS DE ATUALIZAÇÃO DO ESTADO ------
    No React, NUNCA alertamos o estado diretamente. Sempre usamos funções de atualização (setState) para garantir que o React saiba quando re-renderizar os componentes.
    Essas funções podem ser passadas para os componentes filhos via Contexto, permitindo que qualquer componente na árvore possa atualizar o estado global.
   */

const marcarMetaDiaria = () => 
    {
      setState ((prev)) => 
        {
            const hoje = new 
            Date().toDateString();
            if( prev.streak.lastSDate === hoje) 
                return prev; // Já marcou hoje, não faz nada
            const ontem = new Date();
            ontem.setDate(ontem.getDate() -1);
            const novoCount = prev.streak.lastDate === ontem.toDateString() ? prev.streak.count + 1 : 1;
            return {
                ...prev,
                streak: { count: novoCount, lastDate: hoje }
        
    };
};