//para hayar el mayor de un grupo de numeros podemos o hacer un bucle, o
//podemos usar la funcion Math.max() que nos devuelve el mayor de un 
// grupo de numeros

let numeros = [4, 6, 1, 8, 2];
let mayor = Math.max(...numeros);
//los ... tres puntos son el operador de propagación, 
// que nos permite pasar un array como argumentos 
// individuales a una función, o en otras palabras, descomponer un array en 
// sus elementos individuales y se los pasa a la función como argumentos 
// separados.

console.log("El mayor número es: " + mayor);


//otras funciones asi son .min, que es el contrario, devuelve el menor


// .every que nos devuelve true si todos los elementos del array cumplen con 
// la condición, 



// .some que nos devuelve true si al menos un elemento cumple con la condición,


//  .filter que nos devuelve un nuevo array con los elementos que cumplen 
// con la condición, 


const productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Sombrero", precio: 15 }
];

productos.filter(producto => producto.precio > 20);

//en este caso, funciona como en bases de datos con un where, 
// nos devuelve un nuevo array con los elementos que cumplen con la 
// condición, en este caso, los productos cuyo precio es mayor a 20.

// .map que nos devuelve un nuevo array con los resultados de a
// plicar una función a cada elemento del array, 


// .reduce que nos devuelve un único valor al aplicar una función a 
// cada elemento del array y acumular el resultado, entre otras.



