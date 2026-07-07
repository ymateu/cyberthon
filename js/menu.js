document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const subMenuSolicitacoes = document.getElementById('subMenuSolicitacoes');
    const overlay = document.getElementById('overlay');
    
    const openSolicitacoesBtn = document.getElementById('openSolicitacoes');
    const backToMainMenuBtn = document.getElementById('backToMainMenu');

    function openMainMenu() {
        sideMenu.classList.add('open');
        overlay.classList.add('active');
    }

    function closeAllMenus() {
        sideMenu.classList.remove('open');
        subMenuSolicitacoes.classList.remove('open');
        overlay.classList.remove('active');
    }

    // Abrir menu principal ao clicar no hambúrguer
    menuToggle.addEventListener('click', () => {
        if (sideMenu.classList.contains('open')) {
            closeAllMenus();
        } else {
            openMainMenu();
        }
    });

    // Fechar menus ao clicar no fundo escuro
    overlay.addEventListener('click', closeAllMenus);

    // Abrir submenu de Solicitações
    openSolicitacoesBtn.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        subMenuSolicitacoes.classList.add('open');
    });

    // Voltar para o menu principal
    backToMainMenuBtn.addEventListener('click', () => {
        subMenuSolicitacoes.classList.remove('open');
        sideMenu.classList.add('open');
    });
});