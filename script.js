let listaTarefa = document.querySelector('#lista-tarefas');

let button = document.querySelector('#criar-tarefa');
button.addEventListener('click', function( ) {
  let textoTarefa = document.querySelector('#texto-tarefa');
  let criaLi = document.createElement('li');
  criaLi.innerHTML = textoTarefa.value;
  criaLi.className = "item";
  listaTarefa.appendChild(criaLi);
  textoTarefa.value = '';
});

function corTarefa(event) {
  let backgroundColorPadrao = 'white';
  let itemListaTarefa = document.querySelectorAll('.item');
  let selectColor = 'rgb(128, 128, 128)';
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

let buttonApagar = document.querySelector('#apaga-tudo');
  function apagarLista() {
    listaTarefa.parentNode.removeChild(listaTarefa);
}
buttonApagar.addEventListener('click', apagarLista);

let buttonApagarFinalizados = document.getElementById('remover-finalizados');
function apagarListaFinalziados() {
  let itemListaTarefaConcluida = document.querySelectorAll('.completed');
  let index = '0';
  for (index of itemListaTarefaConcluida) {
    index.remove();
  }
}
buttonApagarFinalizados.addEventListener('click', apagarListaFinalziados);