const buttonAddTask = document.getElementById('criar-tarefa');
buttonAddTask.addEventListener('click',addTask);
const taskList = document.getElementById('lista-tarefas');
const allTasks = document.getElementsByClassName('task');
const removeDoneButton = document.getElementById('remover-finalizados');
removeDoneButton.addEventListener('click', removeTasksDone);
const removeAllButton = document.getElementById('apaga-tudo');
removeAllButton.addEventListener('click', removeAllTasks);

function addTask(){
    let textInput = document.getElementById('texto-tarefa').value 
    let newTask = document.createElement('li')
    newTask.innerText = textInput
    newTask.addEventListener('click',changeColor)
    newTask.addEventListener('dblclick',taskDone)
    newTask.className = 'task'
    taskList.appendChild(newTask)
    document.getElementById('texto-tarefa').value = ''
}

function changeColor(event){
    let index = allTasks.length
    for(let count = 0;count < index; count += 1){
        if(window.getComputedStyle(allTasks[count]).backgroundColor === 'rgb(128, 128, 128)'){
            allTasks[count].style.backgroundColor = 'white'
        }
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}
function taskDone(event){
    let currentTask = event.target
    if(currentTask.classList.contains('completed')){
        currentTask.classList.remove('completed')
    }else{
        currentTask.classList.add('completed')
    }
}
function removeTasksDone(){
    for(let index = allTasks.length-1 ; index >= 0; index -= 1){
        if(allTasks[index].classList.contains('completed')){
            allTasks[index].remove();
        }
    }
}
function removeAllTasks(){
    for(let index = allTasks.length-1 ; index >= 0; index -= 1){
        allTasks[index].remove();
    }
}