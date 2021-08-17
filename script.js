const lista = document.querySelector("#lista-tarefas")
const inputText = document.querySelector("#texto-tarefa")
const botao = document.querySelector("#criar-tarefa")



// adiciona linha cinza (Requsito 7)
function linhaPintadaCinza(event) {
    let linha = document.querySelectorAll("li")
    for(let index = 0; index < linha.length; index += 1) {
       linha[index].classList.remove("selected"); //(Requisito 8)
    }
    event.target.classList.add("selected");
}
// adiciona riscado na linha (Requisito 9)
function riscarLinhaCompletada(event) {
    if(event.target.classList.contains("completed")) {
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed")
    }
}


// adiciona o texto (input) a lista (Ol) (Requisito 5)

function adicinaInputTexto() {
   const linha = document.createElement("li")
   lista.appendChild(linha)
   const texto = document.createTextNode(inputText.value);
   linha.appendChild(texto);
   texto.value = "";
   linha.addEventListener("click", linhaPintadaCinza) //(Requisito 7)
   linha.addEventListener("click", riscarLinhaCompletada) //(Requisito 9)
}

botao.addEventListener("click", adicinaInputTexto);