window.onload = function() {
buton;
pintar;
}


let input = document.getElementById("texto-tarefa")
input.value = ""

let butao = document.getElementById("criar-tarefa")
butao.addEventListener("click", buton);

let listas = document.getElementsByTagName("ol")[0]
listas.addEventListener("click", pintar)

function pintar(event) {
   resultado = event.target
   resultado.style.backgroundColor = "rgb(128, 128, 128)"
}

function buton () {
 let listaOrdenada = document.getElementById("lista-tarefas");
 let listItem = document.createElement("li");
 listItem.innerText = input.value;
 listaOrdenada.appendChild(listItem);
 input.value = ""
}



