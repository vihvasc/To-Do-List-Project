// Cria Elementos
createButton('Adicionar', 'criar-tarefa', 'input-button');
createInput();

const inputButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Adiciona Eventos
inputButton.addEventListener('click', addNewTask);
taskList.addEventListener('click', selectItem);
taskList.addEventListener('dblclick', completeItem);

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

// Adiciona a classe selected para mudar a cor de fundo do item
function selectItem(event) {
  let selected = document.querySelector('.selected');

  if (selected && selected !== event.target) {
    selected.classList.remove('selected');
  }

  event.target.classList.toggle('selected');
}

//Adiciona a classe completed a um item
function completeItem(event) {
  event.target.classList.toggle('completed');
}
