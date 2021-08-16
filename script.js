function handleDeleteAllTaskBtn() {
  const taskList = document.querySelector('#lista-tarefas');
  const tasks = taskList.children;

  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].remove();
    index -= 1;
  }
}

function handleDeleteCompletedTaskBtn() {
  const completedTasks = document.querySelectorAll('.completed');

  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
}

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
  const deleteCompletedTaskBtn = document.querySelector('#remover-finalizados');
  const deleteAllTaskBtn = document.querySelector('#apaga-tudo');

  createTaskBtn.addEventListener('click', handleCreateTaskBtn);
  deleteCompletedTaskBtn.addEventListener('click', handleDeleteCompletedTaskBtn);
  deleteAllTaskBtn.addEventListener('click', handleDeleteAllTaskBtn);
}

window.onload = load;
