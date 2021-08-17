const buttonAdd = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const itens = document.getElementById('lista-tarefas');
const eraserAll = document.getElementById('apaga-tudo');
const clearTaskCompleted = document.getElementById('remover-finalizados');
const buttonSave = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
const clearTaskSelected = document.getElementById('remover-selecionado');

// adiciona tarefa
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

itens.addEventListener('click', changeColor);

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
function eraser() {
  itens.innerText = '';
  localStorage.removeItem('tasks');
}

eraserAll.addEventListener('click', eraser);

// apaga tarefas finalizadas
function removeCompleteTask() {
  const completedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTask.length; index += 1) {
    completedTask[index].remove();
  }
}

clearTaskCompleted.addEventListener('click', removeCompleteTask);

// salva tarefas no local storage como objeto, inspirado na ideia do colega de turma Rodrigo Lima.
function saveTasks() {
  const nameTasks = {};
  const takeTasks = document.querySelectorAll('.item');

  for (let index = 0; index < takeTasks.length; index += 1) {
    const item = takeTasks[index];
    nameTasks[item.innerHTML] = item.className;
  }

  const stringTasks = JSON.stringify(nameTasks);
  localStorage.setItem('tasks', stringTasks);
}

buttonSave.addEventListener('click', saveTasks);

// carrega lista salva
function loadItens() {
  const takeStorageTasks = localStorage.getItem('tasks');
  const loadTasks = JSON.parse(takeStorageTasks);
  return loadTasks;
}

// cria lista salva
function crateli(savedKeys, savedValues) {
  for (let index = 0; index < savedKeys.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = savedKeys[index];
    li.className = savedValues[index];
    li.classList.remove('selected');
    itens.appendChild(li);
  }
}

function createSavedList() {
  const savedList = loadItens();
  const savedKeys = Object.keys(savedList);
  const savedValues = Object.values(savedList);
  crateli(savedKeys, savedValues);
}

if (localStorage.getItem('tasks') !== null) {
  createSavedList();
}

// mover elementos
function moveUp() {
  const elementSelected = document.querySelector('.selected');
  if (elementSelected === null) {
    return;
  }
  const elementUp = elementSelected.previousElementSibling;
  if (elementUp === null) {
    return;
  }
  const selectedClass = elementSelected.className;
  const selectedText = elementSelected.innerText;
  const upClass = elementUp.className;
  const upText = elementUp.innerText;

  elementSelected.className = upClass;
  elementSelected.innerText = upText;
  elementUp.className = selectedClass;
  elementUp.innerText = selectedText;
}

buttonMoveUp.addEventListener('click', moveUp);

function moveDonw() {
  const elementSelected = document.querySelector('.selected');
  if (elementSelected === null) {
    return;
  }
  const elementDonw = elementSelected.nextElementSibling;
  if (elementDonw === null) {
    return;
  }
  const selectedClass = elementSelected.className;
  const selectedText = elementSelected.innerText;
  const donwClass = elementDonw.className;

  const downText = elementDonw.innerText;

  elementSelected.className = donwClass;
  elementSelected.innerText = downText;
  elementDonw.className = selectedClass;
  elementDonw.innerText = selectedText;
}

buttonMoveDown.addEventListener('click', moveDonw);

// remove item selecionado
function removeSelectedItem() {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.remove();
  }
}

clearTaskSelected.addEventListener('click', removeSelectedItem);
