const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');

function criarTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  listaTarefas.appendChild(tarefa);
  input.value = '';
}

button.addEventListener('click', criarTarefa);
