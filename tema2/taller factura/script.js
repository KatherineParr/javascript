//constantes de la primera funcion
const conceptoInput = document.getElementById('inpConcepto')
const cantidadInput = document.getElementById('inpCant')
const precioInput = document.getElementById('inpPrecio')


const botonInsertar = document.getElementById('insertar')
const bodyTabla = document.getElementById('tabla-body')

//segunda
const subtotal = document.getElementById('numSub')
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

    //y luego llamamos a la funcon de recalculo total
    //????

}



function recalcularTotales(){
    //para calcular leer todas las columnas 
    // //tipo propagacion o con clases y tal
    

}



function cambiarTasa(){

}



function eliminarProducto(){

}


//para llamar al boton insertar que cuando se haga click en el llame al metodo de recoger datos
botonInsertar.addEventListener('click', insertarFormulario)