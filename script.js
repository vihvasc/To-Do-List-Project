const text = document.getElementById('texto-tarefa');
const listIndex = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonLimpar = document.getElementById('apaga-tudo');
const buttonFinalizados = document.getElementById('remover-finalizados');
const buttonSalvar = document.getElementById('salvar-tarefas');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');

function pintarLi(event) {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    list[i].classList.remove('selected');
  }
  const { target } = event;
  target.classList.add('selected');
}

function riscarLi(event) {
  const { target } = event;
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

function addText() {
  const list = document.createElement('li');
  listIndex.appendChild(list);
  const textPush = document.createTextNode(text.value);
  list.appendChild(textPush);
  text.value = '';
  list.addEventListener('click', pintarLi);
  list.addEventListener('dblclick', riscarLi);
}

function apagarLis() {
  listIndex.innerHTML = '';
}

function apagarFinalizados() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].className === 'completed' || list[i].className === 'selected completed') {
      listIndex.removeChild(list[i]);
    }
  }
}

function salvarLista() {
  const list = document.getElementsByTagName('li');
  const jsonList = [];
  const jsonClass = [];
  for (let i = 0; i < list.length; i += 1) {
    jsonList.push(list[i].innerHTML);
    jsonClass.push(list[i].className);
  }
  localStorage.setItem('list', JSON.stringify(jsonList));
  localStorage.setItem('class', JSON.stringify(jsonClass));
}

function listaSalva() {
  if (localStorage.getItem('list') === null) {
    localStorage.setItem('list', JSON.stringify([]));
  } else {
    const listParse = JSON.parse(localStorage.getItem('list'));
    const classParse = JSON.parse(localStorage.getItem('class'));
    for (let i = 0; i < listParse.length; i += 1) {
      const listElement = document.createElement('li');
      listElement.innerHTML = listParse[i];
      listElement.className = classParse[i];
      listIndex.appendChild(listElement);
    }
  }
}

function moveUp() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    const previousItem = selectedItem.previousElementSibling;
    const parentItem = selectedItem.parentNode;
    if (selectedItem.previousElementSibling !== null) {
      parentItem.insertBefore(selectedItem, previousItem);
    }
  }
}

function moveDown() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    const nextItem = selectedItem.nextElementSibling;
    const parentItem = selectedItem.parentNode;
    if (selectedItem.nextElementSibling !== null) {
      parentItem.insertBefore(nextItem, selectedItem);
    }
  }
}

window.onload = function() {
  listaSalva();
};

buttonAdd.addEventListener('click', addText);
buttonLimpar.addEventListener('click', apagarLis);
buttonFinalizados.addEventListener('click', apagarFinalizados);
buttonSalvar.addEventListener('click', salvarLista);
buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown);