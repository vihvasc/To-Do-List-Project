function deletarOutroSelecionado(elemento, listaElementos) {
  for (let i = 0; i < listaElementos.length; i += 1) {
    if (listaElementos[i] !== elemento) {
      listaElementos[i].className = listaElementos[i].className.replace('selecionado', '');
    }
  }
}

function mudarFundo(evento) {
  const elemento = evento.target;
  let elementosComClasseSelecionado = document.getElementsByClassName('selecionado');
  if (elementosComClasseSelecionado.namedItem(elemento.id) === null) {
    if (elementosComClasseSelecionado.length >= 1 ) {
      elemento.className += ' selecionado';
      deletarOutroSelecionado(elemento, elementosComClasseSelecionado);
    } else {
      elemento.className += ' selecionado';
    }
  } else {
    console.log('elemento já selecionado');
  }

}

function retiraClasse(elem) {
  const elemento = elem;
  elemento.className = elemento.className.replace('completed', '');
  elemento.className = '';
}

function finalizar(evento) {
  const elemento = evento.target;
  const listaElementoCompleto = document.getElementsByClassName('completed');
  if (listaElementoCompleto.namedItem(elemento.id) !== null) {
    retiraClasse(elemento);
  } else {
    elemento.className = 'completed';
  }
}

function criarItem(texto) {
  const ol = document.getElementById('lista-tarefas');

  const li = document.createElement('li');
  li.innerText = texto;
  li.id = ol.querySelectorAll('li').length + 1;
  li.addEventListener('click', mudarFundo);
  li.addEventListener('dblclick', finalizar);

  //  limpa text-box input#texto-tarefa
  document.getElementById('texto-tarefa').value = '';

  ol.appendChild(li);
}

function verificarInput() {
  const input = document.getElementById('texto-tarefa');
  if (input.value) {
    return criarItem(input.value);
  }
  return (console.log('digite algo'));
}

function apagarTodasTarefas() {
  const todosOsItems = document.querySelectorAll('ol li');
  for (let i = 0; i < todosOsItems.length; i += 1) {
    todosOsItems[i].remove();
  }
}

function apagarFinalizadas() {
  let itemsFinalizados = document.querySelectorAll('.completed');
  for (let i = 0; i < itemsFinalizados.length; i += 1) {
    itemsFinalizados[i].remove();
  }
}

function adicionarEscutadoresBotoes() {
  const botao_criar_tarefa = document.getElementById('criar-tarefa');
  botao_criar_tarefa.addEventListener('click', verificarInput);

  const botao_apaga_tudo = document.getElementById('apaga-tudo');
  botao_apaga_tudo.addEventListener('click', apagarTodasTarefas);

  const botao_remover_finalizados = document.getElementById('remover-finalizados');
  botao_remover_finalizados.addEventListener('click', apagarFinalizadas);
}

adicionarEscutadoresBotoes();
