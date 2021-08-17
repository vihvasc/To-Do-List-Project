function deletarOutroSelecionado(elemento, listaElementos) {
  for (let i = 0; i < listaElementos.length; i += 1) {
    if(listaElementos[i] !== elemento) {
      listaElementos[i].className = listaElementos[i].className.replace('selecionado', '');
    }
  }
}

function mudarFundo(evento) {
  const elemento = evento.target;
  let elementosComClasseSelecionado = document.getElementsByClassName('selecionado');
  if(elementosComClasseSelecionado.namedItem(elemento.id) === null) {
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

function retiraClasse(elemento) {
  elemento.className = elemento.className.replace('completed', '');
  elemento.className = '';
}

function finalizar(evento) {
  const elemento = evento.target;
  const listaElementoCompleto = document.getElementsByClassName('completed');
  if (listaElementoCompleto.namedItem(elemento.id) !== null) {
    retiraClasse(elemento);
  } else  {
    elemento.className = 'completed';
  }
}

function criarItem(texto) {
  const ol = document.getElementById('lista-tarefas');

  const li = document.createElement('li');
  li.innerText = texto;
  li.id = ol.querySelectorAll('li').length + 1;
  li.addEventListener('click', mudarFundo);
  li.addEventListener('dblclick', finalizar)

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

function adicionarEscutadorCriarTarefa() {
  const botao = document.getElementById('criar-tarefa');
  botao.addEventListener('click', verificarInput);
}

adicionarEscutadorCriarTarefa();
