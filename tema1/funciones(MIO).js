/*Las funciones proporcionadas realizan las siguientes operaciones: 
1. buscarPersonaPorId(personas, id): Busca y devuelve la primera persona en
el array personas cuyo id coincide con el id proporcionado. 
2. filtrarPersonasPorEstudios(personas, estudios): Filtra y devuelve un 
nuevo array de personas que tienen los estudios especificados. 
3. filtrarPersonasPorEdad(personas, minEdad, maxEdad): Filtra y devuelve 
un nuevo array de personas cuya edad está dentro del rango especificado 
por minEdad y maxEdad (inclusive). 
4. filtrarPersonaPorInteres(personas, interes): Filtra y devuelve un nuevo 
array de personas que tienen el interes proporcionado entre sus intereses. 
5. nombres(personas): Mapea el array de personas y devuelve un nuevo array 
que contiene solo los nombres de las personas. 
6. mediaEdad(personas): Calcula y devuelve la edad media de todas las 
personas en el array personas. 
7. intereses(personas): Extrae y devuelve un array de todos los intereses 
únicos presentes en el array de personas. 
8. insertarPersona(personas, id, nombre, edad, estudios, intereses): 
Inserta una nueva persona en el array personas con los datos especificados. 
9. eliminarPersona(personas, id): Elimina una persona del array personas 
buscando por su id. */

function buscarPersonaPorId(personas, id) {
    return personas.find(persona => persona.id === id);
}

// find recorre la lista y devuelve la primera persona que cumple la condición.
// Si ninguna cumple, devuelve undefined.

/* 1. buscarPersonaPorId
Mini ejemplo con números:
const numeros = [4, 9, 12, 7];
numeros.find(n => n > 8);    // 9, es el primero que cumple y ya no sigue mirando
numeros.find(n => n > 50);   // undefined, ninguno cumple

Con personas, buscando el id 21325:
Vuelta 1: persona = Juan, 61363 === 21325 da false, sigue.
Vuelta 2: persona = María, 36461 === 21325 da false, sigue.
...
Vuelta 12: persona = Martina, 21325 === 21325 da true, para y devuelve a Martina entera.
Devuelve el objeto completo, no solo el id. */


function filtrarPersonasPorEstudios(personas, estudios) {
    return personas.filter(persona => persona.estudios === estudios);
}

// filter mira todas las personas y se queda con las que cumplen la condición.
// Devuelve un array nuevo. Si no cumple ninguna, devuelve un array vacío [].

/* 2. filtrarPersonasPorEstudios
Diferencia con find: find devuelve UNO, filter devuelve TODOS los que cumplen.

Mini ejemplo:
[5, 12, 8, 20].filter(n => n > 8);   // [12, 20]

Con personas, buscando "Medicina":
Juan tiene "Medicina", da true, se queda.
María tiene "Diseño Gráfico", da false, se descarta.
Lucía e Isabel también tienen "Medicina", se quedan.
Resultado: [Juan, Lucía, Isabel]
estudios es un texto, por eso se compara directamente con ===. */


function filtrarPersonasPorEdad(personas, minEdad, maxEdad) {
    return personas.filter(persona =>
        persona.edad >= minEdad && persona.edad <= maxEdad
    );
}

// Dos condiciones unidas con &&: tienen que cumplirse las dos a la vez.
// Los límites cuentan como válidos porque se usa >= y <=.

/* 3. filtrarPersonasPorEdad
La flecha está partida en dos líneas, pero es una sola expresión.
&& significa "y": las dos comparaciones deben dar true.

Rango 35 a 40:
Lucía (35): 35 >= 35 es true Y 35 <= 40 es true, entra.
Sofía (40): 40 >= 35 es true Y 40 <= 40 es true, entra.
Juan (30): 30 >= 35 es false, ya no hace falta mirar la otra, no entra.
Carlos (58): 58 >= 35 es true pero 58 <= 40 es false, no entra.
Resultado con tus datos: Sofía, Lucía y Martina. */


function filtrarPersonaPorInteres(personas, interes) {
    return personas.filter(persona =>
        persona.intereses.includes(interes)
    );
}

// persona.intereses es un array. includes comprueba si ese array contiene el interés.

/* 4. filtrarPersonaPorInteres
Aquí no se puede usar persona.intereses === interes, porque estarías
comparando un array entero con un texto. Hay que preguntar si el texto
está DENTRO del array, y para eso sirve includes.

Mini ejemplo:
["Salud", "Deportes"].includes("Salud");   // true
["Salud", "Deportes"].includes("Cocina");  // false

Con "Salud": Juan, Ana, Lucía, Isabel, Javier y Raúl tienen "Salud" en su
array, así que el filter los deja pasar. */


function nombres(personas) {
    return personas.map(persona => persona.nombre);
}

// map transforma cada elemento en otra cosa y devuelve un array nuevo.
// Aquí cada persona se convierte solo en su nombre.

/* 5. nombres
map siempre devuelve un array con tantos elementos como el original.
Lo que escribe tu flecha es en lo que se convierte cada elemento.

Mini ejemplo:
[1, 2, 3].map(n => n * 2);   // [2, 4, 6]

Con personas:
{ nombre: "Juan", edad: 30 }  se convierte en  "Juan"
{ nombre: "María", edad: 25 } se convierte en  "María"
Resultado: ["Juan", "María", ...]

Diferencia con filter: filter decide qué elementos se quedan (devuelve
true o false). map decide en qué se convierte cada elemento. */


function mediaEdad(personas) {
    if (personas.length === 0) {
        return 0;
    }

    const suma = personas.reduce(
        (total, persona) => total + persona.edad,
        0
    );

    return suma / personas.length;
}

// reduce va acumulando un valor. Aquí acumula la suma de edades.
// El 0 es el valor con el que empieza total.
// El if evita dividir entre 0 cuando no hay personas.

/* 6. mediaEdad
La flecha tiene DOS parámetros, por eso lleva paréntesis:
total es lo acumulado hasta ahora, persona es la persona de esta vuelta.
Lo que devuelve la flecha pasa a ser el nuevo total en la siguiente vuelta.

Mini ejemplo con edades [20, 30, 40]:
Empieza con total = 0 (el segundo argumento de reduce).
Vuelta 1: 0 + 20 = 20, ese 20 es el total de la siguiente vuelta.
Vuelta 2: 20 + 30 = 50
Vuelta 3: 50 + 40 = 90
reduce devuelve 90. Luego 90 / 3 = 30, que es la media.

El if del principio: sin personas la suma es 0 y 0 / 0 da NaN. Con el if
devuelve 0 y te evitas ese valor raro. */


function intereses(personas) {
    const listaIntereses = personas.flatMap(persona => persona.intereses);

    return [...new Set(listaIntereses)];
}

// flatMap saca los intereses de cada persona y los junta todos en un solo array.
// Set elimina los repetidos.
// [...] convierte ese Set otra vez en un array normal.

/* 7. intereses
Paso 1. flatMap
Con map saldría un array de arrays (uno por persona):
[["Salud", "Deportes"], ["Deportes", "Música"]]
flatMap hace lo mismo pero aplanando, y queda uno solo:
["Salud", "Deportes", "Deportes", "Música"]

Paso 2. Set
Un Set es una colección que no admite repetidos:
new Set([1, 1, 2, 2, 3]);   // Set con 1, 2, 3

Paso 3. [...set]
Un Set no es un array, y no tiene filter, map, etc. Los tres puntos
sacan sus elementos y los meten en un array nuevo:
[...new Set([1, 1, 2])];    // [1, 2]

Resultado: ["Salud", "Deportes", "Música"] sin repetidos. */


function insertarPersona(personas, id, nombre, edad, estudios, intereses) {
    const persona = {
        id: id,
        nombre: nombre,
        edad: edad,
        estudios: estudios,
        intereses: intereses
    };

    personas.push(persona);

    return persona;
}

// Se crea un objeto con los datos recibidos.
// push lo añade al final del array original.

/* 8. insertarPersona
{ id: id } significa "la propiedad id vale lo que trae el parámetro id".
Se puede escribir solo { id, nombre, ... } y es lo mismo, pero así se ve claro.

push modifica el array original, el mismo que tienes fuera de la función,
por eso no hace falta devolver nada para que se guarde. Es como lista.add()
en Java. Que PERSONAS sea const no lo impide: const solo prohíbe
asignarle otro array, pero puedes añadir y quitar cosas de dentro.

Mini ejemplo:
const nums = [1, 2];
nums.push(3);          // nums ahora es [1, 2, 3] */


function eliminarPersona(personas, id) {
    const posicion = personas.findIndex(persona => persona.id === id);

    if (posicion !== -1) {
        personas.splice(posicion, 1);
        return true;
    }

    return false;
}

// findIndex devuelve la posición de la persona, o -1 si no la encuentra.
// splice(posicion, 1) borra 1 elemento desde esa posición.

/* 9. eliminarPersona
Es como find, pero en vez del objeto devuelve su posición en el array.

Mini ejemplo:
const nums = [10, 20, 30];
nums.findIndex(n => n === 20);   // 1, porque las posiciones empiezan en 0
nums.findIndex(n => n === 99);   // -1, no existe
nums.splice(1, 1);               // borra 1 elemento desde la posición 1
// nums ahora es [10, 30]

Por qué se comprueba -1: si llamas a splice(-1, 1), JavaScript cuenta desde
el final y borraría el último elemento sin avisar. Con el if solo borras
cuando la persona existe. Devuelve true si borró y false si no existía. */