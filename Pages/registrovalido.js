//Se agrega un evento que se activa cuando el contenido HTML fue cargado. Se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    const formregistro = document.querySelector('formregistro');
    //Se agrega un evento de sonido que se activa cuando se intenta enviar el formulario
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            console.log('El formulario no es válido. Por favor, corrige los errores.');
            event.preventDefault(); 
            //Se evita que el formulario se envíe si hay errores de validación
        } else {
            console.log('El formulario es válido. Enviar datos...');
            //Se puede enviar los datos del formulario o realizar otras acciones
        }
    });

    const validateForm = () => {
        let isValid = true;
        //Valida el campo nombre
        isValid = validateField('nombre', 'El nombre es obligatorio') && isValid;
        //Valida el campo apellido
        isValid = validateField('apellido', 'El apellido es obligatorio') && isValid;
        // Validar campo email
        isValid = validateEmailField('email', 'El correo electrónico no es válido') && isValid;
        //Valida el campo contraseña
        isValid = validateField('password', 'La contraseña es obligatoria') && isValid;
        //Validar campo fecha de nacimiento
        isValid = validateField('date', 'La fecha de nacimiento es obligatoria') && isValid;
        //Validar campo país
        isValid = validateField('pais', 'El país es obligatorio') && isValid;
        //Validar checkbox términos y condiciones
        const terminos = document.getElementById('terminos').checked;
        if (!terminos) {
            isValid = false;
            setErrorFor(document.getElementById('terminos'), 'Debes aceptar los términos y condiciones');
        } else {
            setSuccessFor(document.getElementById('terminos'));
        }
        return isValid;
    };

    // Se recibe el id del campo y el mensaje de error. Valida si el campo está vacío
    const validateField = (fieldId, errorMessage) => {
        const field = document.getElementById(fieldId);
        //Se levanta el elemento por su id
        const value = field.value.trim(); 
        //A value se le quitan los espacios en blanco
        //Se valida si el campo está vacío
        if (value === '') {
            //Se invoca la función setErrorFor para mostrar el campo y el mensaje de error
            setErrorFor(field, errorMessage);
            return false;
        } else {
            //Se invoca la función setSuccessFor para pasar el campo
            setSuccessFor(field);
            return true;
        }
    };

    //Se recibe el campo y el mensaje de error. Se valida si el campo está vacío o si el email no es válido
    const validateEmailField = (fieldId, errorMessage) => {
        const field = document.getElementById(fieldId);
        const email = field.value.trim();
        if (email === '') {
            setErrorFor(field, 'El correo electrónico es obligatorio');
            return false;
        } else if (!isEmail(email)) {
            setErrorFor(field, errorMessage);
            return false;
        } else {
            setSuccessFor(field);
            return true;
        }
    };

    //Se recibe el campo y el mensaje de error. Se agrega la clase error al div padre del campo y muestra el mensaje de error
    const setErrorFor = (input, message) => {
        //Se obtiene el div padre
        const formControl = input.closest('div');
        //Se levanta la clase del elemento que contiene el mensaje de error
        const errorText = formControl.querySelector('.error-text');
        //Se agrega la clase error al div padre
        formControl.classList.add('error');
        //Se muestra el mensaje de error
        errorText.innerText = message;
        //Se pone el foco en el campo
        input.focus();
    };
    
    //Se recibe el campo y elimina la clase error del div padre del campo, también, elimina el mensaje de error
    const setSuccessFor = (input) => {
        //Se obtiene el div padre
        const formControl = input.closest('div');
        //Se quita la clase error al div padre
        formControl.classList.remove('error');
        //Se levanta por su clase el elemento que contiene el mensaje de error
        const errorText = formControl.querySelector('.error-text');
        //Se elimina el mensaje de error
        errorText.innerText = '';
    };

    //Función que aprueba si es un mail valido con una expresion regular
    const isEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    //Se agregan eventos para borrar las clases de error cuando se completa el input o se presiona tab
    formregistro.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            //Se obtiene el valor del campo y elimina los espacios en blanco
            const value = input.value.trim();
            //Si el campo no está vacío, elimina cualquier mensaje de error
            if (value !== '') {
                setSuccessFor(input);
            }
        });
    });

    //Se agregan eventos para borrar las clases de error cuando se selecciona una opción del select
    form.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', () => {
            //Se obtiene el valor seleccionado del campo
            const value = select.value;
            //Si se selecciona una opción, elimina cualquier mensaje de error
            if (value !== '') {
                setSuccessFor(select);
            }
        });
    });
});