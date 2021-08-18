const valorDeInput = document.querySelector("#texto-tarefa");
const listaDeTarefas = document.querySelector("#lista-tarefas");
const criarElemento = document.createElement("li");
// Montar lista de elementos

function criarElementoTabela(origem){
    let criarElemento = document.createElement("li");
    criarElemento.innerText = valorDeInput.value;
    listaDeTarefas.appendChild(criarElemento);
    valorDeInput.value = ""

}

// Fazer o botão adicionar o Elemento 

const botaoDeAtualização = document.querySelector("#criar-tarefa");

botaoDeAtualização.addEventListener("click", criarElementoTabela);