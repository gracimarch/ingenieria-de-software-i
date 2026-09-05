document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const toggleBtn = document.getElementById('toggle-password');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const submit = document.getElementById('submit');

    // mostrar / ocultar contraseña
    if (toggleBtn && password) {
        toggleBtn.addEventListener('click', function () {
            const isVisible = this.getAttribute('aria-pressed') === 'true';

            password.type = isVisible ? 'password' : 'text';
            this.setAttribute('aria-pressed', isVisible ? 'false' : 'true');
            this.setAttribute(
                'aria-label',
                isVisible ? 'Mostrar contraseña' : 'Ocultar contraseña'
            );
        });
    }

    // validar campos e ir a home
    if (submit && username && password) {
        submit.addEventListener('click', function (e) {
            if (username.value !== '' && password.value !== '') {
                e.preventDefault();
                window.location.href = 'home.html';
            }
        });
    }
});