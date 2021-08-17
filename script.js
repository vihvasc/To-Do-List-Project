const header = document.querySelector('#header');
const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonRemove = document.querySelector('#remover-finalizados');
const buttonSaveTasks = document.querySelector('#salvar-tarefas');
const ol = document.querySelector('#lista-tarefas');
const listItens = document.getElementsByClassName('list-item');

function createTitle() {
  const title = document.createElement('h1');
  title.innerHTML = 'Minha Lista de Tarefas';
  header.appendChild(title);
}

createTitle();

function createParagraph() {
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(paragraph);
}

createParagraph();

function createListItem() {
  const listItem = document.createElement('li');
  listItem.innerHTML = `${input.value}`;
  listItem.classList.add('list-item');
  ol.appendChild(listItem);
  input.value = '';
}

function targetItem(event) {
  for (let index = 0; index < listItens.length; index += 1) {
    if (listItens[index].classList.contains('target')) {
      listItens[index].classList.remove('target');
    }

    event.target.classList.add('target');
  }
}

function setCompleted(event) {
  event.target.classList.toggle('completed');
}

function clearAll() {
  ol.innerHTML = '';
}

function removeFinished() {
  let elements = document.getElementsByClassName('completed');
  let cleaner = [];
  for (let element of elements) {
    cleaner.push(element);
  }

  for (let element of cleaner) {
    element.remove();
  }
}

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
  console.log(tasks);
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

buttonClear.addEventListener('click', clearAll);
ol.addEventListener('dblclick', setCompleted);
ol.addEventListener('click', targetItem);
button.addEventListener('click', createListItem);
buttonRemove.addEventListener('click', removeFinished);
buttonSaveTasks.addEventListener('click', saveTasks);