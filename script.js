const inputTask = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const body = document.querySelector('body');
let clickCount = 0;

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

// adiciona/remove classe 'completed'
function markCompleted(element) {
  if (element.classList.contains('completed')) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}

// verifica número de clicks
// Fonte: https://gist.github.com/karbassi/639453
function countClicks(element) {
  clickCount += 1;
  let singleClickTimer;
  addSelected(element);
  if (clickCount === 1) {
    // aguarda 175ms para zerar clickCount
    singleClickTimer = setTimeout(() => { clickCount = 0; }, 175);
  } else if (clickCount === 2) {
    clearTimeout(singleClickTimer);
    clickCount = 0;
    markCompleted(element);
  }
}

// verifica se o elemento é um list item
function checkItem(originEvent) {
  const element = originEvent.target;
  if (element.parentNode.id === 'lista-tarefas') {
    countClicks(element);
  }
}
body.addEventListener('click', checkItem);
