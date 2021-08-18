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

// Rever e finalizar a partir daqui
function saveBtn() {
  const oldTasks = JSON.parse(localStorage.getItem('savedTasks'));
  const list = ol.innerHTML;
  oldTasks.push(list);
  localStorage.setItem('savedTasks', JSON.stringify(oldTasks));
  // naoEntendiPraQServe();
}

// function naoEntendiPraQServe() {
//   const oldTasks = JSON.parse(localStorage.getItem('phrases'));
//   const newOl = document.createElement('ol');
//   const sectionList = document.getElementById('sectionList');
//   newOl.innerHTML = oldTasks;
//   sectionList.appendChild(newOl);
// }
window.onload = () => {
  if (localStorage.getItem('savedTasks') === null) {
    localStorage.setItem('savedTasks', JSON.stringify([]));
  } else {
    const sectionList = document.getElementById('sectionList');
    const savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
    const oldOl = document.createElement('ol');
    oldOl.innerHTML = savedTasks;
    oldOl.id = 'lista-tarefas';
    sectionList.appendChild(oldOl);
  }
};

const btnSave = document.getElementById('salvar-tarefas');
btnSave.addEventListener('click', saveBtn);
