function selectTask(event) {
  const currentTask = document.getElementById('selected-task');

  if (currentTask) {
    currentTask.id = '';
  }

  const selectedTask = event.target;
  selectedTask.id = 'selected-task';
}

function createTask() {
  const taskInput = document.getElementById('texto-tarefa');
  const taskText = taskInput.value;
  const newTask = document.createElement('li');
  const taskList = document.getElementById('lista-tarefas');

  newTask.innerText = taskText;
  newTask.addEventListener('click', selectTask);
  taskList.appendChild(newTask);
  taskInput.value = '';
}

const taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', createTask);
