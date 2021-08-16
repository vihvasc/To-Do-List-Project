function mudaCorBG() {
// Usa método this conforme exemplo visto em
// http://www.w3bai.com/pt/jsref/met_element_addeventlistener.html
  if (this.classList.contains('selected')) {
    this.classList.remove('selected');
  } else {
    this.classList.add('selected');
  }
  const todaLista = document.getElementsByClassName('tarefasAdicionadas');
  for (let i = 0; i < todaLista.length; i += 1) {
    if (todaLista[i] !== this) {
      todaLista[i].classList.remove('selected');
    }
  }
}

function mudaCompletado() {
  if (this.classList.contains('completed')) {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

function criarTarefa() {
  const tarefaLista = document.createElement('li');
  const textoTarefaInput = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  tarefaLista.className = 'tarefasAdicionadas';
  tarefaLista.innerText = textoTarefaInput.value;
  tarefaLista.addEventListener('click', mudaCorBG);
  tarefaLista.addEventListener('dblclick', mudaCompletado);
  listaTarefas.appendChild(tarefaLista);
  textoTarefaInput.value = '';
}

function apagarLista() {
  const tarefas = document.getElementById('lista-tarefas');
  tarefas.innerHTML = '';
}

function apagarFinalizados() {
  const tarefasFinalizadas = document.getElementsByClassName('completed');
  for (let i = 0; i < tarefasFinalizadas.length; i += 0) {
    tarefasFinalizadas[i].remove();
  }
}

window.onload = function principal() {
  const cliqueBotaoCriarTarefa = document.getElementById('criar-tarefa');
  cliqueBotaoCriarTarefa.addEventListener('click', criarTarefa);

  const cliqueBotaoApagar = document.getElementById('apaga-tudo');
  cliqueBotaoApagar.addEventListener('click', apagarLista);

  const cliqueBotaoRemoveFinalizados = document.getElementById('remover-finalizados');
  cliqueBotaoRemoveFinalizados.addEventListener('click', apagarFinalizados);
};
