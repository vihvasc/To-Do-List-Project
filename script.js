let text = document.getElementById('texto-tarefa');
let button = document.getElementById('criar-tarefa');
let listIndex = document.getElementById('lista-tarefas');
let list = document.querySelectorAll('li');


function pintarLi () {
  let target = event.target;
  target.style.backgroundColor = 'rgb(128, 128, 128)'
}

function addText() {
  const liCreate = document.createElement('li');
  listIndex.appendChild(liCreate);
  const textPush = document.createTextNode(text.value);
  liCreate.appendChild(textPush);
  text.value = '';
  liCreate.addEventListener('click', pintarLi);
}

button.addEventListener('click', addText);
