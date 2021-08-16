const button = document.querySelector('#criar-tarefa');
const inputValue = document.querySelector('#texto-tarefa');
const theList = document.querySelector('#lista-tarefas');

// Created function for addItem and order
function addItemList() {
  const creatLiItem = document.createElement('li');
  creatLiItem.innerText = inputValue.value;
  creatLiItem.classList.add('li-list');
  theList.appendChild(creatLiItem);
  inputValue.value = '';
}
button.addEventListener('click', addItemList);
