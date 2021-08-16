const taskList = document.getElementById('lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const addTaskButton = document.querySelector('#criar-tarefa');

function addTask() {
  addTaskButton.addEventListener('click', () => {
    const createList = document.createElement('li');
    createList.innerText = input.value;
    taskList.appendChild(createList);
    input.value = '';
  });
}

function allTask() {
  addTask();
}
window.onload = allTask;
