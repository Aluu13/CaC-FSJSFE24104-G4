//El formulario está preparado para no validarse cuando toca tabb y enter, solo al momento de precionar el submit

//Se levantan los campos del formulario de registro que se va a validar
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const date = document.getElementById('date');
const pais = document.getElementById('pais');
const terminos = document.getElementById('terminos');
const formregistro = document.getElementById('formregistro');

//Se levantan los campos de error
const errorNombre = document.getElementById('error-nombre');
const errorApellido = document.getElementById('error-apellido');
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
const errorDate = document.getElementById('error-date');
const errorPais = document.getElementById('error-pais');
const errorTerminos = document.getElementById('error-terminos');

//Si se termino de cargar el dom
document.addEventListener('DOMContentLoaded', function() {
    //En el evento submit se valida que los campos esten llenos y no se deja que se envie automaticamente el formulario
    formregistro.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("entro a la funcion");
        //Se limpian los mensajes de error
        errorNombre.innerText = "";
        errorApellido.innerText = "";
        errorEmail.innerText = "";
        errorPassword.innerText = "";
        errorDate.innerText = "";
        errorPais.innerText = "";
        errorTerminos.innerText = "";
        if (nombre.value === '' || nombre.value == null) {
            e.preventDefault();
            errorNombre.innerText = "El nombre es obligatorio";
        }
        if (apellido.value === '' || apellido.value == null) {
            e.preventDefault();
            errorApellido.innerText = "El apellido es obligatorio";
        }
        if (email.value === '' || email.value == null) {
            e.preventDefault();
            errorEmail.innerText = "El correo electrónico es obligatorio";
        }
        if (password.value === '' || password.value == null) {
            e.preventDefault();
            errorPassword.innerText = "La contraseña es obligatoria";
        }
        if (date.value === '' || date.value == null) {
            e.preventDefault();
            errorDate.innerText = "La fecha de nacimiento es obligatoria";
        }
        if (pais.value === '' || pais.value == null) {
            e.preventDefault();
            errorPais.innerText = "El país es obligatorio";
        }
        if (!terminos.checked) {
            e.preventDefault();
            errorTerminos.innerText = "Debes aceptar los términos y condiciones";
        }
    });
});