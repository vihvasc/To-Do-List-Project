const taskInput = document.getElementById('texto-tarefa');
const btnAddTask = document.getElementById('criar-tarefa');
const btnEraseAllTasks = document.getElementById('apagar-tudo');
const taskList = document.getElementById('lista-tarefas');

// Apagando todos os itens da lista.
function eraseAllTasks() {
  taskList.innerHTML = '';
}

// Riscando tarefa (marcando como concluída).
function finishTask(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

// Seleciona uma tarefa.
function selectTask(event) {
  const actualSelected = event.target;
  const previousSelected = document.querySelector('.selected');
  if (previousSelected !== null && previousSelected !== actualSelected) {
    previousSelected.classList.remove('selected');
  }
  actualSelected.classList.add('selected');
}

// Cria uma nova <li> de tarefa.
function createTask(name) {
  const li = document.createElement('li');
  li.innerText = name;
  li.addEventListener('click', selectTask);
  li.addEventListener('dblclick', finishTask);
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
//   btnEraseAllTasks.addEventListener('click', eraseAllTasks);
}

function init() {
  addAllListeners();
}

window.onload = init;
