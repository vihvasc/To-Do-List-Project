const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');
const clearAllButton = document.querySelector('#apaga-tudo');

function taskCreator() {
  const taskListItem = document.createElement('li');
  taskListItem.innerText = input.value;
  input.value = '';
  taskList.appendChild(taskListItem);
}

function greyClick(event) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function lineThrough(event) {
  const completed = document.querySelector('.completed');
  if (!completed) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function cleaner() {
  taskList.innerText = '';
}

taskButton.addEventListener('click', taskCreator);
taskList.addEventListener('click', greyClick);
taskList.addEventListener('dblclick', lineThrough);
clearAllButton.addEventListener('click', cleaner);
