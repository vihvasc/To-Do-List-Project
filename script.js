const inputTypeTask = document.getElementById('texto-tarefa');
const createTaskBtn = document.getElementById('criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

//ao clicar no botão. Fonte: https://pt.stackoverflow.com/questions/341329/inserir-li-e-a-via-javascript
function createTask() {
  createTaskBtn.addEventListener('click', () => {
    const createItem = document.createElement('li');
    taskList.appendChild(createItem);
    createItem.innerText = inputTypeTask.value;
    inputTypeTask.value = '';
  });
}
createTask();