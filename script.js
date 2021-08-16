let button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function(){
  let textoTarefa = document.querySelector('#texto-tarefa');
  let listaTarefa = document.querySelector('#lista-tarefas');
  let criaLi = document.createElement('li');
  criaLi.innerHTML = textoTarefa.value;
  listaTarefa.appendChild(criaLi);
  textoTarefa.value = '';
})
