// requisito 5
const createTasks = document.querySelector('#criar-tarefa');

function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const listItem = document.createElement('li');
  const taskContainer = document.querySelector('#lista-tarefas');

  listItem.innerHTML = input;
  taskContainer.appendChild(listItem);
  document.querySelector('#texto-tarefa').value = '';
}

createTasks.addEventListener('click', createTask);
