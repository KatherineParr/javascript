const container = document.getElementById('container')
const inputNumber = document.getElementById('block-number')
//hacemos un array con los colores
const colors = ['blue', 'red', 'green']

function createBlocks() {
    let numBlocks = inputNumber.value //aca poner un numero fijo si queremos que tenga 
    console.log(numBlocks)
    for (let i = 0; i <= numBlocks; i++) {
        createBlocks()
    }
}

function createRandomBlocks() {
    let random = Math.floor(Math.random() * colors.length) //el floor es para bajarlo al int mas cercano
    createBlock(colors[random])
}


function createBlock(color) {
    const block = document.createElement('div')
    block.classList.add('block', color)
    block.onclick = () => {
        //para que elimine los bloques del mismo color alante y atras
        let cellList = [block];
        let next = block
        let previus = block
        while ((next = next.nextElementSibling) && next.classList.contains(color)){ //sin parentesis te evalua el and antes de la igualdad
            cellList.push(next);
        }
        while ((previous = previous.previousElementSibling) && previous.classList.contains(color)) {
            cellList.push(previous);
        }
        if (cellList > 2) {
            cellList.forEach(cell => cell.remove());
            if(container.querySelectorAll(".block").length == 0){
                alert("ganador")
            }
        }
    }
    divContainer.appendChild(block);
    if (divContainer.querySelectorAll(".block").length > 100) {
        alert("HAS PERDIDO")
        divContainer.innerHTML = ""
    }
}


setInterval(createRandomBlocks, 500) //no lo hemos dado pero para explicar













