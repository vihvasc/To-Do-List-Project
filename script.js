let button = document.getElementById('criar-tarefa');

button.addEventListener('click', addTask);

function addTask() {
  let ol = document.getElementById('lista-tarefas');
  let li = document.createElement('li');
  let input = document.getElementById('texto-tarefa');
  ol.appendChild(li).innerText = input.value;
  input.value = '';
}
let input = document.getElementById('texto-tarefa');
