let body = document.body;
let inputTask = document.getElementById('texto-tarefa');
let buttonAdd = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');

console.log(taskList);

//Criando uma tarefa nova como item list para ser usado na OL depois

function createNewTask(task) {
  let li = document.createElement('li');
  li.innerText = task;
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

window.onload = callAllFunctions;