const taskList = document.querySelector('#lista-tarefas');
const addTaskBtn = document.querySelector('#criar-tarefa');
const deleteCompletedTaskBtn = document.querySelector('#remover-finalizados');
const deleteAllTasksBtn = document.querySelector('#apaga-tudo');
const saveTasksBtn = document.querySelector('#salvar-tarefas');
const deleteSelectedTaskBtn = document.querySelector('#remover-selecionado');
const tasks = document.getElementsByClassName('task');

function handleSaveTasksBtn() {
  const contentToSave = taskList.innerHTML;
  localStorage.setItem('tasks', contentToSave);
}

function handleDeleteCompletedTaskBtn() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
}

function handleDeleteAllTasksBtn() {
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].remove();
    index -= 1;
  }
}

function handleDeleteSelectedTaskBtn() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

function handleTaskDblClick(event) {
  const currentTask = event.target;
  if (currentTask.classList.contains('completed')) {
    currentTask.classList.remove('completed');
  } else {
    currentTask.classList.add('completed');
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
  const newTaskText = input.value;
  input.value = '';
  return newTaskText;
}

function addListenerToTask(task) {
  task.addEventListener('click', handleTaskClick);
  task.addEventListener('dblclick', handleTaskDblClick);
}

function createNewListItem(taskText) {
  const newListItem = document.createElement('li');
  newListItem.innerText = taskText;
  newListItem.classList.add('task');
  addListenerToTask(newListItem);
  return newListItem;
}

function handleAddTaskBtn() {
  taskList.appendChild(createNewListItem(handleInput()));
}

function addOldTasks() {
  if (localStorage.tasks !== undefined) {
    taskList.innerHTML = localStorage.getItem('tasks');
  }
  for (let index = 0; index < tasks.length; index += 1) {
    addListenerToTask(tasks[index]);
  }
}

function load() {
  addOldTasks();
  addTaskBtn.addEventListener('click', handleAddTaskBtn);
  deleteSelectedTaskBtn.addEventListener('click', handleDeleteSelectedTaskBtn);
  deleteAllTasksBtn.addEventListener('click', handleDeleteAllTasksBtn);
  deleteCompletedTaskBtn.addEventListener('click', handleDeleteCompletedTaskBtn);
  saveTasksBtn.addEventListener('click', handleSaveTasksBtn);
}

load();
