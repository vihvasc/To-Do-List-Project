function createTask() {
  const taskInput = document.getElementById('texto-tarefa');
  let taskText = taskInput.value;
  const newTask = document.createElement('li');
  const taskList = document.getElementById('lista-tarefas');

  newTask.innerText = taskText;
  taskList.appendChild(newTask);
  taskText = '';
}

const taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', createTask);
