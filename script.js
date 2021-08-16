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

// função para criar eventos 
function createEvent(){
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addValue);
}

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

function createListEvents(){
  const listItem = document.querySelectorAll(".item-list");
  for(let i = 0; i < listItem.length; i ++){
    listItem[i].addEventListener('click', selectElement);
  }
}
