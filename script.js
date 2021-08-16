function selecionar(task) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  task.target.classList.add('selected');
}

function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  tarefa.addEventListener('click', selecionar);
  document.getElementById('lista-tarefas').appendChild(tarefa);
  input.value = '';
}

window.onload = function initPage() {
  document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
};
