const input = document.querySelector('#texto-tarefa');
const listOrderned = document.querySelector('#lista-tarefas');
const addButtonTask = document.querySelector('#criar-tarefa');
const liTask = document.getElementsByClassName('task');
const deleteButton = document.getElementById('apaga-tudo');
const deleteTask = document.getElementById('remover-finalizados');

function removeColor() {
  for (let index = 0; index < liTask.length; index += 1) {
    liTask[index].style.backgroundColor = '';
  }
}

function addListener() {
  for (let index = 0; index < liTask.length; index += 1) {
    liTask[index].addEventListener('click', () => {
      removeColor();
      liTask[index].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function doubleClick(event) {
  const eventClicked = event.target;
  if (eventClicked.className === 'task completed') {
    eventClicked.classList.remove('completed');
  } else {
    eventClicked.classList.add('completed');
  }
}

function createTask() {
  addButtonTask.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.className = 'task';
    li.addEventListener('dblclick', doubleClick);
    input.value = '';
    listOrderned.appendChild(li);
    addListener();
  });
}

createTask();

deleteButton.addEventListener('click', () => {
  // listOrderned.innerHTML = '';
  listOrderned.innerText = '';
});

deleteTask.addEventListener('click', () => {
  let classComplete = document.querySelector('.completed');
  while (classComplete) {
    classComplete.remove();
    classComplete = document.querySelector('.completed');
  }
});
