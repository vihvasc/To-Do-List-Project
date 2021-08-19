window.onload = function () {
  createAndAddTask();
  changeColorOfListItem();
  lineTroughtTasks();
  clearAll();
  clearCompletedTasks();
  saveList();
};

function createAndAddTask() {
  let button = document.querySelector('#criar-tarefa');
  let taskInput = document.querySelector('#texto-tarefa');

  button.addEventListener('click', addTask);

  function addTask() {
    let taskList = document.querySelector('#lista-tarefas');
    let task = document.createElement('li');

    task.innerText = taskInput.value;
    task.className = 'tarefa';

    taskInput.value = '';
    taskList.appendChild(task);
  }
}

function changeColorOfListItem() {
  let listItem = document.querySelector('#lista-tarefas');

  listItem.addEventListener('click', changeColor);

  function changeColor(originEvent) {
    let grayItem = document.querySelectorAll('.gray-list-item');

    for (let index = 0; index < grayItem.length; index++) {
      if (grayItem[index].classList.contains('gray-list-item')) {
        grayItem[index].classList.remove('gray-list-item');
      }
    }

    originEvent.target.classList.add('gray-list-item');
  }
}

function lineTroughtTasks() {
  let listItem = document.querySelector('#lista-tarefas');

  listItem.addEventListener('dblclick', lineTrought);

  function lineTrought(originEvent) {
    if (originEvent.target.classList.contains('completed')) {
      return originEvent.target.classList.remove('completed');
    }
    originEvent.target.classList.add('completed');
  }
}

function clearAll() {
  let button = document.querySelector('#apaga-tudo');

  button.addEventListener('click', cleanList);

  function cleanList() {
    let taskList = document.querySelector('#lista-tarefas');

    taskList.innerHTML = '';
  }
}

function clearCompletedTasks() {
  let button = document.querySelector('#remover-finalizados');

  button.addEventListener('click', cleanTasks);

  function cleanTasks() {
    let lineTasks = document.querySelectorAll('.completed');

    for (let index = 0; index < lineTasks.length; index++) {
      lineTasks[index].remove();
    }
  }
}

function saveList() {
  let button = document.querySelector('#salvar-tarefas');
  let taskList = document.querySelector('#lista-tarefas');
  let recover = localStorage.getItem('list');

  button.addEventListener('click', save);

  taskList.innerHTML = recover;

  function save() {
    localStorage.setItem('list', taskList.innerHTML);
  }
}
