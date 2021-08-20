window.onload = function () {
  createAndAddTask();
  changeColorOfListItem();
  lineTroughtTasks();
  clearAll();
  clearCompletedTasks();
  saveList();
  moveListItems();
  removeSelected();
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

function moveListItems() {
  let buttonUp = document.querySelector('#mover-cima');
  let buttonDown = document.querySelector('#mover-baixo');
  let taskList = document.querySelector('#lista-tarefas');

  buttonUp.addEventListener('click', moveUp);
  buttonDown.addEventListener('click', moveDown);

  function moveUp() {
    if (document.querySelector('.gray-list-item') == null) {
      return;
    }

    let upItem =
      document.querySelector('.gray-list-item').previousElementSibling;
    let selected = document.querySelector('.gray-list-item');

    if (upItem == null) {
      return;
    }

    upItem.insertAdjacentElement('beforebegin', selected);
  }

  function moveDown() {
    if (document.querySelector('.gray-list-item') == null) {
      return;
    }

    let downItem = document.querySelector('.gray-list-item').nextElementSibling;
    let selected = document.querySelector('.gray-list-item');

    if (downItem == null) {
      return;
    }

    downItem.insertAdjacentElement('afterend', selected);
  }
}

function removeSelected() {
  let button = document.querySelector('#remover-selecionado');

  button.addEventListener('click', removeItemSelected);

  function removeItemSelected() {
    let selected = document.querySelector('.gray-list-item');
    selected.remove();
  }
}
