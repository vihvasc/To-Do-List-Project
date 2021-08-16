let taskButton = document.querySelector('#criar-tarefa');
const addTask = document.querySelector('#texto-tarefa');
const eraseButton = document.querySelector('#apaga-tudo');
const eraseFinishedButton = document.querySelector('#remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const selectDelButton = document.querySelector('#remover-selecionado');

function addListItem() {
  let newTask = document.createElement('li');
  if (addTask.value !== '') {
    newTask.innerText = addTask.value;
    document.querySelector('#lista-tarefas').appendChild(newTask);
    newTask.className = 'toDoTask';
    newTask.addEventListener('click', changeBackground);
    newTask.addEventListener('dblclick', changeText);
    addTask.value = '';
  }
}
taskButton.addEventListener('click', addListItem);

