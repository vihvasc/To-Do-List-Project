const inputText = document.getElementById('texto-tarefa');
const ordenadeList = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearCompleted = document.getElementById('remover-finalizados');
const buttonSaveTask = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
const buttonClearElement = document.getElementById('remover-selecionado');

// Puxa a lista salva no local storage
function loadSaveList() {
  if (localStorage.getItem('lista-ordenada')) {
    ordenadeList.innerHTML = localStorage.getItem('lista-ordenada');
  }
}
loadSaveList();

// Adiciona itens na lista
function addList() {
  if (inputText.value !== '') {
    const createLi = document.createElement('li');
    createLi.innerText = inputText.value;
    createLi.className = 'lista';
    ordenadeList.appendChild(createLi);
// Limpa o campo de texto após adicionar
    inputText.value = '';
  } else {
    const placeholder = inputText.placeholder = 'Lista vazia!';
  }
}
buttonAdd.addEventListener('click', addList);

// Marca a atividade com a class completed e desmarca a anterior para ter somente uma
function changeBackgroundColor(event) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}
ordenadeList.addEventListener('click', changeBackgroundColor);

// Marca a atividade com a class completed
function completedList(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
ordenadeList.addEventListener('dblclick', completedList);

// Limpa todas as atividades
function clearAll() {
  ordenadeList.innerHTML = '';
}
buttonClearAll.addEventListener('click', clearAll);

// Limpa as atividades que tem a class completed
function clearCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (const key of completed) {
    ordenadeList.removeChild(key);
  }
}
buttonClearCompleted.addEventListener('click', clearCompleted);

// Salva a lista no local storage
function saveTasks() {
  localStorage.setItem('lista-ordenada', ordenadeList.innerHTML);
}
buttonSaveTask.addEventListener('click', saveTasks);

// Mover elemento para cima
function moveUp() {
  const elementSelected = document.getElementsByClassName('selected')[0];
  const list = document.querySelectorAll('.lista');
  if (list[0] !== elementSelected && elementSelected) {
    const elementUp = elementSelected.previousElementSibling;
    const parentNode = elementUp.parentNode;
    parentNode.insertBefore(elementUp, elementSelected.nextSibling);
  }
}
buttonMoveUp.addEventListener('click', moveUp);

// Mover elemento para baixo
function moveDown() {
  const elementSelected = document.getElementsByClassName('selected')[0];
  const list = document.querySelectorAll('.lista');
  if (list[list.length - 1] !== elementSelected && elementSelected) {
    const elementDown = elementSelected.nextElementSibling;
    const parentNode = elementSelected.parentNode;
    parentNode.insertBefore(elementDown, elementSelected);
  }
}
buttonMoveDown.addEventListener('click', moveDown);

function clearElement() {
  const elementSelected = document.getElementsByClassName('selected')[0];
  ordenadeList.removeChild(elementSelected);
}
buttonClearElement.addEventListener('click', clearElement);
