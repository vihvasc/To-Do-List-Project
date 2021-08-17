const campoInput = document.getElementById('texto-tarefa'); // Input
const listaTarefas = document.getElementById('lista-tarefas'); // Lista Ordenada
const criarTarefa = document.getElementById('criar-tarefa'); // Botão adicionar tarefa
const tarefasCriadas = document.getElementsByTagName('li'); // Todas tarefas criadas
const limparTarefas = document.getElementById('apaga-tudo'); // Botão de limpar tarefas criadas
const limparConcluidos = document.getElementById('remover-finalizados'); // Botão de limpar tarefas concluídas
const salvarTarefas = document.getElementById('salvar-tarefas'); // Botão de salvar terafas
const botaoMoverCima = document.getElementById('mover-cima'); // Botão mover para cima
const botaoMoverBaixo = document.getElementById('mover-baixo'); // Botão mover para baixo
const botaoRemoverSelecionado = document.getElementById('remover-selecionado'); // Botão remover selecionado

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

function salvar() {
  const propriedadesDaTarefa = [];

  Array.from(tarefasCriadas).forEach((tarefa) => {
    const objTarefa = {
      texto: tarefa.innerText,
      corDeFundo: tarefa.style.backgroundColor,
      nomeDaClasse: tarefa.className,
    };
    propriedadesDaTarefa.push(objTarefa);
  });

  localStorage.setItem('listaAtual', JSON.stringify(propriedadesDaTarefa));
  alert('Lista salva com sucesso!');
}

function recuperarListaSalva() {
  const listaRecuperada = JSON.parse(localStorage.getItem('listaAtual'));

  listaRecuperada.forEach((tarefa) => {
    const li = document.createElement('li');
    li.innerText = tarefa.texto;
    li.style.backgroundColor = tarefa.corDeFundo;
    li.className = tarefa.nomeDaClasse;
    li.addEventListener('click', mudarCorTarefa);
    li.addEventListener('dblclick', alternarCompletado);
    listaTarefas.appendChild(li);
  });
}

function moverParaCima() {
  Array.from(tarefasCriadas).forEach((selecionada, index) => {
    if (selecionada.style.backgroundColor && index > 0) {
      listaTarefas.insertBefore(selecionada, tarefasCriadas[index].previousSibling);
    }
  });
}

function moverParaBaixo() {
  const qntDeTarefas = tarefasCriadas.length;
  Array.from(tarefasCriadas).forEach((selecionada, index) => {
    if (selecionada.style.backgroundColor && index < (qntDeTarefas - 1)) {
      listaTarefas.insertBefore(selecionada, tarefasCriadas[index + 1].nextSibling);
    }
  });
}

function removerSelecionado() {
  Array.from(tarefasCriadas).forEach((tarefa) => {
    if (tarefa.style.backgroundColor) {
      tarefa.remove();
    }
  });
}

criarTarefa.addEventListener('click', adicionarNovaTarefa);
campoInput.addEventListener('keypress', enterPressionado);
limparTarefas.addEventListener('click', removerTodasTarefas);
limparConcluidos.addEventListener('click', removerTarefasCompletadas);
salvarTarefas.addEventListener('click', salvar);
botaoMoverCima.addEventListener('click', moverParaCima);
botaoMoverBaixo.addEventListener('click', moverParaBaixo);
botaoRemoverSelecionado.addEventListener('click', removerSelecionado);

window.onload = () => {
  if (localStorage.getItem('listaAtual')) {
    recuperarListaSalva();
  }
};
