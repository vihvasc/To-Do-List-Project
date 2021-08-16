let ordenedList = document.querySelector('#lista-tarefas');
let taskItens = document.getElementsByClassName('task-item');
let taskInput = document.querySelector('#texto-tarefa');
let addButton = document.querySelector('#criar-tarefa');



function addList(){
let task = taskInput.value
let taskList = document.createElement('li');
  taskList.innerHTML = task;
  taskList.className = 'task-item'
  taskList.style.backgroundColor = '';
 if (taskInput.value == ''){
  alert('Por favor adicione uma tarefa primeiro!');
 }else{
  ordenedList.appendChild(taskList);
  taskInput.value = '';
 }
}

function taskHighlight(event){
      if (event.target.style.backgroundColor == ''){
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      } 
}
function clearHighlight(event){
  for (let i = 0; i < taskItens.length; i++) {
    if (taskItens[i].style.backgroundColor === 'rgb(128, 128, 128)'){
        taskItens[i].style.backgroundColor = '';
    }
  }
  taskHighlight(event)
}


addButton.addEventListener('click', addList)
ordenedList.addEventListener('click', clearHighlight)