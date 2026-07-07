document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        sideMenu.classList.toggle('open');
        overlay.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    const btnEnviar = document.getElementById('btnEnviar');
    const customAlert = document.getElementById('customAlert');
    const closeCustomAlert = document.getElementById('closeCustomAlert');

    btnEnviar.addEventListener('click', () => {
        const pergunta1 = document.getElementById('pergunta1').value.trim();
        const pergunta2 = document.getElementById('pergunta2').value.trim();

        if (pergunta1 === '' || pergunta2 === '') {
            alert('Por favor, preencha as duas perguntas antes de enviar.');
            return;
        }

        customAlert.classList.add('active');
        
        document.getElementById('pergunta1').value = '';
        document.getElementById('pergunta2').value = '';
    });

    closeCustomAlert.addEventListener('click', () => {
        customAlert.classList.remove('active');
        window.location.href = 'painel.html';
    });

    customAlert.addEventListener('click', (e) => {
        if (e.target === customAlert) {
            customAlert.classList.remove('active');
            window.location.href = 'painel.html';
        }
    });
});