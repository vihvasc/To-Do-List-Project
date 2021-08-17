// Cria Elementos
createInput(); // Cria input para adicionar tarefas
createButton('Adicionar', 'criar-tarefa', 'input-button'); // cria botão para adicioonar tarefas
createButton('X', 'remover-selecionado', 'button-container'); // Cria botão para apagar a tarefa selecionada
createButton('^', 'mover-cima', 'button-container'); // Cria botão para mover task para cima
createButton('v', 'mover-baixo', 'button-container'); // Cria botão para mover task para baixo
createButton('Limpar Lista', 'apaga-tudo', 'button-container'); // Cria botão para apagar todas tarefas
createButton('Limpar Completos', 'remover-finalizados', 'button-container'); // Cria botão para apagar tarefas completadas

const inputButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const removeSelectedTaskButton = document.getElementById('remover-selecionado');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const clearListButton = document.getElementById('apaga-tudo');
const clearCompletedtasksButton = document.getElementById(
  'remover-finalizados'
);

// Adiciona Eventos
inputButton.addEventListener('click', addNewTask);
taskList.addEventListener('click', selectItem);
taskList.addEventListener('dblclick', completeItem);
clearListButton.addEventListener('click', clearList);
clearCompletedtasksButton.addEventListener('click', clearCompletedsTasks);
removeSelectedTaskButton.addEventListener('click', removeSelectedTask);

// Cria o input para adicionar Tarefas
function createInput() {
  let inputContainer = document.getElementById('input-container');
  let input = document.createElement('input');

  input.id = 'texto-tarefa';
  inputContainer.appendChild(input);
}

// Cria botão - parametros: id do botão, texto do botão e id do pai
function createButton(buttonText, buttonId, parentId) {
  let buttonParent = document.getElementById(parentId);
  let button = document.createElement('button');

  button.id = buttonId;
  button.innerText = buttonText;
  buttonParent.appendChild(button);
}

// Adiciona uma nova tarefa na lista
function addNewTask() {
  let newtask = document.createElement('li');

  if (input.value) {
    newtask.innerText = input.value;
    newtask.classList.add('list-item');
    taskList.appendChild(newtask);
    input.value = '';
  } else {
    alert('Campo vazio!');
  }
}

// Adiciona a classe selected para mudar a cor de fundo do item
function selectItem(event) {
  let selected = document.querySelector('.selected');

  if (selected && selected !== event.target) {
    selected.classList.remove('selected');
  }

  event.target.classList.toggle('selected');
}

// Adiciona a classe completed a um item
function completeItem(event) {
  event.target.classList.toggle('completed');
}

// Remove todos itens da lista
function clearList() {
  let tasks = document.querySelectorAll('.list-item');

  for (let task of tasks) {
    task.remove();
  }
}

// Romove os itens completados
function clearCompletedsTasks() {
  let CompletedTasks = document.querySelectorAll('.completed');

  for (let task of CompletedTasks) {
    task.remove();
  }
}

// Remove o item selecionado
function removeSelectedTask() {
  let selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.remove();
  }
}
