let ordenedList = document.querySelector('#lista-tarefas');
let taskItens = document.getElementsByClassName('task-item');
let taskInput = document.querySelector('#texto-tarefa');
let addButton = document.querySelector('#criar-tarefa');
let clearButton = document.querySelector('#apaga-tudo')
let doneButton = document.querySelector('#remover-finalizados')
let saveButton = document.querySelector('#salvar-tarefas')


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
  localStorage.removeItem('tags')
  localStorage.removeItem('valores')
}
function clearDoneTasks(){
  const taskList = document.querySelectorAll('.task-item');
  for (let i = 0; i < taskList.length; i++) {
   const element = taskList[i];
    if (element.className.includes('completed')){
      ordenedList.removeChild(element);
    }
  }
}
let itemsTag = [];
let itemsValue = [];

function saveList(){
  const listItems = document.querySelectorAll('.task-item')
  const listSize = listItems.length

  for (let i = 0; i < listSize; i += 1) {
    const itemTag = listItems[i].className;
    itemsTag.push(itemTag);
    const itemValue = listItems[i].innerText;
    itemsValue.push(itemValue);
  }
  localStorage.setItem('tags', JSON.stringify(itemsTag));
  localStorage.setItem('valores', JSON.stringify(itemsValue));
}

function recoveryList(){
  if (localStorage.length > 0){
  const recoveryItensTag = JSON.parse(localStorage.getItem('tags'));
  console.log(recoveryItensTag);
  const recoveryItensValue = JSON.parse(localStorage.getItem('valores'));
  console.log(recoveryItensValue);
  const newListSize = recoveryItensTag.length
  console.log(newListSize);
  for (let i = 0; i < newListSize; i += 1) {

    const newlistItem = document.createElement('li')
    newlistItem.className = recoveryItensTag[i];
    newlistItem.innerText = recoveryItensValue[i];
    ordenedList.appendChild(newlistItem);
    
  }
} else {
  return window.onload;
}
}

window.onload = function toDoList(){
addButton.addEventListener('click', addList)
clearButton.addEventListener('click', clearList)
saveButton.addEventListener('click', saveList)
doneButton.addEventListener('click', clearDoneTasks)
ordenedList.addEventListener('click', clearHighlight)
ordenedList.addEventListener('dblclick', lineThrough)
document.addEventListener('keyup', function(e){
  if (e.key === 'Enter'){
    addButton.click();
  }
})
window.reload = recoveryList()
}