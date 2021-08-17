function deletarOutroSelecionado(elemento, listaElementos) {
  for(let i of listaElementos) {
    if(i !== elemento) {
      i.className = '';
    }
  }
}

function mudarFundo(evento) {
  const elemento = evento.target;
  elemento.className = 'selecionado';
  let elementosComClasseSelecionado = document.getElementsByClassName('selecionado');
  if (elementosComClasseSelecionado.length > 1) {
    deletarOutroSelecionado(elemento, elementosComClasseSelecionado);
  }
}

function criarItem(texto) {
  const ol = document.getElementById('lista-tarefas');

  const li = document.createElement('li');
  li.innerText = texto;
  li.id = ol.querySelectorAll('li').length + 1;
  li.addEventListener('click', mudarFundo);

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
