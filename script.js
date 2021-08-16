const inputEnter = document.querySelector('#texto-tarefa');
const createItem = document.querySelector('#criar-tarefa');
const eraseAllList = document.querySelector('#apaga-tudo');
const listOrder = document.querySelector('#lista-tarefas');

createItem.addEventListener('click', () => {
  const createListItem = document.createElement('li');
  createListItem.innerText = inputEnter.value;

  createListItem.addEventListener('click', (event) => { // Requisito 7 e 8 - Mudar background pra cinza
    const getClassBackGroundColor = document.querySelector('.backgroundGrey');
    if (getClassBackGroundColor) {
      getClassBackGroundColor.classList.remove('backgroundGrey');
    }
    event.target.classList.add('backgroundGrey');
  });
  listOrder.appendChild(createListItem);
  inputEnter.onfocus();
});

eraseAllList.addEventListener('click', () => {
  while (listOrder.firstChild) {
    listOrder.removeChild(listOrder.lastChild);
  }
});
