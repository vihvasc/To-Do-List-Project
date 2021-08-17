const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function throughTask(event) {
  const clicked = event.target;
  if (clicked.classList.contains('completed')) {
    clicked.classList.remove('completed');
  } else {
    clicked.classList.add('completed');
  }
}

const li = document.getElementsByTagName('li');
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
    li[i].style.backgroundColor = 'white';
  }
}

function markTask(event) {
  const selectClick = event.target;
  cleanMark();
  if (selectClick.tagName === 'LI') {
    selectClick.style.backgroundColor = 'rgb(128,128,128)';
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

const buttonRemove = document.getElementById('remover-finalizados');
function removeCompletedTask() {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      ul.removeChild(ul.children[index]);
      index -= 1;
    }
  }
}
buttonRemove.addEventListener('click', removeCompletedTask);
