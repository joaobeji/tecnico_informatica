/**
 * - Carrega um componente HTML e o insere em um elemento específico da página.
 * - O caminho para o arquivo HTML do componente.
 * - O ID do elemento onde o componente será inserido.
 */
function carregarComponente(url, elementId) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar o componente:", error));
}

// Carregar o menu 
carregarComponente("menu.html", "menu");

  // Função para alternar o menu lateral
  function toggleSidebar() {
    // Obtém referências aos elementos HTML do sidebar e do conteúdo principal
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
  
    // Alterna a classe "collapsed" no sidebar para mostrar/ocultar
    sidebar.classList.toggle('collapsed');
  
    // Alterna a classe "full-width" no conteúdo principal para ajustar a largura
    mainContent.classList.toggle('full-width');
  }
