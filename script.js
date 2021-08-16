window.onload = function(){
  let botaoCriarTarefa;
}

let paragrafo = document.getElementById("funcionamento");
let input = document.getElementById("texto-tarefa");
let listaOrdenada = document.getElementById("lista-tarefas");
let botaoCriarTarefa = document.getElementById("criar-tarefa");

//texto do input aparece na lista ordenada.
//text do input é apagado.
// a adição de elementos será feita mais de uma vez. Será checado se o item anterior não foi apagado
botaoCriarTarefa.addEventListener("click", createTask);

function createTask(event){
  let newTask = document.createElement("li");
  newTask.innerHTML = input.value;  
  newTask.setAttribute("id", input.value);
  input.value = "";
  listaOrdenada.appendChild(newTask);
};