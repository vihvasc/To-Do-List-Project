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

const removerSelecionado = document.getElementById('remover-selecionado');

function clearSelectedTask(event) {
  const selectedTask = document.querySelector('.selected');
  listaTarefas.removeChild(selectedTask);
  event.preventDefault();
}

removerSelecionado.addEventListener('click', clearSelectedTask);

const moveUp = document.getElementById('mover-cima');

function moveTaskUp(event) {
  if (document.querySelector('.selected') !== null) {
    const selectedTask = document.querySelector('.selected');
    const previousTask = selectedTask.previousElementSibling;
    const allTasks = document.querySelectorAll('#lista-tarefas li');

    if (allTasks[0].innerText !== selectedTask.innerText) {
      listaTarefas.insertBefore(selectedTask, previousTask);
    }
  }

  event.preventDefault();
}

moveUp.addEventListener('click', moveTaskUp);

const moveDown = document.getElementById('mover-baixo');

function moveTaskDown(event) {
  if (document.querySelector('.selected') !== null) {
    const selectedTask = document.querySelector('.selected');
    const nextTask = selectedTask.nextElementSibling;
    const allTasks = document.querySelectorAll('#lista-tarefas li');

    if (allTasks[allTasks.length - 1].innerText !== selectedTask.innerText) {
      listaTarefas.insertBefore(nextTask, selectedTask);
    }
  }
  event.preventDefault();
}

moveDown.addEventListener('click', moveTaskDown);
