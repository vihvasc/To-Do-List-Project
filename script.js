/*Variaveis*/
const buttonOne = document.getElementById('criar-tarefa');
const infoInput = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const arrTasks = document.getElementsByClassName('taskAdd');
const clearAll = document.getElementById('apaga-tudo');
const riskLine = document.querySelectorAll('.completed');
const clearDone = document.getElementById('remover-finalizados');

/*Adicionando novas tarefas*/
buttonOne.addEventListener('click', newTask);
function newTask() {
  const newTask = infoInput.value;
  let anotherTask = document.createElement('li');
  anotherTask.className = 'taskAdd';
  anotherTask.innerHTML = newTask;
  anotherTask.addEventListener('click', changeBackColor);
  anotherTask.addEventListener('dblclick', completingTask);
  listTasks.appendChild(anotherTask);
  infoInput.value = '';
}
/*Mudar o fundo do item*/
function changeBackColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.className = 'selected';
}
/*Riscar item completado*/
function completingTask(event) {
  event.target.className = 'taskAdd' + ' completed';
  event.target.style.textDecoration = 'line-through';
}

/*Botão para limpar a lista de tarefas*/
clearAll.addEventListener('click', clearItens);
function clearItens() {
  listTasks.innerHTML = '';
}

/*botao finalizadas*/
clearDone.addEventListener('click', finalizadasApagar);
function finalizadasApagar() {
  for (let i = 0; i < riskLine.length; i += 1) {
    const finApag = riskLine[i];
    listTasks.removeChild(finApag);
  }
}
