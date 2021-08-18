const btnCreatetask = document.getElementById('criar-tarefa');
const btnDeleteList = document.getElementById('apaga-tudo');
const btnDeleteCompletos = document.getElementById('remover-finalizados');
const btnSalvarTasks = document.getElementById('salvar-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const btnRemoveTask = document.querySelector('#remover-selecionado');
const toDoList = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');

function createTask(event) {
  event.preventDefault();
  toDoList.classList.add('todo');
  const listItem = document.createElement('li');
  listItem.classList.add('itemtask');
  toDoList.appendChild(listItem);
  listItem.innerText = inputText.value;
  inputText.value = '';
}
btnCreatetask.addEventListener('click', createTask);

toDoList.addEventListener('click', (event) => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask === undefined) {
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
    selectedTask.classList.remove('selected');
  }
});

btnDeleteList.addEventListener('click', () => {
  toDoList.innerHTML = '';
});

toDoList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

btnDeleteCompletos.addEventListener('click', () => {
  const tasksCompletos = document.getElementsByClassName('completed');
  const comprimento = tasksCompletos.length;
  for (let index = 0; index < comprimento; index += 1) {
    tasksCompletos[0].remove();
  }
});

btnRemoveTask.addEventListener('click', () => {});

btnMoveUp.addEventListener('click', () => {});

btnMoveDown.addEventListener('click', () => {});

btnSalvarTasks.addEventListener('click', () => {
  localStorage.setItem('task', toDoList.innerHTML);
});
