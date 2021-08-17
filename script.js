const getOrdenedList = document.querySelector('#lista-tarefas');
const getTask = document.querySelector('#texto-tarefa');
const getCreateTaskButton = document.querySelector('#criar-tarefa');
const getDeleteAllButton = document.getElementById('apaga-tudo');
const getDeleteCompletedButton = document.getElementById('remover-finalizados');

function createTasks() {
  if (getTask.value === '') {
    return getTask.setAttribute('placeholder', 'Espaço vazio!');
  }
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerText = getTask.value;
  getOrdenedList.appendChild(li);
  getTask.value = '';
}

function createTask() {
  getCreateTaskButton.addEventListener('click', createTasks);
}

function changeBackgroundColor(event) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}
getOrdenedList.addEventListener('click', changeBackgroundColor);

/*
* Código da função acima foi feito com a ajuda do Aluno Iury Roque da tribo B
*/

function completeTask() {
  getOrdenedList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

function deleteAll() {
  getDeleteAllButton.addEventListener('click', () => {
    getOrdenedList.innerText = '';
  });
}

function removeCompletedTask() {
  getDeleteCompletedButton.addEventListener('click', () => {
    const getCompletedTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < getCompletedTasks.length; i += 1) {
      getOrdenedList.removeChild(getCompletedTasks[i]);
    }
  });
}

function saveTasks() {
  const getSaveButton = document.getElementById('salvar-tarefas');
  getSaveButton.addEventListener('click', saveTasks);
  const getHTMLTasks = getOrdenedList.innerHTML;
  localStorage.setItem('tasks', getHTMLTasks);
}

function loadTasks() {
  getOrdenedList.innerHTML = localStorage.getItem('tasks');
  console.log(localStorage.getItem('tasks'));
}

window.onload = () => {
  createTask();
  completeTask();
  deleteAll();
  removeCompletedTask();
  loadTasks();
  saveTasks();
};
