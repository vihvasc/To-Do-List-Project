createEvent();
//função que pega o valor digitado no input
function getValue(){
  const input = document.getElementById("texto-tarefa")
  let tarefa = input.value;
  return tarefa;
}

//função que adiciona os valores do input à uma lista
function addValue(){

  let ol = document.getElementById("lista-tarefas");
  let list = document.createElement("li");
  list.classList.add('item-list');
  list.innerText = getValue();
  ol.appendChild(list);
  
  const input = document.getElementById("texto-tarefa");
  input.value = '';

  createListEvents();
}

// função para mudar a cor dos items da lista
function changeColor (){
  let items = document.querySelectorAll("li");
  for(let i = 0; i < items.length; i ++){
    items[i].style.backgroundColor = "white";
  }
  let selected = document.querySelector(".selected");
  selected.style.backgroundColor = "rgb(128, 128, 128)";
 }

 //função que adiciona decoração no texto
 function addStripe(index) {
  let items = document.querySelectorAll("li");
  items[index].style.textDecoration = "line-through";
  items[index].classList.add("completed");
 }

 // função que remove a decoração do texto
 function removeStripe(index){
  let items = document.querySelectorAll("li")
  items[index].style.textDecoration = "none";
  items[index].classList.remove("completed");

 }
 // função que verifica se um item tem a classe completed
 function verifyCompleted(){
  let items = document.querySelectorAll("li");
  for(let i = 0; i < items.length; i ++){
    if(items[i] === event.target){
      if(items[i].classList.contains("completed")){
        removeStripe(i);
        break;
      } else {
        addStripe(i);
        break;
      }
    }
  }
 }
 //função que apaga todos os items da lista
 function clearList (){
   let items = document.querySelectorAll("li");
   for(let key of items){
     key.remove();
   }
 }

 // função que apaga items riscados
 function clearCompleted(){
   let items = document.querySelectorAll(".completed");
   for(let key of items){
     key.remove();
   }
 }

//  //função para salvar lista de tarefas
//  function saveList(){
//    var todoList = document.querySelectorAll("li");
//    console.log(todoList);
//  }

//função para remover item selcionado
function removeSelected(){
  let selected = document.querySelector(".selected");
  selected.remove();
}

// função para criar eventos gerais
function createEvent(){
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addValue);

  const clearbutton = document.getElementById("apaga-tudo");
  clearbutton.addEventListener('click', clearList);

  const clearCompletedList = document.getElementById("remover-finalizados");
  clearCompletedList.addEventListener('click', clearCompleted);

  // const saveItems = document.getElementById("salvar-tarefas");
  // saveItems.addEventListener("click", saveList);

  const removeSelectedButton = document.getElementById("remover-selecionado");
  removeSelectedButton.addEventListener('click', removeSelected);
}

// função para selecionar um elemento da lista
function selectElement(){
  const items = document.querySelectorAll('li');
  for(let i = 0; i < items.length; i ++){
    if(items[i] === event.target){
      items[i].classList.add("selected");
    } else {
      items[i].classList.remove("selected");
    }
  }
  changeColor();
}

//função para criar eventos de clique e double click em items da lista
function createListEvents(){
  const listItem = document.querySelectorAll(".item-list");
  for(let i = 0; i < listItem.length; i ++){
    listItem[i].addEventListener('click', selectElement);
  }

  for(let i = 0; i < listItem.length; i ++){
    listItem[i].addEventListener('dblclick', verifyCompleted);
  }
}

