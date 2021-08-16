const inputEnter = document.querySelector('#texto-tarefa');
const createItem = document.querySelector('#criar-tarefa');

createItem.addEventListener('click', () => {
  const listOrder = document.querySelector('#lista-tarefas');
  const createListItem = document.createElement('li');
  createListItem.innerText = inputEnter.value;
  listOrder.appendChild(createListItem);
  inputEnter.onfocus();
});
