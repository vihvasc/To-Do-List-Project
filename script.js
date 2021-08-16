const takeBtnNewTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function changeColor(evento) {
  const backColor = evento.target;

  if (backColor.style.backgroundColor === '') {
    backColor.style.backgroundColor = 'rgb(128,128,128)';
  } else {
    backColor.style.backgroundColor = '';
  }
}

function appendNewTask() {
  const newTask = document.createElement('li');

  newTask.addEventListener('click', changeColor);
  newTask.innerText = input.value;
  taskList.appendChild(newTask);

  input.value = '';
}

function afterLoad() {
  takeBtnNewTask.addEventListener('click', appendNewTask);
}

window.onload = afterLoad;
