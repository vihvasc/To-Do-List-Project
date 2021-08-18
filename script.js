/*Variaveis*/

const buttonOne = document.getElementById('criar-tarefa');
const infoInput = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const clearAll = document.getElementById('apaga-tudo');
const completedTasks = document.getElementsByClassName('completed');
const buttonSelected = document.getElementById('remover-selecionado');
const anotherTask = document.getElementsByClassName('taskAdd');
const buttonSave = document.getElementById('salvar-tarefas');

/*Adicionando novas tarefas REQUISITO 1-7*/

buttonOne.addEventListener('click', newTask);
function newTask() {
  const newTask = infoInput.value;
  let anotherTask = document.createElement('li');
  anotherTask.className = 'taskAdd';
  anotherTask.innerText = newTask;
  anotherTask.addEventListener('click', changeBackColor);
  anotherTask.addEventListener('dblclick', completingTask);
  listTasks.appendChild(anotherTask);
  infoInput.value = '';
}

/*Mudar o fundo do item*/

function changeBackColor(event) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

/*Riscar item completado REQUISITO 9*/

function completingTask(event) {
  const taskCompleted = event.target;
  if (taskCompleted.classList.contains('completed')) {
    taskCompleted.classList.remove('completed');
  } else {
    taskCompleted.classList.add('completed');
  }
}

/*Botão para limpar a lista de tarefas REQUISITO 10*/

clearAll.addEventListener('click', clearItens);
function clearItens() {
  listTasks.innerHTML = '';
}
const buttonCompleted = document.getElementById('remover-finalizados');
buttonCompleted.addEventListener('click', clearCompletedTasks);
function clearCompletedTasks() {
  while (completedTasks.length > 0) {
    completedTasks[0].parentNode.removeChild(completedTasks[0]);
  }
}
const selectedtag = document.getElementsByClassName('selected');
buttonSelected.addEventListener('click', removeselected);
function removeselected() {
  while (selectedtag.length > 0) {
    selectedtag[0].parentNode.removeChild(selectedtag[0]);
  }
}

/* BOTÃO SALVAR ITENS */
buttonSave.addEventListener('click', saveTasks);
function saveTasks() {
  const everythingList = listTasks.innerHTML;
  localStorage.setItem('tasksSave', everythingList);
}

window.onload = () => {
  listTasks.innerHTML = localStorage.getItem('tasksSave');
};
