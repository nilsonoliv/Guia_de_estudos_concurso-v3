/* ============================================================================
 * TIPAGENS GLOBAIS (Interfaces)
 * Aqui definimos o "formato" exato que os nossos dados devem ter.
 * Isso é super importante para garantir que o nosso código seja mais seguro e fácil de entender.
 * Sempre que formos criar um novo tipo de dado, devemos adicionar uma nova interface aqui.
 * Lembre-se: uma interface é como um contrato que diz "qualquer coisa que seja desse tipo deve ter essas propriedades com esses tipos".
 * ============================================================================ */

// --- ROADMAP ---
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

// --- ESCADA DE CONHECIMENTO ---
export type TipoEscada = 'ti' | 'mt' | 'lp' | 'pt';

export interface NivelEscada {
  id: number;
  tipo: TipoEscada;
  titulo: string;
  desc: string;
  topicos: string[];
}

// --- CHECKLIST QUENTE ---
export type PrioridadeChecklist = 'quente' | 'morno' | 'frio';

export interface ItemChecklist {
  id: string;
  text: string;
  priority: PrioridadeChecklist;
}

export interface GrupoChecklist {
  areaNome: string;
  areaID: string;
  itens: ItemChecklist[];
}

// --- ESTADO GLOBAL (O que antes era o seu estadoApp) ---
// Já vamos deixar isto tipado para usarmos na próxima etapa (Context API)
export interface NivelEscadaProgresso {
  id: number;
  status: 'ativo' | 'bloqueado' | 'concluido';
  tipo: TipoEscada;
}

export interface SimuladoRecord {
  data: string;
  nota: number;
}

export interface SwotData {
  forcas: string[];
  fraquezas: string[];
  taticas: string[];
}

export interface AppState {
  dataInicio: string;
  dataProva: string;
  fasesConcluidas: number[];
  streak: { count: number; lastDate: string | null };
  checklist: string[]; // IDs dos itens concluídos
  filtroEscada: string | 'all';
  escada: NivelEscadaProgresso[];
  simulados: SimuladoRecord[];
  swot: SwotData;
}