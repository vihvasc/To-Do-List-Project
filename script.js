const newList = document.createElement('ol');
newList.id = 'lista-tarefas';
document.body.appendChild(newList);

// adiciona tarefas à lista
// ta FUNCIONANDO! - não mexe!
function addNewTask() {
  const addButton = document.querySelector('#criar-tarefa');
  const getInputField = document.querySelector('#task-input');
  getInputField.id = 'texto-tarefa';

  addButton.addEventListener('click', () => {
    const newLine = document.createElement('li');
    newLine.innerText = getInputField.value;
    newLine.className = 'newTask unSelected unCompleted';
    newList.appendChild(newLine);
    getInputField.value = '';
  });
}
addNewTask();

function selectTask(event) {
  const allTasks = document.getElementsByClassName('newTask');
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].classList.add('unSelected');
    allTasks[index].classList.remove('selected');
    if (event.target.classList.contains('unSelected')) {
      event.target.classList.add('selected');
      event.target.classList.remove('unSelected');
    }
  }
}
newList.addEventListener('click', selectTask);

function completedTask(event) {
  if (event.target.classList.contains('unCompleted')) {
    event.target.classList.add('completed');
    event.target.classList.remove('unCompleted');
  } else {
    event.target.classList.add('unCompleted');
    event.target.classList.remove('completed');
  }
}
newList.addEventListener('dblclick', completedTask);

function clearTasks() {
  const addButton = document.querySelector('#apaga-tudo');
  addButton.addEventListener('click', () => {
    const allTasks = document.getElementsByTagName('li');
    newList.remove(allTasks);
  });
}
clearTasks();

function clearCompleted() {
  const addButton = document.querySelector('#remover-finalizados');
  addButton.addEventListener('click', () => {
    const allCompletedTask = document.querySelectorAll('.completed');
    for (let index = 0; index < allCompletedTask.length; index += 1) {
      newList.removeChild(allCompletedTask[index]);
    }
  });
}
clearCompleted();

function removeSelected() {
  const addButton = document.querySelector('#remover-selecionado');
  addButton.addEventListener('click', () => {
    const allSelectedTask = document.querySelectorAll('.selected');
    for (let index = 0; index < allSelectedTask.length; index += 1) {
      newList.removeChild(allSelectedTask[index]);
    }
  });
}
removeSelected();
