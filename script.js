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
