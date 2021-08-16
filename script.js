let ordenedList = document.querySelector('#lista-tarefas');
let taskInput = document.querySelector('#texto-tarefa');
let addButton = document.querySelector('#criar-tarefa');

function addList(){
let task = taskInput.value
let taskList = document.createElement('li')
    taskList.innerHTML = task;
  if (taskInput.value == ''){
    alert('Por favor adicione uma tarefa primeiro!')
  }else{
    ordenedList.appendChild(taskList)
    taskInput.value = '';
  }

}

addButton.addEventListener('click', addList)