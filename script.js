const taskInput = document.getElementById('texto-tarefa');
const buttonsContainer = document.getElementById('buttons-container');
const taskList = document.getElementById('lista-tarefas');
const task = JSON.parse(localStorage.getItem('taskList'));

function selectTask(event) {
  const currentTask = document.getElementById('selected');

  if (currentTask) {
    currentTask.id = '';
  }

  const selectedTask = event.target;
  console.log(selectedTask);
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

function createTaskButton() {
  const taskButton = document.createElement('button');

  taskButton.id = 'criar-tarefa';
  taskButton.addEventListener('click', () => {
    createTask(taskInput.value);
    clearInput();
  });

  buttonsContainer.appendChild(taskButton);
}

function clearAll() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function createClearButton() {
  const clearButton = document.createElement('button');

  clearButton.id = 'apaga-tudo';
  clearButton.addEventListener('click', clearAll);

  buttonsContainer.appendChild(clearButton);
}

function removeDoneTasks() {
  const doneTasks = document.getElementsByClassName('completed');

  const index = 0;
  while (doneTasks.length > 0) {
    doneTasks[index].remove();
  }
}

function createRemoveDoneButton() {
  const removeDoneButton = document.createElement('button');

  removeDoneButton.id = 'remover-finalizados';
  removeDoneButton.addEventListener('click', removeDoneTasks);

  buttonsContainer.appendChild(removeDoneButton);
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

function createSaveButton() {
  const saveButton = document.createElement('button');

  saveButton.id = 'salvar-tarefas';
  saveButton.addEventListener('click', saveTasks);

  buttonsContainer.appendChild(saveButton);
}

function removeSelectedTask() {
  const selectedTask = document.getElementById('selected');
  selectedTask.remove();
}

function createRemoveSelectedButton() {
  const removeSelectedButton = document.createElement('button');

  removeSelectedButton.id = 'remover-selecionado';
  removeSelectedButton.addEventListener('click', removeSelectedTask);

  buttonsContainer.appendChild(removeSelectedButton);
}

function getStoredTasks() {
  for (let index = 0; index < task.length; index += 1) {
    if (task[index].completed) {
      createTask(task[index].text, 'completed');
    } else {
      createTask(task[index].text);
    }
  }
}
function generateStoredTasks() {
  if (task) {
    getStoredTasks();
  }
}

window.onload = () => {
  createTaskButton();
  createClearButton();
  createRemoveDoneButton();
  createSaveButton();
  createRemoveSelectedButton();
  generateStoredTasks();
};
