const takeBtnNewTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function appendNewTask() {
  console.log('oi');
  const newTask = document.createElement('li');

  newTask.innerText = input.value;
  taskList.appendChild(newTask);

  input.value = '';
}

function afterLoad() {
  takeBtnNewTask.addEventListener('click', appendNewTask);
}

window.onload = afterLoad;
