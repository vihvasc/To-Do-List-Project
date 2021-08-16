window.onload = criaListaTarefas;

function criaListaTarefas() {
  generateClickEvent();
}

let list = document.getElementById('lista-tarefas');
let inputBox = document.getElementById('texto-tarefa');

function generateClickEvent() {
  let buttonAdcItemList = document.getElementById('criar-tarefa');
  buttonAdcItemList.addEventListener('click', adicionaItemLista)
}
function adicionaItemLista() {
  let itemList = document.createElement('li');
  itemList.innerText = inputBox.value;
  inputBox.value = '';
  list.appendChild(itemList);
}
