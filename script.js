let text = document.getElementById('texto-tarefa');
let button = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');

function addText() {
  const liCreate = document.createElement('li');
  list.appendChild(liCreate);
  const textPush = document.createTextNode(text.value);
  liCreate.appendChild(textPush);
  text.value = '';
}

button.addEventListener('click', addText);
