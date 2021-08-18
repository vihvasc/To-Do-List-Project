/*Variaveis*/
const buttonOne = document.getElementById('criar-tarefa');
const infoInput = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const arrTasks = document.getElementsByTagName('li');
const clearAll = document.getElementById('apaga-tudo');
const completedTasks = document.getElementsByTagName('completed');
const buttonsDiv = document.getElementById('buttons');
const buttonSelected = document.getElementById('remover-selecionado');

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
/*Mudar o fundo do item MEXER NISSO PRO REQUISITO 8*/
function changeBackColor(event) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
/*se um elemento da lista tem className='selected' os outros nao podem ter. for (let i = 0; i > listTask.length)

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

function createButtom() {
  const buttomClear = document.createElement('button');
  buttomClear.id = 'remover-finalizados';
  buttomClear.addEventListener('click', clearCompletedTasks);
  buttonsDiv.appendChild(buttomClear);
}

function clearCompletedTasks() {
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}

function removeselected() {
  for (let i = 0; i < selected; i += 1) {
    selected[i].remove();
  }
}

buttonSelected.addEventListener('click', removeselected);
