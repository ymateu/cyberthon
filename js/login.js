document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const btn = document.querySelector('.btn-entrar');
        const originalText = btn.textContent;
        btn.textContent = 'ENTRANDO...';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        setTimeout(() => {
            let userType = '';
            let redirectPage = '';

            if (username === 'Eurico' && password === '123') {
                userType = 'gestor';
                redirectPage = 'dashboard.html';
            } else {
                userType = 'funcionario';
                redirectPage = 'painel.html';
            }

            localStorage.setItem('userType', userType);
            localStorage.setItem('username', username);

            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.opacity = '1';

            window.location.href = redirectPage;

        }, 1500);
    });
});