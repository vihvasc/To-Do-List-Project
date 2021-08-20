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
  if (event.target.classList.contains('unSelected')) {
    event.target.classList.add('selected');
    event.target.classList.remove('unSelected');
  } else {
    event.target.classList.add('unSelected');
    event.target.classList.remove('selected');
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
