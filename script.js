// Requisitos 7 e 8 - Clicar em um item da lista altera sua cor de fundo. Apenas um item pode ser selecionado.
function handleListBackgroundColor(event) {
  const listItem = document.getElementsByTagName('li');
  const targetEvent = event.target;

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = '';
  }
  targetEvent.style.backgroundColor = 'gray';
}

// Requisito 9 - Clicar duas vezes em um item da lista deixa ele tachado. Clicar outras duas vezes remove o tachado.
function handleListItemDbClick(event) {
  const targetEvent = event;

  targetEvent.target.classList.toggle('completed');
}

// Cria função que adiciona todos os eventos aos items da lista.
function addItemListEvents(itemList) {
  itemList.addEventListener('click', handleListBackgroundColor);
  itemList.addEventListener('dblclick', handleListItemDbClick);
}

// Requisitos 5 e 6 - Cria um novo item ao final da lista e apaga o valor do input.
function handleNewTask() {
  const newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;

  const orderedList = document.getElementById('lista-tarefas');
  orderedList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';

  // Adiciona Event Listener a Lista.
  addItemListEvents(newTask);
}

function addNewTaskButtonEvent() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  buttonCreateTask.addEventListener('click', handleNewTask);
}

window.onload = function () {
  addNewTaskButtonEvent();
};
