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

function createTask(taskDescription, classString) {
  const newTask = document.createElement('li');

  newTask.innerText = taskDescription;
  newTask.className = classString;
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
  taskButton.innerText = 'Criar tarefa';
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
  clearButton.innerText = 'Apagar tudo';
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
  removeDoneButton.innerText = 'Remover finalizados';
  removeDoneButton.addEventListener('click', removeDoneTasks);

  buttonsContainer.appendChild(removeDoneButton);
}

function transformElementToObject(element) {
  const Object = { text: element.innerText, class: element.className };

  return Object;
}

function saveTasks() {
  localStorage.clear();
  const tasks = document.getElementsByTagName('li');
  const tasksArray = [];

  for (let index = 0; index < tasks.length; index += 1) {
    const taskObject = transformElementToObject(tasks[index]);

    tasksArray.push(taskObject);
  }

  localStorage.setItem('taskList', JSON.stringify(tasksArray));
}

function createSaveButton() {
  const saveButton = document.createElement('button');

  saveButton.id = 'salvar-tarefas';
  saveButton.innerText = 'Salvar';
  saveButton.addEventListener('click', saveTasks);

  buttonsContainer.appendChild(saveButton);
}

function moveTaskUp() {
  const selectedElement = document.getElementById('selected');
  const targetElement = selectedElement.previousElementSibling;
  const selectedObject = transformElementToObject(selectedElement);
  const targetObject = transformElementToObject(targetElement);

  selectedElement.innerText = targetObject.text;
  selectedElement.className = targetObject.class;
  selectedElement.id = '';

  targetElement.innerText = selectedObject.text;
  targetElement.className = selectedObject.class;
  targetElement.id = 'selected';
}

function createMoveUpButton() {
  const moveUpButton = document.createElement('button');

  moveUpButton.id = 'mover-cima';
  moveUpButton.innerText = 'Mover para cima';
  moveUpButton.addEventListener('click', moveTaskUp);

  buttonsContainer.appendChild(moveUpButton);
}

function moveTaskDown() {
  const selectedElement = document.getElementById('selected');
  const targetElement = selectedElement.nextElementSibling;
  const selectedObject = transformElementToObject(selectedElement);
  const targetObject = transformElementToObject(targetElement);

  selectedElement.innerText = targetObject.text;
  selectedElement.className = targetObject.class;
  selectedElement.id = '';

  targetElement.innerText = selectedObject.text;
  targetElement.className = selectedObject.class;
  targetElement.id = 'selected';
}

function createMoveDownButton() {
  const moveUpButton = document.createElement('button');

  moveUpButton.id = 'mover-baixo';
  moveUpButton.innerText = 'Mover para baixo';
  moveUpButton.addEventListener('click', moveTaskDown);

  buttonsContainer.appendChild(moveUpButton);
}

function removeSelectedTask() {
  const selectedTask = document.getElementById('selected');
  selectedTask.remove();
}

function createRemoveSelectedButton() {
  const removeSelectedButton = document.createElement('button');

  removeSelectedButton.id = 'remover-selecionado';
  removeSelectedButton.innerText = 'Remover tarefa selecionada';
  removeSelectedButton.addEventListener('click', removeSelectedTask);

  buttonsContainer.appendChild(removeSelectedButton);
}

function getStoredTasks() {
  for (let index = 0; index < task.length; index += 1) {
    if (task[index].class) {
      createTask(task[index].text, task[index].class);
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
  createMoveUpButton();
  createMoveDownButton();
  createRemoveSelectedButton();
  generateStoredTasks();
};
