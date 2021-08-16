const taskInput = document.getElementById('texto-tarefa'); // Input
const listaTarefas = document.getElementById('lista-tarefas'); // Lista Ordenada
const criarTarefa = document.getElementById('criar-tarefa'); // Botão adicionar tarefa

function addNewTask() {
  const li = document.createElement('li');
  li.innerText = taskInput.value;
  li.className = 'tarefa';
  listaTarefas.appendChild(li);
  taskInput.value = '';
  addListenerForTasks();
}

function addListenerForTasks() {
  const tarefasCriadas = [...document.getElementsByClassName('tarefa')]; // Todas tarefas criadas
  tarefasCriadas.forEach(tarefa => {
    tarefa.addEventListener('click', paintGrey);
  });
}

function paintGrey(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

criarTarefa.addEventListener('click', addNewTask);
