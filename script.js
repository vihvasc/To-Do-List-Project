/*Variaveis*/
const buttonOne = document.getElementById('criar-tarefa');
const infoInput = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const arrTasks = document.getElementsByClassName('taskAdd');
const clearAll = document.getElementById('apaga-tudo');
/*Adicionando novas tarefas*/
buttonOne.addEventListener('click', newTask);
function newTask() {
  const newTask = infoInput.value;
  let anotherTask = document.createElement('li');
  anotherTask.className = 'taskAdd';
  anotherTask.innerHTML = newTask;
  anotherTask.addEventListener('click', changeBackColor);
  listTasks.appendChild(anotherTask);
  infoInput.value = '';
}

function changeBackColor() {
  anotherTask.style.changeBackColor = 'pink';
}

clearAll.addEventListener('click', clearItens);
function clearItens() {
  listTasks.innerHTML = '';
}
