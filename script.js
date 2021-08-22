function addClasses() {
  const tamanho = window.localStorage.getItem('tamanho');
  const list = document.querySelectorAll('li');
  for (let i = 0; i < tamanho; i += 1) {
    const name = `list${i}Class`;
    const classe = window.localStorage.getItem(name);
    list[i].className = classe;
  }
}
// função para mudar a cor dos items da lista
function changeColor() {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].style.backgroundColor = 'white';
  }
  const selected = document.querySelector('.selected');
  selected.style.backgroundColor = 'rgb(128, 128, 128)';
}
// função para selecionar um elemento da lista
function selectElement(event) {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] === event.target) {
      items[i].classList.add('selected');
    } else {
      items[i].classList.remove('selected');
    }
  }
  changeColor();
}

// função que remove a decoração do texto
function removeStripe(index) {
  const items = document.querySelectorAll('li');
  items[index].style.textDecoration = 'none';
  items[index].classList.remove('completed');
}

// função que adiciona decoração no texto
function addStripe(index) {
  const items = document.querySelectorAll('li');
  items[index].style.textDecoration = 'line-through';
  items[index].classList.add('completed');
}

// função que verifica se um item tem a classe completed
function verifyCompleted(event) {
  const items = document.querySelectorAll('li');
  const eventTarget = event.target;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] === eventTarget) {
      if (items[i].classList.contains('completed')) {
        removeStripe(i);
        break;
      } else {
        addStripe(i);
        break;
      }
    }
  }
}

// função para criar eventos de clique e double click em items da lista
function createListEvents() {
  const listItem = document.querySelectorAll('li');
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', selectElement);
  }

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('dblclick', verifyCompleted);
  }
}
// função que estaura a lista a partir do localStorage
function restoreList() {
  const ol = document.getElementById('lista-tarefas');
  const tamanho = window.localStorage.getItem('tamanho');
  for (let i = 0; i < tamanho; i += 1) {
    const name = `list${i}`;
    const item = window.localStorage.getItem(name);
    const li = document.createElement('li');
    li.innerText = item;
    ol.appendChild(li);
  }
  addClasses();
  createListEvents();
}
// função que verifica o tamanho da lista de items no localStorage
function verifyStorage() {
  const length = window.localStorage.getItem('tamanho');
  if (length !== 0) {
    restoreList();
  }
}

verifyStorage();

// função que pega o valor digitado no input
function getValue() {
  const input = document.getElementById('texto-tarefa');
  const task = input.value;
  return task;
}

// função que adiciona os valores do input à uma lista
function addValue() {
  const ol = document.getElementById('lista-tarefas');
  const list = document.createElement('li');
  list.classList.add('item-list');
  list.innerText = getValue();
  ol.appendChild(list);
  const input = document.getElementById('texto-tarefa');
  input.value = '';
  createListEvents();
}

// função que apaga todos os items da lista
function clearList() {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].remove();
  }
}

// função que apaga items riscados
function clearCompleted() {
  const items = document.querySelectorAll('.completed');
  for (let i = 0; i < items.length; i += 1) {
    items[i].remove();
  }
}

// função para salvar lista de tarefas
function saveList() {
  let length = 0;
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    const name = `list${i}`;
    const nameClass = `list${i}Class`;
    const listClass = list[i].classList;
    const text = list[i].innerText;
    window.localStorage.setItem(name, text);
    window.localStorage.setItem(nameClass, listClass);
    length += 1;
  }
  window.localStorage.setItem('tamanho', length);
}

// função para remover item selcionado
function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

// função para mudar item selecionado
function changesSelected(selected, changed) {
  const items = document.querySelectorAll('li');

  for (let i = 0; i < items.length; i += 1) {
    if (items[i] === selected) {
      items[i].classList.remove('selected');
    }
    if (items[i] === changed) {
      items[i].classList.add('selected');
    }
  }
}

// função para encontrar a posição
function getPosition() {
  const list = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  const positionPreviousLater = [];

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === selected) {
      positionPreviousLater[0] = i;
      positionPreviousLater[1] = list[i - 1];
      positionPreviousLater[2] = list[i + 1];
      break;
    }
  }
  return positionPreviousLater;
}

// função para mover item para cima
function moveUp() {
  const list = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  const selectedText = selected.innerText;
  const positionPrevious = getPosition();
  const positionPreviousText = positionPrevious[1].innerText;
  for (let i = 0; i < list.length; i += 1) {
    if (i === positionPrevious[0] - 1) {
      list[i].innerText = selectedText;
      list[i + 1].innerText = positionPreviousText;
    }
  }
  changesSelected(selected, positionPrevious[1]);
  changeColor();
}

// função para mover item para baixo
function moveDown() {
  const list = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  const positionLater = getPosition();
  const selectedText = selected.innerText;
  const positionLaterText = positionLater[2].innerText;
  for (let i = 0; i < list.length; i += 1) {
    if (i === positionLater[0] + 1) {
      list[i].innerText = selectedText;
      list[i - 1].innerText = positionLaterText;
    }
  }
  changesSelected(selected, positionLater[2]);
  changeColor();
}

// verifica se algum item está selecionado ao clicar no botão mover-baixo
function verifySelectedDown() {
  const selected = document.querySelector('.selected');
  const listItems = document.querySelectorAll('li');
  let count = 0;
  // refatorar este for para um for simples
  for (let i = 0; i < listItems.length; i += 1) {
    count += 1;
  }
  if (selected !== null && selected !== listItems[count - 1]) {
    moveDown();
  }
}

// verifica se algum item está selecionado ao clicar no botão mover-cima
function verifySelectedUp() {
  const selected = document.querySelector('.selected');
  const listItems = document.querySelectorAll('li');
  if (selected !== null && selected !== listItems[0]) {
    moveUp();
  }
}

// função para criar eventos gerais
function createEventSave() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addValue);

  const saveItems = document.getElementById('salvar-tarefas');
  saveItems.addEventListener('click', saveList);

  const moveUpButton = document.getElementById('mover-cima');
  moveUpButton.addEventListener('click', verifySelectedUp);

  const moveDownButton = document.getElementById('mover-baixo');
  moveDownButton.addEventListener('click', verifySelectedDown);
}

function createEventRemove() {
  const clearbutton = document.getElementById('apaga-tudo');
  clearbutton.addEventListener('click', clearList);

  const clearCompletedList = document.getElementById('remover-finalizados');
  clearCompletedList.addEventListener('click', clearCompleted);

  const removeSelectedButton = document.getElementById('remover-selecionado');
  removeSelectedButton.addEventListener('click', removeSelected);
}

createEventRemove();
createEventSave();
