const header = document.querySelector('#header');
const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonRemove = document.querySelector('#remover-finalizados');
const buttonSaveTasks = document.querySelector('#salvar-tarefas');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const buttonRemoveTarget = document.querySelector('#remover-selecionado');
const ol = document.querySelector('#lista-tarefas');
const listItens = document.getElementsByClassName('list-item');

function createTitle() {
  const title = document.createElement('h1');
  title.innerHTML = 'Minha Lista de Tarefas';
  title.classList.add('display-1')
  header.appendChild(title);
}

createTitle();

function createParagraph() {
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  paragraph.classList.add('lead');
  header.appendChild(paragraph);
}

createParagraph();

// Função para adicionar tarefas
function createListItem() {
  const listItem = document.createElement('li');
  listItem.innerHTML = `${input.value}`;
  listItem.classList.add('list-item', 'list-group-item');
  ol.appendChild(listItem);
  input.value = '';
}

// Função para adicionar o target ao clicar no item
function targetItem(event) {
  for (let index = 0; index < listItens.length; index += 1) {
    if (listItens[index].classList.contains('target')) {
      listItens[index].classList.remove('target');
    }

    event.target.classList.add('target');
  }
}

// Função para adicionar class completed ao clicar duas vezes no item
function setCompleted(event) {
  event.target.classList.toggle('completed');
}

// Função que implementa um botão para limpar tudo
function clearAll() {
  ol.innerHTML = '';
  localStorage.clear();
}

// Função que implementa um botão para remover tarefas finalizadas
function removeFinished() {
  const elements = document.getElementsByClassName('completed');
  const cleaner = [];
  for (let element of elements) {
    cleaner.push(element);
  }

  for (let element of cleaner) {
    element.remove();
  }
}

/* Emplementei as funções saveTasks(), createTasks() e getTasks()
com ajuda do Ericksson Siqueira, o link para o projeto é:
https://github.com/tryber/sd-015-b-project-todo-list/pull/98/files */

function saveTasks() {
  const listItem = document.getElementsByClassName('list-item');
  const tasks = [];

  for (let index = 0; index < listItem.length; index += 1) {
    const style = getComputedStyle(listItem[index]);

    const objTasks = {
      text: listItem[index].innerText,
      completed: style.textDecoration.includes('line-through'),
      target: style.backgroundColor.includes('rgb(128, 128, 128)')
    }
    tasks.push(objTasks);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTasks(storageList) {
  const li = document.createElement('li');

  li.innerText = storageList.text;
  if (storageList.completed) {
    li.classList.add('completed');
  }

  if (storageList.target) {
    li.classList.add('target');
  }

  ol.appendChild(li);
}

function getTasks() {
  if (localStorage.tasks) {
    const storageList = JSON.parse(localStorage.getItem('tasks'));
    for (let index = 0; index < storageList.length; index += 1) {
      createTasks(storageList[index]);
    }
  }
}

getTasks();

// Função que implementa um botão para mover o item para cima
function moveUp() {
  const target = document.querySelector('.target');
  if (target) {
    const previous = target.previousElementSibling;
    if (previous) {
      target.parentElement.insertBefore(target, previous);
    }
  }
}

// Função que implementa um botão para mover o item para baixo
function moveDown() {
  const target = document.querySelector('.target');
  if (target) {
    const next = target.nextElementSibling;
    if (next) {
      target.parentElement.insertBefore(next, target);
    }
  }
}

// Função que implementa um botão para remover o item selecionado
function removeTarget() {
  const target = document.querySelector('.target');
  if (target) {
    target.remove();
  }
}

buttonClear.addEventListener('click', clearAll);
ol.addEventListener('dblclick', setCompleted);
ol.addEventListener('click', targetItem);
button.addEventListener('click', createListItem);
buttonRemove.addEventListener('click', removeFinished);
buttonSaveTasks.addEventListener('click', saveTasks);
buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown);
buttonRemoveTarget.addEventListener('click', removeTarget);
