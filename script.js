function changeLiColor (receivedEvent) {
  const tasksList = document.querySelectorAll('#lista-tarefas> *');
  const element = receivedEvent.target;
  const currentColor = getComputedStyle(receivedEvent.target).getPropertyValue('background-color');
  for (let index = 0; index < tasksList.length; index += 1) {
    tasksList[index].style.backgroundColor = ''; 
  }
  (currentColor !== 'rgb(128, 128, 128)') ? element.style.backgroundColor = 'rgb(128, 128, 128)' : element.style.backgroundColor = '';
}

function createTask() {
  const actionButton = document.getElementById('criar-tarefa');
  const contentTarget = document.getElementById('lista-tarefas');
  const inputElement = document.getElementById('texto-tarefa');

  actionButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerHTML = inputElement.value;
    contentTarget.appendChild(newTask);
    newTask.addEventListener('click', changeLiColor);
    newTask.addEventListener('dblclick', checkCompletedTask);
    inputElement.value = '';
  });
}

createTask();

function checkCompletedTask (receivedEvent) {
  const selectedTask = receivedEvent.target;
  const classOfElement = selectedTask.className;
  (classOfElement !== 'completed') ? selectedTask.classList.add('completed') : selectedTask.classList.remove('completed');
  console.log(classOfElement);
}
