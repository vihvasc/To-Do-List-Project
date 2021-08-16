function mudaCorBG() {
// Usa método this conforme exemplo visto em
// http://www.w3bai.com/pt/jsref/met_element_addeventlistener.html

  const todosElementosLista = document.getElementsByClassName('tarefasAdicionadas');
  for (let i = 0; i < todosElementosLista.length; i += 1) {
    if (todosElementosLista[i].classList.contains('selected')) {
      todosElementosLista[i].classList.remove('selected');
    } else {
      todosElementosLista[i].classList.add('selected');
    }
    console.log(this);
  }

  console.log(todosElementosLista[0].classList);
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
