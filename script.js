
let createTask=document.querySelector("#criar-tarefa");//button
let clearAll=document.querySelector("#apaga-tudo");
let textTask=document.querySelector("#texto-tarefa");//imput
let taskList=document.querySelector("#lista-tarefas");//tag ol

createTask.addEventListener("click", generateTask);


function generateTask(){
  let task=document.createElement("li");
  task.classList.add("tarefa")
  taskList.appendChild(task);
  task.innerHTML=textTask.value;
  textTask.value="";
  
  task.addEventListener("click",paintBackgroundTask);

  clearAll.addEventListener("click", function() {
    taskList.removeChild(task);
  })
}

function paintBackgroundTask(task){
  let classTask=document.querySelectorAll(".tarefa");
  for(i=0; i<classTask.length; i+=1){
    classTask[i]=task;
    task.target.style.backgroundColor="rgb(128, 128, 128)";
  }
}
