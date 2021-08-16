const input = document.querySelector('#texto-tarefa');
const buttonAddTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const item = document.querySelectorAll('.list-item');

function addTask() {
  buttonAddTask.addEventListener('click', () => {
    if (input.value === '') {
      window.alert('Você precisa escrever algo');
    } else {
      const listItem = document.createElement('li');
      taskList.appendChild(listItem);
      listItem.innerHTML = input.value;
      listItem.className = 'list-item';

      listItem.addEventListener('click', (event) => {
        event.target.classList.add('selected');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
      })

      listItem.addEventListener('dblclick', (event) => {
      event.target.classList.add('completed')
      })
    }input.value = '';
  });
}
addTask();

function lineThrought() {

}
