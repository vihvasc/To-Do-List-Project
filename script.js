const createTasks = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskItem = document.getElementsByClassName('task');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonClearFinalized = document.querySelector('#remover-finalizados');

function removeAllTask() {
  taskList.innerHTML = '';
}

buttonClear.addEventListener('click', removeAllTask);

function removeFinalized() {
  const rmCompleted = document.querySelectorAll('li');

  for (let index = 0; index < rmCompleted.length; index += 1) {
    if (rmCompleted[index].classList.contains('completed')) {
      rmCompleted[index].remove();
    }
  }
}

buttonClearFinalized.addEventListener('click', removeFinalized);

function doubleClick(event) {
  const elemento = event.target;

  if (elemento.classList.contains('completed')) {
    elemento.classList.remove('completed');
  } else {
    elemento.classList.add('completed');
  }
}

function createTask() {
  const listItem = document.createElement('li');

  listItem.innerHTML = taskInput.value;
  listItem.classList.add('task');
  taskList.appendChild(listItem);
  taskInput.value = '';
  taskList.addEventListener('dblclick', doubleClick);
}

createTasks.addEventListener('click', createTask);

function addBackgroundColor(event) {
  const elemento = event.target;
  if (elemento.style.backgroundColor === '') {
    elemento.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function removeBackgroundColor(event) {
  for (let index = 0; index < taskItem.length; index += 1) {
    if (taskItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      taskItem[index].style.backgroundColor = '';
    }
  }
  addBackgroundColor(event);
}

taskList.addEventListener('click', removeBackgroundColor);
