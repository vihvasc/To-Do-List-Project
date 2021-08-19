const tarefas = [];
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

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', handleButton);
