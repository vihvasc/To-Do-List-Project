function mudaCorBG() {
// Usa método this conforme exemplo visto em
// http://www.w3bai.com/pt/jsref/met_element_addeventlistener.html
  if (this.classList.contains('selected')) {
    this.classList.remove('selected');
  } else {
    this.classList.add('selected');
  }
  const todaLista = document.getElementsByClassName('tarefasAdicionadas');
  console.log(todaLista[0] === this);
  for (let i = 0; i < todaLista.length; i += 1) {
    if (todaLista[i] !== this) {
      todaLista[i].classList.remove('selected');
    }
  }
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

window.onload = function principal() {
  const cliqueBotaoCriarTarefa = document.getElementById('criar-tarefa');
  cliqueBotaoCriarTarefa.addEventListener('click', criarTarefa);

  const cliqueBotaoApagar = document.getElementById('apaga-tudo');
  cliqueBotaoApagar.addEventListener('click', apagarLista);
};
