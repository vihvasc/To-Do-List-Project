// funcionalidade do botao de adicionar tarefa
function addTarefa() {
  let digitado = document.getElementById('texto-tarefa').value;
  let lista = document.getElementById('lista-tarefas');
  let listItem = document.createElement('li');
  lista.appendChild(listItem);
  listItem.innerText = digitado;
  listItem.className = 'liItem';
  document.getElementById('texto-tarefa').value = '';
}
// ao clicar muda o fundo
function mudaFundo(evento) {
  let elementosAlterados = document.querySelectorAll('.liClick');
  if (elementosAlterados.length === 0) {
    evento.target.classList.add('liClick');
  } else {
    elementosAlterados[0].classList.remove('liClick');
    evento.target.classList.add('liClick');
  }
}
//  risca palavra
function riscaTarefa(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
// botao limpar
function limpar () {
  let pai = document.getElementById('lista-tarefas')
  let filhosApagado = document.getElementsByClassName('liItem');
  pai.removeChild(filhosApagado);
}

let listaDeTarefas = document.getElementById('lista-tarefas');
listaDeTarefas.addEventListener('click', mudaFundo);
listaDeTarefas.addEventListener('dblclick', riscaTarefa)

let clickAddBotao = document.getElementById('criar-tarefa');
clickAddBotao.addEventListener('click', addTarefa);

let botaoLimpar = document.getElementById('apaga-tudo');
botaoLimpar.addEventListener('click', limpar);
