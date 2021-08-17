const listaTarefas = 'lista-tarefas';

// Requisitos 7 e 8 - Clicar em um item da lista altera sua cor de fundo. Apenas um item pode ser selecionado.
function handleListBackgroundColor(event) {
  const listItem = document.getElementsByTagName('li');
  const targetEvent = event.target;

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = '';
    listItem[i].id = '';
  }
  targetEvent.style.backgroundColor = 'gray';
  targetEvent.id = 'selected';
}

// Requisito 9 - Clicar duas vezes em um item da lista deixa ele tachado. Clicar outras duas vezes remove o tachado.
function handleListItemDbClick(event) {
  const targetEvent = event;

  targetEvent.target.classList.toggle('completed');
}

// Cria função que adiciona todos os eventos aos items da lista.
function addItemListEvents(itemList) {
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].addEventListener('click', handleListBackgroundColor);
    itemList[i].addEventListener('dblclick', handleListItemDbClick);
  }
}

// Cria Lista Ordenada pelo DOM e Restaura o Local Storage.
function restoreLocalStorage() {
  const value = JSON.parse(localStorage.getItem('taskList'));

  const newOl = document.createElement('ol');

  newOl.id = listaTarefas;
  newOl.innerHTML = value;
  const getOlParent = document.getElementById('list-container');

  getOlParent.appendChild(newOl);
  addItemListEvents(newOl.childNodes);
}

// Requisitos 5 e 6 - Cria um novo item ao final da lista e apaga o valor do input.
function handleNewTask() {
  const newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;

  const orderedList = document.getElementById(listaTarefas);
  orderedList.appendChild(newTask);

  // Apaga o input digitado.
  document.getElementById('texto-tarefa').value = '';

  // Adiciona Event Listener a Lista.
  addItemListEvents(orderedList.childNodes);
}

function addNewTaskButtonEvent() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  buttonCreateTask.addEventListener('click', handleNewTask);
}

// Requisito 10 - Criar botão que apaga todos os elementos da lista.
function handleClearListButton() {
  const itemList = document.querySelectorAll('li');

  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].remove();
  }
  localStorage.clear();
}

function addClearListButtonEvent() {
  const clearListButton = document.getElementById('apaga-tudo');
  clearListButton.addEventListener('click', handleClearListButton);
}

// Requisito 11 - Criar botão que apaga somente os items finalizados.
function handleCompletedClearButton() {
  const completedTasks = document.querySelectorAll('.completed');

  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}

function addCompletedClearButtonEvent() {
  const clearCompletedButton = document.getElementById('remover-finalizados');
  clearCompletedButton.addEventListener('click', handleCompletedClearButton);
}

// Requisito 12 - Cria função que salva lista no Local Storage.
function storageTasks() {
  const orderedList = document.getElementById(listaTarefas);

  localStorage.setItem('taskList', JSON.stringify(orderedList.innerHTML));
}

function addStorageTasksButtonEvent() {
  const getSaveButton = document.getElementById('salvar-tarefas');

  getSaveButton.addEventListener('click', storageTasks);
}

// Requisito 14 - Cria botão que apaga somente o elemento selecionado.
function deleteSelectedTaskItem() {
  const selectedTask = document.getElementById('selected');
  selectedTask.remove();
}

function addDeleteSelectedTaskItemButton() {
  const deleteTaskButton = document.getElementById('remover-selecionado');

  deleteTaskButton.addEventListener('click', deleteSelectedTaskItem);
}

window.onload = function () {
  restoreLocalStorage();
  addNewTaskButtonEvent();
  addClearListButtonEvent();
  addCompletedClearButtonEvent();
  addStorageTasksButtonEvent();
  addDeleteSelectedTaskItemButton();
};
