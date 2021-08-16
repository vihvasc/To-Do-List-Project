const button = document.querySelector('#criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask() {
  let inputText = document.getElementById('texto-tarefa');
  const text = inputText.value;
  const newTask = document.createElement('li');
  newTask.innerText = text;
  taskList.appendChild(newTask);
  inputText.value = '';
}

button.addEventListener('click', addTask);
