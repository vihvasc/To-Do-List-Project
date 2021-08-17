window.onload = criaListaTarefas;

function criaListaTarefas() {
  geraItemList();
  buttonDeleteAll();
  buttonDeleteSelectedItems();
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
  event.target.classList.toggle('completed'); 
}

function buttonDeleteAll() {
  let buttonDeleteAllItens = document.getElementById('apaga-tudo');
  buttonDeleteAllItens.addEventListener('click', deleteAllLis);
}
function deleteAllLis() {
  myList = document.getElementById('lista-tarefas');
  myList.remove(myList.lastChild);
}

function buttonDeleteSelectedItems() {
  let buttonDeleteSelectedItems = document.getElementById('remover-finalizados');
  buttonDeleteSelectedItems.addEventListener('click', deleteSelectedItems);
}
function deleteSelectedItems() {
  mySelectedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < mySelectedItems.length; index += 1) {
    mySelectedItems[index].remove();
  }
}
