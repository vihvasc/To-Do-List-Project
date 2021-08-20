const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');
const clearAllButton = document.querySelector('#apaga-tudo');
const finishedRemoverButton = document.querySelector('#remover-finalizados');

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
  const task = event.target.classList;
  if (task.contains('completed')) {
    task.remove('completed');
  } else {
    task.add('completed');
  }
}

function cleaner() {
  taskList.innerText = '';
}

function fineshedTaskRemover() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
}

taskButton.addEventListener('click', taskCreator);
taskList.addEventListener('click', greyClick);
taskList.addEventListener('dblclick', lineThrough);
clearAllButton.addEventListener('click', cleaner);
finishedRemoverButton.addEventListener('click', fineshedTaskRemover);
