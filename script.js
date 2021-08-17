let createTask = document.querySelector('#criar-tarefa');
let textTask = document.querySelector('#texto-tarefa');
let taskList = document.querySelector('#lista-tarefas');

createTask.addEventListener('click', generateTask);

function generateTask(){
    let task = document.createElement('li');
    taskList.appendChild(task);
    task.innerHTML=textTask.value;
    textTask.value='';
}





