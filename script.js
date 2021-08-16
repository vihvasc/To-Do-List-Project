const inputTask = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const body = document.querySelector('body');

// adiciona tarefa à lista
function addTask() {
  const inputTaskValue = inputTask.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = inputTaskValue;
  taskList.appendChild(newTask);
  inputTask.value = '';
}
createTask.addEventListener('click', addTask);

// seleciona a tarefa
function addSelected(element) {
  const tasks = Array.from(taskList.children);
  for (let counter = 0; counter < tasks.length; counter += 1) {
    const currentTask = tasks[counter];
    if (currentTask.classList.contains('selected')) {
      currentTask.classList.remove('selected');
    }
  }
  element.classList.add('selected');
}
// verifica se o elemento é um list item
function checkItem(originEvent) {
  const element = originEvent.target;
  if (element.parentNode.id === 'lista-tarefas') {
    addSelected(element);
  }
}
body.addEventListener('click', checkItem);
