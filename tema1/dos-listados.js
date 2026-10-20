const ulListOrigin = document.getElementById('listOrigin')
const ulListDestiny = document.getElementById('listDestiny')



/* function changeElement() {
    let selectedLis = [...ulListOrigin.querySelectorAll('li.selected')]
    selectedLis.forEach( li => ulListDestiny.appendChild(li))
} */


//mejor hecho
// Selgccionar los selecionados
function changeElement(origen, destino) {
    let selectedLis = [ ... origen.querySelectorAll('.selected')];
    console.log(selectedLis)
    selectedLis. forEach( li => {
        destino.appendChild(li);
        li.classList.remove('selected');
    })
}


function changeElementL() {
    changeElement(ulListDestiny, ulListOrigin);
}

function changeElementR() {    
    changeElement(ulListOrigin, ulListDestiny);
}    

//para selecionar los elementos
function addSelected() {
    let listLiOrigin = ulListOrigin.querySelectorAll('li')
    listLiOrigin.forEach( li => li.onclick = () => li.classList. toggle('selected') )
}

function init(){
    addSelected()
}

init()