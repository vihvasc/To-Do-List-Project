window.onload = criaListaTarefas;

function criaListaTarefas() {
  geraItemList();
  selecionaItemList();
}

let list = document.getElementById('lista-tarefas');
let inputBox = document.getElementById('texto-tarefa');

function geraItemList() {
  let buttonAdcItemList = document.getElementById('criar-tarefa');
  buttonAdcItemList.addEventListener('click', adicionaItemLista)
}
function adicionaItemLista() {
  let itemList = document.createElement('li');
  itemList.innerText = inputBox.value;
  itemList.className = 'item-list';
  inputBox.value = '';
  itemList.addEventListener('click', changeBackgroundColor)
  list.appendChild(itemList);
}
function changeBackgroundColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
