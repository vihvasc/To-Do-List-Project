window.onload = function () {
  const button = document.getElementById('criar-tarefa');

  button.addEventListener('click', handleCreateList);
};

function handleCreateList() {
  const input = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  lista.appendChild(tarefa);
  input.value = '';
}
