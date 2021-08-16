//Exercicio 5 criar button que limpa o que foi escrito no input(id="texto-tarefa") e adiciona na lista de tarefas id="lista-tarefas"

let buttonCreatTask = document.getElementById("criar-tarefa")
let inputTextTask = document.getElementById("texto-tarefa");
let listOfTasks = document.getElementById("lista-tarefas");

buttonCreatTask.addEventListener("click",creatList);

function creatList(){
   let valueInputTask = inputTextTask.value ;
   let linha = document.createElement("li");
   linha.className = ("liColor");
   linha.innerText = valueInputTask;
   listOfTasks.appendChild(linha);
   inputTextTask.value = null;
  linha.addEventListener("click",mudarDeCor)
 function mudarDeCor (){      
  linha.style.backgroundColor = "rgb(128, 128, 128)";
  /*let liSelected = document.getElementsByClassName("liColor");
   for(let cont = 0;cont < liSelected.length;cont += 1){
       liSelected[cont].eventt */
   }    
  }
 


      






