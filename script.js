const inputTask = document.getElementById('texto-tarefa');
const createTaskBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const body = document.querySelector('body');
let clickCount = 0;
const clearTasksBtn = document.getElementById('apaga-tudo');
const removeDoneBtn = document.getElementById('remover-finalizados');
const saveListBtn = document.getElementById('salvar-tarefas');

function checkClasses(currentItem, userClasses, counter) {
  if (userClasses[counter] === ('completed')) {
    currentItem.classList.add('completed');
  }
}

// povoa lista com dados do local storage
function fillList(dict) {
  if (dict) {
    const userTasks = dict.tasks;
    const userClasses = dict.classes;
    for (let counter = 0; counter < userTasks.length; counter += 1) {
      const currentItem = document.createElement('li');
      currentItem.innerText = userTasks[counter];
      checkClasses(currentItem, userClasses, counter);
      taskList.appendChild(currentItem);
    }
  }
}

window.onload = function initialize() {
  const savedDict = JSON.parse(localStorage.getItem('userTasks'));
  fillList(savedDict);
};

// adiciona tarefa à lista
function addTask() {
  const inputTaskValue = inputTask.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = inputTaskValue;
  taskList.appendChild(newTask);
  inputTask.value = '';
}
createTaskBtn.addEventListener('click', addTask);

// seleciona a tarefa
function addSelected(element) {
  // força recálculo de taskList (agora, com itens adicionados)
  const tasks = Array.from(taskList.children);
  for (let counter = 0; counter < tasks.length; counter += 1) {
    const currentTask = tasks[counter];
    if (currentTask.classList.contains('selected')) {
      currentTask.classList.remove('selected');
    }
  }
  element.classList.add('selected');
}

// adiciona/remove classe 'completed'
function markCompleted(element) {
  if (element.classList.contains('completed')) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}

// verifica número de clicks
// Fonte: https://gist.github.com/karbassi/639453
function countClicks(element) {
  clickCount += 1;
  let singleClickTimer;
  addSelected(element);
  if (clickCount === 1) {
    // aguarda 175ms para zerar clickCount
    singleClickTimer = setTimeout(() => { clickCount = 0; }, 200);
  } else if (clickCount === 2) {
    clearTimeout(singleClickTimer);
    clickCount = 0;
    markCompleted(element);
  }
}

// verifica se o elemento é um list item
function checkItem(originEvent) {
  const element = originEvent.target;
  if (element.parentNode.id === 'lista-tarefas') {
    countClicks(element);
  }
}
body.addEventListener('click', checkItem);

// apaga tarefas
function clearTaskList() {
  taskList.innerHTML = '';
}
clearTasksBtn.addEventListener('click', clearTaskList);

// apaga tarefas concluídas
function removeDone() {
  // tasks será usada no loop
  const tasks = Array.from(taskList.children);
  for (let counter = 0; counter < tasks.length; counter += 1) {
    if (tasks[counter].classList.contains('completed')) {
      // remove list item tasks[counter]
      taskList.removeChild(tasks[counter]);
    }
  }
}
removeDoneBtn.addEventListener('click', removeDone);

function saveList() {
  const userList = Array.from(taskList.children);
  const savedDict = {
    tasks: [],
    classes: [],
  };
  for (let counter = 0; counter < userList.length; counter += 1) {
    const userTask = userList[counter].innerText;
    savedDict.tasks.push(userTask);
    if (userList[counter].classList.contains('completed')) {
      savedDict.classes.push('completed');
    } else {
      savedDict.classes.push('');
    }
  }
  localStorage.setItem('userTasks', JSON.stringify(savedDict));
}
saveListBtn.addEventListener('click', saveList);
