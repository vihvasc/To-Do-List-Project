function addTask() {
    let newItem = document.createElement("li")
    let input = document.querySelector("#texto-tarefa")
    let itemText = input.value
    let tasksList = document.querySelector("#lista-tarefas")
    newItem.innerText = itemText
    tasksList.appendChild(newItem)
    input.value = ""
}

function changeLiColor(event) {
    let listItem = document.querySelector("#lista-tarefas")
    let li = listItem.children
    let originEvent = event.target

    for(let counter = 0; counter < li.length; counter += 1) {
        li[counter].style.backgroundColor = "white"
    }
    originEvent.style.backgroundColor = "rgb(128,128,128)"
}

function completeTask(event) {
    let originEvent = event.target

    if(originEvent.classList.contains("completed")) {
        originEvent.classList.remove("completed")
    } else {
        originEvent.classList.add("completed")
    }
}

function cleanList() {
    let listItem = document.querySelector("#lista-tarefas")
    let li = document.querySelectorAll("li")

    for(let counter = 0; counter < li.length; counter += 1) {
        let remove = li[counter]
        listItem.removeChild(remove)
    }
}

function eraseCompleted() {
    let listItem = document.querySelector("#lista-tarefas")
    let completed = document.querySelectorAll(".completed")

    for(let counter = 0; counter < completed.length; counter += 1) {
        let erase = completed[counter]
        listItem.removeChild(erase)
    }
}

window.onload = function() {
    let createTskBtn = document.querySelector("#criar-tarefa")
    createTskBtn.addEventListener("click", addTask)

    let listItem = document.querySelectorAll("#lista-tarefas")
    for(let counter = 0; counter < listItem.length; counter += 1) {
        listItem[counter].addEventListener("click", changeLiColor)
        listItem[counter].addEventListener("dblclick", completeTask)
    }

    let cleanBtn = document.querySelector("#apaga-tudo")
    cleanBtn.addEventListener("click", cleanList)

    let completedEraseBtn = document.querySelector("#remover-finalizados")
    completedEraseBtn.addEventListener("click", eraseCompleted)
}