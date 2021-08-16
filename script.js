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

window.onload = function() {
    let createTskBtn = document.querySelector("#criar-tarefa")
    createTskBtn.addEventListener("click", addTask)

    let listItem = document.querySelectorAll("#lista-tarefas")
    for(let counter = 0; counter < listItem.length; counter += 1) {
        listItem[counter].addEventListener("click", changeLiColor)
    }
}