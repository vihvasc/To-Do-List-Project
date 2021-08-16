const TASK_LIST_ITEM_CLASS = 'task';
const TASK_LIST_ID = 'lista-tarefas';
let selectedTask;

function addTask() {
  const taskInput = document.getElementById('texto-tarefa');
  const taskList = document.getElementById(TASK_LIST_ID);
  const newTask = document.createElement('li');

  newTask.classList.add(TASK_LIST_ITEM_CLASS);
  newTask.innerText = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = '';
}

function handleTaskListItemClick(event) {
  if (event.target.classList.contains(TASK_LIST_ITEM_CLASS)) {
    const task = event.target;

    if (typeof selectedTask !== 'undefined') {
      selectedTask.classList.remove('selected');
    }
    task.classList.add('selected');
    selectedTask = task;
  }
}

function handleTaskListItemDoubleClick(event) {
  if (event.target.classList.contains(TASK_LIST_ITEM_CLASS)) {
    const task = event.target;

    task.classList.toggle('completed');
  }
}

function clearTaskList() {
  const taskList = document.getElementById(TASK_LIST_ID);

  taskList.innerHTML = '';
}

function clearCompletedTasks() {
  let completedTasks = document.getElementsByClassName('completed');

  while (completedTasks.length > 0) {
    completedTasks[0].remove();
  }
}

window.onload = () => {
  const addTaskButton = document.getElementById('criar-tarefa');
  const taskList = document.getElementById(TASK_LIST_ID);
  const clearTaskListButton = document.getElementById('apaga-tudo');
  const clearCompletedTasksButton = document.getElementById(
    'remover-finalizados'
  );

  addTaskButton.addEventListener('click', addTask);
  taskList.addEventListener('click', handleTaskListItemClick);
  taskList.addEventListener('dblclick', handleTaskListItemDoubleClick);
  clearTaskListButton.addEventListener('click', clearTaskList);
  clearCompletedTasksButton.addEventListener('click', clearCompletedTasks);
};
