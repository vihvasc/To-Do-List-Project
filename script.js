const btnCreatetask = document.getElementById('criar-tarefa');
// const btnDeleteList = document.getElementById('apaga-tudo');
// const btnDeleteCompletos = document.getElementById('remover-finalizados');
// const btnSalvarTasks = document.getElementById('salvar-tarefas');
// const btnMoveUp = document.getElementById('mover-cima');
// const btnMoveDown = document.getElementById('mover-baixo');
const toDoList = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');

function createTask(event) {
  event.preventDefault();
  toDoList.classList.add('todo');
  const list = document.createElement('li');
  toDoList.appendChild(list);
  list.innerText = inputText.value;
  inputText.value = '';
}
btnCreatetask.addEventListener('click', createTask);
