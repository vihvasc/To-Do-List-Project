const input = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonClearList = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const buttonSaveList = document.getElementById('salvar-tarefas');
const listTasks = document.getElementById('lista-tarefas');
const arrayList = document.getElementsByTagName('li');

// Requisito 7 e 8
function changeBgColor(event) {
  for (let index = 0; index < arrayList.length; index += 1) {
    arrayList[index].style.backgroundColor = '';
  }
  const eventClicked = event.target;
  eventClicked.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Requisito 9
function completed(event) {
  const eventClicked = event.target;
  if (eventClicked.className === 'completed') {
    eventClicked.classList.remove('completed');
  } else {
    eventClicked.classList.add('completed');
  }
}

// Requisitos 5 e 6
function addTasks() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.addEventListener('click', changeBgColor);
  li.addEventListener('dblclick', completed);
  listTasks.appendChild(li);
  input.value = '';
}

buttonAdd.addEventListener('click', addTasks);

// Requisito 10
function clearList() {
  listTasks.innerHTML = '';
}

buttonClearList.addEventListener('click', clearList);

// Requisito 11
function clearCompleted() {
  let classCompleted = document.querySelector('.completed');
  while (classCompleted) {
    classCompleted.remove();
    classCompleted = document.querySelector('.completed');
  }
}

buttonRemoveCompleted.addEventListener('click', clearCompleted);

// Requisito 12
function saveList() {
  const listTasksHTML = listTasks.innerHTML;
  localStorage.setItem('listTasksSave', listTasksHTML);
}

buttonSaveList.addEventListener('click', saveList);

window.onload = () => {
  listTasks.innerHTML = localStorage.getItem('listTasksSave');
};
