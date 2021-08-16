function handleTaskDblClick(event) {
  const task = event.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function handleTaskClick(event) {
  const previousSelected = document.querySelector('.selected');
  if (previousSelected !== null) {
    previousSelected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function handleInput() {
  const input = document.querySelector('#texto-tarefa');
  const newTask = input.value;
  input.value = '';
  return newTask;
}

function createNewListItem() {
  const newListItem = document.createElement('li');
  newListItem.innerText = handleInput();
  newListItem.addEventListener('click', handleTaskClick);
  newListItem.addEventListener('dblclick', handleTaskDblClick);
  return newListItem;
}

function handleCreateTaskBtn() {
  const list = document.querySelector('#lista-tarefas');
  list.appendChild(createNewListItem());
}

function load() {
  const createTaskBtn = document.querySelector('#criar-tarefa');
  createTaskBtn.addEventListener('click', handleCreateTaskBtn);
}

window.onload = load;
