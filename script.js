// Const
const local = localStorage;
const itemList = document.getElementById('lista-tarefas');
const buttonAddItem = document.getElementById('criar-tarefa');
const inputAddItem = document.getElementById('texto-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearCompleted = document.getElementById('remover-finalizados');
const buttonSaveList = document.getElementById('salvar-tarefas');

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
  for (let i = 0; i < listaItemsLocal.length; i += 1) {
    const newItemText = listaItemsLocal[i];
    const newItemElement = document.createElement('li');
    newItemElement.innerText = newItemText;
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
  for (let i = 0; i < allItemsInList.length; i += 1) {
    listaItems.push(allItemsInList[i].innerText);
  }
  local.setItem('listaItems', JSON.stringify(listaItems));
}

// addEventListener to buttonAddItem
buttonSaveList.addEventListener('click', fillLocalwithList)

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

// Load Page
window.onload = function startPage() {
  if (local.getItem('listaItems') === null) {
    local.setItem('listaItems', JSON.stringify([]));
  } else {
    fillWithLocal();
  }
};
