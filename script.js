function selectTask(event) {
  const currentTask = document.getElementById('selected');

  if (currentTask) {
    currentTask.id = '';
  }

  const selectedTask = event.target;
  selectedTask.id = 'selected';
}

function toggleCompletion(event) {
  const selectedTask = event.target;

  if (selectedTask.className === 'completed') {
    selectedTask.className = '';
  } else {
    selectedTask.className = 'completed';
  }
}

function createTask() {
  const taskInput = document.getElementById('texto-tarefa');
  const taskText = taskInput.value;
  const newTask = document.createElement('li');
  const taskList = document.getElementById('lista-tarefas');

  newTask.innerText = taskText;
  newTask.addEventListener('click', selectTask);
  newTask.addEventListener('dblclick', toggleCompletion);
  taskList.appendChild(newTask);

  taskInput.value = '';
}

function clearAll() {
  const taskList = document.getElementById('lista-tarefas');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function removeDoneTasks() {
  const doneTasks = document.getElementsByClassName('completed');

  const index = 0;
  while (doneTasks.length > 0) {
    doneTasks[index].remove();
  }
}

const taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', createTask);

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearAll);

const removeDoneButton = document.getElementById('remover-finalizados');
removeDoneButton.addEventListener('click', removeDoneTasks);
