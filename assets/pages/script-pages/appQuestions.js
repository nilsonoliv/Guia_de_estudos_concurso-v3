 /**
         * Namespace principal da aplicação.
         * Padrão de projeto: Module Pattern (usando IIFE ou Objetos para encapsulamento)
         * Isso evita poluir o escopo global e prepara o app para crescer de forma organizada.
         */
        const App = (function() {
            
            // Elementos do DOM cacheados para performance
            let appContainer;

            /**AA
             * Função para inicializar a aplicação
             */
            function init() {
                // Mapeia os elementos principais
                appContainer = document.getElementById('app-container');
                
                // Renderiza a tela inicial
                renderDashboard();
                
                console.log("Sistema Inicializado: Estrutura Base Pronta (Etapa 1)");
            }

            /**
             * Renderiza a tela inicial (Dashboard / Boas vindas)
             * Em etapas futuras, isso será separado em componentes ou funções de view específicas.
             */
            function renderDashboard() {
                appContainer.innerHTML = `
                    <div class="painel-boas-vindas">
                        <h2>Bem-vindo ao Sistema de Simulados</h2>
                        <p>A arquitetura base do sistema foi carregada com sucesso. A plataforma está pronta para receber o banco de questões.</p>
                        <!-- O botão abaixo não tem ação nesta etapa, respeitando a regra de não antecipar funcionalidades -->
                        <button class="btn-primario" onclick="alert('Funcionalidade de Novo Simulado virá em etapas futuras!')">
                            Iniciar Novo Simulado
                        </button>
                    </div>
                `;
            }

            // Expondo apenas os métodos públicos necessários
            return {
                init: init
            };

        })();

        // Inicializa o aplicativo assim que o DOM estiver completamente carregado
        document.addEventListener('DOMContentLoaded', App.init);