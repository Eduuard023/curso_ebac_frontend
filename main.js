const form = document.getElementById('form-check');

let formEValido = false;

function validaForm (numberOne, numberTwo) {
    return numberTwo > numberOne;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numberOne = parseFloat(document.getElementById('number-one').value);
    let numberTwo = parseFloat(document.getElementById('number-two').value);
    const mensagemSucesso = 'Validação concluida! O segundo número é maior que o primerio.';
    
    formEValido = validaForm(numberOne, numberTwo);
    if (formEValido == true) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

    }else {
        document.querySelector('.error-message').style.display = 'block';

    }
});
