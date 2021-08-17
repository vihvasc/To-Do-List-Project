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

const selectedBackground = 'rgb(128, 128, 128)';

function applyBackground(selectedItem) {
  const oldSelected = document.querySelector('.selected');
  if (oldSelected) {
    oldSelected.style.background = '';
    oldSelected.classList.remove('selected');
  }
  const item = selectedItem;
  item.style.background = selectedBackground;
  item.classList.add('selected');
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
  sessionStorage.setItem('TaskListLength', listOfTasks.length);
  for (let i = 0; i < listOfTasks.length; i += 1) {
    const savedItem = `Item${i}`;
    const savedClassIndex = `Class${i}`;
    const savedClass = listOfTasks[i].classList.contains('completed');
    sessionStorage.setItem(savedItem, listOfTasks[i].innerText);
    sessionStorage.setItem(savedClassIndex, savedClass);
  }
}

function loadTaskList() {
  const taskListLength = sessionStorage.getItem('TaskListLength');
  for (let i = 0; i < taskListLength; i += 1) {
    const loadedItem = document.createElement('li');
    const taskText = sessionStorage.getItem(`Item${i}`);
    const taskClass = String(sessionStorage.getItem(`Class${i}`));
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
