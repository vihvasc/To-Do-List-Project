const textTask = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function clearBG() {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    task[index].style.backgroundColor = 'white';
  }
}

function listColor() {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    task[index].addEventListener('click', () => {
      clearBG();
      task[index].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function addTask() {
  const task = document.createElement('li');
  const newTask = textTask.value;
  task.innerHTML = newTask;
  taskList.appendChild(task);
  textTask.value = '';
  listColor();
}

createTask.addEventListener('click', addTask);

function taskDone(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', taskDone);
