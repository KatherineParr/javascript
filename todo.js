
//añadir un elemento tipo li a la ul con el id todo list
const ulTodoList = document.getElementById("todo-list")

const inputTask = document.getElementById("new-task")


function buttonInsertTask() {
    let newtask = inputTask.value.trim() //trim es para recortar los espacios
    //de alante y detras

    //para acegurate de que dos elementos no son iguales usamos un if
    if (!listTasks().includes(newtask)) {
        insertTask(newtask)
    }
}
 



function insertTask() {
        let liTask = document.createElement('li')
        liTask.textContent = task

    //llama a la otra funcion con argumento la li que se creo
    //liTask.onclick = deleteTask(liTask) //si ponemos parentesis se
    //ejecuta cuando se asigna y da error (explicar)
    //asi que hay que usar la funcion flecha

    //funcion flecha es tecnicamente una funcion dentro de otra funcion
        liTask.onclick = () => deleteTask(liTask)

        ulTodoList.appendChild(liTask)
    
}


function deleteTask(task) {
    task.remove()
}



//una funcion que devuelve todos los elementos que hay


function listTasks() {
    return ulTodoList.querySelectorAll('li')

    //hacer que este listado se quede en un array de los contenidos
    //por la conmsola (llamas la funcion en la consola con f12)
        .map( li => li.textContent )
    
    
}


//hacer funcion que aplique el estilo del html


// explicacion de elementos y pasos y comparacion java

//(que madres es DOM)

function getlistTasks() {
    return [...ulTodoList.querySelectorAll('li')]
        .map( li => li.textContent );
}



//ordenar con sort que tambien admine funcion flexha

//hyacer una funcion que ordene las li
/*function sortTasks() {
    let listTasks = getlistTasks()
    console.log("Sin ordenar", listTasks)
    listTasks.sort( (a,b) => a.localeCompare(b) )
    console.log("ordenado", listTasks)

    //para limpiar las tareas, pero pierden todas las caracteristicas que tenian
    //ulTodoList.innerHTML = ''

    //para hacerlo tambien hay que guardar todo, si esta seleccionado o no

    //ahora mostrarlo
    listTasks.forEach(task => {
        insertTask(task)
    })
}*/

//esa es muy mcomplicada, usamos esta para mantener los atibutos

function sortTasks() {
    let liListTasks = [ ... ulTodoList.querySelectorAll('li')];

    console.log("sin ordenar", liListTasks);
    liListTasks.sort( (liA, liB) => liA.textContent.localeCompare(liB.textContent) )
    console.log("ordenado:", liListTasks)
    liListTasks.forEach( li => {
        ulTodoList.appendChild(li)
    });
}


//funcion de seleccionar/deseleccionar (ponerla amarilla o no)


function setSelected(selected=true) {
    let liListTasks = [ ... ulTodoList.querySelectorAll('li')];
        liListTasks.forEach( li => {
            if (selected) {
                li.classList.add("selected");
            } else {
                li.classList.remove("selected");
            }
    });
};

function deleteSelected() {
    let liListTasks = [ ... ulTodoList.querySelectorAll('li.selected')];
        liListTasks.forEach( li => {
            li.remove();
    });
}

