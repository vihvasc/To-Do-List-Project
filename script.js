let body = document.body;
let inputTask = document.getElementById('texto-tarefa');
let buttonAdd = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');

//Criando uma tarefa nova como item list para ser usado na OL depois

function createNewTask(task) {
  let li = document.createElement('li');
  li.classList.add('list');
  li.innerText = task;
  li.addEventListener('click', selectTask); //linha criada após requisito 6
  return li;
}

function addNewTask() {
  let task = inputTask.value;
  inputTask.value = '';
  let createdTask = createNewTask(task);
  taskList.appendChild(createdTask);
}

function listtennerButtonAdd() {
  buttonAdd.addEventListener('click', addNewTask);
}

function callAllFunctions() {
  listtennerButtonAdd();
}

function selectTask(event) {
  let selectedTask = event.target;
  let lastSelectedTask = document.querySelector('.selected');
  event.target.classList.add('selected');
  console.log('cheguei na function selecttask');
}

window.onload = callAllFunctions;
