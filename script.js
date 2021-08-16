const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputTextBox = document.getElementById('texto-tarefa');
const buttonEraseAll = document.getElementById('apaga-tudo');
const buttonRemoveCompleteTasks = document.getElementById('remover-finalizados');

function handleTaskInputReceive() {
  const inputText = inputTextBox.value;
  return inputText;
}

function handleSelectedItemBgColor() {
  const listItems = document.querySelectorAll('.list-item');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].style.background = 'rgb(255, 255, 255)';
  }
  const selectedItem = document.querySelector('.selected');
  selectedItem.style.background = 'rgb(128, 128, 128)';
}

function handleSelectedItem(event) {
  const listItem = document.querySelector('.selected');
  listItem.classList.remove('selected');
  event.target.classList.add('selected');
  handleSelectedItemBgColor();
}

function handleListItemsEventAdd(listItems) {
  // const listItems = document.querySelectorAll('.list-item');
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
  // const listItems = document.querySelectorAll('.list-item');
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

window.onload = function createToDoListPage() {
  inputTextBox.addEventListener('keyup', handleTaskInputReceive);
  buttonCreateTask.addEventListener('click', handleTaskAdding);
  buttonEraseAll.addEventListener('click', handleListErasing);
  buttonRemoveCompleteTasks.addEventListener('click', handleCompletedTaskErasing);
};
