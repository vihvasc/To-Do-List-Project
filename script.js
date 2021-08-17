const takeBody = document.getElementById('main-container');
const takeBtnNewTask = document.getElementById('criar-tarefa');
const takeBtnClearAll = document.getElementById('apaga-tudo');
const takeBtnClearDone = document.getElementById('remover-finalizados');
const takeBtnSaveTasks = document.getElementById('salvar-tarefas');
const takeBtnMoveUp = document.getElementById('mover-cima');
const takeBtnMoveDown = document.getElementById('mover-baixo');
const takeBtnDelete = document.getElementById('remover-selecionado');

const input = document.getElementById('texto-tarefa');

function pegaContainerList() {
  const container = document.getElementById('lista-tarefas');

  return container;
}

function pegaListaAtual() {
  const listaAtual = document.querySelectorAll('#lista-tarefas li');

  return listaAtual;
}

function removeAllClass(classe) {
  const currentList = pegaListaAtual();
  for (let i = 0; i < currentList.length; i += 1) {
    currentList[i].classList.remove(classe);
    currentList[i].style.backgroundColor = '';
  }
}

function changeColor(evento) {
  const backColor = evento.target;

  if (backColor.classList.contains('selected')) {
    removeAllClass('selected');
  } else {
    removeAllClass('selected');
    backColor.classList.add('selected');
    backColor.style.backgroundColor = 'rgb(128, 128, 128)';
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
  const taskList = pegaContainerList();

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

function moveItemUp() {
  const takeSelected = document.querySelector('.selected');
  if (takeSelected) {
    const imraoAnterior = takeSelected.previousSibling;
    if (imraoAnterior) {
      const info = {
        textoSelected: takeSelected.innerHTML,
        classSelected: takeSelected.className,
        textoPrevious: imraoAnterior.innerHTML,
        classPrevious: imraoAnterior.className,
      };
      imraoAnterior.innerHTML = info.textoSelected;
      imraoAnterior.className = info.classSelected;
      takeSelected.innerHTML = info.textoPrevious;
      takeSelected.className = info.classPrevious;
      imraoAnterior.classList.remove('selected');
    }
  }
}

function moveItemDown() {
  const takeSelected = document.querySelector('.selected');
  if (takeSelected) {
    const imraoSeguinte = takeSelected.nextSibling;
    if (imraoSeguinte) {
      const info = {
        textoSelected: takeSelected.innerHTML,
        classSelected: takeSelected.className,
        textoNext: imraoSeguinte.innerHTML,
        classNext: imraoSeguinte.className,
      };
      imraoSeguinte.innerHTML = info.textoSelected;
      imraoSeguinte.className = info.classSelected;
      takeSelected.innerHTML = info.textoNext;
      takeSelected.className = info.classNext;
    }
  }
}

function deleteSelected() {
  const selected = document.querySelector('.selected');

  selected.remove();
}

// A ideia de salvar os items da lista em objetos foi baseada em um conversa que tive com o colega Guilherme Saboia, turma 15, tribo b.

function saveTasks() {
  const nameTasks = {};
  const takeTasks = document.querySelectorAll('#lista-tarefas li');

  for (let i = 0; i < takeTasks.length; i += 1) {
    const item = takeTasks[i];
    nameTasks[item.innerHTML] = item.className;
  }

  const stringTasks = JSON.stringify(nameTasks);
  localStorage.setItem('tasks', stringTasks);
}

function appendLoadList(item, classe, novaLista) {
  const li = document.createElement('li');
  li.innerHTML = item;
  li.className = classe;
  li.addEventListener('click', changeColor);
  li.addEventListener('dblclick', decoredText);
  novaLista.appendChild(li);
}
function loadTasks() {
  const takeStorageList = localStorage.getItem('tasks');
  const currentList = pegaContainerList();
  if (takeStorageList) {
    currentList.remove();
    const loadTaskList = JSON.parse(takeStorageList);
    const taskKeys = Object.keys(loadTaskList);
    const taskValues = Object.values(loadTaskList);
    const newTaskList = document.createElement('ol');
    newTaskList.id = 'lista-tarefas';
    for (let i = 0; i < taskKeys.length; i += 1) {
      const key = taskKeys[i];
      const classe = taskValues[i];
      appendLoadList(key, classe, newTaskList);
    }
    takeBody.appendChild(newTaskList);
  }
}

function afterLoad() {
  loadTasks();
  takeBtnNewTask.addEventListener('click', appendNewTask);
  takeBtnClearAll.addEventListener('click', clearTaskList);
  takeBtnClearDone.addEventListener('click', clearDoneTasks);
  takeBtnSaveTasks.addEventListener('click', saveTasks);
  takeBtnMoveUp.addEventListener('click', moveItemUp);
  takeBtnMoveDown.addEventListener('click', moveItemDown);
  takeBtnDelete.addEventListener('click', deleteSelected);
}

window.onload = afterLoad;
