const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const tarefas = document.getElementsByClassName('tarefas');

function selecionarTarefa(event) {
  const tarefa = event.target;
  const selecionado = document.querySelector('.selecionado');

  if (selecionado !== null) {
    selecionado.classList.remove('selecionado');
  }

  if (selecionado === event.target) {
    selecionado.classList.remove('selecionado');
    return;
  }

  tarefa.classList.add('selecionado');
}

function criarTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  tarefa.classList.add('tarefas');
  tarefa.addEventListener('click', selecionarTarefa);
  listaTarefas.appendChild(tarefa);
  input.value = '';
}

button.addEventListener('click', criarTarefa);
