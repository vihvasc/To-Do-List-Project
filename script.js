let ordenedList = document.querySelector('#lista-tarefas');
let taskItens = document.querySelectorAll('.task-item');
let taskInput = document.querySelector('#texto-tarefa');
let addButton = document.querySelector('#criar-tarefa');



function addList(){
let task = taskInput.value
let taskList = document.createElement('li');
    taskList.innerHTML = task;
    taskList.style.backgroundColor = '';
  if (taskInput.value == ''){
    alert('Por favor adicione uma tarefa primeiro!');
  }else{
    ordenedList.appendChild(taskList);
    taskInput.value = '';
  }
}
function taskBackgroundColor(event){
  if (event.target.style.backgroundColor == ''){
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  } else if (event.target.style.backgroundColor == 'rgb(128, 128, 128)'){
    event.target.style.backgroundColor = '';
  }
}
addButton.addEventListener('click', addList)
ordenedList.addEventListener('click', taskBackgroundColor)