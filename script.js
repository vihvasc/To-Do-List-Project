const textTask = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask() {
  const task = document.createElement('li');
  const newTask = textTask.value;
  task.innerHTML = newTask;
  taskList.appendChild(task);
  textTask.value = '';
}

createTask.addEventListener('click', addTask);

function colorTask(event) {
  const task = event.target;
  task.style.backgroundColor = 'rgb(128, 128, 128)';
}

taskList.addEventListener('click', colorTask);
