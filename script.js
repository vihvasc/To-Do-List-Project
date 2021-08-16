const text = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const listIndex = document.getElementById('lista-tarefas');

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
  const liCreate = document.createElement('li');
  listIndex.appendChild(liCreate);
  const textPush = document.createTextNode(text.value);
  liCreate.appendChild(textPush);
  text.value = '';
  liCreate.addEventListener('click', pintarLi);
  liCreate.addEventListener('dblclick', riscarLi);
}

function apagarLis () {
  listIndex.innerHTML = '';
}

buttonAdd.addEventListener('click', addText);
buttonClear.addEventListener('click', apagarLis)