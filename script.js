const taskInput = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');

function addNewTask() {
  const li = document.createElement('li');
  li.innerText = taskInput.value;
  listaTarefas.appendChild(li);
  taskInput.value = '';
}

criarTarefa.addEventListener('click', addNewTask);
