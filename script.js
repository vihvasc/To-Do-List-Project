const campoInput = document.getElementById('texto-tarefa'); // Input
const listaTarefas = document.getElementById('lista-tarefas'); // Lista Ordenada
const criarTarefa = document.getElementById('criar-tarefa'); // Botão adicionar tarefa
const tarefasCriadas = document.getElementsByTagName('li'); // Todas tarefas criadas
const limparTarefas = document.getElementById('apaga-tudo'); // Botão de limpar tarefas criadas
const limparConcluidos = document.getElementById('remover-finalizados'); // Botão de limpar tarefas concluídas

function mudarCorTarefa(evento) {
  const tarefasAtuais = [...tarefasCriadas];
  const tarefaClicada = evento.target;

  tarefasAtuais.forEach((tarefa) => {
    const tarefaDaVez = tarefa;
    tarefaDaVez.style.backgroundColor = '';
  });

  tarefaClicada.style.backgroundColor = 'rgb(128, 128, 128)';
}

function alternarCompletado(evento) {
  const tarefaClicada = evento.target;

  if (tarefaClicada.className) {
    tarefaClicada.classList.remove('completed');
  } else {
    tarefaClicada.classList.add('completed');
  }
}

function adicionarNovaTarefa() {
  const liTag = document.createElement('li');
  liTag.innerText = campoInput.value;
  liTag.addEventListener('click', mudarCorTarefa);
  liTag.addEventListener('dblclick', alternarCompletado);
  listaTarefas.appendChild(liTag);
  campoInput.value = '';
}

function removerTodasTarefas() {
  let todasTarefasCriadas = listaTarefas.lastElementChild;

  while (todasTarefasCriadas) {
    listaTarefas.removeChild(todasTarefasCriadas);
    todasTarefasCriadas = listaTarefas.lastElementChild;
  }
}

function removerTarefasCompletadas() {
  let tarefaCompletada = document.querySelector('.completed');

  while (tarefaCompletada) {
    tarefaCompletada.remove();
    tarefaCompletada = document.querySelector('.completed');
  }
}

function enterPressionado(evento) {
  const teclaPressionada = evento;
  if (teclaPressionada.key === 'Enter') {
    adicionarNovaTarefa();
  }
}

criarTarefa.addEventListener('click', adicionarNovaTarefa);
campoInput.addEventListener('keypress', enterPressionado);
limparTarefas.addEventListener('click', removerTodasTarefas);
limparConcluidos.addEventListener('click', removerTarefasCompletadas);
