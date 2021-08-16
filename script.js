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
let taskList = document.querySelector("#lista-tarefas");
let listLi = document.createElement("li");
listLi.innerHTML = textBox.value;
taskList.appendChild(listLi);
textBox.value = newTextBox; 


    
}



