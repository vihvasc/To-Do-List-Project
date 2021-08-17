const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputTextBox = document.getElementById('texto-tarefa');
const buttonEraseAll = document.getElementById('apaga-tudo');
const buttonRemoveCompleteTasks = document.getElementById('remover-finalizados');
const buttonSaveList = document.getElementById('salvar-tarefas');
const itemsTags = [];
const itemsTexts = [];
const buttonMoveItemUp = document.getElementById('mover-cima');
const buttonMoveItemDown = document.getElementById('mover-baixo');
const buttonRemoveSelectedItem = document.getElementById('remover-selecionado');

function handleTaskInputReceive() {
  const inputText = inputTextBox.value;
  return inputText;
}

function handleSelectedItemBgColor() {
  const listItems = document.getElementsByClassName('list-item');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].style.background = 'rgb(255, 255, 255)';
  }
  const selectedItem = document.querySelector('.selected');
  selectedItem.style.background = 'rgb(128, 128, 128)';
}

function handleSelectedItem(event) {
  const { target } = event;
  target.classList.add('selected');
  const listItem = document.querySelectorAll('.selected');
  for (let index = 0; index < listItem.length; index += 1) {
    if (target !== listItem[index]) {
      listItem[index].classList.remove('selected');
    }
  }

  handleSelectedItemBgColor();
}

function handleListItemsEventAdd(listItems) {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', handleSelectedItem);
  }
  listItems[0].classList.add('selected');
}

function handleCompletedTaskCheck(event) {
  const completeTask = event.target.className;
  if (completeTask.match('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function handleCompletedTaskEventAdd(listItems) {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('dblclick', handleCompletedTaskCheck);
  }
}

function handleTaskAdding() {
  const inputText = handleTaskInputReceive();
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerText = inputText;
  taskList.appendChild(listItem);
  inputTextBox.value = '';
  const listItems = document.querySelectorAll('.list-item');
  handleListItemsEventAdd(listItems);
  handleCompletedTaskEventAdd(listItems);
}

function handleListErasing() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function handleCompletedTaskErasing() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    const task = completedTasks[index];
    taskList.removeChild(task);
  }
}

function handleSaveList() {
  const itemsList = document.querySelectorAll('.list-item');
  const listSize = itemsList.length;
  for (let index = 0; index < listSize; index += 1) {
    const itemTag = itemsList[index].className;
    itemsTags.push(itemTag);
    const itemText = itemsList[index].innerText;
    itemsTexts.push(itemText);
  }
  localStorage.setItem('tags', JSON.stringify(itemsTags));
  localStorage.setItem('texts', JSON.stringify(itemsTexts));
}

function handleRetrieveList() {
  if (localStorage.length > 0) {
    handleListErasing();
    const newItemsTags = JSON.parse(localStorage.getItem('tags'));
    const newItemsTexts = JSON.parse(localStorage.getItem('texts'));
    const listSize = newItemsTags.length;
    for (let index = 0; index < listSize; index += 1) {
      const newListItem = document.createElement('li');
      newListItem.className = newItemsTags[index];
      newListItem.innerText = newItemsTexts[index];
      taskList.appendChild(newListItem);
    }
    const listItems = document.getElementsByClassName('list-item');
    handleListItemsEventAdd(listItems);
    handleCompletedTaskEventAdd(listItems);
    localStorage.clear();
  } else {
    return window.onload;
  }
}

const updatedList = document.getElementById('lista-tarefas');

function handleMoveItemUp() {
  const listItems = document.getElementsByClassName('list-item');
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== listItems[0]) {
    updatedList.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
}

function handleMoveItemDown() {
  const listItems = document.getElementsByClassName('list-item');
  const index = listItems.length;
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== listItems[index - 1]) {
    updatedList.insertBefore(selectedTask.nextElementSibling, selectedTask);
  }
}

function handleSelectedItemRemove() {
  const selectedItem = document.querySelector('.selected');
  taskList.removeChild(selectedItem);
}

window.onload = function createToDoListPage() {
  inputTextBox.addEventListener('keyup', handleTaskInputReceive);
  buttonCreateTask.addEventListener('click', handleTaskAdding);
  buttonEraseAll.addEventListener('click', handleListErasing);
  buttonRemoveCompleteTasks.addEventListener('click', handleCompletedTaskErasing);
  buttonSaveList.addEventListener('click', handleSaveList);
  buttonMoveItemUp.addEventListener('click', handleMoveItemUp);
  buttonMoveItemDown.addEventListener('click', handleMoveItemDown);
  buttonRemoveSelectedItem.addEventListener('click', handleSelectedItemRemove);
  window.reload = handleRetrieveList();
};
