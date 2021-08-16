function mudaCorBG() {
// Conforme exemplo visto em
// http://www.w3bai.com/pt/jsref/met_element_addeventlistener.html
  this.style.backgroundColor = 'rgb(128,128,128)';
}

function criarTarefa() {
  const tarefaLista = document.createElement('li');
  const textoTarefaInput = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  tarefaLista.className = 'tarefasAdicionadas';
  tarefaLista.innerText = textoTarefaInput.value;
  tarefaLista.addEventListener('click', mudaCorBG);
  listaTarefas.appendChild(tarefaLista);
  textoTarefaInput.value = '';
}

function apagarLista() {
  const tarefas = document.getElementById('lista-tarefas');
  tarefas.innerHTML = '';
}

const cliqueBotaoCriarTarefa = document.getElementById('criar-tarefa');
cliqueBotaoCriarTarefa.addEventListener('click', criarTarefa);

const cliqueBotaoApagar = document.getElementById('apaga-tudo');
cliqueBotaoApagar.addEventListener('click', apagarLista);
