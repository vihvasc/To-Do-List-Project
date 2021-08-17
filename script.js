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
listas.addEventListener("dblclick", realizado)


function pintar(event) {
resultado = event.target
resultado.classList.add("selected");
let li = document.getElementsByTagName("li")
    for(i = 0; i < li.length; i +=1){
        if(li[i].className === resultado.className && li[i] !== resultado) {
            li[i].classList.remove("selected")
        }
    }
}


function buton () {
 let listaOrdenada = document.getElementById("lista-tarefas");
 let listItem = document.createElement("li");
 listItem.innerText = input.value;
 listaOrdenada.appendChild(listItem);
 input.value = ""
}

function realizado (event) {
resultado = event.target
resultado.classList.toggle("completed")
}


