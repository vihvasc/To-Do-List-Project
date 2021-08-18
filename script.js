const valorDeInput = document.querySelector("#texto-tarefa");
const listaDeTarefas = document.querySelector("#lista-tarefas");
const criarElemento = document.createElement("li");
// Montar lista de elementos

function criarElementoTabela(origem){
    let criarElemento = document.createElement("li");
    criarElemento.innerText = valorDeInput.value;
    listaDeTarefas.appendChild(criarElemento);
    criarElemento.addEventListener("click", mudarCorDeFundo);
    valorDeInput.value = ""
}

// Fazer o botão adicionar o Elemento 
const botaoDeAtualização = document.querySelector("#criar-tarefa");
botaoDeAtualização.addEventListener("click", criarElementoTabela);

// Mudar a cordo fundo ao clickar no item 

const elementosDaLista = document.querySelectorAll("li");
function mudarCorDeFundo(origem){
    somenteUm();
    origem.target.classList.add("select"); 
}

// somente um selecionado

let elementoSelecionado2 = document.querySelectorAll(".select");
function somenteUm(origem){
    let elementoSelecionado = document.querySelectorAll(".select");
       if (elementoSelecionado.length != 0){
        elementoSelecionado[0].classList.remove("select");
    }
}