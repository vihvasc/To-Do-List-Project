// reference Dom
const createTask = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('.todo_list');

// function
function taskGenerator() {
  // cria li com elemento do input
  const task = document.createElement('li');
  task.innerHTML = textTask.value;
  task.classList.add = 'list';
  todoList.appendChild(task);
  // limpa o input
  textTask.value = '';
}

// addEventListener
createTask.addEventListener('click', taskGenerator);
