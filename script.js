const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

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

button.addEventListener('click', taskCreator);
taskList.addEventListener('click', greyClick);
taskList.addEventListener('dblclick', lineThrough);
