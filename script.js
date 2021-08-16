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
