
let button = document.getElementById("criar-tarefa");
let list = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");

button.addEventListener("click",addList);

function addList(){
    let listItem = document.createElement("li");
    let text = input.value;
    console.log(text);
    listItem.innerText = text;
    list.appendChild(listItem);
    console.log(listItem);
    input.value = "";
}

