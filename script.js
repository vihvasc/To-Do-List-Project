let createTaskBtn = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

function handleAddTask() {
  let li = document.createElement('li');
  li.textContent = input.value;
  taskList.appendChild(li);

  input.value = '';
}

createTaskBtn.addEventListener('click', handleAddTask);
