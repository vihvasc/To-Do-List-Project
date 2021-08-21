const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
const clearButton = document.getElementById('apaga-tudo');

button.addEventListener('click', addListItem);

function addListItem() {
  const item = document.createElement('li');
  item.innerHTML = inputValue.value;
  list.appendChild(item);

  inputValue.value = '';
  changeBackground();
}

// Função criada com base no código da Virginia Alcântara >> https://github.com/tryber/sd-015-b-project-todo-list/blob/virginia-alcantara-todo-list-project/script.js
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

list.addEventListener('dblclick', doneTasks);
clearButton.addEventListener('click', clearAll);
