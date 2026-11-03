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
const tasa = document.getElementById('numTasa')
//querySelectorAll en vez de getElementsByName porque este si tiene forEach
const tasaRadios = document.querySelectorAll('input[name="impuesto"]')

//tasa activa, se lee del radio que viene marcado al cargar (el del 20)
//tiene que ser numero porque luego se multiplica
let tasaActual = Number(document.querySelector('input[name="impuesto"]:checked').value)

function insertarFormulario(){ //esta es la main de recoger datos e insertarlos
 //leer datos del formularios
    let concepto = conceptoInput.value
    let cantidad = Number(cantidadInput.value)
    let precio = Number(precioInput.value)
    //vulue es el contenido, es el que hay que leer

    //luego se puede verificar tipo no precio negativo
    
    //se llama a la otra funcion y se pasan los datos
    insertarProductoDatos(concepto, cantidad, precio)

    //limpiar los campos, la cantidad vuelve a 1 como al empezar
    conceptoInput.value = ""
    cantidadInput.value = 1
    precioInput.value = ""
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

    //el enunciado pide un boton, asi que se crea un button y se mete dentro del td
    let botonEliminar = document.createElement('button')
    botonEliminar.textContent = "X"
    botonEliminar.classList.add('btnEliminar')
    eliminarSecc.appendChild(botonEliminar)

    //el boton no existe hasta que se crea la fila, por eso el listener se pone aqui
    //y no arriba del todo como en los radios
    botonEliminar.addEventListener('click', eliminarProducto)

    //llamamos a la otra funcion para recalcular el subtotal
    recalcularTotales()

}

function recalcularTotales(){
    //para calcular leer todas las columnas
        listaPrecio = bodyTabla.querySelectorAll('.precioTotal')
    //sacamos todos con la clase esa

    //pa convertir un elemento en array tres puntos y corchetes
    let precios = [...listaPrecio].map(elemento => 
        parseFloat(elemento.textContent)
    );

    //el 0 del final hace que si no quedan filas el resultado sea 0 y no un error
    //este se llama distinto a la constante total (el span) porque si no la tapa
    let sumaPrecios = precios.reduce((acumulador, valor) => {
                return acumulador + valor
            }, 0)

    //la tasa esta en porcentaje (20), por eso se divide entre 100
    let importeImpuestos = sumaPrecios * tasaActual / 100
    let importeTotal = sumaPrecios + importeImpuestos
    
    //elementos tipo td y tal asi no se pueden modificar directamente usa text content par contenido
    
    subtotal.textContent = sumaPrecios.toFixed(2)
    tasa.textContent = tasaActual
    impuestos.textContent = importeImpuestos.toFixed(2)
    total.textContent = importeTotal.toFixed(2)

}

/* Cambiar Tasa de Impuestos:
○ Al hacer clic en cualquiera de las opciones de tasa 5%, 10%, 15% o
20%):
○ La aplicación debe actualizar la tasa activa.
○ El campo "Tasa" en el resumen debe mostrar el nuevo porcentaje.
○ Se debe llamar a la función de recálculo total para actualizar los
"Impuestos" y el "TOTAL" con el nuevo porcentaje. */


function cambiarTasa(event){
    //currentTarget es el radio que tiene el listener, o sea el que se acaba de pulsar
    //value siempre es texto, por eso el Number
    tasaActual = Number(event.currentTarget.value)

    //no devuelve nada, solo guarda la tasa y llama a recalcular
    //recalcular es el que pinta la tasa, los impuestos y el total
    recalcularTotales()
}


/* Eliminar Producto:
○ Al hacer clic en el botón de eliminar producto de cualquier fila de
producto:
○ Esa fila (<tr>) específica debe ser eliminada de la tabla.
○ Se debe llamar a la función de recálculo total. */

function eliminarProducto(event){
    //igual que en eliminarBloque, desde el boton se sube hasta encontrar el tr
    let fila = event.currentTarget.closest('tr')
    fila.remove()

    //primero se quita la fila y despues se recalcula, porque recalcular
    //suma las filas que haya en ese momento en la tabla
    recalcularTotales()
}


//para llamar al boton insertar que cuando se haga click en el llame al metodo de recoger datos
botonInsertar.addEventListener('click', insertarFormulario)

//a cada radio se le pone el listener, como existen desde el principio se hace aqui
tasaRadios.forEach(radio => radio.addEventListener('click', cambiarTasa))

//al cargar, para que la tasa salga con el 20 y no con el 0 que hay en el html
recalcularTotales()