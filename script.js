const valorDeInput = document.querySelector("#texto-tarefa");
const listaDeTarefas = document.querySelector("#lista-tarefas");

// Montar lista de elementos

function criarElementoTabela(origem) {
    let criarElemento = document.createElement("li");
    criarElemento.innerText = valorDeInput.value;
    listaDeTarefas.appendChild(criarElemento);
    criarElemento.addEventListener("click", mudarCorDeFundo);
    criarElemento.addEventListener("dblclick", riscarElemento);
    valorDeInput.value = ""
}

// Fazer o botão adicionar o Elemento 
const botaoDeAtualização = document.querySelector("#criar-tarefa");
botaoDeAtualização.addEventListener("click", criarElementoTabela);

// Mudar a cordo fundo ao clickar no item 

function mudarCorDeFundo(origem) {
    somenteUm();
    origem.target.classList.add("select");
}

// somente um selecionado
function somenteUm(origem) {
    let elementoSelecionado = document.querySelectorAll(".select");
    if (elementoSelecionado.length != 0) {
        elementoSelecionado[0].classList.remove("select");
    }
}

// riscar elemento

function riscarElemento(origem) {
    if (origem.target.classList.contains('completed')) {
        origem.target.classList.remove('completed');
    } else {
        origem.target.classList.add('completed');
    }
}
// botao de apagar
const botaoDeApagar = document.querySelector("#apaga-tudo")

botaoDeApagar.addEventListener("click", apagarLista);

function apagarLista(origem) {
    let itensDaLista = document.querySelectorAll("li")
    console.log(itensDaLista);
    for (i = 0; i < itensDaLista.length; i += 1) {
        listaDeTarefas.removeChild(itensDaLista[i])
    }
}

// botão para remover os finalizados

const bRemoverOsFinalizados = document.querySelector("#remover-finalizados");

bRemoverOsFinalizados.addEventListener("click", removF);

function removF(origem) {
    let itensDaListaCompletado = document.querySelectorAll("li.completed");
    for (i = 0; i < itensDaListaCompletado.length; i += 1) {
        listaDeTarefas.removeChild(itensDaListaCompletado[i])
    }
}
// Salvar itens
const bSalvar = document.querySelector("#salvar-tarefas");

bSalvar.addEventListener("click", salvarTabela);

function salvarTabela(origem) {
    let listaLi = document.querySelectorAll("li");


    let salve = []
    for (let i = 0; i < listaLi.length; i += 1) {
        let inforDaLista = listaLi[i].innerText

        if (listaLi[i].classList.contains("completed")) {
            salve.push({ texto: inforDaLista, class: "completed" })
        } else {
            salve.push({ texto: inforDaLista, class: "" })
        }

    }
    localStorage.setItem("key1", JSON.stringify(salve))
}

// voltar o salve

let loadList = JSON.parse(localStorage.getItem("key1"))

if (localStorage.length > 0) {

    function loadTabela(origem) {

        for (let i = 0; i < loadList.length; i += 1) {
            let criarElemento = document.createElement("li");
            criarElemento.innerText = loadList[i].texto;

            criarElemento.addEventListener("click", mudarCorDeFundo);
            criarElemento.addEventListener("dblclick", riscarElemento);

            if (loadList[i].class) {
                criarElemento.classList.add("completed");
            }
            listaDeTarefas.appendChild(criarElemento);
        }
    }

    window.onload = loadTabela
}

// fonte https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
// botão de subir itens
function subirIten(origem) {
   
    let textoItemAtual = document.querySelector(".select")
    if (!textoItemAtual) return;
    if(textoItemAtual.previousElementSibling){
    textoItemAtual.parentNode.insertBefore(textoItemAtual, textoItemAtual.previousElementSibling);
    }
}

const bSubirItem = document.querySelector("#mover-cima");

bSubirItem.addEventListener("click", subirIten);

// botão de descer itens

function descerIten(origem){
    let textoItemAtual = document.querySelector("li.select")
    if (!textoItemAtual) return;
    if(textoItemAtual.nextElementSibling)
    textoItemAtual.parentNode.insertBefore(textoItemAtual.nextElementSibling, textoItemAtual);
}

const bDescerItem = document.querySelector("#mover-baixo");

bDescerItem.addEventListener("click", descerIten);