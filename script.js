const buttonTarefa = document.querySelector('#criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const buttonClearFinished = document.getElementById('remover-finalizados');
const buttonSaveList = document.getElementById('salvar-tarefas');
const buttonClearSelect = document.getElementById('remover-selecionado');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
const input = document.querySelector('#texto-tarefa');

function addSession() {
  if (sessionStorage.getItem('lista') === null) {
    sessionStorage.setItem('lista', JSON.stringify([]));
  }

  function addToList() {
    const arraySession = JSON.parse(sessionStorage.getItem('lista'));
    const li = document.createElement('li');
    const listItem = document.querySelector('#lista-tarefas');
    const textPosition = arraySession.length - 1;
    li.className = 'item';

    listItem.appendChild(li).innerText = arraySession[textPosition];
    input.value = '';
  }

  const oldList = JSON.parse(sessionStorage.getItem('lista'));
  if (input.value !== '') {
    const listItemText = input.value;
    oldList.push(listItemText);
    sessionStorage.setItem('lista', JSON.stringify(oldList));
    addToList();
  }
}

function inFocus(element) {
  const elementOperate = element;
  if (elementOperate.target.classList.contains('item')) {
    if (document.querySelectorAll('.mark').length === 0) {
      elementOperate.target.className += ' mark';
    } else {
      document.querySelector('.mark').classList.remove('mark');
      elementOperate.target.className += ' mark';
    }
  }
}

function completeMark(element) {
  const elementToOperate = element;
  if (elementToOperate.target.classList.contains('item')) {
    if (elementToOperate.target.classList.contains('completed')) {
      elementToOperate.target.classList.remove('completed');
    } else {
      elementToOperate.target.className += ' completed';
    }
  }
}

function clearList() {
  const list = document.querySelectorAll('.item');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove();
  }
}

function removeFinished() {
  const list = document.querySelectorAll('.completed');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove();
  }
}

function removeSelect() {
  const list = document.querySelector('.mark');
  list.remove();
}

function saveList() {
  const listToSave = document.querySelectorAll('.item');
  localStorage.setItem('history', JSON.stringify([]));
  localStorage.setItem('classToSave', JSON.stringify([]));

  const historyList = JSON.parse(localStorage.getItem('history'));
  const historyListClass = JSON.parse(localStorage.getItem('classToSave'));

  for (let i = 0; i < listToSave.length; i += 1) {
    historyList.push(listToSave[i].innerText);
    historyListClass.push(listToSave[i].className);
  }

  localStorage.setItem('history', JSON.stringify(historyList));
  localStorage.setItem('classToSave', JSON.stringify(historyListClass));
}

function recoverySave() {
  const list = document.querySelector('#lista-tarefas');
  const historyList = JSON.parse(localStorage.getItem('history'));
  const historyListClass = JSON.parse(localStorage.getItem('classToSave'));

  for (let i = 0; i < historyList.length; i += 1) {
    const li = document.createElement('li');
    li.innerText = historyList[i];
    li.classList = historyListClass[i];
    list.appendChild(li);
  }
}

function moveUp() {
  const mark = document.querySelector('.mark');
  const listaTarefas = document.getElementById('lista-tarefas');

  if (listaTarefas.firstElementChild.classList.contains('mark') === false) {
    if (mark) {
      const move = mark.cloneNode(true);
      const fatherNode = listaTarefas;
      const brtNode = mark.previousElementSibling;
      fatherNode.insertBefore(move, brtNode);
      document.querySelectorAll('.mark')[1].remove();
    }
  }
}

function moveDown() {
  const mark = document.querySelector('.mark');
  const listaTarefas = document.getElementById('lista-tarefas');
  if (listaTarefas.lastElementChild.classList.contains('mark') === false) {
    if (mark) {
      const move = mark.cloneNode(true);
      const fatherNode = listaTarefas;
      const brtNode = mark.nextElementSibling.nextElementSibling;
      fatherNode.insertBefore(move, brtNode);
      document.querySelector('.mark').remove();
    }
  }
}

if (localStorage.getItem('history')) {
  clearList();
  recoverySave();
}

buttonTarefa.addEventListener('click', addSession);
buttonClear.addEventListener('click', clearList);
buttonClearFinished.addEventListener('click', removeFinished);
buttonClearSelect.addEventListener('click', removeSelect);
buttonSaveList.addEventListener('click', saveList);
buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown);
document.addEventListener('click', inFocus);
document.addEventListener('dblclick', completeMark);
