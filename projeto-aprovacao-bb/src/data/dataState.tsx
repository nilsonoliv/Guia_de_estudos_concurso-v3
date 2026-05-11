/*=====================================================================================================================
==========================================================================================================================
    *  TIPAGENS GLOBAIS (Interfaces)
    *  - Aqui estão definidas as interfaces que representam os tipos de dados usados em todo o projeto.
    *  Aqui definimos o "formato" exato que os nossos dados devem ter, garantindo consistência e segurança de tipo em toda a aplicação.
==========================================================================================================================
=====================================================================================================================*/

// ---  ROADMAP ----
export interface DiaSemana {
    dia: string;
    mat: string;
}

export interface FaseRoadmap {
    id: number;
    titulo: string;
    meses: string;
    color: string;
    objetivo: string;
    semana: DiaSemana[];
    metas: string[];
}


// ---  ESCADA DE CONHECIMENTO ----
export type TipoEscada = 'ti' | 'mt' | 'lp'; //

export interface NivelEscada {
    id: number;
    tipo: TipoEscada;
    titulo: string;
    desc: string;
    topicos: string[];
};

// --- CHECKLIS QUENTE ---
export type PrioridadeChecklist = 'quente' | 'morno' | 'frio';

export interface ItemChecklist {
    id: string;
    text: string;
    priority: PrioridadeChecklist;
};
