// let tarefas = [];

function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  document.getElementById('lista-tarefas').appendChild(tarefa);
  input.value = '';
}

window.onload = function initPage() {
  document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
};
