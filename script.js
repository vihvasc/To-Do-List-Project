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
function deleteSelectedItems() {
  const mySelectedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < mySelectedItems.length; index += 1) {
    mySelectedItems[index].remove();
  }
}
function generateButtonDelete() {
  const buttonDeleteSelectedItems = document.getElementById('remover-finalizados');
  buttonDeleteSelectedItems.addEventListener('click', deleteSelectedItems);
}
function saveLocal() {
  const arraySavedList = [];
  const taskList = Array.from(list.children);
  for (let index = 0; index < taskList.length; index += 1) {
    arraySavedList.push(taskList[index].innerHTML);
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
  localList.forEach(function (liText) {
    const itemSavedList = document.createElement('li');
    itemSavedList.innerHTML = liText;
    list.appendChild(itemSavedList);
  });
}

function criaListaTarefas() {
  geraItemList();
  buttonDeleteAll();
  generateButtonDelete();
  buttonSaveList();
  getSavedList();
}
window.onload = criaListaTarefas;
