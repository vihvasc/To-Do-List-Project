const input = document.querySelector('#texto-tarefa');
const buttonAddTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const listItem = document.getElementsByClassName('list-item');

function addTask() {
  buttonAddTask.addEventListener('click', () => {
    if (input.value === '') {
      window.alert('Você precisa escrever algo');
    } else {
      const listItem = document.createElement('li');
     taskList.appendChild(listItem);
      listItem.innerHTML = input.value;
      listItem.className = 'list-item';
    }input.value = '';

  });
}
addTask();

