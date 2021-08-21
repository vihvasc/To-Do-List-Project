const body = document.querySelector('body');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const tasks = document.getElementsByTagName('li');

function createButton(buttonId, buttonText, insertInsideId) {
  const createButton = document.createElement('button');
  createButton.id = buttonId;
  createButton.innerText = buttonText;
  createButton.style.marginLeft = '5px';
  body.insertBefore(createButton, document.getElementById(insertInsideId));
}

function addTask() {
  const createLi = document.createElement('li');
  // if (input.value === '') {
  //     return alert('Favor inserir um nome válido para a tarefa!');
  //   }
  createLi.innerText = input.value;
  createLi.classList.add('tarefa');
  createLi.addEventListener('click', addClass);
  createLi.addEventListener('dblclick', finishedTask)
  taskList.appendChild(createLi);
  input.value = '';
}

function createTaskButton() {
  createButton('criar-tarefa', '➕', 'lista-tarefas');
  const criarTarefa = document.getElementById('criar-tarefa');
  criarTarefa.addEventListener('click', addTask);
  input.addEventListener('keypress', checkEnterPressed);
}

function checkEnterPressed(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

function addClass(event) {
  const selectedClass = document.querySelector('.selected');
  if (selectedClass) {
    selectedClass.classList.remove('selected');
    selectedClass.style.backgroundColor = '';
  }
  event.target.classList.add('selected');
}

function finishedTask(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    if (selectedTask.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
}

function eraseAll() {
  let createdTasks = document.querySelectorAll('.tarefa');
  for (let task = 0; task < createdTasks.length; task += 1) {
    createdTasks[task].remove();
  }
  localStorage.removeItem('storedTasks');
}

function createEraseAllButton() {
  createButton('apaga-tudo', '🗑️', 'lista-tarefas');
  const apagaTudo = document.getElementById('apaga-tudo');
  apagaTudo.addEventListener('click', eraseAll);
}

function removeFinished() {
  let completedTasks = document.querySelectorAll('.completed');
  for (let task = 0; task < completedTasks.length; task += 1) {
    completedTasks[task].remove();
  }
}

function createRemoveFinishedButton() {
  createButton('remover-finalizados', 'Remover Finalizados', 'lista-tarefas');
  const removerFinalizados = document.getElementById('remover-finalizados');
  removerFinalizados.addEventListener('click', removeFinished);
}

function createSaveTasksButton() {
  createButton('salvar-tarefas', '💾', 'lista-tarefas');
  const salvarTarefas = document.getElementById('salvar-tarefas');
  salvarTarefas.addEventListener('click', saveTasks);
}

function removeSelected() {
  let selectedTask = document.querySelectorAll('.selected');
  for (let task = 0; task < selectedTask.length; task += 1) {
    selectedTask[task].remove();
  }
}

function createRemoveSelectedButton() {
  createButton('remover-selecionado', 'Remover Selecionado', 'lista-tarefas');
  const removerSelecionado = document.getElementById('remover-selecionado');
  removerSelecionado.addEventListener('click', removeSelected);
}

createTaskButton();
createSaveTasksButton();
createEraseAllButton();
createRemoveFinishedButton();
createRemoveSelectedButton();

function saveTasks() {
  let storedTasks = [];
  if (tasks !== null) {
    for (let task = 0; task < tasks.length; task += 1) {
      const currentTasks = tasks[task];
      let objStoreTask = { 
      task: currentTasks.innerText,
      class: currentTasks.className
      }
      storedTasks.push(objStoreTask);
    }
    localStorage.setItem('storedTask', JSON.stringify(storedTasks));
  }
}

function getTasks() {
  const restoredTasks = JSON.parse(localStorage.getItem('storedTask'));
  if (restoredTasks !== null) {
    for (let task = 0; task < restoredTasks.length; task += 1) {
      const createLi = document.createElement('li');
      createLi.innerText = restoredTasks[task].task;
      createLi.className = restoredTasks[task].class;
      createLi.addEventListener('click', addClass);
      createLi.addEventListener('dblclick', finishedTask)
      taskList.appendChild(createLi);
    }
    input.value = '';
  }
}

window.addEventListener('load', getTasks);
