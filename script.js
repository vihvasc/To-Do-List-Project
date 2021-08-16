// Const
const local = localStorage;
const itemList = document.getElementById('lista-tarefas');
const buttonAddItem = document.getElementById('criar-tarefa');
const inputAddItem = document.getElementById('texto-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearCompleted = document.getElementById('remover-finalizados');
const buttonClearSelected = document.getElementById('remover-selecionado');
const buttonSaveList = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');

// Function to change color of element
function changeElementColor(eventoDeOrigem) {
  const element = eventoDeOrigem.target;
  const selectedClass = document.querySelector('.selected');
  if (selectedClass !== null) {
    selectedClass.classList.remove('selected');
  }
  element.classList.add('selected');
}

// Function to change decoration of element
function changeElementDecoration(eventoDeOrigem) {
  const element = eventoDeOrigem.target;
  const elementClass = element.classList;
  if (elementClass.contains('completed')) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}

// Function to add an item to ol
function addItemToList() {
  const newItemText = inputAddItem.value;
  const newItemElement = document.createElement('li');
  newItemElement.innerText = newItemText;
  newItemElement.addEventListener('dblclick', changeElementDecoration);
  newItemElement.addEventListener('click', changeElementColor);
  itemList.appendChild(newItemElement);
  inputAddItem.value = '';
}

// addEventListener to buttonAddItem
buttonAddItem.addEventListener('click', addItemToList);

// Fill ol with localStorage Values
function fillWithLocal() {
  const listaItemsLocal = JSON.parse(local.getItem('listaItems'));
  const listaClassesLocal = JSON.parse(local.getItem('listaClasses'));
  for (let i = 0; i < listaItemsLocal.length; i += 1) {
    const newItemElement = document.createElement('li');
    newItemElement.innerText = listaItemsLocal[i];
    newItemElement.className = listaClassesLocal[i];
    newItemElement.addEventListener('dblclick', changeElementDecoration);
    newItemElement.addEventListener('click', changeElementColor);
    itemList.appendChild(newItemElement);
  }
}

// Funtion to remove all items in ol
function removeAllItems() {
  const listItems = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listItems.length; i += 1) {
    const element = itemList.lastChild;
    itemList.removeChild(element);
  }
}

// addEventListener to buttonAddItem
buttonClearAll.addEventListener('click', removeAllItems);

// Function to fill localServer with listItems
function fillLocalwithList() {
  const allItemsInList = itemList.children;
  const listaItems = [];
  const listaClasses = [];
  const selectedClass = document.querySelector('.selected');
  if (selectedClass !== null) {
    selectedClass.classList.remove('selected');
  }
  for (let i = 0; i < allItemsInList.length; i += 1) {
    listaItems.push(allItemsInList[i].innerText);
    listaClasses.push(allItemsInList[i].className);
  }
  local.setItem('listaItems', JSON.stringify(listaItems));
  local.setItem('listaClasses', JSON.stringify(listaClasses));
}

// addEventListener to buttonAddItem
buttonSaveList.addEventListener('click', fillLocalwithList);

// Function to delete items completed
function removeCompletedItems() {
  const listItems = document.querySelectorAll('#lista-tarefas .completed');
  for (let i = 0; i < listItems.length; i += 1) {
    const element = itemList.querySelector('.completed');
    itemList.removeChild(element);
  }
}

// addEventListener to buttonAddItem
buttonClearCompleted.addEventListener('click', removeCompletedItems);

// Function to change order between two positions to Up
function changeOrderToUp() {
  const selectedElement = itemList.querySelector('.selected');
  const lista = itemList.querySelectorAll('li');
  for (let i = 1; i < lista.length; i += 1) {
    const elementText = lista[i].innerText;
    const elementClass = lista[i].className;
    if (elementText === selectedElement.innerText) {
      lista[i].innerText = lista[i - 1].innerText;
      lista[i].className = lista[i - 1].className;
      lista[i - 1].innerText = elementText;
      lista[i - 1].className = elementClass;
      break;
    }
  }
}

// Function to move up a selected item
function moveUpSelectedItem() {
  if (itemList.querySelector('.selected') !== null) {
    changeOrderToUp();
  }
}

// addEventListener to buttonMoveUp
buttonMoveUp.addEventListener('click', moveUpSelectedItem);

// Function to change order between two positions to Down
function changeOrderToDown() {
  const selectedElement = itemList.querySelector('.selected');
  const lista = itemList.querySelectorAll('li');
  for (let i = 0; i < lista.length - 1; i += 1) {
    const elementText = lista[i].innerText;
    const elementClass = lista[i].className;
    if (elementText === selectedElement.innerText) {
      lista[i].innerText = lista[i + 1].innerText;
      lista[i].className = lista[i + 1].className;
      lista[i + 1].innerText = elementText;
      lista[i + 1].className = elementClass;
      break;
    }
  }
}

// Function to move down a selected item
function moveDownSelectedItem() {
  if (itemList.querySelector('.selected') !== null) {
    changeOrderToDown();
  }
}

// addEventListener to buttonMoveUp
buttonMoveDown.addEventListener('click', moveDownSelectedItem);

// Function to remove selected item
function removeSelectedItem() {
  const listItems = document.querySelectorAll('#lista-tarefas .selected');
  for (let i = 0; i < listItems.length; i += 1) {
    const element = itemList.querySelector('.selected');
    itemList.removeChild(element);
  }
}

// addEventListener to buttonMoveUp
buttonClearSelected.addEventListener('click', removeSelectedItem);

// Load Page
window.onload = function startPage() {
  fillWithLocal();
};
