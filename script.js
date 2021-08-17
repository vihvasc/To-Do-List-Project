const btnCreatetask = document.getElementById('criar-tarefa');
const btnDeleteList = document.getElementById('apaga-tudo');
const btnDeleteCompletos = document.getElementById('remover-finalizados');
const btnSalvarTasks = document.getElementById('salvar-tarefas');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnDeleteTask = document.getElementById('remover-selecionado');
const toDoList = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');

function createTask(event) {
  event.preventDefault();
  toDoList.classList.add('todo');
  const listItem = document.createElement('li');
  listItem.classList.add('selected');
  toDoList.appendChild(listItem);
  listItem.innerText = inputText.value;
  inputText.value = '';
}
btnCreatetask.addEventListener('click', createTask);

toDoList.addEventListener('click', (event) => {
  const listTask = toDoList.children;
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].style.backgroundColor = '';
  }
  const selectedList = event.target;
  selectedList.style.backgroundColor = 'rgb(128, 128, 128)';
});

btnDeleteList.addEventListener('click', () => {
  toDoList.innerHTML = '';
});

toDoList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
const storage = localStorage;

btnSalvarTasks.addEventListener('click', () => {
  storage.setItem('lista', toDoList.innerHTML);
});

btnMoveUp.addEventListener('click', () => {});

btnMoveDown.addEventListener('click', () => {});

btnDeleteTask.addEventListener('click', () => {});
