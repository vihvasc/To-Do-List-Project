window.onload = criaListaTarefas;

function criaListaTarefas() {
  geraItemList();
  buttonDeleteAll();
  buttonDeleteSelectedItems();
  buttonSaveList();
  getSavedList();
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
  list.remove(list.lastChild);
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
function buttonSaveList() {
  let buttonSave = document.getElementById('salvar-tarefas');
  buttonSave.addEventListener('click', saveLocal);
}
function saveLocal() {
  let arraySavedList = [];
  let taskList = Array.from(list.children);
  for (let index = 0; index < taskList.length; index += 1) {
    arraySavedList.push(taskList[index].innerText);
  }
  localStorage.setItem('myList', JSON.stringify(arraySavedList));
}
function getSavedList() {
  let localList = JSON.parse(localStorage.getItem('myList'));
  localList.forEach(function(liText){
    let itemSavedList = document.createElement('li');
    itemSavedList.innerText = liText; 
    list.appendChild(itemSavedList);
  })
}