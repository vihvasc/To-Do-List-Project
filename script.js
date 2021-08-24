const listaTarefa = document.querySelector('#lista-tarefas');
const botaoApagarTarefas = document.getElementById('apaga-tudo');
const caixaDeTexto = document.getElementById('texto-tarefa');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados')

// Requisito 7 e 8
function mudaCor(event) {
  const lis = document.querySelectorAll('.itens');
  const corCinza = 'rgb(128, 128, 128)';
  for (let index = 0; index < lis.length; index += 1) {
  lis[index].style.backgroundColor = 'transparent';
}
event.target.style.background = corCinza;
}

// Requisito 10
function apagaTudo (evento) {
  listaTarefa.innerHTML = ''
}

// Requisito 5 e 6
document.getElementById('criar-tarefa').addEventListener('click', function () {
  const li = document.createElement('li');
  li.className = 'itens';
  const listaTarefa = document.getElementById('lista-tarefas');
  listaTarefa.appendChild(li);
  li.innerText = caixaDeTexto.value;
  li.style.backgroundColor = 'transparent';
  caixaDeTexto.value = '';
  li.addEventListener('click', mudaCor);
  li.addEventListener('dblclick', classeCompleted);
  document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);
});

// Requisito 11

function removeItensCompleted() {
  let itemCompleted = document.querySelector('.completed');
  //A declaração abaixo foi usada com base na referência > https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
  while (itemCompleted) {
  itemCompleted = document.querySelector('.completed');
  if (itemCompleted) {
  itemCompleted.remove();
  }
  }
}

// Requisito 9
function classeCompleted(event) {
  const itemClicado = event.target;
  console.log(itemClicado.className, itemClicado.className.indexOf('completed'));
  if (itemClicado.className.indexOf('completed') !== -1) {
  itemClicado.classList.remove('completed');
  } else {
  itemClicado.classList.add('completed');
}
botaoRemoverFinalizados.addEventListener('click', removeItensCompleted);
}
