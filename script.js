const taskListItemClass = 'tarefa';

function addTask() {
  const taskInput = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');

  newTask.classList.add(taskListItemClass);
  newTask.innerText = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = '';
}

function handleTaskListItemClick(event) {
  if (event.target.classList.contains(taskListItemClass)) {
    const task = event.target;
    task.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

window.onload = () => {
  const addTaskButton = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');

  addTaskButton.addEventListener('click', addTask);
  taskList.addEventListener('click', handleTaskListItemClick);
};
