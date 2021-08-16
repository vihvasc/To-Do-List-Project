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
* Código acima foi feito com a ajuda do Aluno Iury Roque da tribo B
*/

window.onload = () => {
  createTask();
};
