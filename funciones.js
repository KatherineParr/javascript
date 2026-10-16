const buscarPersonaPorId = (personas, id) => personas.find(p => p.id === id);

const filtrarPersonasPorEstudios = (personas, estudios) => personas.filter(p => p.estudios == estudios);

const filtrarPersonasPorEdad = (personas, minEdad, maxEdad) => personas.filter(p => p.edad >= minEdad && p.edad <= maxEdad);

const filtrarPersonaPorInteres = (personas, interes) => personas.filter( p => p.intereses.includes(interes));

const nombres = (personas) => personas.map(p => p.nombre);

const mediaEdad = (personas) => personas.reduce( (acu, p) => p.edad + acu, 0) / personas.length;

const intereses = (personas) => {
    let listaIntereses = new Set();
    personas.forEach( p => p.intereses.forEach( i => listaIntereses.add(i)));
    return [...listaIntereses];
};

const insertarPersona = (personas, id, nombre, edad, estudios, intereses) => {
    personas.push({id, nombre, edad, estudios, intereses});
};

const eliminarPersona = (personas, id) => {
    let index = personas.findIndex(p => p.id === id);
    if (index >= 0 ) {
        personas.splice(index, 1);
    }
}

