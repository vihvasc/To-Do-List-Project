//Faz a função de adicionar o input como item da lista
let listaTarefa = document.querySelector("#lista-tarefas")
let btnCriarTarefa = document.getElementById("criar-tarefa")
btnCriarTarefa.addEventListener("click", adicionaTarefa)

function adicionaTarefa(){
    let criarTarefa = document.getElementById("texto-tarefa").value
    let tarefa = document.createElement("li")
    tarefa.className = "tarefa"
    tarefa.innerText = criarTarefa
    listaTarefa.appendChild(tarefa)
    criarTarefa = document.getElementById("texto-tarefa").value = ""
    tarefa.addEventListener("click", recebeClick)
}

//Função para selecionar o item da lista
function recebeClick(item){
    let itens = document.getElementsByClassName("tarefa")
    for(let index = 0; index < itens.length; index += 1){
        if(itens[index].classList.contains("selected")){
            itens[index].classList.toggle("selected")
            itens[index].style.backgroundColor = "white"
        }
    }
    item.target.classList.toggle("selected")
    if(item.target.classList.contains("selected")){
        item.target.style.backgroundColor = "rgb(128, 128, 128)"
    }
}