const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const botaoCriarTarefa = document.getElementById('criar-tarefa');

// Adiciona tarefa a lista
function adicionarTarefa() {
  const tarefas = document.createElement('li');
  tarefas.innerText = textoTarefa.value;
  listaTarefas.appendChild(tarefas);
  textoTarefa.value = '';
}

botaoCriarTarefa.addEventListener('click', adicionarTarefa);
