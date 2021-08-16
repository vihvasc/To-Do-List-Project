// Requisito 5 - Cria um novo item ao final da lista e apaga o valor do input.
function handleNewTask() {
  const newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;

  const orderedList = document.getElementById('lista-tarefas');
  orderedList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

function addNewTaskButtonEvent() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  buttonCreateTask.addEventListener('click', handleNewTask);
}

window.onload = function () {
  addNewTaskButtonEvent();
};
