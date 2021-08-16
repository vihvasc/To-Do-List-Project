window.onload = function() {
buton;
}


let input = document.getElementById("texto-tarefa")
input.value = ""

let butao = document.getElementById("criar-tarefa")
butao.addEventListener("click", buton);


function buton () {
 let listaOrdenada = document.getElementById("lista-tarefas");
 let listItem = document.createElement("li");
 listItem.innerText = input.value;
 listaOrdenada.appendChild(listItem);
 input.value = ""
}


