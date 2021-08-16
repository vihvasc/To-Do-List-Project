const taskInput = document.getElementById('texto-tarefa');
const btnAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Seleciona uma tarefa.
function selectTask(event) {
  const task = event.target;
  task.style.backgroundColor = 'rgb(128,128,128)';
}

// Cria uma nova <li> de tarefa.
function createTask(name) {
  const li = document.createElement('li');
  li.innerText = name;
  li.addEventListener('click', selectTask);
  return li;
}

// Adiciona uma tarefa nova a lista de tarefa através do input.
function addTask() {
  const task = taskInput.value;
  taskInput.value = '';
  const taskElement = createTask(task);
  taskList.appendChild(taskElement);
}

function addAllListeners() {
  btnAddTask.addEventListener('click', addTask);
}

function init() {
  addAllListeners();
}

window.onload = init;
