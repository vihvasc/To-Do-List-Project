let button = document.querySelector('#criar-tarefa');
let listaTarefa = document.querySelector('#lista-tarefas');
let itemListaTarefa = document.getElementsByClassName('.item');

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
 for (let index = 0; index < itemListaTarefa.length; index += 1){
    if (itemListaTarefa[index].style.backgroundColor !== backgroundColorPadrao) {
      itemListaTarefa[index].style.backgroundColor = backgroundColorPadrao;
    }
  }
  event.target.style.backgroundColor = selectColor;
}
listaTarefa.addEventListener('click', corTarefa);