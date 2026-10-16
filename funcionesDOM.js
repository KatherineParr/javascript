/*Crea las siguientes funciones también en el archivo “funcionesDOM.js”: 
1. Crea una función limpiarPanel() que elimina cualquier contenido de la div con 
id=”personas”. 
2. Crea una función mostrarNombres() que muestra todos los nombres de las 
personas en el div con id=”personas”. Puedes mostrarlo como listado. 
3. Crea una función botonesPersonas() que inserta un botón en nav para cada 
persona, dicho botón muestra el nombre de la persona y tiene el evento onclick 
con “mostrarPersonaId(id_de_la_persona)”. De esta forma, cuando se cree la 
función mostrarPersonaId, se podrá ver a esa persona cuando se pulse el botón. 
4. Crea una función mostrarPersona(persona) que recibe un objeto persona e  
inserta los datos de dicha persona en el div con id=”personas”; 
○ El formato en el que aparece esa persona debe ser: 

<div class="persona"> 
    <h2>Juan (30)</h2> 
    <p>Medicina</p> 
    <ul> 
        <li>Salud</li> 
        <li>Deportes</li> 
        <li>Tecnología</li> 
    </ul> 
</div>

5. Crea la función mostrarPersonaId(id) que muestra la persona del listado de 
personas cuyo id es el que se pasa como parámetro. Se debe mostrar en div 
id=”personas” con el formato anterior. 
6. Crea la función mostrarListadoPersonas(personas) que recibe un array de 
personas y las muestra en el div id=”personas” con el formato del apartado 4. 
7. Crea una función crearPersona que lee los input para el nombre, la edad, los 
estudios y los intereses (el id será un número aleatorio entre 1 y 99999). Inserta 
dicha persona en el listado de PERSONAS. Además, debe volver a mostrar el 
listado en pantalla para que se visualice. 
8. Crea una función filtrarEdad(minima, maxima) que recoge los datos de los input 
de filtrar por edad y muestra las personas filtradas por dicha edad. 
9. Añade en la visualización de una persona (ejercicio 4) un botón que sea eliminar 
dicha persona. Se debe eliminar del listado PERSONA. Actualiza el panel. */



function limpiarPanel() {
    document.getElementById("personas").innerHTML = "";
}

// getElementById busca el elemento HTML que tiene ese id.
// innerHTML = "" vacía todo lo que hay dentro de ese elemento.

/* 1. limpiarPanel
document es la página entera.
document.getElementById("personas") te da el <div id="personas">.
Al poner innerHTML = "" le quitas lo de dentro, pero el div sigue existiendo.

Antes:   <div id="personas"> <div class="persona">...</div> </div>
Después: <div id="personas"></div> */


function mostrarNombres() {
    limpiarPanel();

    const lista = document.createElement("ul");

    nombres(PERSONAS).forEach(nombre => {
        const elemento = document.createElement("li");
        elemento.textContent = nombre;
        lista.appendChild(elemento);
    });

    document.getElementById("personas").appendChild(lista);
}

// nombres(PERSONAS) devuelve un array de nombres.
// forEach ejecuta la flecha una vez por cada nombre.
// Se crea un li por nombre y se mete en el ul. Al final el ul se mete en el div.

/* 2. mostrarNombres
Cómo se construye HTML con JS, en miniatura:
const lista = document.createElement("ul");   // <ul></ul> suelto, aún no se ve
const li = document.createElement("li");      // <li></li> suelto
li.textContent = "Juan";                      // <li>Juan</li>
lista.appendChild(li);                        // <ul><li>Juan</li></ul>
Nada se ve hasta que lo metes en algo que ya está en la página.
Por eso la última línea hace appendChild(lista) sobre el div "personas".

forEach con la flecha:
["Juan", "María"].forEach(nombre => console.log(nombre));
Vuelta 1: nombre vale "Juan", vuelta 2: nombre vale "María".
Aquí la flecha lleva llaves porque hace varias cosas por vuelta. Como
forEach no usa lo que devuelve la flecha, no hace falta return.

Primero se llama a limpiarPanel() para que no se acumulen listas al
pulsar el botón varias veces.
Nota: el botón del HTML llama a mostrarNombres(PERSONAS), pero la función no
recibe nada y usa PERSONAS directamente. Funciona igual. */


function botonesPersonas() {
    const nav = document.querySelector("nav");

    PERSONAS.forEach(persona => {
        const boton = document.createElement("button");

        boton.textContent = persona.nombre;

        boton.onclick = () => mostrarPersonaId(persona.id);

        nav.appendChild(boton);
    });
}

// querySelector("nav") busca la etiqueta nav.
// Se crea un botón por persona con su nombre.
// onclick guarda qué debe pasar al pulsarlo.

/* 3. botonesPersonas
querySelector usa selectores de CSS:
document.querySelector("nav");                  // la etiqueta nav
document.querySelector("#personas");            // el elemento con id personas
document.querySelector('input[name="edad"]');   // el input con name="edad"

La línea importante:
boton.onclick = () => mostrarPersonaId(persona.id);
Significa: "cuando pulsen este botón, ejecuta mostrarPersonaId con el id de esta persona".
Los paréntesis vacíos () son porque la flecha no necesita ningún dato del click.

Sin la flecha, boton.onclick = mostrarPersonaId(persona.id) se ejecutaría al
crear el botón y no al pulsarlo.

Cada flecha se acuerda del persona de SU vuelta del bucle:
Vuelta 1: persona = Juan, el botón queda con () => mostrarPersonaId(61363)
Vuelta 2: persona = María, el botón queda con () => mostrarPersonaId(36461)
Por eso cada botón abre a su persona.

Esta función se llama una vez al final del archivo. */


function crearElementoPersona(persona) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "persona";

    const titulo = document.createElement("h2");
    titulo.textContent = `${persona.nombre} (${persona.edad})`;

    const estudios = document.createElement("p");
    estudios.textContent = persona.estudios;

    const lista = document.createElement("ul");

    persona.intereses.forEach(interes => {
        const elemento = document.createElement("li");
        elemento.textContent = interes;
        lista.appendChild(elemento);
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.onclick = () => {
        eliminarPersona(PERSONAS, persona.id);
        mostrarListadoPersonas(PERSONAS);
    };

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(estudios);
    tarjeta.appendChild(lista);
    tarjeta.appendChild(botonEliminar);

    return tarjeta;
}

// Construye la ficha HTML de una persona y la devuelve, pero NO la muestra.
// La usan mostrarPersona y mostrarListadoPersonas para no repetir el mismo código.

/* Ficha de una persona (ejercicios 4 y 9)
Esta función monta en memoria esto:
<div class="persona">
    <h2>Juan (30)</h2>
    <p>Medicina</p>
    <ul> <li>Salud</li> <li>Deportes</li> <li>Tecnología</li> </ul>
    <button>Eliminar</button>
</div>

className = "persona" le pone la clase, y así coge el estilo del CSS.

Las comillas invertidas permiten meter variables en un texto:
const nombre = "Juan"; const edad = 30;
`${nombre} (${edad})`     // "Juan (30)"

El forEach de los intereses recorre los intereses de ESA persona
(persona.intereses), no la lista general de personas. Crea un li por interés.

El botón Eliminar, al pulsarlo, hace dos cosas en orden:
1. eliminarPersona borra la persona del array PERSONAS.
2. mostrarListadoPersonas vuelve a dibujar los que quedan.
Si no redibujaras, la persona seguiría viéndose en pantalla aunque ya no
estuviera en el array. Esta flecha lleva llaves porque tiene dos líneas.

Por último return tarjeta. Cada llamada devuelve una ficha nueva y quien
la llame decide dónde ponerla. */


function mostrarPersona(persona) {
    limpiarPanel();

    if (!persona) {
        document.getElementById("personas").textContent =
            "No se ha encontrado la persona.";
        return;
    }

    document.getElementById("personas").appendChild(crearElementoPersona(persona));
}

// Limpia el panel, comprueba que la persona existe y muestra su ficha.

/* 4. mostrarPersona
!persona se lee "si NO hay persona". Si buscarPersonaPorId no encuentra a
nadie devuelve undefined, y undefined cuenta como false. Entonces se muestra
un mensaje y el return corta la función para que no siga.

Si sí hay persona, se crea su ficha con crearElementoPersona y se mete en el
div "personas". */


function mostrarPersonaId(id) {
    const persona = buscarPersonaPorId(PERSONAS, id);

    mostrarPersona(persona);
}

// Busca la persona por su id y se la pasa a mostrarPersona.

/* 5. mostrarPersonaId
Une dos funciones que ya existen:
buscarPersonaPorId (de funciones.js) encuentra el objeto o devuelve undefined.
mostrarPersona lo dibuja, o muestra el mensaje si no existe.
Por eso el if que comprueba si existe está en mostrarPersona y no aquí.

mostrarPersonaId(21325);   // muestra a Martina */


function mostrarListadoPersonas(personas) {
    limpiarPanel();

    personas.forEach(persona => {
        document.getElementById("personas").appendChild(crearElementoPersona(persona));
    });
}

// Limpia el panel una sola vez y añade una ficha por cada persona del array.

/* 6. mostrarListadoPersonas
Recibe el array por parámetro porque no siempre es PERSONAS. También se usa
con la lista ya filtrada por edad.

Por qué no se llama a mostrarPersona dentro del forEach: mostrarPersona hace
limpiarPanel() cada vez, así que borraría la ficha anterior y solo verías la
última persona. Aquí se limpia una vez y luego se añaden todas. */


function crearPersona() {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const edad = Number(document.querySelector('input[name="edad"]').value);
    const estudios = document.querySelector('input[name="estudios"]').value;
    const textoIntereses = document.querySelector('input[name="intereses"]').value;

    const listaIntereses = textoIntereses
        .split(",")
        .map(interes => interes.trim())
        .filter(interes => interes !== "");

    const id = Math.floor(Math.random() * 99999) + 1;

    insertarPersona(PERSONAS, id, nombre, edad, estudios, listaIntereses);

    mostrarListadoPersonas(PERSONAS);
}

// value recoge lo que hay escrito en cada input. Siempre es texto.
// Number convierte la edad a número.
// split, map y filter convierten el texto de intereses en un array limpio.
// Se genera un id aleatorio, se inserta la persona y se redibuja el listado.

/* 7. crearPersona
.value es siempre texto. Por eso la edad pasa por Number(), igual que en el
test: "25" pasa a ser 25.

Los intereses, paso a paso con el texto "Salud, Deportes,, Música":
.split(",")                  // ["Salud", " Deportes", "", " Música"]
.map(i => i.trim())          // ["Salud", "Deportes", "", "Música"] (trim quita los espacios de los lados)
.filter(i => i !== "")       // ["Salud", "Deportes", "Música"] (quita los vacíos)
Cada paso devuelve un array nuevo sobre el que se encadena el siguiente.

Math.random() da un decimal entre 0 y 0.999..., por 99999 queda entre 0 y
99998.9..., floor lo redondea hacia abajo (0 a 99998) y el + 1 lo deja entre
1 y 99999. Es la misma idea que el dado. */


function filtrarEdad(minima, maxima) {
    const inputMinima = document.querySelector('input[name="minima"]');
    const inputMaxima = document.querySelector('input[name="maxima"]');

    const edadMinima = minima === undefined
        ? Number(inputMinima.value)
        : Number(minima);

    const edadMaxima = maxima === undefined
        ? Number(inputMaxima.value)
        : Number(maxima);

    const personasFiltradas = filtrarPersonasPorEdad(
        PERSONAS,
        edadMinima,
        edadMaxima
    );

    mostrarListadoPersonas(personasFiltradas);
}

// Si no le pasan edades, las lee de los inputs.
// Filtra con la función de funciones.js y muestra solo esas personas.

/* 8. filtrarEdad
El ? : es el operador ternario: condición ? siEsTrue : siEsFalse
const edadMinima = minima === undefined ? Number(inputMinima.value) : Number(minima);
Se lee: "si no me pasaron minima, uso lo que haya en el input; si me la
pasaron, uso esa". El botón del HTML llama a filtrarEdad() sin nada, así que
siempre entra por la parte del input.

Con mínima 30 y máxima 35, filtrarPersonasPorEdad devuelve las personas de
30 a 35 y mostrarListadoPersonas las dibuja.
Ojo: si dejas un input vacío, Number("") da 0, y con los dos vacíos el rango
es 0 a 0 y no sale nadie. */


botonesPersonas();

// Esta llamada va fuera de cualquier función, así que se ejecuta al cargar.
// Funciona porque el HTML carga este archivo con defer, y para entonces el
// nav ya existe.