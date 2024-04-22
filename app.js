
 const botones = document.querySelectorAll('.plan');
 botones.forEach(boton => {
   boton.addEventListener('click', () => {
    boton.classList.toggle('seleccionado');  });
});

const nav_seccion_1 = document.getElementById('nav-sec-1');
const nav_seccion_2 = document.getElementById('nav-sec-2');
const nav_seccion_3 = document.getElementById('nav-sec-3');
const nav_seccion_4 = document.getElementById('nav-sec-4');
const seccion_1 = document.getElementById('step-1-contenedor');
const seccion_2 = document.getElementById('step-2-contenedor');
const seccion_3 = document.getElementById('step-3-contenedor');
const seccion_4 = document.getElementById('step-4-contenedor');
const seccion_confirmacion = document.getElementById('step-confirmacion');
const boton_atras = document.getElementById('boton-atras');
const boton_siguiente = document.getElementById('boton-siguiente');
const plan_arcade = document.getElementById('plan-arcade');
const plan_avanzado = document.getElementById('plan-avanzado');
const plan_pro = document.getElementById('plan-pro');

// Validar campos
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let telefono = document.getElementById('telefono');
let nombre_error = document.getElementById('nombre-error');
let correo_error = document.getElementById('correo-error');
let telefono_error = document.getElementById('telefono-error');


// Boton atras

boton_atras.addEventListener('click', () => {

    if (!seccion_2.classList.contains('hidden')) {
        seccion_2.classList.add('hidden');
        nav_seccion_2.classList.remove('active');
        seccion_1.classList.remove('hidden');
        nav_seccion_1.classList.add('active');
    } else if (!seccion_3.classList.contains('hidden')) {
        seccion_3.classList.add('hidden');
        nav_seccion_3.classList.remove('active');
        nav_seccion_2.classList.add('active');
        seccion_2.classList.remove('hidden');
    } else if (!seccion_4.classList.contains('hidden')) {
        seccion_4.classList.add('hidden');
        nav_seccion_4.classList.remove('active');
        boton_siguiente.innerText = 'Next Step';
        seccion_3.classList.remove('hidden');
        nav_seccion_3.classList.add('active');
    }
    });

    // Boton siguiente

boton_siguiente.addEventListener('click', () => {
    if (!seccion_1.classList.contains('hidden') && validarNombre() && validarCorreo() && validarTelefono()) {
        seccion_1.classList.add('hidden');
        nav_seccion_1.classList.remove('active');
        seccion_2.classList.remove('hidden');
        nav_seccion_2.classList.add('active');
    } else if (!seccion_2.classList.contains('hidden') && validarNombre() && validarCorreo() && validarTelefono()) {
        seccion_2.classList.add('hidden');
        nav_seccion_2.classList.remove('active');
        seccion_3.classList.remove('hidden');
        nav_seccion_3.classList.add('active');
    } else if (!seccion_3.classList.contains('hidden') && validarNombre() && validarCorreo() && validarTelefono()) {
        seccion_3.classList.add('hidden');
        nav_seccion_3.classList.remove('active');
        seccion_4.classList.remove('hidden');
        nav_seccion_4.classList.add('active');
        boton_siguiente.innerText = 'Confirm';
    } else if (!seccion_4.classList.contains('hidden') && validarNombre() && validarCorreo() && validarTelefono()) {
        seccion_4.classList.add('hidden');
        nav_seccion_4.classList.remove('active');
        seccion_confirmacion.classList.remove('hidden');
        seccion_confirmacion.classList.add('flex');
        boton_siguiente.style.display = 'none';
        boton_atras.innerText = '';
    }   
});

// Validar campos

function validarNombre() {
    if (nombre.value.trim() === '') {
        nombre_error.style.display = 'block';
        return false;
    } else {
        nombre_error.innerText = '';
        return true;
    }
}

function validarCorreo() {
    if (correo.value.trim() === '') {
        correo_error.style.display = 'block';
        return false;
    } else if (!correo.value.includes('@')) {
        correo_error.style.display = 'block';
        return false;
    } else {
        correo_error.innerText = '';
        return true;
    }
}

function validarTelefono() {
    if (telefono.value.trim() === '') {
        telefono_error.style.display = 'block';
        return false;
    } 
    else if (!telefono.value.match(/^\d{10}$/)) {
        telefono_error.style.display = 'block';
        return false;
    }
    
    else {;
        return true;
    }
}





let planSeleccionado = ''; // Variable para almacenar el plan seleccionado

// Añadir evento focus a cada elemento del plan y mostrar el valor en la consola
plan_arcade.addEventListener('focus', function() {
    planSeleccionado = valor_plan[0].innerText;
    console.log( planSeleccionado);
});

plan_avanzado.addEventListener('focus', function() {
    planSeleccionado = valor_plan[1].innerText;
    console.log( planSeleccionado);
});

plan_pro.addEventListener('focus', function() {
    planSeleccionado = valor_plan[2].innerText;
    console.log(planSeleccionado);
});

const toggle = document.getElementById('toggle');
const mes_gratis_1 = document.getElementById('mes-gratis-1');
const mes_gratis_2 = document.getElementById('mes-gratis-2');
const mes_gratis_3 = document.getElementById('mes-gratis-3');
let mes_año_1 = document.getElementById('mes/año-1');
let mes_año_2 = document.getElementById('mes/año-2');
let mes_año_3 = document.getElementById('mes/año-3');
let opcion_mes = document.getElementById('opcion-mes');
let opcion_año = document.getElementById('opcion-año');
let precio_only_services = document.getElementById('precio-only-services')
let precio_larger_storage = document.getElementById('precio-larger-storage')
let precio_customizable_profile = document.getElementById('precio-customizable-profile')
let precio_final_plan = document.getElementById('precio-final-plan');
let mes_o_año = document.querySelector('.mes-año');
let per_mes_o_año = document.querySelector('.per-mes-año');
precio_final_plan.innerText = planSeleccionado;

let valor_plan = document.getElementsByClassName('valor-plan');
opcion_mes = true;
opcion_año = false;

toggle.addEventListener('click', () => {
    if (opcion_mes === true) {
        opcion_mes = false;
        opcion_año = true;
        valor_plan[0].innerText = '$90/yr';
        valor_plan[1].innerText = '$120/yr';
        valor_plan[2].innerText = '$150/yr';
        mes_gratis_1.innerText = '2 months free';
        mes_gratis_2.innerText = '2 months free';
        mes_gratis_3.innerText = '2 months free';
        mes_año_1.innerText = '+$10/yr';
        mes_año_2.innerText = '+$20/yr';
        mes_año_3.innerText = '+$20/yr';
        precio_only_services.innerText = '+$10/yr';
        precio_larger_storage.innerText = '+$20/yr';
        precio_customizable_profile.innerText = '+$20/yr';
        mes_o_año.innerText = '(Yearly)';
    per_mes_o_año.innerText = 'per year';


    } else {
        opcion_mes = true;
        opcion_año = false;
        valor_plan[0].innerText = '$9/mo';
        valor_plan[1].innerText = '$12/mo';
        valor_plan[2].innerText = '$15/mo';
        mes_gratis_1.innerText = '';
        mes_gratis_2.innerText = '';
        mes_gratis_3.innerText = '';
        mes_año_1.innerText = '+$1/mo';
        mes_año_2.innerText = '+$2/mo';
        mes_año_3.innerText = '+$2/mo';
        precio_only_services.innerText = '+$1/mo';
        precio_larger_storage.innerText = '+$2/mo';
        precio_customizable_profile.innerText = '+$2/mo';
        mes_o_año.innerText = '(Monthly)';
        per_mes_o_año.innerText = 'per month';
    }       
    
});


let only_services = document.getElementById('only-service');
let larger_storage = document.getElementById('larger-storage');
let customizable_profile = document.getElementById('customizable-profile');
let nombre_larger_storage = document.getElementById('nombre-larger-storage');
let nombre_customizable_profile = document.getElementById('nombre-customizable-profile');
let nombre_only_services = document.getElementById('nombre-only-services');
let total = 0;

only_services.addEventListener('change', () => {
    if (only_services.checked) {
        nombre_only_services.style.display = 'block';
        precio_only_services.style.display = 'block'
    } else {
        nombre_only_services.style.display = 'none';
        precio_only_services.style.display = 'none';
    }
});

larger_storage.addEventListener('change', () => {
    if (larger_storage.checked) {
        nombre_larger_storage.style.display = 'block';
        precio_larger_storage.style.display = 'block'
    } else {
        nombre_larger_storage.style.display = 'none';
        precio_larger_storage.style.display = 'none';
    }
});

customizable_profile.addEventListener('change', () => {
    if (customizable_profile.checked) {
        nombre_customizable_profile.style.display = 'block';
        precio_customizable_profile.style.display = 'block'
    } else {
        nombre_customizable_profile.style.display = 'none';
        precio_customizable_profile.style.display = 'none';
    }
});

let plan_escogido = document.getElementById('plan_escogido');


plan_arcade.addEventListener('click', () => {
    planSeleccionado = valor_plan[0].innerText;
    precio_final_plan.innerText = planSeleccionado;
    total = 9;
    plan_escogido.innerText = 'Arcade' + ' ' +  mes_o_año.innerText;
    boton_siguiente.disabled = false;
    if (opcion_año) {
        total = 90;
    }
});

plan_avanzado.addEventListener('click', () => {
    planSeleccionado = valor_plan[1].innerText;
    precio_final_plan.innerText = planSeleccionado;
    total = 12;
    plan_escogido.innerText = 'Advanced' + ' ' + mes_o_año.innerText;
    boton_siguiente.disabled = false;
    if (opcion_año) {
        total = 120;
    }
}); 

plan_pro.addEventListener('click', () => {
    planSeleccionado = valor_plan[2].innerText;
    total = 15;
    precio_final_plan.innerText = planSeleccionado;
    plan_escogido.innerText = 'Pro' + ' ' + mes_o_año.innerText;
    boton_siguiente.disabled = false;

    if (opcion_año) {
        total = 150;
    }
});


// Función para actualizar el precio total
function actualizarPrecioTotal() {
    let precio_total = document.getElementById('precio-total');
    let precio = 0;

    if (only_services.checked) {
        precio += 1;
        if (opcion_año === true) {
            precio += 10;
        }
    }

    if (larger_storage.checked) {
        precio += 2;
        if (opcion_año === true) {
            precio += 20;
        }
    }

    if (customizable_profile.checked) {
        precio += 2;
        if (opcion_año === true) {
            precio += 20;
        }
        

    }

    precio_total.innerText = '+$' + (total + precio) + ' ' + mes_o_año.innerText;
}

// Agregar eventos de cambio para los elementos
only_services.addEventListener('change', actualizarPrecioTotal);
larger_storage.addEventListener('change', actualizarPrecioTotal);
customizable_profile.addEventListener('change', actualizarPrecioTotal);





