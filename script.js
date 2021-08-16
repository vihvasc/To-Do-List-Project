window.onload = criaListaTarefas;

function criaListaTarefas() {
  geraItemList();
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
  itemList.addEventListener('click', selecionaItemLista);
  itemList.addEventListener('dblclick', riscaItemLista);
  list.appendChild(itemList);
}

// let selectedItem = document.querySelector('.selected');
function selecionaItemLista(event) {
  let itemList = document.querySelectorAll('.item-list');
  for(let index = 0; index < itemList.length; index += 1) {
    
    if(itemList[index].classList.contains('selected')) {
      itemList[index].classList.remove('selected'); 
    }
  }
  event.target.classList.add('selected');
}
function riscaItemLista(event) {
  let itemList = document.querySelectorAll('.item-list');
  event.target.classList.toggle('completed'); 
}