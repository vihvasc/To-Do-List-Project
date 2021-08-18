const button = document.querySelector('#criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const sectionList = document.getElementById('sectionList');

function addSelectedClass(e) {
  const tasks = document.getElementsByClassName('tasks');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('selected')) {
      tasks[i].classList.toggle('selected');
    }
  }
  e.target.classList.toggle('selected');
}

function addCompletedClass(e) {
  e.target.classList.toggle('completed');
}

function addTask() {
  const inputText = document.getElementById('texto-tarefa');
  const text = inputText.value;
  const newTask = document.createElement('li');
  newTask.innerText = text;
  newTask.className = 'tasks';
  sectionList.firstElementChild.appendChild(newTask);
  inputText.value = '';
  newTask.addEventListener('click', addSelectedClass);
  newTask.addEventListener('dblclick', addCompletedClass);
}
button.addEventListener('click', addTask);

function clearAll() {
  const tasks = document.getElementsByClassName('tasks');
  for (let i = 0; tasks.length >= 1; i += 1) {
    sectionList.firstElementChild.removeChild(tasks[0]);
  }
}
const btnClear = document.getElementById('apaga-tudo');
btnClear.addEventListener('click', clearAll);

function clearCompleted() {
  const completedTask = document.getElementsByClassName('completed');
  for (let i = 0; completedTask.length >= 1; i += 1) {
    sectionList.firstElementChild.removeChild(completedTask[0]);
  }
}
const btnClearCompleted = document.getElementById('remover-finalizados');
btnClearCompleted.addEventListener('click', clearCompleted);

function clearSelected() {
  const clearSelectedClass = document.getElementsByClassName('selected');
  for (let i = 0; clearSelectedClass.length >= 1; i += 1) {
    sectionList.firstElementChild.removeChild(clearSelectedClass[0]);
  }
}
const btnClearSelected = document.getElementById('remover-selecionado');
btnClearSelected.addEventListener('click', clearSelected);

function saveBtn() {
  const lis = document.getElementsByClassName('tasks');
  const newTasks = [];
  for (let i = 0; i < lis.length; i += 1) {
    const liObject = {
      className: lis[i].className,
      innerText: lis[i].innerText,
    };
    newTasks.push(liObject);
  }
  localStorage.setItem('savedTasks', JSON.stringify(newTasks));
  alert('Salvo!');
}

window.onload = () => {
  if (localStorage.getItem('savedTasks') === null) {
    localStorage.setItem('savedTasks', JSON.stringify([]));
  } else {
    const savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
    for (let i = 0; i < savedTasks.length; i += 1) {
      const oldLi = document.createElement('li');
      oldLi.innerText = savedTasks[i].innerText;
      oldLi.className = savedTasks[i].className;
      oldLi.addEventListener('click', addSelectedClass);
      oldLi.addEventListener('dblclick', addCompletedClass);
      ol.appendChild(oldLi);
    }
  }
};

const btnSave = document.getElementById('salvar-tarefas');
btnSave.addEventListener('click', saveBtn);

function moveUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && selectedTask.previousElementSibling !== null) {
    selectedTask.after(selectedTask.previousElementSibling);
  }
}
const btnMoveUp = document.getElementById('mover-cima');
btnMoveUp.addEventListener('click', moveUp);

function moveDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && selectedTask.nextElementSibling !== null) {
    selectedTask.before(selectedTask.nextElementSibling);
  }
}
const btnMoveDown = document.getElementById('mover-baixo');
btnMoveDown.addEventListener('click', moveDown);
