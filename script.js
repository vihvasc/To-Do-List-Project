const listaTarefa = document.querySelector('#lista-tarefas');

const button = document.querySelector('#criar-tarefa');
button.addEventListener ('click', function( ) {
  const textoTarefa = document.querySelector('#texto-tarefa');
  const criaLi = document.createElement('li');
  criaLi.innerHTML = textoTarefa.value;
  criaLi.className = 'item';
  listaTarefa.appendChild(criaLi);
  textoTarefa.value = '';
});

function corTarefa(event) {
  const backgroundColorPadrao = 'white';
  const itemListaTarefa = document.querySelectorAll('.item');
  const selectColor = 'rgb(128, 128, 128)';
  for (let index = 0; index < itemListaTarefa.length; index += 1) {
    if (itemListaTarefa[index].style.backgroundColor !== backgroundColorPadrao) {
      itemListaTarefa[index].style.backgroundColor = backgroundColorPadrao;
    }
  }
  event.target.style.backgroundColor = selectColor;
}
listaTarefa.addEventListener('click', corTarefa);

function completTarefa(event) {
  event.target.classList.toggle('completed');
}
listaTarefa.addEventListener('dblclick', completTarefa);

const buttonApagar = document.querySelector('#apaga-tudo');
function apagarLista() {
  listaTarefa.parentNode.removeChild(listaTarefa);
}
buttonApagar.addEventListener('click', apagarLista);

const buttonApagarFinalizados = document.getElementById('remover-finalizados');
function apagarListaFinalziados() {
  const itemListaTarefaConcluida = document.querySelectorAll('.completed');
  let index = '0';
  for (index of itemListaTarefaConcluida) {
    index.remove();
  }
}
buttonApagarFinalizados.addEventListener('click', apagarListaFinalziados);