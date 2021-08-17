
let createTask=document.querySelector("#criar-tarefa");//button
let textTask=document.querySelector("#texto-tarefa");//imput
let taskList=document.querySelector("#lista-tarefas");//tag ol

createTask.addEventListener("click", generateTask);

function generateTask(){
  let task=document.createElement("li");
  taskList.appendChild(task);
  task.innerHTML=textTask.value;
  textTask.value="";
}

