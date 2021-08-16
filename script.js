function criarItem(texto) {
  let ol = document.getElementById('lista-tarefas');
  let id = ol.querySelectorAll('li').length + 1;

  let li = document.createElement('li');
  li.innerText = texto;
  li.id = id;

  //limpa text-box input#texto-tarefa
  document.getElementById('texto-tarefa').value = '';

  ol.appendChild(li);
}
function verificarInput() {
  let input = document.getElementById('texto-tarefa');
  if(input.value) {
    return criarItem(input.value);
  } 
  return (console.log('digite algo'));
}

function adicionarEscutadorCriarTarefa() {
  let botao = document.getElementById('criar-tarefa');
  botao.addEventListener('click', verificarInput);
}

adicionarEscutadorCriarTarefa();