const buttonAddTask = document.getElementById('criar-tarefa');
buttonAddTask.addEventListener('click',addTask);
const taskList = document.getElementById('lista-tarefas');
const allTasks = document.getElementsByClassName('task');

function addTask(){
    let textInput = document.getElementById('texto-tarefa').value 
    let newTask = document.createElement('li')
    newTask.innerText = textInput
    newTask.addEventListener('click',changeColor)
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