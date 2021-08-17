const btnCreatetask = document.getElementById('criar-tarefa');
const btnDeleteList = document.getElementById('apaga-tudo');
const btnDeleteCompletos = document.getElementById('remover-finalizados');
const btnSalvarTasks = document.getElementById('salvar-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const btnToDoTask = document.querySelector('#remover-selecionado');
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
  const changedColor = event;
  if (changedColor.target.className === 'selected') {
    if (changedColor.target.style.backgroundColor === 'rgb(128,128,128)') {
      changedColor.target.style.backgroundColor = '';
    } else {
      changedColor.target.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
});

btnDeleteList.addEventListener('click', () => {
  toDoList.innerHTML = '';
});

toDoList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

btnSalvarTasks.addEventListener('click', () => {

  localStorage.setItem('savedList', toDoList.innerHTML);
});

btnMoveUp.addEventListener('click', () => {
  console.log('clicou');
});

btnMoveDown.addEventListener('click', () => {
  console.log('clicou');
});

btnToDoTask.addEventListener('click', () => {
  console.log('clicou');
});

btnDeleteCompletos.addEventListener('click', () => {
  const tasksCompletos = document.getElementsByClassName('completed');
  const comprimento = tasksCompletos.length;
  for (let index = 0; index < comprimento; index += 1) {
    tasksCompletos[0].remove();
  }
});
