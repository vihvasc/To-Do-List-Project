/* adicionar tarefas */
let buttonAdicionar = document.getElementById("criar-tarefa");
buttonAdicionar.addEventListener("click", addButton);
function addButton() {
    let entrada = document.getElementById("texto-tarefa");
    let input = entrada.value;
    let ordernedList = document.getElementById("lista-tarefas");
    let listaCriada = document.createElement("li");
    listaCriada.innerHTML = input;
    ordernedList.appendChild(listaCriada);
    document.getElementById("texto-tarefa").value = "";
}
/* remove todas as tarefas */
 let buttonRemover = document.getElementById("apaga-tudo");
 buttonRemover.addEventListener("click", remButton);
 function remButton () {
     let list = document.getElementById("lista-tarefas");
     list.innerHTML = '';  
}
/* mudar background color quando selecionado */
let list = document.getElementById('lista-tarefas');
list.addEventListener('click', changeBg);
function changeBg(event) {
    let selecionado = document.querySelector('.item-list');

    if (selecionado && selecionado !== event.target) {
      selecionado.classList.remove('item-list');
    }

    event.target.classList.toggle('item-list');
  }
    