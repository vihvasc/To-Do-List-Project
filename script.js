const campoInput = document.getElementById('texto-tarefa'); // Input
const listaTarefas = document.getElementById('lista-tarefas'); // Lista Ordenada
const criarTarefa = document.getElementById('criar-tarefa'); // Botão adicionar tarefa
const tarefasCriadas = document.getElementsByTagName('li'); // Todas tarefas criadas
const limparTarefas = document.getElementById('apaga-tudo'); // Botão de limpar tarefas criadas
const limparConcluidos = document.getElementById('remover-finalizados'); // Botão de limpar tarefas concluídas

function changeColor(event) {
  for (let index = 0; index < tarefasCriadas.length; index += 1) {
    tarefasCriadas[index].style.backgroundColor = '';
  }
  const taskTarget = event.target;
  taskTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function toggleCompleted(event) {
  const taskClicked = event.target;
  if (taskClicked.className === 'completed') {
    taskClicked.classList.remove('completed');
  } else {
    taskClicked.classList.add('completed');
  }
}

function addNewTask() {
  const li = document.createElement('li');
  li.innerText = campoInput.value;
  li.addEventListener('click', changeColor);
  li.addEventListener('dblclick', toggleCompleted);
  listaTarefas.appendChild(li);
  campoInput.value = '';
}

function removeAllTasks() {
  let allTasksCreated = listaTarefas.lastElementChild;
  while (allTasksCreated) {
    listaTarefas.removeChild(allTasksCreated);
    allTasksCreated = listaTarefas.lastElementChild;
  }
}

function removeTasksCompleted() {
  let tasksCompleted = document.querySelector('.completed');
  while (tasksCompleted) {
    tasksCompleted.remove();
    tasksCompleted = document.querySelector('.completed');
  }
}

function enterPressed(event) {
  const keyPressed = event;
  if (keyPressed.key === 'Enter') {
    addNewTask();
  }
}

criarTarefa.addEventListener('click', addNewTask);
campoInput.addEventListener('keypress', enterPressed);
limparTarefas.addEventListener('click', removeAllTasks);
limparConcluidos.addEventListener('click', removeTasksCompleted);
