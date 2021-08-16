function createTask() {
  const actionButton = document.getElementById('criar-tarefa');
  const contentTarget = document.getElementById('lista-tarefas');
  const inputElement = document.getElementById('texto-tarefa');

  actionButton.addEventListener('click', function() {
    const newTask = document.createElement('li');
    newTask.innerHTML = inputElement.value;
    contentTarget.appendChild(newTask);
    inputElement.value = '';
  })
};

createTask();