const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
const clearButton = document.getElementById('apaga-tudo');
const clearDone = document.getElementById('remover-finalizados');

button.addEventListener('click', addListItem);

function addListItem() {
  const item = document.createElement('li');
  item.innerHTML = inputValue.value;
  list.appendChild(item);

  inputValue.value = '';
  changeBackground();
}

// Função construída e entendida com base no código da Virginia Alcântara
// https://github.com/tryber/sd-015-b-project-todo-list/blob/virginia-alcantara-todo-list-project/script.js
function changeBackground() {
  const itens = document.querySelectorAll('li');

  for (let i = 0; i < itens.length; i += 1) {
    itens[i].addEventListener('click', () => {
      clearBackground();
      itens[i].style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

function clearBackground() {
  const itens = document.querySelectorAll('li');

  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = 'white';
  }
}

function doneTasks(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function clearAll() {
  list.innerHTML = '';
}

// Função entendida e construída com base no código do Gabriel Alves
// https://github.com/tryber/sd-015-b-project-todo-list/blob/gabriel-alves-todo-list-project/script.js
function removeDones() {
  let done = document.getElementsByClassName('completed');
  const i = 0;

  while (done.length > 0) {
    done[i].remove();
  }
}

list.addEventListener('dblclick', doneTasks);
clearButton.addEventListener('click', clearAll);
clearDone.addEventListener('click', removeDones)
