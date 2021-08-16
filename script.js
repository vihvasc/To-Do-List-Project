const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputTextBox = document.getElementById('texto-tarefa');

function receiveInputTask() {
  const inputText = inputTextBox.value;
  return inputText;
}

function handleTaskAdding() {
  const inputText = receiveInputTask();
  const listItem = document.createElement('li');
  listItem.innerText = inputText;
  taskList.appendChild(listItem);
  inputTextBox.value = '';
}

window.onload = function createToDoListPage() {
  inputTextBox.addEventListener('keyup', receiveInputTask);
  buttonCreateTask.addEventListener('click', handleTaskAdding);
};
