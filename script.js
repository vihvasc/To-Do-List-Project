const taskList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');

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

function createTask(taskDescription, taskClass) {
  const newTask = document.createElement('li');

  newTask.innerText = taskDescription;
  newTask.className = taskClass;
  newTask.addEventListener('click', selectTask);
  newTask.addEventListener('dblclick', toggleCompletion);

  taskList.appendChild(newTask);
}

function clearInput() {
  taskInput.value = '';
}

function clearAll() {
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

function saveTasks() {
  localStorage.clear();
  const tasks = document.getElementsByTagName('li');
  const tasksArray = [];

  for (let index = 0; index < tasks.length; index += 1) {
    const taskObject = { text: tasks[index].innerText };

    if (tasks[index].classList.contains('completed')) {
      taskObject.completed = true;
    } else {
      taskObject.completed = false;
    }

    tasksArray.push(taskObject);
  }

  localStorage.setItem('taskList', JSON.stringify(tasksArray));
}

function removeSelectedTask() {
  const selectedTask = document.getElementById('selected');
  selectedTask.remove();
}

const taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', () => {
  createTask(taskInput.value);
  clearInput();
});

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearAll);

const removeDoneButton = document.getElementById('remover-finalizados');
removeDoneButton.addEventListener('click', removeDoneTasks);

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', saveTasks);

const removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', removeSelectedTask);

const task = JSON.parse(localStorage.getItem('taskList'));

for (let index = 0; index < task.length; index += 1) {
  if (task[index].completed) {
    createTask(task[index].text, 'completed');
  } else {
    createTask(task[index].text);
  }
}
