let listaTarefa = document.querySelector("#lista-tarefas")
let btnCriarTarefa = document.getElementById("criar-tarefa")
btnCriarTarefa.addEventListener("click", adicionaTarefa)

function adicionaTarefa(){
    let criarTarefa = document.getElementById("texto-tarefa").value
    let tarefa = document.createElement("li")
    tarefa.innerText = criarTarefa
    listaTarefa.appendChild(tarefa)
    criarTarefa = document.getElementById("texto-tarefa").value = ""
}