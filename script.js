const ordererList = document.getElementById('lista-tarefas');// lista ordenada.
const input = document.querySelector('#texto-tarefa'); // input
const addTaskButton = document.querySelector('#criar-tarefa');// botão adicionar tarefa.
const createdTasks = document.getElementsByTagName('li');

function removeColor(event) {
  const currentTask = event.target;
  for (let index = 0; index < createdTasks.length; index += 1) {
    createdTasks[index].style.backgroundColor = '';
  }
  currentTask.style.backgroundColor = 'rgb(128, 128, 128)';
}

function trocaCompleted(event) {
  const taskDeAgora = event.target;
  if (taskDeAgora.className === 'completed') {
    taskDeAgora.classList.remove('completed');
  } else {
    taskDeAgora.classList.add('completed');
  }
}

function addGrayBackground() {
  for (let index = 0; index < createdTasks.length; index += 1) {
    createdTasks[index].addEventListener('click', removeColor);
    createdTasks[index].addEventListener('dblclick', trocaCompleted);
  }
}

function addTask() {
  addTaskButton.addEventListener('click', () => {
    const createList = document.createElement('li');
    createList.innerText = input.value;
    ordererList.appendChild(createList);
    input.value = '';
    addGrayBackground();
  });
}

function allTask() {
  addTask();
}
window.onload = allTask;
