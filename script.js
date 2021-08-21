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

function addTask() {
  const createLi = document.createElement('li');
  if (input.value === '') {
    return alert('Favor inserir um nome válido para a tarefa!');
  }
  createLi.innerText = input.value;
  createLi.classList.add('tarefa');
  createLi.addEventListener('click', addClass);
  createLi.addEventListener('dblclick', finishedTask);
  taskList.appendChild(createLi);
  input.value = '';
}

function checkEnterPressed(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

function createTaskButton() {
  createButton('criar-tarefa', '➕', 'lista-tarefas');
  const criarTarefa = document.getElementById('criar-tarefa');
  criarTarefa.addEventListener('click', addTask);
  input.addEventListener('keypress', checkEnterPressed);
}

function eraseAll() {
  const createdTasks = document.querySelectorAll('.tarefa');
  for (let task = 0; task < createdTasks.length; task += 1) {
    createdTasks[task].remove();
  }
  localStorage.removeItem('storedTask');
}

function createEraseAllButton() {
  createButton('apaga-tudo', '🗑️', 'lista-tarefas');
  const apagaTudo = document.getElementById('apaga-tudo');
  apagaTudo.addEventListener('click', eraseAll);
}

function removeFinished() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let task = 0; task < completedTasks.length; task += 1) {
    completedTasks[task].remove();
  }
}

function createRemoveFinishedButton() {
  createButton('remover-finalizados', 'Remover Finalizados', 'lista-tarefas');
  const removerFinalizados = document.getElementById('remover-finalizados');
  removerFinalizados.addEventListener('click', removeFinished);
}

function saveTasks() {
  const storedTasks = [];
  if (tasks !== null) {
    for (let task = 0; task < tasks.length; task += 1) {
      const currentTasks = tasks[task];
      const objStoreTask = { 
        task: currentTasks.innerText,
        class: currentTasks.className
      };
      storedTasks.push(objStoreTask);
    }
    localStorage.setItem('storedTask', JSON.stringify(storedTasks));
  }
}

function createSaveTasksButton() {
  createButton('salvar-tarefas', '💾', 'lista-tarefas');
  const salvarTarefas = document.getElementById('salvar-tarefas');
  salvarTarefas.addEventListener('click', saveTasks);
}

function getTasks() {
  const restoredTasks = JSON.parse(localStorage.getItem('storedTask'));
  if (restoredTasks !== null) {
    for (let task = 0; task < restoredTasks.length; task += 1) {
      const createLi = document.createElement('li');
      createLi.innerText = restoredTasks[task].task;
      createLi.className = restoredTasks[task].class;
      createLi.addEventListener('click', addClass);
      createLi.addEventListener('dblclick', finishedTask);
      taskList.appendChild(createLi);
    }
    input.value = '';
  }
}

function moveUp() {
  for (let task = 0; task < tasks.length; task += 1) {
    if (tasks[task].classList.contains('selected') && task > 0) {
      taskList.insertBefore(tasks[task], tasks[task - 1]);
    }
  }
}

function moveDown() {
  for (let task = 0; task < tasks.length; task += 1) {
    if (tasks[task].classList.contains('selected') && task < (tasks.length - 1)) {
      taskList.insertBefore(tasks[task], tasks[task + 2]);
      return;
    }
  }
}

function createMoveUpButton() {
  createButton('mover-cima', '🔺', 'lista-tarefas');
  const moverCima = document.getElementById('mover-cima');
  moverCima.addEventListener('click', moveUp);
}

function createMoveDownButton() {
  createButton('mover-baixo', '🔻', 'lista-tarefas');
  const moverBaixo = document.getElementById('mover-baixo');
  moverBaixo.addEventListener('click', moveDown);
}

function removeSelected() {
  const selectedTask = document.querySelectorAll('.selected');
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
createMoveUpButton();
createMoveDownButton();
createRemoveFinishedButton();
createRemoveSelectedButton();
window.addEventListener('load', getTasks);
