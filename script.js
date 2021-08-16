//Exercicio 5 criar button que limpa o que foi escrito no input(id="texto-tarefa") e adiciona na lista de tarefas id="lista-tarefas"

let buttonCreatTask = document.getElementById("criar-tarefa")
let inputTextTask = document.getElementById("texto-tarefa");
let listOfTasks = document.getElementById("lista-tarefas");

buttonCreatTask.addEventListener("click",creatList);

function creatList(){
   let valueInputTask = inputTextTask.value ;
   let linha = document.createElement("li");
   linha.id = "liColor"
   linha.innerText = valueInputTask;
   listOfTasks.appendChild(linha);
   inputTextTask.value = null;
 
}


 





