const asuntoInput = document.getElementById('asunto');
const ccInput = document.getElementById('cc');
const mensajeInput = document.getElementById('mensaje');


function validarCampoVacio(input, errorMessageElement, mensajeError) {
    if (input.value.trim() === '') {
        input.classList.add('error');
        input.classList.remove('success');
        errorMessageElement.textContent = mensajeError;
    } else {
        input.classList.add('success');
        input.classList.remove('error');
        errorMessageElement.textContent = '';
    }
}


function validarCorreo(input, errorMessageElement) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.trim() !== '' && !emailRegex.test(input.value)) {
        input.classList.add('error');
        input.classList.remove('success');
        errorMessageElement.textContent = 'Introduce un correo válido.';
    } else {
        input.classList.add('success');
        input.classList.remove('error');
        errorMessageElement.textContent = '';
    }
}

asuntoInput.addEventListener('blur', () => validarCampoVacio(asuntoInput, document.getElementById('asunto-error'), 'El asunto no puede estar vacío.'));
ccInput.addEventListener('blur', () => validarCorreo(ccInput, document.getElementById('cc-error')));
mensajeInput.addEventListener('blur', () => validarCampoVacio(mensajeInput, document.getElementById('mensaje-error'), 'El mensaje no puede estar vacío.'));


document.getElementById('contact-form').addEventListener('submit', function(event) {
    validarCampoVacio(asuntoInput, document.getElementById('asunto-error'), 'El asunto no puede estar vacío.');
    validarCorreo(ccInput, document.getElementById('cc-error'));
    validarCampoVacio(mensajeInput, document.getElementById('mensaje-error'), 'El mensaje no puede estar vacío.');

    
    if (document.querySelectorAll('.error').length > 0) {
        event.preventDefault();
        alert('Por favor, corrige los errores antes de enviar el formulario.');
    }
});