const body = document.querySelector('body');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const storedTasks = localStorage.getItem('storedTasks');
const createdTasks = document.querySelectorAll('.tarefa');

function createButton(buttonId, buttonText, insertInsideId) {
  const createButton = document.createElement('button');
  createButton.id = buttonId;
	createButton.innerText = buttonText;
	createButton.style.marginLeft = '10px';
	body.insertBefore(createButton, document.getElementById(insertInsideId));
}

function addTask() {
  const createLi = document.createElement('li');
  const createInput = document.createElement('input');
  createInput.type = 'checkbox';
  if (input.value === '') {
    return alert('Favor inserir um nome válido para a tarefa!');
  }
  createLi.innerText = input.value;
  createLi.classList.add('tarefa');
  taskList.appendChild(createLi);
  input.value = '';
}

function createTaskButton() {
  createButton('criar-tarefa', 'Nova Tarefa', 'lista-tarefas');
  const criarTarefa = document.getElementById('criar-tarefa');
  criarTarefa.addEventListener ('click', addTask);
}
createTaskButton();

