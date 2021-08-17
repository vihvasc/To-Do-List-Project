const button = document.querySelector('#criar-tarefa');
const ol = document.getElementById('lista-tarefas');

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
  ol.appendChild(newTask);
  inputText.value = '';
  newTask.addEventListener('click', addSelectedClass);
  newTask.addEventListener('dblclick', addCompletedClass);
}
button.addEventListener('click', addTask);

function clearAll() {
  const tasks = document.getElementsByClassName('tasks');
  for (let i = 0; tasks.length >= 1; i += 1) {
    ol.removeChild(tasks[0]);
  }
}
const btnClear = document.getElementById('apaga-tudo');
btnClear.addEventListener('click', clearAll);

function clearCompleted() {
  const completedTask = document.getElementsByClassName('completed');
  for (let i = 0; completedTask.length >= 1; i += 1) {
    ol.removeChild(completedTask[0]);
  }
}
const btnClearCompleted = document.getElementById('remover-finalizados');
btnClearCompleted.addEventListener('click', clearCompleted);

function clearSelected() {
  const clearSelectedClass = document.getElementsByClassName('selected');
  for (let i = 0; clearSelectedClass.length >= 1; i += 1) {
    ol.removeChild(clearSelectedClass[0]);
  }
}
const btnClearSelected = document.getElementById('remover-selecionado');
btnClearSelected.addEventListener('click', clearSelected);

function updateLocalStorage() {
  const oldTasks = JSON.parse(localStorage.getItem('allTasks'));
  const tasksLists = document.getElementById('lista-tarefas');
  for (let i = 0; i < tasksLists.length; i += 1) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = tasksLists[i].innerHTML;
    taskItem.classList = tasksLists[i].classList;
    oldTasks.push(taskItem);
  }
  localStorage.setItem('allTasks', JSON.stringify(oldTasks));
}

window.onload = () => {
  if (localStorage.getItem('allTasks') === null) {
    localStorage.setItem('allTasks', JSON.stringify([]));
  } else {
    const tasksList = JSON.parse(localStorage.getItem('allTasks'));
    for (let i = 0; i < tasksList.length; i += 1) {
      const newTask = document.createElement('li');
      newTask.innerText = tasksList[i].text;
      newTask.classList = tasksList[i].classList;
      ol.appendChild(newTask);
    }
  }
};

const btnSave = document.getElementById('salvar-tarefas');
btnSave.addEventListener('click', updateLocalStorage);
