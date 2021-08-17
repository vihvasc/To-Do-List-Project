const inputTask = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');
const deleteTaskButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');
const saveListButton = document.querySelector('#salvar-tarefas');
const removeSelectedButton = document.querySelector('#remover-selecionado');
const moveUpButton = document.querySelector('#move-up');
const moveDownButton = document.querySelector('#move-down');
const taskListDiv = document.getElementById('task-list-div');
const createTaskList = document.createElement('ol');
taskListDiv.appendChild(createTaskList);
createTaskList.setAttribute('id', 'lista-tarefas');
const taskList = document.querySelector('#lista-tarefas');

function loadStoredList() {
  if (localStorage.getItem('ordered-list')) {
    taskList.innerHTML = localStorage.getItem('ordered-list');
  }
}

loadStoredList();

function addTask() {
  const taskItem = document.createElement('li');
  taskItem.innerText = inputTask.value;
  console.log(taskList);
  taskList.appendChild(taskItem);
  taskItem.classList.add('task-item');
  inputTask.value = '';
}

addTaskButton.addEventListener('click', addTask);

function selectTask(_clickedItem) {
  const clickedItem = _clickedItem;
  const selectedTask = document.querySelector('.selected');
  if (!selectedTask) {
    clickedItem.target.classList.add('selected');
  } else {
    selectedTask.classList.remove('selected');
    clickedItem.target.classList.add('selected');
  }
}

taskList.addEventListener('click', selectTask);

function doneListItem(_clickedItem) {
  const clickedItem = _clickedItem;
  if (clickedItem.target.classList.contains('completed')) {
    clickedItem.target.classList.remove('completed');
  } else {
    clickedItem.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', doneListItem);

function removeSelected() {
  const selectedTask = document.querySelector('.selected');
  taskList.removeChild(selectedTask);
}

removeSelectedButton.addEventListener('click', removeSelected);

function clearTaskList() {
  taskList.innerHTML = '';
}

deleteTaskButton.addEventListener('click', clearTaskList);

function clearCompletedTaskItens() {
  const toBeWiped = document.querySelectorAll('.completed');
  for (const element of toBeWiped) {
    taskList.removeChild(element);
  }
}

clearCompletedButton.addEventListener('click', clearCompletedTaskItens);

function saveTaskList() {
  localStorage.setItem('ordered-list', taskList.innerHTML);
}

saveListButton.addEventListener('click', saveTaskList);

// function moveUp() {
//   for (let index = 0; index < taskList.length; index += 1) {
//     if (item.classList.contains('selected')) {
//       taskList.insertBefore(item, )
//     }
//   }
// }

// moveUpButton.addEventListener('click', moveUp);

// function moveDown() {
//   for (let index = 0; index < taskList.length; index += 1) {
//     if (item.classList.contains('selected')) {
//       taskList.insertBefore(item, .nextSibling);
//     }
//   }
// }

moveDownButton.addEventListener('click', moveDown);
