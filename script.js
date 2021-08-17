
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
    }

}

function selectItem(event){
    let listItem = document.querySelector(".selected");
    console.log(listItem);
    if(listItem != null){
        listItem.classList.remove("selected");
    }
    event.target.classList.add("selected");
}




