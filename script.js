// Variaveis
const createTasks = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskItem = document.getElementsByClassName('task');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonClearFinalized = document.querySelector('#remover-finalizados');
const buttonSaveTasks = document.querySelector('#salvar-tarefas');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');

// Requisito 5
function createTask() {
  const listItem = document.createElement('li');

  listItem.innerHTML = taskInput.value;
  listItem.classList.add('task');
  taskList.appendChild(listItem);
  taskInput.value = '';
}

// Requisito 7
function addBackgroundColor(event) {
  const elemento = event.target;
  if (elemento.style.backgroundColor === '') {
    elemento.style.backgroundColor = 'rgb(128, 128, 128)';
    elemento.classList.add('selected');
  }
}

// Requisito 8
function removeBackgroundColor(event) {
  for (let index = 0; index < taskItem.length; index += 1) {
    if (taskItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      taskItem[index].style.backgroundColor = '';
      taskItem[index].classList.remove('selected');
    }
  }
  addBackgroundColor(event);
}

// Requisito 9
function doubleClick(event) {
  const elemento = event.target;

  if (elemento.classList.contains('completed')) {
    elemento.classList.remove('completed');
  } else {
    elemento.classList.add('completed');
  }
}

// Requisito 10 botão remove todas as tarefas
function removeAllTask() {
  taskList.innerHTML = '';
}

// requisito 11 botão remove finalizados
function removeFinalized() {
  const rmCompleted = document.querySelectorAll('li');

  for (let index = 0; index < rmCompleted.length; index += 1) {
    if (rmCompleted[index].classList.contains('completed')) {
      rmCompleted[index].remove();
    }
  }
}

// link utilizado para resolucao do requisito 12
// source https://www.w3schools.com/html/html5_webstorage.asp
function saveTasks() {
  localStorage.setItem('ol', taskList.innerHTML);
}

function localStorageOl() {
  if (localStorage.getItem('ol')) {
    taskList.innerHTML = localStorage.getItem('ol');
  }
}

localStorageOl();

// requisito 14
function removeSelect() {
  const lis = document.querySelectorAll('li');

  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i] === document.querySelector('.selected')) {
      lis[i].remove();
    }
  }
}

//-------------------------------------------------------------------------------------------------
buttonRemoveSelected.addEventListener('click', removeSelect);
taskList.addEventListener('dblclick', doubleClick);
taskList.addEventListener('click', removeBackgroundColor);
createTasks.addEventListener('click', createTask);
buttonClearFinalized.addEventListener('click', removeFinalized);
buttonSaveTasks.addEventListener('click', saveTasks);
buttonClear.addEventListener('click', removeAllTask);
