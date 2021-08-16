const takeBtnNewTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function changeColor(evento) {
  const backColor = evento.target;
  const currentList = document.querySelectorAll('#lista-tarefas li');

  for (let i = 0; i < currentList.length; i += 1) {
    currentList[i].classList.remove('selected');
  }

  backColor.className = 'selected';
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
