function addTask() {
  const taskInput = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');

  newTask.innerText = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = '';
}

window.onload = () => {
  const addTaskButton = document.getElementById('criar-tarefa');
  addTaskButton.addEventListener('click', addTask);
};
