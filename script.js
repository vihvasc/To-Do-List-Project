const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const li = document.getElementsByTagName('li');
function throughTask(event) {
  const clicked = event.target;
  if (clicked.classList.contains('completed')) {
    clicked.classList.remove('completed');
  } else {
    clicked.classList.add('completed');
  }
}

function addListener() {
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('dblclick', throughTask);
  }
}

function addTask() {
  const createLi = document.createElement('li');
  ol.appendChild(createLi).innerText = input.value;
  input.value = '';
  addListener();
}
button.addEventListener('click', addTask);

const ul = document.getElementById('lista-tarefas');
function cleanMark() {
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].classList.contains('selected')) {
      li[i].classList.remove('selected');
    }
  }
}

function markTask(event) {
  const selectClick = event.target;
  cleanMark();
  if (selectClick.tagName === 'LI') {
    selectClick.classList.add('selected');
  }
}
ul.addEventListener('click', markTask);

const buttonCleanAll = document.getElementById('apaga-tudo');
function cleanAll() {
  for (let i = 0; i < li.length; i += 0) {
    ul.removeChild(ul.children[0]);
  }
}
buttonCleanAll.addEventListener('click', cleanAll);

const buttonRemoveCompleted = document.getElementById('remover-finalizados');
function removeCompletedTask() {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      ul.removeChild(ul.children[index]);
      index -= 1;
    }
  }
}
buttonRemoveCompleted.addEventListener('click', removeCompletedTask);

const buttonRemoveSelected = document.getElementById('remover-selecionado');
function removeSelectedTask() {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      ul.removeChild(ul.children[index]);
    }
  }
}
buttonRemoveSelected.addEventListener('click', removeSelectedTask);

const buttonMoveUp = document.getElementById('mover-cima');
function moveUp() {
  for (let index = 1; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      ol.insertBefore(li[index], li[index - 1]);
    }
  }
}
buttonMoveUp.addEventListener('click', moveUp);

const buttonMoveDown = document.getElementById('mover-baixo');
function moveDown() {
  for (let index = 0; index < li.length - 1; index += 1) {
    if (li[index].classList.contains('selected')) {
      ol.insertBefore(li[index + 1], li[index]);
      return;
    }
  }
}
buttonMoveDown.addEventListener('click', moveDown);

const buttonSaveTasks = document.getElementById('salvar-tarefas');

function saveIndex() {
  const list = ol.children;
  const saveIndex = [];
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('completed')) {
      saveIndex.push(index);
    } else {
      saveIndex.push('amora');
    }
  }
  return saveIndex;
}

function saveTasks() {
  const saveLi = [];
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    saveLi.push(list[index].innerText);
  }
  localStorage.setItem('list', JSON.stringify(saveLi));
  localStorage.setItem('index', JSON.stringify(saveIndex()));
}
buttonSaveTasks.addEventListener('click', saveTasks);

function recoverIndex(i, index, createLi) {
  if (i[index] === index) {
    createLi.classList.add('completed');
  }
}
function recoveryTasks() {
  const list = JSON.parse(localStorage.getItem('list'));
  const i = JSON.parse(localStorage.getItem('index'));
  if (list) {
    for (let index = 0; index < list.length; index += 1) {
      const createLi = document.createElement('li');
      createLi.addEventListener('click', markTask);
      createLi.addEventListener('dblclick', throughTask);
      createLi.innerText = list[index];
      ol.appendChild(createLi);
      recoverIndex(i, index, createLi);
    }
  }
}

window.onload = () => {
  recoveryTasks();
};
console.log(ol.children);
