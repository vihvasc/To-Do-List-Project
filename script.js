const btnCreatetask = document.getElementById('criar-tarefa');
const btnDeleteList = document.getElementById('apaga-tudo');
const btnDeleteCompletos = document.querySelector('#remover-finalizados');
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
  if (selectedTask === null) {
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
  const events = event;
  events.target.classList.toggle('completed');
});

btnRemoveTask.addEventListener('click', () => {
  const task = document.querySelector('.selected');
  task.remove();
});

btnMoveUp.addEventListener('click', () => {
  const taskMoveUp = document.querySelector('.selected');
  if (toDoList.firstChild === taskMoveUp && toDoList != null) {
    alert('A tarefa já está no topo!');
  } else {
    toDoList.insertBefore(taskMoveUp, taskMoveUp.previousElementSibling);
    // Retorna o anterior https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling
  }
});

btnMoveDown.addEventListener('click', () => {
  console.log('mover baixo task');
  const taskMoveDown = document.querySelector('.selected');
  if (toDoList.lastChild === taskMoveDown && toDoList != null) {
    alert('A tarefa já está por último!');
  } else {
    toDoList.insertBefore(taskMoveDown.nextElementSibling, taskMoveDown);
    // insere um nó antes do nó de referência como um filho de um nó pai,
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore*/
  }
});

btnDeleteCompletos.addEventListener('click', () => {
  console.log('apagar completos task');
  const tasksCompletos = document.getElementsByClassName('completed');
  const comprimento = tasksCompletos.length;
  for (let index = 0; index < comprimento; index += 1) {
    tasksCompletos[0].remove();
  }
});

btnSalvarTasks.addEventListener('click', () => {
  console.log('salvar task');
  localStorage.setItem('tasks', toDoList.innerHTML);
});

function inicializeLocalStorage() {
  if (localStorage.getItem('tasks') !== null) {
    toDoList.innerHTML = localStorage.getItem('tasks');
  }
}
inicializeLocalStorage();
