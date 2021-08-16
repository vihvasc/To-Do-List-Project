const buttonAddTask = document.getElementById('criar-tarefa');
buttonAddTask.addEventListener('click',addTask);
const taskList = document.getElementById('lista-tarefas');

function addTask(){
    let textInput = document.getElementById('texto-tarefa').value 
    let newTask = document.createElement('li')
    newTask.innerText = textInput
    taskList.appendChild(newTask)
    document.getElementById('texto-tarefa').value = ''
}