document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const form = document.getElementById('register-form');
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('repeat-password');
    const errorBanner = document.getElementById('form-error-banner');

    // botón mostrar/ocultar contraseña
    const togglePassword = document.getElementById('toggle-password');
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const isVisible = this.getAttribute('aria-pressed') === 'true';
            passwordInput.type = isVisible ? 'password' : 'text';
            this.setAttribute('aria-pressed', isVisible ? 'false' : 'true');
            this.setAttribute('aria-label', isVisible ? 'Mostrar contraseña' : 'Ocultar contraseña');
        });
    }

    // botón mostrar/ocultar contraseña
    const toggleRepeat = document.getElementById('toggle-repeat-password');
    if (toggleRepeat && repeatPasswordInput) {
        toggleRepeat.addEventListener('click', function () {
            const isVisible = this.getAttribute('aria-pressed') === 'true';
            repeatPasswordInput.type = isVisible ? 'password' : 'text';
            this.setAttribute('aria-pressed', isVisible ? 'false' : 'true');
            this.setAttribute('aria-label', isVisible ? 'Mostrar contraseña' : 'Ocultar contraseña');
        });
    }

    // mostrar banner de error global
    function showBanner(message) {
        errorBanner.textContent = message;
        errorBanner.removeAttribute('hidden');
    }

    // ocultar banner
    function hideBanner() {
        errorBanner.setAttribute('hidden', '');
        errorBanner.textContent = '';
    }

    // marcar/desmarcar campo en error
    function setFieldError(input, hasError) {
        if (hasError) {
            input.classList.add('is-error');
        } else {
            input.classList.remove('is-error');
        }
    }

    // limpiar error de campo al escribir
    [firstnameInput, emailInput, passwordInput, repeatPasswordInput].forEach(function (input) {
        if (!input) return;
        input.addEventListener('input', function () {
            input.classList.remove('is-error');
            // si ningún campo tiene error, ocultar banner
            const anyError = [firstnameInput, emailInput, passwordInput, repeatPasswordInput]
                .some(function (el) { return el && el.classList.contains('is-error'); });
            if (!anyError) hideBanner();
        });
    });

    // validación al enviar
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // limpiar estado previo
            [firstnameInput, emailInput, passwordInput, repeatPasswordInput].forEach(function (el) {
                if (el) el.classList.remove('is-error');
            });
            hideBanner();

            const errors = [];

            // nombre
            if (!firstnameInput.value.trim()) {
                setFieldError(firstnameInput, true);
                errors.push('Ingresá tu nombre.');
            }

            // email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                setFieldError(emailInput, true);
                errors.push('El correo es obligatorio.');
            } else if (!emailRegex.test(emailInput.value.trim())) {
                setFieldError(emailInput, true);
                errors.push('El correo electrónico no es válido.');
            }

            // contraseña
            if (!passwordInput.value) {
                setFieldError(passwordInput, true);
                errors.push('La contraseña es obligatoria.');
            } else if (passwordInput.value.length < 6) {
                setFieldError(passwordInput, true);
                errors.push('La contraseña debe tener al menos 6 caracteres.');
            }

            // repetir contraseña
            if (!repeatPasswordInput.value) {
                setFieldError(repeatPasswordInput, true);
                if (!errors.some(function (e) { return e.includes('contraseña'); })) {
                    errors.push('Repetí tu contraseña.');
                }
            } else if (repeatPasswordInput.value !== passwordInput.value) {
                setFieldError(repeatPasswordInput, true);
                errors.push('Las contraseñas no coinciden.');
            }

            if (errors.length > 0) {
                showBanner(errors[0]);
                return;
            }

            // acá se podrían enviar los datos al backend
            window.location.href = 'home.html';
        });
    }
});
