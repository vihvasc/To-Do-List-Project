/*Variaveis*/
const buttonOne = document.getElementById('criar-tarefa');
const infoInput = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const arrTasks = document.getElementsByTagName('li');
const clearAll = document.getElementById('apaga-tudo');
const riskLine = document.querySelectorAll('.completed');
const clearDone = document.getElementById('remover-finalizados');

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
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
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

/*botao finalizadas REQUISITO 11 - PRECISA TERMINAR PQ NAO TA DANDO CERTO*/
clearDone.addEventListener('click', finalizadasApagar);
function finalizadasApagar() {
  for (let i = 0; i < riskLine.length; i += 1) {
    const finApag = riskLine[i];
    listTasks.removeChild(finApag);
  }
}
