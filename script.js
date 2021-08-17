const lista = document.querySelector("#lista-tarefas")
const inputText = document.querySelector("#texto-tarefa")
const botao = document.querySelector("#criar-tarefa")

// adiciona o texto (input) a lista (Ol) (Requisito 5)

function adicinaInputTexto() {
   const linha = document.createElement("li")
   lista.appendChild(linha)
   const texto = document.createTextNode(inputText.value);
   linha.appendChild(texto);
   texto.value = "";
}

botao.addEventListener("click", adicinaInputTexto);