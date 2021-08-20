const list = document.getElementById('lista-tarefas');
const inputBox = document.getElementById('texto-tarefa');

function selecionaItemLista(event) {
  const itemList = document.querySelectorAll('.item-list');
  for (let index = 0; index < itemList.length; index += 1) {
    if (itemList[index].classList.contains('selected')) {
      itemList[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}
function riscaItemLista(event) {
  event.target.classList.toggle('completed');
}
function adicionaItemLista() {
  const itemList = document.createElement('li');
  itemList.innerText = inputBox.value;
  itemList.className = 'item-list';
  inputBox.value = '';
  itemList.addEventListener('click', selecionaItemLista);
  itemList.addEventListener('dblclick', riscaItemLista);
  list.appendChild(itemList);
}
function geraItemList() {
  const buttonAdcItemList = document.getElementById('criar-tarefa');
  buttonAdcItemList.addEventListener('click', adicionaItemLista);
}
function deleteAllLis() {
  list.remove(list.lastChild);
}
function buttonDeleteAll() {
  const buttonDeleteAllItens = document.getElementById('apaga-tudo');
  buttonDeleteAllItens.addEventListener('click', deleteAllLis);
}
function deleteCompletedItems() {
  const mySelectedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < mySelectedItems.length; index += 1) {
    mySelectedItems[index].remove();
  }
}
function generateDeleteCompleted() {
  const buttonDeleteSelectedItems = document.getElementById('remover-finalizados');
  buttonDeleteSelectedItems.addEventListener('click', deleteCompletedItems);
}
function deleteSelectedItems() {
  const mySelectedItems = document.querySelectorAll('.selected');
  for (let index = 0; index < mySelectedItems.length; index += 1) {
    mySelectedItems[index].remove();
  }
}
function generateDeleteSelected() {
  const buttonDeleteSelectedItems = document.getElementById('remover-selecionado');
  buttonDeleteSelectedItems.addEventListener('click', deleteSelectedItems);
}
function saveLocal() {
  const arraySavedList = [];
  const taskList = document.getElementsByClassName('item-list');
  const classCompleted = document.getElementsByClassName('completed');
  for (let index = 0; index < taskList.length; index += 1) {
   if (taskList[index].classList.contains('completed')) {
    arraySavedList.push({texto:taskList[index].innerText, classe: true});
   } else {
    arraySavedList.push({texto:taskList[index].innerText, classe: false});
   }  
  }
  localStorage.setItem('myList', JSON.stringify(arraySavedList));
}
function buttonSaveList() {
  const buttonSave = document.getElementById('salvar-tarefas');
  buttonSave.addEventListener('click', saveLocal);
}
function getSavedList() {
  const localList = JSON.parse(localStorage.getItem('myList'));
  if (!localList) return;
  for (let index = 0; index < localList.length; index += 1) {
    const liObject = localList[index];
    let itemSavedList = document.createElement('li');
    itemSavedList.innerText = liObject.texto;
    if (liObject.classe) {
      itemSavedList.classList.add('completed');
    }
    list.appendChild(itemSavedList);
  };
}
function moveUp() {
  let itemDaLista = document.querySelector('.selected');
  if(!itemDaLista) {
    return;
  }
  if (itemDaLista.previousElementSibling) {
  itemDaLista.parentNode.insertBefore(itemDaLista, itemDaLista.previousElementSibling);
  }
}
function buttonUp() {
  const btnUp = document.getElementById('mover-cima');
  btnUp.addEventListener('click', moveUp);
}
function moveDown() {
  let itemDaLista = document.querySelector('.selected');
  if(!itemDaLista) {
    return;
  }
  if (itemDaLista.nextElementSibling) {
    itemDaLista.parentNode.insertBefore(itemDaLista.nextElementSibling, itemDaLista);
  }
}
function buttonDown() {
  const btnDown = document.getElementById('mover-baixo');
  btnDown.addEventListener('click', moveDown);
}
function criaListaTarefas() {
  geraItemList();
  buttonDeleteAll();
  generateDeleteCompleted();
  generateDeleteSelected();
  buttonSaveList();
  getSavedList();
  buttonUp();
  buttonDown();
}
window.onload = criaListaTarefas;
