// requisito 5
const createTasks = document.querySelector('#criar-tarefa');

function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const listItem = document.createElement('li');
  const taskContainer = document.querySelector('#lista-tarefas');

  listItem.innerHTML = input;
  // requisito 7
  listItem.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
  taskContainer.appendChild(listItem);

  document.querySelector('#texto-tarefa').value = '';
}

createTasks.addEventListener('click', createTask);
