const buttonAdd = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const itens = document.getElementById('lista-tarefas');

function addTask() {
  const listItem = document.createElement('li');
  const task = inputText.value;
  listItem.innerText = task;
  listItem.className = 'item';
  itens.appendChild(listItem);
  inputText.value = '';
}

buttonAdd.addEventListener('click', addTask);

// altera cor de fundo da lista
const tasks = document.getElementById('lista-tarefas');

function removeClass() {
  const classList = document.querySelectorAll('.item');
  for (let index = 0; index < classList.length; index += 1) {
    classList[index].classList.remove('selected');
  }
}

function changeColor(event) {
  const eventItem = event.target;
  if (eventItem.className === 'item' || eventItem.className === 'item completed') {
    removeClass();
    eventItem.classList.add('selected');
  }
}

tasks.addEventListener('click', changeColor);

// marca task como completa

function compare1(itemEvent) {
  return itemEvent.className === 'item completed selected';
}

function compare2(itemEvent) {
  return itemEvent.className === 'item selected completed';
}

function addRemoveLineThrough(event) {
  const itemEvent = event.target;
  if (compare1(itemEvent) || compare2(itemEvent)) {
    itemEvent.classList.remove('completed');
  } else {
    itemEvent.classList.add('completed');
  }
}

itens.addEventListener('dblclick', addRemoveLineThrough);

// apagar tudo
const eraserAll = document.getElementById('apaga-tudo');

function eraser() {
  itens.innerText = '';
}

eraserAll.addEventListener('click', eraser);

// apaga tarefas finalizadas
const clearTaskCompleted = document.getElementById('remover-finalizados');

function removeCompleteTask() {
  const completedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTask.length; index += 1) {
    completedTask[index].remove();
  }
}

clearTaskCompleted.addEventListener('click', removeCompleteTask);
