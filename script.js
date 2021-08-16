function createTask() {
  const actionButton = document.getElementById('criar-tarefa');
  const contentTarget = document.getElementById('lista-tarefas');
  const inputElement = document.getElementById('texto-tarefa');

  actionButton.addEventListener('click', function() {
    const newTask = document.createElement('li');
    newTask.innerHTML = inputElement.value;
    contentTarget.appendChild(newTask);
    newTask.addEventListener('click', changeLiColor);
    inputElement.value = '';
  })
};

createTask();

function changeLiColor (receivedEvent) {
  const element = receivedEvent.target;
  const currentColor = getComputedStyle(receivedEvent.target).getPropertyValue('background-color');
  (currentColor !== 'rgb(128, 128, 128)') ? element.style.backgroundColor = 'rgb(128, 128, 128)' : element.style.backgroundColor = '';
  console.log(element.style.backgroundColor);
}