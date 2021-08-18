const ordererList = document.getElementById('lista-tarefas');// lista ordenada.
const input = document.querySelector('#texto-tarefa'); // input.
const addTaskButton = document.querySelector('#criar-tarefa');// botão adicionar tarefa.
const createdTasks = document.getElementsByTagName('li');// lista.
const deleteButton = document.getElementById('apaga-tudo');// botão de apagar tudo.
const deleteCompletedTask = document.getElementById('remover-finalizados');// botão de remover finalizados.
const buttonSaveList = document.getElementById('salvar-tarefas');// botão de salvar tarefas.
const buttonUp = document.getElementById('mover-cima');// botão de mover pra cima.
const buttonDown = document.getElementById('mover-baixo');// botão de mover pra baixo.
const removeSelectedButton = document.getElementById('remover-selecionado');// botão de remover selecionado.

function addRemoveColor(event) {
  const currentTask = event.target;
  for (let index = 0; index < createdTasks.length; index += 1) {
    createdTasks[index].style.backgroundColor = '';
  }
  currentTask.style.backgroundColor = 'rgb(128, 128, 128)';
}

function changeCompleted(event) {
  const currentTask = event.target;
  if (currentTask.className === 'completed') {
    currentTask.classList.remove('completed');
  } else {
    currentTask.classList.add('completed');
  }
}

function eventClickAndDbClick() {
  for (let index = 0; index < createdTasks.length; index += 1) {
    createdTasks[index].addEventListener('click', addRemoveColor);
    createdTasks[index].addEventListener('dblclick', changeCompleted);
  }
}

function addTask() {
  addTaskButton.addEventListener('click', () => {
    const createList = document.createElement('li');
    createList.innerText = input.value;
    ordererList.appendChild(createList);
    input.value = '';
    eventClickAndDbClick();
  });
}

deleteButton.addEventListener('click', () => {
  ordererList.innerHTML = '';
});

function clearCompletedTask() {
  let completedList = document.querySelector('.completed');
  while (completedList) {
    completedList.remove();
    completedList = document.querySelector('.completed');
  }
}

deleteCompletedTask.addEventListener('click', clearCompletedTask);

function saveStorage() {
  const tasksProperty = [];
  for (let index = 0; index < createdTasks.length; index += 1) {
    const currentTask = createdTasks[index];
    const objTasks = {
      text: currentTask.innerText,
      bgColor: currentTask.style.backgroundColor,
      className: currentTask.className,
    };
    tasksProperty.push(objTasks);
  }
  localStorage.setItem('tasks', JSON.stringify(tasksProperty));
}
buttonSaveList.addEventListener('click', saveStorage);

function recoverySavedList() {
  const recoveryList = JSON.parse(localStorage.getItem('tasks'));
  for (let index = 0; index < recoveryList.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = recoveryList[index].text;
    li.style.backgroundColor = recoveryList[index].bgColor;
    li.className = recoveryList[index].className;
    ordererList.appendChild(li);
    eventClickAndDbClick();
  }
}

function moveUp() {
  for (let index = 0; index < createdTasks.length; index += 1) {
    if (createdTasks[index].style.backgroundColor !== '' && index > 0) {
      ordererList.insertBefore(createdTasks[index], createdTasks[index].previousSibling);
      return;
    }
  }
}
buttonUp.addEventListener('click', moveUp);

function moveDown() {
  for (let index = 0; index < createdTasks.length; index += 1) {
    if (createdTasks[index].style.backgroundColor !== '' && index < createdTasks.length - 1) {
      ordererList.insertBefore(createdTasks[index].nextSibling, createdTasks[index]);
      return;
    }
  }
}
buttonDown.addEventListener('click', moveDown);

function removeSelected() {
  for (let index = 0; index < createdTasks.length; index += 1) {
    if (createdTasks[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      createdTasks[index].remove();
    }
  }
}
removeSelectedButton.addEventListener('click', removeSelected);

function allTask() {
  addTask();
  if (localStorage.getItem('tasks')) {
    recoverySavedList();
  }
}
window.onload = allTask;
