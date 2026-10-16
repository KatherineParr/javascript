const divPersonas = document.getElementById('personas');
const navMenu = document.querySelector('nav');
const inputNombre = document.querySelector('[name="nombre"]');
const inputEdad = document.querySelector('[name="edad"]');
const inputEstudios = document.querySelector('[name="estudios"]');
const inputIntereses = document.querySelector('[name="intereses"]');
const inputEdadMin = document.querySelector('[name="minima"]');
const inputEdadMax = document.querySelector('[name="maxima"]');

function limpiarPanel() {
    divPersonas.innerHTML = "";
}

function mostrarNombres() {
    limpiarPanel();
    const ulListadoPersonas = document.createElement('ul');
    nombres(PERSONAS).forEach(nombre => {
        const liNombre = document.createElement('li');
        liNombre.textContent = nombre;
        ulListadoPersonas.appendChild(liNombre);
    })
    divPersonas.appendChild(ulListadoPersonas);
}

function botonesPersonas() {
    PERSONAS.forEach(persona => {
        const btnPersona = document.createElement('button');
        btnPersona.textContent = persona.nombre;
        btnPersona.onclick = () => mostrarPersonaId(persona.id)
        navMenu.appendChild(btnPersona);
    })
}

function mostrarPersona(persona) {
    const cardPersona = document.createElement('div');
    cardPersona.classList.add('persona');
    const h2Persona = document.createElement('h2');
    h2Persona.textContent = `${persona.nombre} (${persona.edad})`;
    const pEstudios = document.createElement('p');
    pEstudios.textContent = persona.estudios;
    const ulIntereses = document.createElement('ul');
    persona.intereses.forEach(interes => {
        const liInteres = document.createElement('li');
        liInteres.textContent = interes;
        ulIntereses.appendChild(liInteres);
    })
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => {
       eliminarPersona(PERSONAS, persona.id);
       cardPersona.remove();
    };
    cardPersona.append(h2Persona, pEstudios, ulIntereses,btnEliminar);
    divPersonas.appendChild(cardPersona);
}

function mostrarPersonaId(id) {
    const persona = buscarPersonaPorId(PERSONAS, id);
    if (personas) mostrarPersona(persona);
}

function mostrarListadoPersonas(personas) {
    limpiarPanel();
    personas.forEach(persona => mostrarPersona(persona))
}

function crearPersona() {
    const nombre = inputNombre.value;
    const edad = parseInt(inputEdad.value);
    const estudios = inputEstudios.value;
    const intereses = inputIntereses.value.split(',').map(interes => interes.trim());
    const id = Math.floor(Math.random() * 99998) + 1

    insertarPersona(PERSONAS, id, nombre, edad, estudios, intereses);

    mostrarPersonaId(id);
}

function filtrarEdad() {
    const edadMin = parseInt(inputEdadMin.value);
    const edadMax = parseInt(inputEdadMax.value);
    console.log(edadMin, edadMax);
    const personasFiltradasEdad = PERSONAS.filter(
        p => p.edad >= edadMin && p.edad <= edadMax
    )   

    console.log(personasFiltradasEdad);

    mostrarListadoPersonas(personasFiltradasEdad);
}
