// Nivel 1: Selección de Elementos
// El objetivo de este nivel es familiarizarse con querySelector y querySelectorAll y ver los resultados en la consola.

// Seleccionar por ID:
// Selecciona el <h1> con el id main-title y muéstralo en la consola.

//const mainTitle = document.getElemeqntById('main-title')
//o
const mainTitle = document.querySelector('#main-title') //esto seria
//sacandolo del css en vez del html, o sea. por la id

console.log(mainTitle)


// Selecciona el aside con el id sidebar y muéstralo en la consola.

const aside = document.getElementById('sidebar')
console.log(aside)



// Seleccionar por Clase:
// Selecciona todos los elementos con la clase nav-link y muestra la colección (NodeList) en la consola.

const nav = document.querySelectorAll('nav-link')
console.log(nav)


// Selecciona la primera tarjeta (.card) que encuentres en la sección de mamíferos y muéstrala en la consola.

const card = document.querySelector('#mammals .card')
//a tener en cuenta, al usar query selecter, solo te selecciona
//el primero de los elementos que busque, mientras que selector all
//si pasa todos
console.log(card)


// Seleccionar por Etiqueta:
// Selecciona todos los elementos <p> de la página y muéstralos en la consola.

const p = document.querySelectorAll('p')
console.log(p)

// Seleccionar con Selectores Complejos:
// Selecciona todos los <li> que están dentro de la tarjeta del león.

const li = document.querySelectorAll('#mammals .card[data-animal-type="land"] li')
console.log(li)


// Selecciona el elemento con la clase important que está dentro de la tarjeta del delfín.

const secondCard = document.querySelectorAll('.card' )[1];
const secondCartLiImportant = secondCard.querySelector('.important');
console.log("secondCartLiImportant", secondCartLiImportant);



// Selecciona todas las tarjetas (.card) que estén dentro de la sección con id mammals.
const mammalsCards = document.querySelectorAll('#mammals .card');
console.log("mammalsCards", mammalsCards);


// Seleccionar por Atributo:
// Selecciona todas las tarjetas que tengan el atributo data-animal-type="sea".

const seaCards = document.querySelectorAll(' .card[data-animal-type="sea"]');
console.log("seaCards", seaCards)


// Nivel 2: Modificación de Contenido y Clases
// Ahora se manipulan los elementos seleccionados.

// Cambiar Contenido:
// Cambia el texto del título principal (#main-title) por "La Gran Aventura Animal".

mainTitle.textContent = "La Gran Aventura Animal";

// Cambia el texto del enlace "Saber más..." (#more-info-link) por "Obtener más información".

const moreinfo = document.getElementById('more-info-link')
moreinfo.textContent = "Obtener mas informacion";


// Modifica el contenido del footer para que incluya tu nombre.

const footer = document.querySelector('footer p')
footer.textContent += " - Elizabeth"

// Manipular Clases:

// Añade la clase highlight a la sección de aves (#birds).

const highlight = document.querySelector('section#birds')
//highlight.setAttribute('class', 'highlight')

highlight.classList.add('highlight')


// Quita la clase important del <li> "Vista aguda" del águila.


const vista = document.querySelector("#birds li.important")
vista.classList.remove('important')

// Usando toggle, haz que al hacer clic en cualquier tarjeta (.card), se le añada o quite la clase highlight. 
// (Pista: necesitarás un bucle para añadir el evento a todas las tarjetas).
const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++){
    console.log(cards[i])
    //cards[i].setAttribute("onClick","toogleHighlight(" + i + ")")
    //cards[i].setAttribute("onClick",`toogleHighlight(${i})`)
    cards[i].setAttribute("onClick",`toogleHighlight(this)`)
}

//function toogleHighlight() {
function toogleHighlight(card) {
    console.log("haciendo toggle")
    //cards[i].classList.toggle('highlight')
    card.classList.toggle('highlight')
    console.log(this)
}

// Nivel 3: Creación y Eliminación de Elementos
// En este nivel se añaden y se quitan elementos del DOM.


// Crear y Añadir Elementos:
// Crea un nuevo <h2> con el texto "Reptiles".





// Crea una nueva sección con id="reptiles" y la clase category.





// Añade el <h2> que has creado dentro de la nueva sección.




// Finalmente, añade esta nueva sección de reptiles al main de la página, justo después de la sección de aves.




// Crear y Añadir una Nueva Tarjeta:
// Dentro de la nueva sección de reptiles, crea un article con la clase card.




// Dentro de la tarjeta, añade un <h3> con el texto "Serpiente".




// Añade también un párrafo <p> que diga "Reptil sin patas conocido por su sigilo.".




// Inserta esta nueva tarjeta dentro de la sección de reptiles.




// Eliminar Elementos:
// Selecciona y elimina el aside (#sidebar).




// Elimina la característica "Gran melena" de la lista de características del león.





// Nivel 4: Mover Elementos y Eventos
// Se combinan conceptos para reorganizar la página dinámicamente.





// Mover Elementos:
// Mueve la tarjeta del delfín para que aparezca antes que la del león dentro de la sección de mamíferos. 
// (Pista: usa insertBefore).




// Ejercicio Combinado (Bonus):
// Crea un botón button con el texto "Invertir Orden".





// Añade este botón justo después del <h1> principal.



// Haz que, al hacer clic en el botón, el orden de las secciones (#mammals y #birds) se invierta. 
// Es decir, si Aves está después de Mamíferos, al hacer clic, Aves debería aparecer primero. 
// Si se vuelve a hacer clic, deberían volver a su orden original.