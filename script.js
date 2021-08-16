const button = document.querySelector('#criar-tarefa');
const inputValue = document.querySelector('#texto-tarefa');
const theList = document.querySelector('#lista-tarefas');

// Created function for addItem and order
function addItemList() {
  if (inputValue.value === null || inputValue.value === '') { // ref.: https://pt.stackoverflow.com/questions/39139/como-impedir-o-submit-de-um-formul%C3%A1rio-vazio
    alert('Digite uma tarefa no campo abaixo!');
    return false;
  }
  const creatLiItem = document.createElement('li');
  creatLiItem.innerText = inputValue.value;
  creatLiItem.classList.add('li-list');
  theList.appendChild(creatLiItem);
  inputValue.value = '';
}
button.addEventListener('click', addItemList);
