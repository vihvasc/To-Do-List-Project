const takeBtnNewTask = document.getElementById('criar-tarefa');
const takeBtnClearAll = document.getElementById('apaga-tudo');
const takeBtnClearDone = document.getElementById('remover-finalizados');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function pegaListaAtual() {
  const listaAtual = document.querySelectorAll('#lista-tarefas li');

  return listaAtual;
}

function removeAllClass(classe) {
  const currentList = pegaListaAtual();
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

function clearTaskList() {
  const currentList = pegaListaAtual();

  for (let i = 0; i < currentList.length; i += 1) {
    currentList[i].remove();
  }
}

function clearDoneTasks() {
  const currentList = pegaListaAtual();

  for (let i = 0; i < currentList.length; i += 1) {
    const concluida = currentList[i].classList.contains('completed');
    if (concluida) {
      currentList[i].remove();
    }
  }
}

function afterLoad() {
  takeBtnNewTask.addEventListener('click', appendNewTask);
  takeBtnClearAll.addEventListener('click', clearTaskList);
  takeBtnClearDone.addEventListener('click', clearDoneTasks);
}

window.onload = afterLoad;
