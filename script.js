const inputTask = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask() {
  const inputTaskValue = inputTask.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = inputTaskValue;
  taskList.appendChild(newTask);
  inputTask.value = '';
}
createTask.addEventListener('click', addTask);
