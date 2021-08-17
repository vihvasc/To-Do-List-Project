const { body } = document;
const inputTask = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonClearTasks = document.getElementById('apaga-tudo'); // requisito 10
const buttonClearCompletedTasks = document.getElementById(
  'remover-finalizados'
); // requisito 11

// Criando uma tarefa nova como item list para ser usado na OL depois

const list = document.getElementsByClassName('list');

function selectTask(event) {
  // let selectedTask = event.target;

  for (let index = 0; index < list.length; index += 1) {
    list[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
  console.log('cheguei na function selecttask');
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

console.log(taskList);
function clearCompletedTasks() {
  const lists = taskList.children;
  for (let index = lists.length - 1; index >= 0; index -= 1) {
    const completed = lists[index];
    if (completed.classList.contains('completed')) {
      completed.remove();
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

function callAllFunctions() {
  listenerButtonAdd();
  listenerButtonClearTask(); // requisito 10
  listenerButtonClearCompletedTasks(); // requisito 11
}

console.log(body);

window.onload = callAllFunctions;
