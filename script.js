const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputTextBox = document.getElementById('texto-tarefa');

function receiveTaskInput() {
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
  const inputText = receiveTaskInput();
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerText = inputText;
  taskList.appendChild(listItem);
  inputTextBox.value = '';
  const listItems = document.querySelectorAll('.list-item');
  handleListItemsEventAdd(listItems);
  handleCompletedTaskEventAdd(listItems);
}

window.onload = function createToDoListPage() {
  inputTextBox.addEventListener('keyup', receiveTaskInput);
  buttonCreateTask.addEventListener('click', handleTaskAdding);
};
