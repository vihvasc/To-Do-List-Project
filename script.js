let buttonAdicionar = document.getElementById("criar-tarefa");
buttonAdicionar.addEventListener("click", addButton);
function addButton() {
    let entrada = document.getElementById("texto-tarefa");
    let input = entrada.value;
    let ordernedList = document.getElementById("lista-tarefas");
    let listaCriada = document.createElement("li");
    listaCriada.innerHTML = input;
    ordernedList.appendChild(listaCriada);
    document.getElementById("texto-tarefa").value = "";
}
 let buttonRemover = document.getElementById("apaga-tudo");
 buttonRemover.addEventListener("click", remButton);
 function remButton () {
     let list = document.getElementById("lista-tarefas");
     list.innerHTML = '';  
}