🏆 Projeto Aprovação TI Bancária: Dashboard Estratégico

🎯 Visão Geral do Projeto

O Dashboard Estratégico de Aprovação é uma plataforma EdTech (Single Page Application) desenvolvida para transformar a jornada de estudos para concursos bancários de TI (foco Banco do Brasil e Caixa Econômica Federal) num processo altamente metrificado, gamificado e previsível.

Baseado na engenharia reversa do perfil estatístico da banca Cesgranrio, o sistema pega num edital complexo e dilui-o numa rotina de 2 anos (10h/semana). A aplicação atua como um "Centro de Comando", unindo o planeamento tático (macro e micro) com análise de dados de desempenho (Analytics e matriz SWOT).

✨ Funcionalidades Principais

Aqui estão os pilares que transformam esta aplicação de um simples calendário para um Motor de Retenção de Conhecimento:

Módulo

Descrição (O que resolve?)

🗓️ Roadmap Iterativo

Divide os 2 anos em 4 ciclos semestrais focados. Inclui modais detalhados com rotinas semanais e a funcionalidade de "Arquivar/Desfazer" para limpeza visual das fases superadas.

📈 Escada de TI Gamificada

Uma timeline interativa que respeita a pedagogia. Tópicos complexos (como DevSecOps) começam bloqueados até que o utilizador domine a base (Lógica/POO).

🎯 Checklist Pareto (80/20)

Mapeamento quente da Cesgranrio. O utilizador marca os tópicos dominados e ganha Badges (troféus) ao fechar blocos de conhecimento de alto peso.

📊 Inteligência Tática (Analytics)

Integração com Chart.js para desenhar o gráfico de evolução dos simulados vs. a Meta de Corte (85%). Inclui uma Matriz SWOT e POTS totalmente editável para gerir pontos fracos.

☁️ Sincronização Híbrida

Nuvem: Backup automático em tempo real usando Firebase Firestore.



Local: Exportação/Importação manual do estado inteiro para ficheiros .json.

🔥 Engajamento Diário

Streak diário (fogo de constância) e contador regressivo focado na data alvo da prova (01/05/2028).

🛠️ Desafios de Desenvolvimento e Soluções Arquiteturais

A construção deste Dashboard exigiu a tomada de decisões técnicas rigorosas para equilibrar portabilidade, desempenho e manutenção.

1. O Desafio da "Single-File Architecture"

O Problema: A aplicação precisava de correr em qualquer ambiente (mesmo sem Node.js ou servidores locais), exigindo que HTML, CSS e JS habitassem o mesmo ficheiro, sem transformar o código em Spaghetti Code.

A Solução: Adotei um padrão rigoroso de isolamento. O CSS utiliza uma arquitetura BEM-like com Design Tokens (variáveis nativas). No JS, os dados (bancos de dados do edital) foram totalmente separados das funções de renderização de interface.

2. Gestão de Estado Global (State Management)

O Problema: Inicialmente, a interação da UI (ex: riscar uma tarefa) dependia da alteração de classes de CSS diretamente no DOM. Ao introduzir funcionalidades de Backup e Sincronização na Nuvem, ler o DOM para salvar o progresso era inviável e propenso a falhas.

A Solução: Implementei um padrão de Single Source of Truth (SSOT). Criei um objeto global mutável (estadoApp). Todas as interações do utilizador alteram apenas este objeto, que em seguida dispara funções puras de re-renderização (renderEscada(), renderChecklist()). Salvar o progresso tornou-se tão simples como fazer um JSON.stringify(estadoApp).

3. Integração Modular da Nuvem

O Problema: Como injetar o Firebase SDK (que hoje utiliza ES Modules) num ficheiro estático sem quebrar o escopo global das funções ligadas aos botões do HTML (os onclick).

A Solução: Recorri a uma IIFE (Immediately Invoked Function Expression) assíncrona aliada a Dynamic Imports (await import(...)). Isto permitiu importar as pesadas bibliotecas do Google de forma isolada, gerir a autenticação de forma segura (Auth Before Query) e exportar apenas as pontes necessárias de volta para o objeto global window.

💻 Tecnologias Utilizadas

Frontend Estrutural: HTML5 Semântico.

Estilização: CSS3 Moderno (Custom Properties, Flexbox, CSS Grid, Keyframes Animations).

Lógica e Reatividade: Vanilla JavaScript (ES6+), seguindo padrões funcionais para a manipulação do DOM.

Data Visualization: Chart.js via CDN.

Iconografia: Lucide Icons (Vetores dinâmicos).

Backend as a Service (BaaS): Firebase Firestore & Auth (Web SDK v11).

🚀 Como Executar Localmente

Faça o clone deste repositório ou descarregue o ficheiro dashboard.html.

Dê um duplo clique no ficheiro para abri-lo em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

A aplicação está pronta para uso! Se desejar testar a persistência sem internet, utilize as funcionalidades "Exportar JSON Local" e "Importar JSON Local" na aba de Sincronização.

Criado com mentalidade de longo prazo para garantir a aprovação na Elite Bancária de TI.