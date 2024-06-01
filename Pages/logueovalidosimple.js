// Se levantan campos del formulario que se va a validar
const email = document.getElementById('email');
const password = document.getElementById('password');

// Se levantan los campos de error
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');

// Se levanta el formulario
const form = document.getElementById('form');

// En el evento submit, se valida que los campos esten llenos y no se deja que el formulario se envíe automáticamente
form.addEventListener('submit', (e) => {

    // Se limpian los mensajes de error
    errorEmail.innerText = "";
    errorPassword.innerText = "";

    if (email.value === '' || email.value == null) {
        e.preventDefault();
        errorEmail.innerText = "El correo electrónico es obligatorio";
    }
    if (password.value === '' || password.value == null) {
        e.preventDefault();
        errorPassword.innerText = "La contraseña es obligatoria";
    }
});

// Si se toca "enter" en el campo email o password se valida el campo
email.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (email.value === '' || email.value == null) {
            errorEmail.innerText = "El correo electrónico es obligatorio";
        }else{
            errorEmail.innerText = "";
        }
    }
});

password.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (password.value === '' || password.value == null) {
            errorPassword.innerText = "La contraseña es obligatoria";
        }else{
            errorPassword.innerText = "";
        }
    }
});

// Si se toca "tab" en el campo email o password se valida el campo
email.addEventListener('blur', ()=> {
    if (email.value === '' || email.value == null) {
        errorEmail.innerText = "El correo electrónico es obligatorio";
    }else{
        errorEmail.innerText = "";
    }
});

password.addEventListener('blur', ()=> {
    if (password.value === '' || password.value == null) {
    errorPassword.innerText = "La contraseña es obligatoria";
    }else{
        errorPassword.innerText = "";
    }
});