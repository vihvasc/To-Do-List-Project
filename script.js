// Const
const local = localStorage;
const itemList = document.getElementById('lista-tarefas');
const buttonAddItem = document.getElementById('criar-tarefa');
const inputAddItem = document.getElementById('texto-tarefa');

// Add Item to list in localStorage
function addItemToLocal(item) {
  const listItemLocal = JSON.parse(local.getItem('listaItems'));
  listItemLocal.push(item);
  local.setItem('listaItems', JSON.stringify(listItemLocal));
}

// Function to add an item to ol
function addItemToList() {
  const newItemText = inputAddItem.value;
  const newItemElement = document.createElement('li');
  addItemToLocal(newItemText);
  newItemElement.innerText = newItemText;
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
    itemList.appendChild(newItemElement);
  }
}

// Load Page
window.onload = function startPage() {
  if (local.getItem('listaItems') === null) {
    local.setItem('listaItems', JSON.stringify([]));
  } else {
    fillWithLocal();
  }
}
