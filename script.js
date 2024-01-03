let form = document.querySelector('form.formEnviarEmail');
let email = document.getElementById('email');
email.focus();

function verificarEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validarForm() {

    let span = document.querySelector('span')
    let a = document.querySelector('a')

    if (verificarEmail(email.value)) {
        email.classList.remove('erro');
        span.classList.remove('msgErro')
        span.innerText = " ";
        window.location.href = "thanks.html"
    } else {
        email.classList.add('erro');
        span.classList.add('msgErro')
        span.innerText = "Valid email required"
    }
}

form.addEventListener('submit', validarForm)