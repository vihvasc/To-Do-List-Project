/*BOTÃO-ADICIONA-TAREFA*/
let section = document.getElementById("section-1");
let createButton = document.createElement("button");
let button = section.appendChild(createButton);
button.id = "criar-tarefa";
button.innerText = "Adicionar";

/*EVENTO-CLICK-BOTÃO-DESAPARECER INPUT-ADICIONAR NA LISTA A TAREFA*/
let button1 = document.getElementById("criar-tarefa");
button1.addEventListener("click",addTasksItem);

let newTextBox = "";
function addTasksItem (){
let textBox = document.getElementById("texto-tarefa");
let taskList = document.getElementById("lista-tarefas");
let listLi = document.createElement("li");
listLi.className = "tasks";
listLi.innerHTML = textBox.value;
taskList.appendChild(listLi);
textBox.value = newTextBox;

/*EVENTO-CLICK NA TAREFA-MUDAR BACKGROUND COLOR*/
listLi.addEventListener("click",newColor1);

function newColor1 (event){
    let classList = document.getElementsByClassName("tasks");
    let newColor = "rgb(128, 128, 128)";
    for (let index =0 ; index < classList.length ; index += 1){
        classList[index].style.backgroundColor = "";
    }
    event.target.style.backgroundColor = newColor;
   
}
/*EVENTO-CLICK NA TAREFA- COLOCA TAREFA RISCADA*/
listLi.addEventListener("dblclick",completedTask);
    
        function completedTask(event){
            const completeTask = event.target;
            if (completeTask.className === "tasks completed"){
                completeTask.classList.remove("completed");
            }
            else{
                completeTask.classList.add("completed");
            }
                         
}
   
}
/*CRIAR BOTÃO E EVENTO PARA REMOVER TODAS AS TAREFAS*/
let createButtonRemove = document.createElement("button");
let buttonRemove = section.appendChild(createButtonRemove);
buttonRemove.id = "apaga-tudo";
buttonRemove.innerText = "Remover tudo";

buttonRemove.addEventListener("click", removeAllTasks);

function removeAllTasks(){
    let allTasks = document.querySelectorAll(".tasks");
    for(let index = 0 ; index < allTasks.length ; index += 1){
        allTasks[index].remove();
    }
}


/* CRIAR BOTÃO PARA REMOVER TAREFAS CONCLUIDAS*/
let createButtonRemoveCompleted = document.createElement("button");
let buttonRemoveCompleted = section.appendChild(createButtonRemoveCompleted);
buttonRemoveCompleted.id = "remover-finalizados";
buttonRemoveCompleted.innerText = "Remover concluídas";

buttonRemoveCompleted.addEventListener("click", removeCompletedTasks);

function removeCompletedTasks(){
    let allTasks1 = document.querySelectorAll(".tasks");
    for(let index1 = 0 ; index1 < allTasks1.length ; index1 += 1){
        if(allTasks1[index1].className === "tasks completed"){
            allTasks1[index1].remove();
        }
        
    }
}
