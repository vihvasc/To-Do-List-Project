const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const local = JSON.parse(localStorage.getItem('taskList'));

function createTask() {
  const task = document.createElement('li');
  const input = document.getElementById('texto-tarefa');

  task.innerText = input.value;
  task.className = 'taskList';
  taskList.appendChild(task);
  input.value = '';
}

button.addEventListener('click', createTask);

function changeColor(event) {
  const task = document.getElementsByClassName('taskList');
  for (let index = 0; index < task.length; index += 1) {
    task[index].classList.remove('selected');
  }
  const selected = event.target;
  if (selected.className !== 'selected') {
    selected.classList.add('selected');
  }
}

taskList.addEventListener('click', changeColor);

function completedTask(event) {
  const completed = event.target;
  completed.classList.toggle('completed');
}

taskList.addEventListener('dblclick', completedTask);

function clearTasks() {
  taskList.innerText = '';
}

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearTasks);

function finalizedRemove() {
  const finalized = document.getElementsByClassName('completed');
  do {
    const i = finalized.length - 1;
    finalized[i].remove();
  } while (finalized.length - 1 >= 0);
}

const finalizedButton = document.getElementById('remover-finalizados');
finalizedButton.addEventListener('click', finalizedRemove);

function objectifyTasks(value) {
  const taskValues = {
    text: value.innerText,
    class: value.className,
  };
  return taskValues;
}

function saveTasks() {
  localStorage.clear();
  const listElement = document.getElementsByTagName('li');
  const taskArray = [];

  for (let index = 0; index < listElement.length; index += 1) {
    const taskToObject = objectifyTasks(listElement[index]);
    taskArray.push(taskToObject);
    console.log(listElement[index]);
  }
  localStorage.setItem('taskList', JSON.stringify(taskArray));
}

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', saveTasks);

function generateLocal() {
  for (let index = 0; index < local.length; index += 1) {
    const task = document.createElement('li');

    task.innerText = local[index].text;
    task.className = local[index].class;
    taskList.appendChild(task);
  }
}

function checkLocal() {
  if (local !== null) {
    generateLocal();
  }
}

checkLocal();

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

const removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', removeSelected);
