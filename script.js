const input = document.querySelector('#texto-tarefa');
const listOrdernd = document.querySelector('#lista-tarefas');
const addButtonTask = document.querySelector('#criar-tarefa');

function createTask() {
  addButtonTask.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    listOrdernd.appendChild(li);
  });
}

createTask();
