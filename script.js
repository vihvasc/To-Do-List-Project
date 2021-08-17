let ordenedList = document.querySelector('#lista-tarefas');
let taskItens = document.getElementsByClassName('task-item');
let taskInput = document.querySelector('#texto-tarefa');
let addButton = document.querySelector('#criar-tarefa');
let clearButton = document.querySelector('#apaga-tudo')



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
function lineThrough(event){
  if (event.target.style.textDecoration == ''){
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    event.target.className = 'task-item completed'
  } 
  else if (event.target.style.textDecoration == 'line-through solid rgb(0, 0, 0)'){
    event.target.style.textDecoration = '';
    event.target.className = 'task-item'
  } 
}
function clearList(){
  ordenedList.innerHTML = '';
}

addButton.addEventListener('click', addList)
clearButton.addEventListener('click', clearList)
ordenedList.addEventListener('click', clearHighlight)
ordenedList.addEventListener('dblclick', lineThrough)
document.addEventListener('keyup', function(e){
  if (e.key === 'Enter'){
    addButton.click();
  }
})