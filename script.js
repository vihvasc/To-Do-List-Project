let text = document.getElementById('texto-tarefa');
let button = document.getElementById('criar-tarefa');
let listIndex = document.getElementById('lista-tarefas');
let list = document.querySelectorAll('li');


function pintarLi (event) {
  let list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    list[i].classList.remove('selected');
  }
  const target = event.target;
  target.classList.add('selected');

  console.log(list)
}

function riscarLi (event) {
  let target = event.target;
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

function addText() {
  const liCreate = document.createElement('li');
  listIndex.appendChild(liCreate);
  const textPush = document.createTextNode(text.value);
  liCreate.appendChild(textPush);
  text.value = '';
  liCreate.addEventListener('click', pintarLi);
  liCreate.addEventListener('dblclick', riscarLi);
}

button.addEventListener('click', addText);
