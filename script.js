const mainParagraph = document.getElementById("funcionamento")
const textAssignment = document.getElementById("texto-tarefa");
const buttonAssignment = document.getElementById("criar-tarefa");
const mainList = document.getElementById("lista-tarefas");

function createTask (event){
    let taskList = document.createElement("li");
    taskList.innerHTML = textAssignment.value;
    taskList.addEventListener("click", clickBackground)
    mainList.appendChild(taskList)
    textAssignment.value = "";
}
buttonAssignment.addEventListener("click", createTask)

function clickBackground (event){
    let colorBackground = "rgb(128, 128, 128)";
    let listTarget = event.target;
    listTarget.style.background = colorBackground;
}
