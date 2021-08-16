const getOrdenedList = document.querySelector('#lista-tarefas');
const getTask = document.querySelector('#texto-tarefa');
const getCreateTaskButton = document.querySelector('#criar-tarefa');

function verifyInputValueEmpty() {
  if (getTask.value === '') {
    return alert('Insira um texto para a sua tarefa!');
  }
  const li = document.createElement('li');
  li.innerText = getTask.value;
  getOrdenedList.appendChild(li);
  getTask.value = '';
}

function createTask() {
  getCreateTaskButton.addEventListener('click', verifyInputValueEmpty);
}

function createNotification() {
  const notificationDiv = document.querySelector('#notification');
  notificationDiv.className = 'notification';
  setTimeout(() => {
    notificationDiv.className = 'display-none';
  }, 2000);
}

function verifyAddBackground() {
  const getClass = 'selected';
  const getClassSelected = document.getElementsByClassName(getClass);
  if (getClassSelected.length === 1) {
    createNotification();
  } else {
    event.target.classList.add(getClass);
  }
}

function addBackground() {
  const getClass = 'selected';
  getOrdenedList.addEventListener('click', (e) => {
    if (e.target.classList.contains(getClass)) {
      e.target.classList.remove(getClass);
    } else {
      verifyAddBackground();
    }
  });
}

window.onload = () => {
  createTask();
  addBackground();
};
