function verifyInputValueEmpty() {
  const getOrdenedList = document.querySelector('#lista-tarefas');
  const getTask = document.querySelector('#texto-tarefa');

  if (getTask.value === '') {
    return alert('Insira um texto para a sua tarefa!');
  }
  const li = document.createElement('li');
  li.innerText = getTask.value;
  getOrdenedList.appendChild(li);
  getTask.value = '';
}

function createTask() {
  const getCreateTaskButton = document.querySelector('#criar-tarefa');

  getCreateTaskButton.addEventListener('click', () => {
    verifyInputValueEmpty();
  });
}

window.onload = () => {
  createTask();
};
