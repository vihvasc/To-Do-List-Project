const mainParagraph = document.getElementById("funcionamento")
const textAssignment = document.getElementById("texto-tarefa");
const buttonAssignment = document.getElementById("criar-tarefa");
const buttonClear = document.getElementById("apaga-tudo");
const buttonClearListCompleted = document.getElementById("remover-finalizados")
const buttonClearListSelect = document.getElementById("remover-selecionado")
const mainList = document.getElementById("lista-tarefas");

function createTask (){
    let taskList = document.createElement("li");
    taskList.innerHTML = textAssignment.value;
    taskList.addEventListener("click", clickBackground);
    taskList.addEventListener("dblclick", listStrip);
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

function listStrip (event){
    let listTarget = event.target;
    listTarget.classList.toggle("completed");
}

function clearListAll (){
    mainList.innerHTML = "";
}
buttonClear.addEventListener("click", clearListAll)

function removeCompletion (){
    let listComplete = document.querySelectorAll(".completed");
    for (let index = 0; index < listComplete.length; index += 1){
        listComplete[index].remove();
    }
}
buttonClearListCompleted.addEventListener("click", removeCompletion)

function removeSelects (){
    let listSelect = document.querySelectorAll(".selected");
    for (let index = 0; index < listSelect.length; index += 1){
        listSelect[index].remove();
    }
}
buttonClearListSelect.addEventListener("click", removeSelects)