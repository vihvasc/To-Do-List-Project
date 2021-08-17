const body = document.querySelector('body');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
// const storedTasks = localStorage.getItem('storedTasks');
// const changeColor = document.querySelectorAll('.tarefa');

function createButton(buttonId, buttonText, insertInsideId) {
  const createButton = document.createElement('button');
  createButton.id = buttonId;
  createButton.innerText = buttonText;
  createButton.style.marginLeft = '10px';
  body.insertBefore(createButton, document.getElementById(insertInsideId));
}

function addTask() {
  const createLi = document.createElement('li');
  if (input.value === '') {
    return alert('Favor inserir um nome válido para a tarefa!');
  }
  createLi.innerText = input.value;
  createLi.id = 'tarefa';
  createLi.addEventListener('click', addClass);
  createLi.addEventListener('dblclick', finishedTask)
  taskList.appendChild(createLi);
  input.value = '';
}

function createTaskButton() {
  createButton('criar-tarefa', 'Nova Tarefa', 'lista-tarefas');
  const criarTarefa = document.getElementById('criar-tarefa');
  criarTarefa.addEventListener ('click', addTask);
  input.addEventListener ('keypress', checkEnterPressed);
}
createTaskButton();

function checkEnterPressed(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

function addClass(event) {
  const selectedClass = document.querySelector('.selected');
  if (selectedClass) {
    selectedClass.classList.remove('selected');
    selectedClass.style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
}

function finishedTask(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    if (selectedTask.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
}

const completedTask = document.querySelectorAll('.completed');

function createEraseAllButton() {
  createButton('apaga-tudo', 'Apagar Tudo', 'lista-tarefas');
  const createdTasks = document.querySelectorAll('#tarefa');
  if (createdTasks) {
    for (let task = 0; task < createdTasks.length; task += 1){
      
    }
  }
}
createEraseAllButton();
