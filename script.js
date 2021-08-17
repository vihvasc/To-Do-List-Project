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

/* CRIAR BOTÃO PARA SALVAR AS TAREFAS NO LOCAL STORAGE*/
let createButtonSave = document.createElement("button");
let buttonRemoveSave = section.appendChild(createButtonSave);
buttonRemoveSave.id = "salvar-tarefas";
buttonRemoveSave.innerText = "Salvar";

buttonRemoveSave.addEventListener("click", saveTasks);
let newArray = [];
function saveTasks(){
        let objectedList = document.querySelector("#lista-tarefas"); 
        let selectedTasks = objectedList.children;
        localStorage.clear();
        
        if(selectedTasks.length > 0){
            for(listLi of selectedTasks){
                let taskComplete;
                if(listLi.classList.contains("tasks completed")){
                    taskComplete = true;
                }
                else{
                    taskComplete = false;
                }
                newArray.push({task:listLi.innerText, completed: taskComplete});
            }
            localStorage.setItem("tasks", JSON.stringify(newArray));
        }  
    }

    window.onload = function(){
        let Storage = JSON.parse(localStorage.getItem("tasks"));
        let objected1 = document.querySelector("#lista-tarefas"); 
        if(Storage !== null){
            for (let task of Storage){
                let selectedI = document.createElement("li");
                selectedI.innerText = task.task;
                objected1.appendChild(selectedI);

                if(task.taskComplete === true){
                    console.log(selectedI);
                    objected1.lastChild.classList.add("completed");
                    objected1.lastChild.style.textDecoration = "line-through solid rgb(0,0,0)";
                    
                }

            }
        }
    }

    /* CRIAR BOTÃO PARA APAGAR A TASK SELECIONADA*/

let createButtonDeleteSelected = document.createElement("button");
let buttonDeleteSelected = section.appendChild(createButtonDeleteSelected);
buttonDeleteSelected.id = "remover-selecionado";
buttonDeleteSelected.innerText = "Remover selecionado";

buttonDeleteSelected.addEventListener("click", removeSelectedTasks);

function removeSelectedTasks(){
    let tasksSelected = document.getElementsByClassName("tasks");
    for(let index5 = 0 ; index5 < tasksSelected.length ; index5 +=1){
        if(tasksSelected[index5].style.backgroundColor === "rgb(128, 128, 128)"){
            tasksSelected[index5].remove();
        }
        

    }

}



