function addTarefa(){
    let lista = document.getElementById("lista-tarefas")
    let Tarefa = document.getElementById("texto-tarefa")
    let novaTarefa = Tarefa.value
    let addLista = document.createElement("li")
    lista.appendChild(addLista)
    addLista.innerText = novaTarefa
    Tarefa.value = ""
}

let button = document.getElementById("criar-tarefa")
button.addEventListener("click", addTarefa)