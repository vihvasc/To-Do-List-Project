const buttonTarefa = document.querySelector('#criar-tarefa');
const buttonApagar = document.querySelector('#apaga-tudo');
const buttonApagarCompletados = document.querySelector('#remover-finalizados');
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

function tarefaCompletada(event) {
  event.target.classList.toggle('completed');
}

function criarTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  tarefa.classList.add('tarefas');
  tarefa.addEventListener('click', selecionarTarefa);
  tarefa.addEventListener('dblclick', tarefaCompletada);
  listaTarefas.appendChild(tarefa);
  input.value = '';
}

function apagarTarefas() {
  const tamanho = tarefas.length;
  for (let i = 0; i < tamanho; i += 1) {
    listaTarefas.removeChild(listaTarefas.lastChild);
  }
}

function apagarTarefasCompletdas() {
  const tarefasCompletas = document.querySelectorAll('.completed');
  const tamanho = tarefasCompletas.length;
  for (let i = 0; i < tamanho; i += 1) {
    listaTarefas.removeChild(tarefasCompletas[i]);
  }
}

buttonTarefa.addEventListener('click', criarTarefa);
buttonApagar.addEventListener('click', apagarTarefas);
buttonApagarCompletados.addEventListener('click', apagarTarefasCompletdas);
document.querySelector('#salvar-tarefas').addEventListener('click', salvarTarefas());
