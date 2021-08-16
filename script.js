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
