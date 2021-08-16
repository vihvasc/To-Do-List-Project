function addTarefa() {
    let lista = document.getElementById("lista-tarefas")
    let Tarefa = document.getElementById("texto-tarefa")
    let novaTarefa = Tarefa.value
    let addLista = document.createElement("li")
    lista.appendChild(addLista)
    addLista.innerText = novaTarefa
    Tarefa.value = ""
    addLista.addEventListener('click', alteraCor)

function alteraCor(event) {
    let branco = document.getElementsByTagName("li")
    for(let i = 0; i < branco.length; i += 1) {
        branco[i].style.backgroundColor = "white"
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)'
    } 
}

function apagaTarefa() {
    let lista = document.getElementById("lista-tarefas");
    while (lista.hasChildNodes()) {  
        lista.removeChild(lista.firstChild);
      }  
}


let addButton = document.getElementById("criar-tarefa")
addButton.addEventListener("click", addTarefa)

let removeButton = document.getElementById("apaga-tudo")
removeButton.addEventListener("click", apagaTarefa)
