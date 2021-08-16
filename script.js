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
    let listTarget = event.target;
    clearBackgroundClick()
    event.target.classList.add("selected");
}

function clearBackgroundClick (){
    let listClear = document.querySelectorAll(".selected");
    for (let index = 0; index < listClear.length; index += 1){
        listClear[index].classList.remove("selected");
    }
}