let inputo = document.getElementById("texto-tarefa");
let listaDeTarefas = document.getElementById("lista-tarefas");
let botao = document.getElementById("criar-tarefa");


botao.addEventListener("click", coletaInput);
botao.addEventListener("click", limpaInput);

function coletaInput(){
    let textoUser = inputo.value;
    let listaDoInputDoUsuario = document.createElement("li");
    listaDoInputDoUsuario.innerText = textoUser;
    listaDeTarefas.appendChild(listaDoInputDoUsuario);
}
function limpaInput(){
    inputo.value = "";
}
