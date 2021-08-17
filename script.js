const taskInput = document.getElementById('texto-tarefa');
const btnAddTask = document.getElementById('criar-tarefa');
const btnEraseAllTasks = document.getElementById('apaga-tudo');
const btnEraseCompleteTasks = document.getElementById('remover-finalizados');
const btnSave = document.getElementById('salvar-tarefas');
const taskList = document.getElementById('lista-tarefas');

// Apaga os itens concluídos da lista.
function eraseCompleteTasks() {
  const tasks = taskList.children;
  for (let index = tasks.length - 1; index >= 0; index -= 1) {
    const element = tasks[index];
    if (element.classList.contains('completed')) {
      element.remove();
    }
  }
}

// Apaga todos os itens da lista.
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

// Carrega tarefas do webStorage
function loadList() {
  const list = localStorage.getItem('list');
  if (list) {
    taskList.innerHTML = list;
    const listItems = taskList.children;
    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].addEventListener('click', selectTask);
      listItems[index].addEventListener('dblclick', finishTask);
    }
  }
}

// Salva tarefas no webStorage
function saveList() {
  const listHtml = taskList.innerHTML;
  localStorage.setItem('list', listHtml);
}

function addAllListeners() {
  btnAddTask.addEventListener('click', addTask);
  btnEraseAllTasks.addEventListener('click', eraseAllTasks);
  btnEraseCompleteTasks.addEventListener('click', eraseCompleteTasks);
  btnSave.addEventListener('click', saveList);
}

function init() {
  loadList();
  addAllListeners();
}

window.onload = init;
