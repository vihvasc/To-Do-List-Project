const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const inputValue = document.getElementById('texto-tarefa');

function handleAddTask() {
  const task = document.createElement('li');
  listaTarefas.appendChild(task);
  task.innerText = inputValue.value;
  inputValue.value = '';
}

function addTask(event) {
  handleAddTask();
  event.preventDefault();
}

criarTarefa.addEventListener('click', addTask);

function selectTask(event) {
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].classList.remove('selected');
  }
  event.target.classList.toggle('selected');
}

listaTarefas.addEventListener('click', selectTask);

function completedTask(event) {
  event.target.classList.toggle('completed');
}

listaTarefas.addEventListener('dblclick', completedTask);

const botaoApagaTudo = document.getElementById('apaga-tudo');

function clearAllTasks(event) {
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < allTasks.length; i += 1) {
    listaTarefas.removeChild(allTasks[i]);
  }
  event.preventDefault();
}

botaoApagaTudo.addEventListener('click', clearAllTasks);

const botaoRemoverFinalizados = document.getElementById('remover-finalizados');

function clearCompletedTasks(event) {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    listaTarefas.removeChild(completedTasks[i]);
  }
  event.preventDefault();
}

botaoRemoverFinalizados.addEventListener('click', clearCompletedTasks);
