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
    
}
