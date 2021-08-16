let listaTarefa = document.querySelector("#lista-tarefas")
let btnCriarTarefa = document.getElementById("criar-tarefa")
btnCriarTarefa.addEventListener("click", adicionaTarefa)

function adicionaTarefa(){
    let criarTarefa = document.getElementById("texto-tarefa").value
    let tarefa = document.createElement("li")
    tarefa.id = "tarefa"
    tarefa.innerText = criarTarefa
    listaTarefa.appendChild(tarefa)
    criarTarefa = document.getElementById("texto-tarefa").value = ""
    tarefa.addEventListener("click", recebeClick)
}

function recebeClick(){
    let tarefa = document.getElementById("tarefa")
    tarefa.style.backgroundColor = "rgb(128, 128, 128)"
}