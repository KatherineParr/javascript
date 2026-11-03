//constantes de la primera funcion
const conceptoInput = document.getElementById('inpConcepto')
const cantidadInput = document.getElementById('inpCant')
const precioInput = document.getElementById('inpPrecio')


const botonInsertar = document.getElementById('insertar')
const bodyTabla = document.getElementById('tabla-body')

//segunda
let subtotal = document.getElementById('numSub')
const impuestos = document.getElementById('numImp')
const total = document.getElementById('numTotal')

//tercera
const tasaRadios = document.getElementsByName('impuesto')


function insertarFormulario(){ //esta es la main de recoger datos e insertarlos
 //leer datos del formularios
    let concepto = conceptoInput.value
    let cantidad = Number(cantidadInput.value)
    let precio = Number(precioInput.value)
    //vulue es el contenido, es el que hay que leer

    //luego se puede verificar tipo no precio negativo
    
    //se llama a la otra funcion y se pasan los datos
    insertarProductoDatos(concepto, cantidad, precio)
}

function insertarProductoDatos(concepto, cantidad, precio){
    //llamamos a la otra para no leer directamente
    //recibe los param,etro y crea las lines

    let nuevaLinea = document.createElement('tr')

    
    let conceptoDatos = document.createElement('td')
    let cantidadDatos = document.createElement('td')
    let precioDatos = document.createElement('td')
    let totalDatos = document.createElement('td')
    //se le añade al crear el elemento una clse para poder ser llamado o locali
    //zado despues
    totalDatos.classList.add('precioTotal')
    let eliminarSecc = document.createElement('td')

    //tenemos que añadir luego todo los apends correspondientes
    //primewro a quien y luego quien
    bodyTabla.appendChild(nuevaLinea)
    //con el append puedes añadir varios a la vez
    nuevaLinea.append(conceptoDatos, cantidadDatos, precioDatos, totalDatos, eliminarSecc)


    //con los elementos td y todo ya creado, solo hay que llamar a a la otra
    //funcion para insertar los elementos

    //rellenar lo td
    
    conceptoDatos.textContent = concepto 
    cantidadDatos.textContent = cantidad 
    precioDatos.textContent = precio.toFixed(2) + "€" 
    //el tofixed es para que limite a dos y puedes añadir el +
    //y te lo concatena tipo string

    //insertar lo otros por calculo
    
    //hacer el calculo en un avriable aparte
    let subtotal = cantidad * precio
    totalDatos.textContent = subtotal.toFixed(2) + "€"

    //y añadimos lo de elimiar con solo una x
    //el text conent es porque lo demas es referencia y esto le deice pa añadir los datos
    eliminarSecc.textContent = "X"

    //llamamos a la otra funcion para recalcular el subtotal
    recalcularTotales()

}

function recalcularTotales(){
    //para calcular leer todas las columnas
    let listaPrecio = bodyTabla.querySelectorAll('.precioTotal')
    //sacamos todos con la clase esa
    


    //○ Debe calcular el Subtotal sumando el "Precio Total" de todas las filas de
    //la tabla.

    //pa convertir un elemento en array tres puntos y corchetes
    let precios = [...listaPrecio].map(elemento => 
        parseFloat(elemento.textContent)
    );

    let total = precios.reduce((acumulador, valor) => {
                return acumulador + valor
            }, 0)
    
    //elementos tipo td y tal asi no se pueden modificar directamente usa text content par contenido
    
    subtotal.textContent = total.toFixed(2)


    
    //○ Debe calcular los Impuestos multiplicando el "Subtotal" por la tasa de
    //impuestos actualmente seleccionada.




    //○ Debe calcular el TOTAL sumando el "Subtotal" y los "Impuestos".
}

/* Cambiar Tasa de Impuestos:
○ Al hacer clic en cualquiera de las opciones de tasa 5%, 10%, 15% o
20%):
○ La aplicación debe actualizar la tasa activa.
○ El campo "Tasa" en el resumen debe mostrar el nuevo porcentaje.
○ Se debe llamar a la función de recálculo total para actualizar los
"Impuestos" y el "TOTAL" con el nuevo porcentaje. */


function cambiarTasa(){

    //seleccionamos todos los elementos con nombre name
    

    //

}


/* Eliminar Producto:
○ Al hacer clic en el botón de eliminar producto de cualquier fila de
producto:
○ Esa fila (<tr>) específica debe ser eliminada de la tabla.
○ Se debe llamar a la función de recálculo total. */

function eliminarProducto(){

}


//para llamar al boton insertar que cuando se haga click en el llame al metodo de recoger datos
botonInsertar.addEventListener('click', insertarFormulario)