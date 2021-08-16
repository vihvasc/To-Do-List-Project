const takeBtnNewTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function removeAllClass(classe) {
  const currentList = document.querySelectorAll('#lista-tarefas li');

  for (let i = 0; i < currentList.length; i += 1) {
    currentList[i].classList.remove(classe);
  }
}

function changeColor(evento) {
  const backColor = evento.target;

  if (backColor.classList.contains('selected')) {
    removeAllClass('selected');
  } else {
    removeAllClass('selected');
    backColor.classList.add('selected');
  }
}

function decoredText(evento) {
  const risk = evento.target;

  if (risk.classList.contains('completed')) {
    risk.classList.remove('completed');
  } else {
    risk.classList.add('completed');
  }
}

function appendNewTask() {
  const newTask = document.createElement('li');

  newTask.addEventListener('click', changeColor);
  newTask.addEventListener('dblclick', decoredText);
  newTask.innerText = input.value;
  taskList.appendChild(newTask);

  input.value = '';
}

function afterLoad() {
  takeBtnNewTask.addEventListener('click', appendNewTask);
}

window.onload = afterLoad;
