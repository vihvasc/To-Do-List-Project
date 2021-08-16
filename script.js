function addTask() {
    let newItem = document.createElement("li")
    let input = document.querySelector("#texto-tarefa")
    let itemText = input.value
    let tasksList = document.querySelector("#lista-tarefas")
    newItem.innerText = itemText
    tasksList.appendChild(newItem)
    input.value = ""
}

window.onload = function() {
    let createTskBtn = document.querySelector("#criar-tarefa")
    createTskBtn.addEventListener("click", addTask)
}