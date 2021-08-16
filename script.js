let button = document.querySelector('#criar-tarefa');
let listaTarefa = document.querySelector('#lista-tarefas');

button.addEventListener('click', function() {
  let textoTarefa = document.querySelector('#texto-tarefa');
  let listaTarefa = document.querySelector('#lista-tarefas');
  let criaLi = document.createElement('li');
  criaLi.innerHTML = textoTarefa.value;
  listaTarefa.appendChild(criaLi);
  textoTarefa.value = '';
});

function corTarefa(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefa.addEventListener('click', corTarefa);
