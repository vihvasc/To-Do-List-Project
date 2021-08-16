const inputEnter = document.querySelector('#texto-tarefa');
const createItem = document.querySelector('#criar-tarefa');

createItem.addEventListener('click', () => {
  const listOrder = document.querySelector('#lista-tarefas');
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
