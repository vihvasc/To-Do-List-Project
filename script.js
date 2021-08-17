const { body } = document;
const inputTask = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

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

function listtennerButtonAdd() {
  buttonAdd.addEventListener('click', addNewTask);
}

function callAllFunctions() {
  listtennerButtonAdd();
}

console.log(body);

window.onload = callAllFunctions;
