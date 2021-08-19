window.onload = function () {
  CreateAndAddTask();
};

function CreateAndAddTask() {
  let button = document.querySelector('#criar-tarefa');
  let taskInput = document.querySelector('#texto-tarefa');

  button.addEventListener('click', addTask);

  function addTask() {
    let taskList = document.querySelector('#lista-tarefas');
    let task = document.createElement('li');

    task.innerText = taskInput.value;
    task.className = 'tarefa';

    taskInput.value = '';
    taskList.appendChild(task);
  }
}
