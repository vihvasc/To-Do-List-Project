const TASK_LIST_ITEM_CLASS = 'tarefa';
let selectedTask;

function addTask() {
  const taskInput = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
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
      selectedTask.style.backgroundColor = '';
    }
    task.style.backgroundColor = 'rgb(128, 128, 128)';
    selectedTask = task;
  }
}

function handleTaskListItemDoubleClick(event) {
  if (event.target.classList.contains(TASK_LIST_ITEM_CLASS)) {
    const task = event.target;

    task.classList.toggle('completed');
  }
}

window.onload = () => {
  const addTaskButton = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');

  addTaskButton.addEventListener('click', addTask);
  taskList.addEventListener('click', handleTaskListItemClick);
  taskList.addEventListener('dblclick', handleTaskListItemDoubleClick);
};
