const button = document.querySelector('#criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function selectTask(e) {
  const tasks = document.getElementsByClassName('tasks');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('selected')) {
      tasks[i].classList.toggle('selected');
    }
  }
  e.target.classList.toggle('selected');
}

function addTask() {
  const inputText = document.getElementById('texto-tarefa');
  const text = inputText.value;
  const newTask = document.createElement('li');
  newTask.innerText = text;
  newTask.className = 'tasks';
  taskList.appendChild(newTask);
  inputText.value = '';
  newTask.addEventListener('click', selectTask);
}
button.addEventListener('click', addTask);
