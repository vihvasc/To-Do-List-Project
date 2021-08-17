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
   linha.addEventListener("click",addClassSelected)
	 linha.addEventListener("dblclick",scratched)
	
	function addClassSelected (object){      
  let getSelected = document.querySelector(".selected")
	object.target.classList.toggle("selected")
  
	if(getSelected){
	getSelected.classList.remove("selected");		
	}   
  }   
	
}
//text-decoration: line-through;
function scratched(object){
	object.target.classList.toggle("completed")
	
}

 


      






