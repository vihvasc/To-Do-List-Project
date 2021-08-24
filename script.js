const inputo = document.getElementById("texto-tarefa");
const listaDeTarefas = document.getElementById("lista-tarefas");
const botao = document.getElementById("criar-tarefa");
const listaLi = document.getElementsByTagName("li");

botao.addEventListener("click", coletaInput);
botao.addEventListener("click", limpaInput);
listaDeTarefas.addEventListener("click", mudaCorFundoCinza);
listaDeTarefas.addEventListener("dblclick", riscador);

function coletaInput(){
    const textoUser = inputo.value;
    const listaDoInputDoUsuario = document.createElement("li");
    listaDoInputDoUsuario.innerText = textoUser;
    listaDeTarefas.appendChild(listaDoInputDoUsuario);
}
function limpaInput(){
    inputo.value = "";
}
function mudaCorFundoCinza(mudaCor){
    limpaCor();
    mudaCor.target.style.backgroundColor = "rgb(128, 128, 128)";
}
function limpaCor(){
    for (let i = 0; i < listaLi.length; i += 1){
        listaLi[i].style.backgroundColor = "";
    }
}
function riscador (event){
    const elemento = event.target;
    if (elemento.className === "completed"){
        elemento.classList.remove("completed")
        }
    else{
        event.target.classList.add('completed');
    }
    }
// codigo feito com a ajuda de Denis Jonathan - Turma 15 - Tribo B