// utils

function addEventListenerToArray(array, eventType, func) {
  for (const element of array) {
    element.addEventListener(eventType, func);
  }
}

function removeInputText(input) {
  input.value = '';
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

// 7 & 8

function changeListItemBackgroundColor(event) {
  const selectedListItem = event.target;
  const listItens = document.getElementsByClassName('list-item');
  for (const item of listItens) {
    if (item === selectedListItem) {
      if (!item.classList.contains('selected-item')) {
        item.classList.add('selected-item');
      }
    } else if (item.classList.contains('selected-item')) {
      toggleClass(item, 'selected-item');
    }
  }
}

// 9

function completeTask(event) {
  const task = event.target;
  toggleClass(task, 'completed');
}

// 5

function addTaskToList() {
  const input = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  const task = input.value;
  const listItem = document.createElement('li');
  listItem.innerText = task;
  listItem.className = 'list-item';
  taskList.appendChild(listItem);
  listItem.addEventListener('click', changeListItemBackgroundColor);
  listItem.addEventListener('dblclick', completeTask);
  removeInputText(input);
}

// 10

function wipeAllTasks() {
  const tasksList = document.getElementById('lista-tarefas');
  tasksList.innerHTML = '';
}

// 11

function wipeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  const completedLength = completedTasks.length;
  for (let index = 0; index < completedLength; index += 1) {
    completedTasks[0].remove();
  }
}

// 12

function saveTasks() {
  const tasksList = document.getElementById('lista-tarefas');
  const tasksToSave = tasksList.innerHTML;
  localStorage.setItem('listItens', tasksToSave);
}

function loadSavedTasks() {
  const tasksList = document.getElementById('lista-tarefas');
  const savedTasks = localStorage.getItem('listItens');
  if (savedTasks) {
    tasksList.innerHTML = savedTasks;
    const tasksItens = document.getElementsByClassName('list-item');
    for (const item of tasksItens) {
      item.addEventListener('click', changeListItemBackgroundColor);
      item.addEventListener('dblclick', completeTask);
    }
  }
}

function moveTaskUp() {
  const selected = document.querySelector('.selected-item');
  if (selected) {
    const previousTask = selected.previousElementSibling;
    if (previousTask) {
      const selectedHtml = selected.innerHTML;
      const previousTaskHtml = previousTask.innerHTML;
      selected.innerHTML = previousTaskHtml;
      previousTask.innerHTML = selectedHtml;
      toggleClass(selected, 'selected-item');
      toggleClass(previousTask, 'selected-item');
    }
  }
}

function moveTaskDown() {
  const selected = document.querySelector('.selected-item');
  if (selected) {
    const nextTask = selected.nextElementSibling;
    if (nextTask) {
      const selectedHtml = selected.innerHTML;
      const nextTaskHtml = nextTask.innerHTML;
      selected.innerHTML = nextTaskHtml;
      nextTask.innerHTML = selectedHtml;
      toggleClass(selected, 'selected-item');
      toggleClass(nextTask, 'selected-item');
    }
  }
}

function removeSelectedTask() {
  const task = document.querySelector('.selected-item');
  if (task) {
    task.remove();
  }
}

function buttonsStart() {
  const taskButton = document.getElementById('criar-tarefa');
  taskButton.addEventListener('click', addTaskToList);
  const wipeAllButton = document.getElementById('apaga-tudo');
  wipeAllButton.addEventListener('click', wipeAllTasks);
  const wipeCompletedTasksButton = document.getElementById('remover-finalizados');
  wipeCompletedTasksButton.addEventListener('click', wipeCompletedTasks);
  const saveTasksButton = document.getElementById('salvar-tarefas');
  saveTasksButton.addEventListener('click', saveTasks);
  const moveTaskUpButton = document.getElementById('mover-cima');
  moveTaskUpButton.addEventListener('click', moveTaskUp);
  const moveTaskDownButton = document.getElementById('mover-baixo');
  moveTaskDownButton.addEventListener('click', moveTaskDown);
  const removeSelectedButton = document.getElementById('remover-selecionado');
  removeSelectedButton.addEventListener('click', removeSelectedTask);
}

window.onload = function () {
  buttonsStart();
  loadSavedTasks();
};
