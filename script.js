const header = document.createElement('header');
document.body.appendChild(header);

const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
header.appendChild(title);

const main = document.createElement('main');
document.body.appendChild(main);
const discreteParagraph = document.createElement('p');
discreteParagraph.id = 'funcionamento';
discreteParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
main.appendChild(discreteParagraph);

const inputDiv = document.createElement('div');
document.body.appendChild(inputDiv);

const input = document.createElement('input');
input.id = 'texto-tarefa';
document.body.appendChild(input);

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
document.body.appendChild(taskList);

const addBtn = document.createElement('button');
addBtn.id = 'criar-tarefa';
addBtn.innerText = 'Adicionar!';
document.body.appendChild(addBtn);

function applyBackground(selTask) {
  const selected = document.querySelectorAll('.selected');
  if (selected[0] === undefined) {
    selTask.classList.toggle('selected');
  } else {
    selected[0].classList.remove('selected');
    selTask.classList.toggle('selected');
  }
}

function selectTask(event) {
  const theTarget = event.target;
  applyBackground(theTarget);
}

function applyLinetrough(completedItem) {
  completedItem.classList.toggle('completed');
}

function completedTask(event) {
  const theTarget = event.target;
  applyLinetrough(theTarget);
}

function addTask() {
  const taskContent = input.value;
  const taskItem = document.createElement('li');
  taskItem.innerText = taskContent;
  taskItem.addEventListener('click', selectTask);
  taskItem.addEventListener('dblclick', completedTask);
  taskList.appendChild(taskItem);
  input.value = '';
}

addBtn.addEventListener('click', addTask);

function clearTasks() {
  taskList.innerHTML = '';
}

const clearBtn = document.createElement('button');
clearBtn.addEventListener('click', clearTasks);
clearBtn.id = 'apaga-tudo';
clearBtn.innerText = 'Apagar Tudo';
document.body.appendChild(clearBtn);

function removeDoneTasks() {
  const doneTask = document.querySelectorAll('.completed');
  for (let i = 0; i < doneTask.length; i += 1) {
    doneTask[i].remove();
  }
}

const removeDoneTasksBtn = document.createElement('button');
removeDoneTasksBtn.addEventListener('click', removeDoneTasks);
removeDoneTasksBtn.id = 'remover-finalizados';
removeDoneTasksBtn.innerText = 'Remover finalizados';
document.body.appendChild(removeDoneTasksBtn);

function saveTaskList() {
  const listOfTasks = document.querySelectorAll('li');
  localStorage.setItem('TaskListLength', listOfTasks.length);
  for (let i = 0; i < listOfTasks.length; i += 1) {
    const savedItem = `Item${i}`;
    const savedClassIndex = `Class${i}`;
    const savedClass = listOfTasks[i].classList.contains('completed');
    localStorage.setItem(savedItem, listOfTasks[i].innerText);
    localStorage.setItem(savedClassIndex, savedClass);
  }
}

function loadTaskList() {
  const taskListLength = localStorage.getItem('TaskListLength');
  for (let i = 0; i < taskListLength; i += 1) {
    const loadedItem = document.createElement('li');
    const taskText = localStorage.getItem(`Item${i}`);
    const taskClass = String(localStorage.getItem(`Class${i}`));
    console.log(taskClass);
    loadedItem.innerText = taskText;
    loadedItem.addEventListener('click', selectTask);
    loadedItem.addEventListener('dblclick', completedTask);
    if (taskClass === 'true') {
      loadedItem.classList.add('completed');
    }
    taskList.appendChild(loadedItem);
  }
}

const saveTaskListBtn = document.createElement('button');
saveTaskListBtn.addEventListener('click', saveTaskList);
saveTaskListBtn.id = 'salvar-tarefas';
saveTaskListBtn.innerText = 'Salvar';
document.body.appendChild(saveTaskListBtn);

window.onload = loadTaskList;
// Consultei o repositório do Rodrigo Lima com sua autorização para resolver essa parte.
// https://github.com/tryber/sd-015-b-project-todo-list/pull/99#issue-713660235

function moveUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    const prevTask = selectedTask.previousElementSibling;
    if (prevTask === null) {
      return;
    }
    const taskInfo = {
      selectedText: selectedTask.innerText,
      selectedClass: selectedTask.className,
      prevText: prevTask.innerText,
      prevClass: prevTask.className,
    };
    console.log(taskInfo);
    selectedTask.innerText = taskInfo.prevText;
    selectedTask.className = taskInfo.prevClass;
    prevTask.innerText = taskInfo.selectedText;
    prevTask.className = taskInfo.selectedClass;
  }
}

const moveUpBtn = document.createElement('button');
moveUpBtn.addEventListener('click', moveUp);
moveUpBtn.id = 'mover-cima';
moveUpBtn.innerText = 'Mover Acima';
document.body.appendChild(moveUpBtn);

function moveDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    const nextTask = selectedTask.nextElementSibling;
    if (nextTask === null) {
      return;
    }
    const taskInfo = {
      selectedText: selectedTask.innerText,
      selectedClass: selectedTask.className,
      prevText: nextTask.innerText,
      prevClass: nextTask.className,
    };
    console.log(taskInfo);
    selectedTask.innerText = taskInfo.prevText;
    selectedTask.className = taskInfo.prevClass;
    nextTask.innerText = taskInfo.selectedText;
    nextTask.className = taskInfo.selectedClass;
  }
}

const moveDownBtn = document.createElement('button');
moveDownBtn.addEventListener('click', moveDown);
moveDownBtn.id = 'mover-baixo';
moveDownBtn.innerText = 'Mover Abaixo';
document.body.appendChild(moveDownBtn);

function rmvSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

const rmvSelectedBtn = document.createElement('button');
rmvSelectedBtn.addEventListener('click', rmvSelected);
rmvSelectedBtn.id = 'remover-selecionado';
rmvSelectedBtn.innerText = 'Remover';
document.body.appendChild(rmvSelectedBtn);
