const btnAdicionar = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const btnApagarTd = document.getElementById('apaga-tudo');
const btnApagarConcluidos = document.getElementById('remover-finalizados');

function trocaCorDaTarefa(event) {
  const tarefaAnterior = document.querySelector('.tarefa-selecionada');
  const tarefaSelecionada = event.target;
  const classeDaTarefa = 'tarefa-selecionada';
  if (tarefaAnterior) {
    tarefaAnterior.classList.remove(classeDaTarefa);
    tarefaSelecionada.classList.add(classeDaTarefa);
  } else {
    tarefaSelecionada.classList.add(classeDaTarefa);
  }
}

function riscaTarefa(event) {
  const selecionado = document.querySelector('.tarefa-selecionada');
  if (
    selecionado.className === 'completed tarefa-selecionada'
    || selecionado.className === 'tarefa-selecionada completed'
  ) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function adicionaTarefa() {
  const tarefa = document.createElement('li');
  const textoEscritoNoInput = document.getElementById('texto-tarefa');
  tarefa.innerText = textoEscritoNoInput.value;
  textoEscritoNoInput.value = '';
  tarefa.addEventListener('click', trocaCorDaTarefa);
  tarefa.addEventListener('dblclick', riscaTarefa);
  listaDeTarefas.appendChild(tarefa);
}

btnAdicionar.addEventListener('click', adicionaTarefa);

function btnApagaTarefas() {
  listaDeTarefas.innerHTML = '';
}
btnApagarTd.addEventListener('click', btnApagaTarefas);

function apagaTarefasConcluidas() {
  const concluidos = listaDeTarefas.getElementsByClassName('completed');
  for (let i = concluidos.length - 1; i >= 0; i -= 1) {
    concluidos[i].remove();
  }
}

btnApagarConcluidos.addEventListener('click', apagaTarefasConcluidas);
