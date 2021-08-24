let inputo = document.getElementById("texto-tarefa");
let listaDeTarefas = document.getElementById("lista-tarefas");
let botao = document.getElementById("criar-tarefa");
let listaLi = document.getElementsByTagName("li");


botao.addEventListener("click", coletaInput);
botao.addEventListener("click", limpaInput);
listaDeTarefas.addEventListener("click", mudaCorFundoCinza);

function coletaInput(){
    let textoUser = inputo.value;
    let listaDoInputDoUsuario = document.createElement("li");
    listaDoInputDoUsuario.innerText = textoUser;
    listaDeTarefas.appendChild(listaDoInputDoUsuario);
}
function limpaInput(){
    inputo.value = "";
}
function mudaCorFundoCinza(mudaCor){
mudaCor.target.style.backgroundColor = "rgb(128, 128, 128)"
}
