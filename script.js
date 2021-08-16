const taskInput = document.getElementById('texto-tarefa');
const btnAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Seleciona uma tarefa.
function selectTask(event) {
  const actualSelected = event.target;
  const previousSelected = document.querySelector('.selected');
  if (previousSelected !== null && previousSelected !== actualSelected) {
    previousSelected.classList.remove('selected');
  }
  actualSelected.classList.toggle('selected');
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
