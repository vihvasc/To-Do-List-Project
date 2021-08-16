function createTask() {
  const taskInput = document.getElementById('texto-tarefa');
  const taskText = taskInput.value;
  const newTask = document.createElement('li');
  const taskList = document.getElementById('lista-tarefas');

  newTask.innerText = taskText;
  taskList.appendChild(newTask);
  taskInput.value = '';
}

const taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', createTask);
