
let button = document.getElementById("criar-tarefa");
let list = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");

button.addEventListener("click",addList,);

function addList(){
    let listItem = document.createElement("li");
    let text = input.value;
    listItem.innerText = text;
    list.appendChild(listItem);
    input.value = "";
    addClikList();
}

function addClikList(){
    let listItem = document.querySelectorAll("li");
    for(let index = 0; index < listItem.length; index += 1){
        listItem[index].addEventListener("click", selectItem); 
        listItem[index].addEventListener("dblclick", taskCheck); 
        listItem[index].addEventListener("dblclick", removeTaskCheck);
    }

}

function selectItem(event){
    let listItem = document.querySelector(".selected");
    if(listItem){
        listItem.classList.remove("selected");
    }
    event.target.classList.add("selected");
}

function taskCheck(event){
    
    console.log(event);
}

function removeTaskCheck(event){
    let listItem = document.querySelector(".completed");
    console.log(listItem)
    if(listItem === null){
        event.target.classList.add("completed");
    }
    if(listItem){
        event.target.classList.remove("completed");
    }
}    






