// Variáveis
let storedTasks = [];
let taskList = document.querySelector('#lista-tarefas')
const createButton = document.querySelector('#criar-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const removeButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');
const main = document.querySelector('main');

// Event Listeners
createButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearList);
removeButton.addEventListener("click", removeFinishedTasks);
saveButton.addEventListener("click", saveTasks);
upButton.addEventListener("click", moveUp);
downButton.addEventListener("click", moveDown);

// Funções
generateList();

function generateList() {
  if (localStorage.getItem('tasks')) {
    let list = document.createElement('ol');
    storedTasks = JSON.parse(localStorage.getItem('tasks'));
    list.id = 'lista-tarefas';

    for (let index = 0; index < storedTasks.length; index += 1) {
      if (storedTasks[index].includes('.completed')) {
        list.innerHTML += `<li class="completed">${storedTasks[index].replace('.completed','')}</li>`;
      } else {
        list.innerHTML += `<li>${storedTasks[index]}</li>`;
      }
    }

    main.appendChild(list);

    let allTasks = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < allTasks.length; index += 1) {
      allTasks[index].addEventListener('click', highlightTask);
      allTasks[index].addEventListener('dblclick', finishTask);
    }

    taskList = document.querySelector('#lista-tarefas')
  } else {
    let list = document.createElement('ol');
    list.id = 'lista-tarefas';
    main.appendChild(list);
    taskList = document.querySelector('#lista-tarefas')
  }
}

function addTask() {
  let input = document.querySelector('#texto-tarefa');
  
  if (input.value != '') {
    let newTask = document.createElement('li');
    newTask.innerText = input.value;
    newTask.addEventListener("click", highlightTask);
    newTask.addEventListener("dblclick", finishTask);
    taskList.appendChild(newTask);
    input.value = "";
  } else {
    window.alert('Você não digitou nada!')
  }
}

function highlightTask(event) {
  let selected = document.querySelectorAll('.selected');

  if (!event.target.classList.contains('selected')) {
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected')
    }
    event.target.classList.add('selected');
  } else {
    event.target.classList.remove('selected');
  }
}

function finishTask(event) {
  if (!event.target.classList.contains('completed')) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function clearList() {
  let list = document.querySelectorAll('#lista-tarefas li');

  for (let index = 0; index < list.length; index += 1) {
    list[index].remove();
  }

  storedTasks = [];
}

function removeFinishedTasks() {
  let finishedTasks = document.querySelectorAll('.completed');

  for (let index = 0; index < finishedTasks.length; index += 1) {
    finishedTasks[index].remove();
  }
}

function saveTasks() {
  let list = document.querySelectorAll('#lista-tarefas li');
  storedTasks = [];

  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('completed')) {
      storedTasks.push(list[index].innerText + '.completed');
    } else {
      storedTasks.push(list[index].innerText);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(storedTasks))
}

function moveUp() {
  let liCurrent = document.querySelector(".selected");

  if (liCurrent != null) {
  let liAbove = document.querySelector(".selected").previousSibling;

  if (liCurrent === null) {
    return "";
  }

  taskList.insertBefore(liCurrent,liAbove);
  }
}

function moveDown() {
  let liCurrent = document.querySelector(".selected");

  if (liCurrent != null) {
    let liBelow = document.querySelector(".selected").nextSibling;

    if (liBelow === null) {
      liCurrent = document.querySelector("#lista-tarefas li");
      liBelow = document.querySelector(".selected");
    }
  
    taskList.insertBefore(liBelow,liCurrent);
  }
}