/*Variaveis*/
const buttonOne = document.getElementById('criar-tarefa');
const infoInput = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');

/*Adicionando novas tarefas*/
buttonOne.addEventListener('click', newTask);
function newTask() {
  const newTask = infoInput.value;
  let anotherTask = document.createElement('li');
  anotherTask.innerHTML = newTask;
  listTasks.appendChild(anotherTask);
  infoInput.value = '';
}
