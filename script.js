const buttonAddTask = document.getElementById('criar-tarefa');
buttonAddTask.addEventListener('click',addTask);
const taskList = document.getElementById('lista-tarefas');

function addTask(){
    let textInput = document.getElementById('texto-tarefa').value 
    let newTask = document.createElement('li')
    newTask.innerText = textInput
    newTask.addEventListener('click',changeColor)
    taskList.appendChild(newTask)
    document.getElementById('texto-tarefa').value = ''
}

function changeColor(event){
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    console.log('oi')
}