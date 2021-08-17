const body = document.querySelector('body');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const storedTasks = localStorage.getItem('storedTasks');
const changeColor = document.querySelectorAll('.tarefa');

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
    taskList.appendChild(createLi);
    input.value = '';
  }
  
  function createTaskButton() {
    createButton('criar-tarefa', 'Nova Tarefa', 'lista-tarefas');
    const criarTarefa = document.getElementById('criar-tarefa');
    criarTarefa.addEventListener ('click', addTask);
    input.addEventListener ('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
  });
}
createTaskButton();

function addClass(event) {
  const selectedClass = document.querySelector('.selected');
  if (selectedClass) {
    selectedClass.classList.remove('selected');
    selectedClass.style.backgroundColor = ''
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
}

function finishedTask(event) {
  const 
}
