
const boton_atras = document.getElementById('boton-atras');
const boton_siguiente = document.getElementById('boton-siguiente');
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let telefono = document.getElementById('telefono');
let nombre_error = document.getElementById('nombre-error');
let correo_error = document.getElementById('correo-error');
let telefono_error = document.getElementById('telefono-error');


function validar() {
    if (nombre.value === '' || correo.value === '' || telefono.value === '') {
        boton_siguiente.style.display = 'none';
        nombre_error.style.display = 'block';
        correo_error.style.display = 'block';
        telefono_error.style.display = 'block';
        return false;
    } else {
        return true;
    }

}