// reference Dom
const createTask = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');

// function
function taskGenerator() {
  const task = document.createElement('li');
  task.classList.add('list');
  task.innerHTML = textTask.value;
  todoList.appendChild(task);
  textTask.value = '';
  cliclli();
}

function cliclli() {
  const listTask = document.querySelectorAll('.list');
  for (const element of listTask) {
    element.addEventListener('click', (event) => {
      if (element.classList !== 'select') {
        removeClassList();
        element.classList.add('select');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    });
  }
}

function removeClassList() {
  const listTask = document.querySelectorAll('.list');
  listTask.forEach((event) => {
    event.classList.remove('select');
    event.style.backgroundColor = null;
  });
}

// addEventListener
createTask.addEventListener('click', taskGenerator);
