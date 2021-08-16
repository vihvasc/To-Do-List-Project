// Cria Elementos
createButton('Adicionar', 'criar-tarefa', 'input-button');
createInput();

const inputButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Adiciona Eventos
inputButton.addEventListener('click', addNewTask);
taskList.addEventListener('click', changeTaskColor);

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
    taskList.appendChild(newtask);
    input.value = '';
  } else {
    alert('Campo vazio!');
  }
}

// Muda a cor de fundo de um elemento da lista
function changeTaskColor(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
