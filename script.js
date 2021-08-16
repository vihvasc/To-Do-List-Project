// Const
const itemList = document.getElementById('lista-tarefas');
const buttonAddItem = document.getElementById('criar-tarefa');
const inputAddItem = document.getElementById('texto-tarefa');

// Function to add an item to ol
function addItemToList() {
  const newItemText = inputAddItem.value;
  const newItemElement = document.createElement('li');
  newItemElement.innerText = newItemText;
  itemList.appendChild(newItemElement);
  inputAddItem.value = '';
}

// addEventListener to buttonAddItem
buttonAddItem.addEventListener('click', addItemToList);