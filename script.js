const { body } = document;
const inputTask = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonClearTasks = document.getElementById('apaga-tudo'); // requisito 10
const buttonClearCompletedTasks = document.getElementById('remover-finalizados'); // requisito 11
const buttonRemoveSelectedTask = document.getElementById('remover-selecionado'); // requisito 14
const buttonSaveTasks = document.getElementById('salvar-tarefas'); // requisito 12
const buttonMoveUp = document.getElementById('mover-cima'); // requisito 13
const buttonMoveDown = document.getElementById('mover-baixo'); // requisito 13

// Criando uma tarefa nova como item list para ser usado na OL depois

const list = document.getElementsByClassName('list');

function selectTask(event) {
  // let selectedTask = event.target;

  for (let index = 0; index < list.length; index += 1) {
    list[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function riskTask(event) {
  event.target.classList.toggle('completed');
}

function createNewTask(task) {
  const li = document.createElement('li');
  li.classList.add('list');
  li.innerText = task;
  li.addEventListener('click', selectTask); // linha criada após requisito 6
  li.addEventListener('dblclick', riskTask); // requisito 9
  return li;
}

function addNewTask() {
  const task = inputTask.value;
  inputTask.value = '';
  const createdTask = createNewTask(task);
  taskList.appendChild(createdTask);
}

function clearTasks() {
  // requisito 10
  taskList.innerHTML = '';
}

// console.log(taskList);
function clearCompletedTasks() { // requisito 11
  const lists = taskList.children;
  for (let index = lists.length - 1; index >= 0; index -= 1) {
    const completed = lists[index];
    if (completed.classList.contains('completed')) {
      completed.remove();
    }
  }
}

function removeSelectedTask() {
  // requisito 14
  const lists = taskList.children;
  for (let index = lists.length - 1; index >= 0; index -= 1) {
    const completed = lists[index];
    if (completed.classList.contains('selected')) {
      completed.remove();
    }
  }
}

function saveTasks() {
  // requisito 12
  console.log(taskList.innerHTML);
  localStorage.setItem('Lista-de-Tarefas', taskList.innerHTML);
}

function moveUp() {
  // requisito 13
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    const previouslyPostion = selectedTask.previousElementSibling;
    if (previouslyPostion) {
      previouslyPostion.insertAdjacentElement('beforebegin', selectedTask);
    }
  }
}

function moveDown() {
  // requisito 13
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    const nextPosition = selectedTask.nextElementSibling;
    if (nextPosition) {
      selectedTask.insertAdjacentElement('beforebegin', nextPosition);
    }
  }
}

function listenerButtonAdd() {
  buttonAdd.addEventListener('click', addNewTask);
}

function listenerButtonClearTask() {
  // requisito 10
  buttonClearTasks.addEventListener('click', clearTasks);
}

function listenerButtonClearCompletedTasks() {
  // requisito 11
  buttonClearCompletedTasks.addEventListener('click', clearCompletedTasks);
}

function listenerButtonRemoveSelectedTask() {
  // requisito 14
  buttonRemoveSelectedTask.addEventListener('click', removeSelectedTask);
}

function listenerButtonSaveTasks() {
  // requisito 12
  buttonSaveTasks.addEventListener('click', saveTasks);
}

function listenerButtonMoveUp() {
  // requisito 13
  buttonMoveUp.addEventListener('click', moveUp);
}

function listenerButtonMoveDown() {
  // requisito 13
  buttonMoveDown.addEventListener('click', moveDown);
}

function callAllFunctions() {
  listenerButtonAdd();
  listenerButtonClearTask(); // requisito 10
  listenerButtonClearCompletedTasks(); // requisito 11
  listenerButtonRemoveSelectedTask(); // requisito 14
  listenerButtonSaveTasks(); // requisito 12
  const savedLocalStorage = localStorage.getItem('Lista-de-Tarefas'); // requisito 12
  // console.log(savedLocalStorage);
  taskList.innerHTML = savedLocalStorage; // requisito 12
  listenerButtonMoveUp(); // requisito 13
  listenerButtonMoveDown(); // requisito 13
}

console.log(body);

window.onload = callAllFunctions;
