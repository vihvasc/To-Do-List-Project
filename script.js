// reference Dom
const createTask = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const clearTask = document.querySelector('#apaga-tudo')
const removeCheck = document.querySelector('#remover-finalizados')

// function
function completdLi() {
  const listTask = document.querySelectorAll('.list');

  for (element of listTask) {
    element.addEventListener('dblclick', (event) => {
      if (element.classList.contains('completed')) 
      event.target.classList.toggle('completed', false);
      else 
      event.target.classList.toggle('completed', true);
    });
  }
}

function selectLi() {
  const listTask = document.querySelectorAll('.list');
  for (element of listTask) {
    element.addEventListener('click', (event) => {
      if (element.className !== 'select') {
        removeClassList();
        event.target.classList.add('select');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    });
  }
  
}

function removeClassList() {
  const listTask = document.querySelectorAll('.list');
  listTask.forEach((event) => {
    event.classList.remove('select');
    event.style.backgroundColor = null;
  });
}



function taskGenerator() {
  const task = document.createElement('li');
  task.classList.add('list');
  task.innerHTML = textTask.value;
  todoList.appendChild(task);
  textTask.value = '';
  selectLi();
  completdLi()
  
}

function clearTasks() {
  const listTask = document.querySelectorAll('.list');
  listTask.forEach((event) => {
    event.remove()
  })
}

function removeCheckTask() {
  const listTask = document.querySelectorAll('.completed');
  listTask.forEach((event) => {
    event.remove()
  })
}
// addEventListener
createTask.addEventListener('click', taskGenerator);
clearTask.addEventListener('click', clearTasks);
removeCheck.addEventListener('click', removeCheckTask);
