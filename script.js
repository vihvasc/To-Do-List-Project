const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

criarTarefa.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  const tarefa = document.createElement('li');
  console.log(textoTarefa.value);
  tarefa.innerText = textoTarefa.value;
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
}
