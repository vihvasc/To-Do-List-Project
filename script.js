// Requisito 5

const caixaDeTexto = document.getElementById('texto-tarefa');

document.getElementById('criar-tarefa').addEventListener('click', function() {
  const li = document.createElement('li');
  const listaTarefa = document.getElementById('lista-tarefas');
  listaTarefa.appendChild(li)
  li.innerText = caixaDeTexto.value
  caixaDeTexto.value=''
})
