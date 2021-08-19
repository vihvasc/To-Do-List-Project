const tarefas = [];
const button = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');


function handleTarefas() {
  const size = tarefas.length - 1;
  const novaTarefa = tarefas[size];
  const tarefaList = document.createElement('li');
  tarefaList.innerText = novaTarefa;
  listaTarefas.appendChild(tarefaList);
}

function handleButton() {
  const textoTarefa = document.querySelector('#texto-tarefa');
  tarefas.push(textoTarefa.value);
  textoTarefa.value = '';
  handleTarefas();
}

function greyClick(event) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

button.addEventListener('click', handleButton);
listaTarefas.addEventListener('click', greyClick);
