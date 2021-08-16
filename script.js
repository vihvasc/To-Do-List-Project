const text = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonLimpar = document.getElementById('apaga-tudo');
const buttonFinalizados = document.getElementById('remover-finalizados');
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
  const list = document.createElement('li');
  listIndex.appendChild(list);
  const textPush = document.createTextNode(text.value);
  list.appendChild(textPush);
  text.value = '';
  list.addEventListener('click', pintarLi);
  list.addEventListener('dblclick', riscarLi);
}

function apagarLis() {
  listIndex.innerHTML = '';
}

function apagarFinalizados() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].className === 'completed' || list[i].className === 'selected completed') {
      listIndex.removeChild(list[i]);
    }
  }
}

buttonAdd.addEventListener('click', addText);
buttonLimpar.addEventListener('click', apagarLis);
buttonFinalizados.addEventListener('click', apagarFinalizados);
