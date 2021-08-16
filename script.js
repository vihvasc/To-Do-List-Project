const ordererList = document.getElementById('lista-tarefas');// lista ordenada.
const input = document.querySelector('#texto-tarefa'); // input
const addTaskButton = document.querySelector('#criar-tarefa');// botão adicionar tarefa.

function addTask() {
  addTaskButton.addEventListener('click', () => {
    const createList = document.createElement('li');
    createList.innerText = input.value;
    createList.className = 'task';
    ordererList.appendChild(createList);
    input.value = '';
    addGrayBackground();
  });
}

function addGrayBackground() {
  const createdTasks = document.getElementsByClassName('task');// todas tarefas criadas.
  for (let index = 0; index < createdTasks.length; index += 1) {
    createdTasks[index].addEventListener('click', (event) => {
      const eventColor = event.target;
      eventColor.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function allTask() {
  addTask();
}
window.onload = allTask;
