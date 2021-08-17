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

function removeAllTasks() {
  let allTasksCreated = listaTarefas.lastElementChild;
  while (allTasksCreated) {
    listaTarefas.removeChild(allTasksCreated);
    allTasksCreated = listaTarefas.lastElementChild;
  }
}

function removeTasksCompleted() {
  let tasksCompleted = document.querySelector('.completed');
  while (tasksCompleted) {
    tasksCompleted.remove();
    tasksCompleted = document.querySelector('.completed');
  }
}

function enterPressed(event) {
  const keyPressed = event;
  if (keyPressed.key === 'Enter') {
    adicionarNovaTarefa();
  }
}

criarTarefa.addEventListener('click', adicionarNovaTarefa);
campoInput.addEventListener('keypress', enterPressed);
limparTarefas.addEventListener('click', removeAllTasks);
limparConcluidos.addEventListener('click', removeTasksCompleted);
