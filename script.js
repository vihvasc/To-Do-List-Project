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

function scratched(object){
	object.target.classList.toggle("completed")
}
let buttonDeletAll = document.getElementById("apaga-tudo")
buttonDeletAll.addEventListener("click",deletAllList)

function deletAllList (){
	let listOfLi = document.querySelectorAll(".liColor")
	for(let cont = 0;cont < listOfLi.length;cont += 1){
		listOfLi[cont].remove();
	}
}
let removesFinalizados = document.getElementById("remover-finalizados");
removesFinalizados.addEventListener("click",removeFinalizados);

function removeFinalizados(){
	let listOfLi = document.querySelectorAll(".completed")
	for(let cont = 0;cont < listOfLi.length;cont += 1){
		listOfLi[cont].remove();

}
}
 


      






