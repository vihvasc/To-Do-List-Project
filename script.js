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

function createTask(){
  let newTask = document.createElement("li");
  newTask.innerHTML = input.value;  
//   newTask.setAttribute("id", input.value);
  newTask.addEventListener("click", grayColor);
  newTask.addEventListener("dblclick", taskDone);
  input.value = "";
  listaOrdenada.appendChild(newTask);
};


function grayColor(event){
  listaOrdenada = document.getElementById("lista-tarefas").children;
  for (let i = 0; i < listaOrdenada.length; i += 1){
    let task = listaOrdenada[i];
    if (window.getComputedStyle(task).backgroundColor === "rgb(128, 128, 128)"){
      task.style.backgroundColor = "white";
    };    
  };
  event.target.style.backgroundColor = "rgb(128,128,128)"
};

function taskDone(event){
  if(event.target.classList.contains("completed")){
    event.target.classList.remove("completed");
  } else {
    event.target.classList.add("completed");
  }
};

