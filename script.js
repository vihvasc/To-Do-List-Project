verifyStorage();
function verifyStorage(){
 let length = window.localStorage.getItem('tamanho');
 if(length !== 0){
   restoreList();
 }

}
function addClasses(){
  let tamanho = window.localStorage.getItem('tamanho');
  let list = document.querySelectorAll('li');
  for(let i = 0; i < tamanho; i ++){
    let name = `list${i}Class`;
    let classe = window.localStorage.getItem(name);
    console.log(classe);
    list[i].className = classe;
  }
}

function restoreList(){
  let ol = document.getElementById('lista-tarefas');
  let tamanho = window.localStorage.getItem('tamanho');
  
  for(let i = 0; i < tamanho; i ++){
    let name = `list${i}`;
    let item = window.localStorage.getItem(name);
    let li = document.createElement('li');
    li.innerText = item;
    ol.appendChild(li);
  }
  addClasses();
  createListEvents();
}
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

 //função para salvar lista de tarefas
 function saveList(){
  let length = 0;
  let list = document.querySelectorAll('li');
  for(let i = 0; i < list.length; i ++){
    let name = `list${i}`;
    let nameClass = `list${i}Class`;
    let listClass = list[i].classList;
    console.log(listClass);
    let text = list[i].innerText;
    window.localStorage.setItem(name, text)
    window.localStorage.setItem(nameClass, listClass);
    length ++;
  }
  window.localStorage.setItem('tamanho', length);
 }

//função para remover item selcionado
function removeSelected(){
  let selected = document.querySelector(".selected");
  selected.remove();
}

//função para mudar item selecionado
function changesSelected(selected, changed){
  let items = document.querySelectorAll("li");
  for(let key of items){
    if(key === selected){
      key.classList.remove("selected");
    }
    if(key === changed){
      key.classList.add("selected");
    }
  }
}

//função para encontrar a posição
function getPosition(){
  const list = document.querySelectorAll("li");
  const selected = document.querySelector(".selected");
  let positionPreviousLater = [];

  for(let i = 0; i < list.length; i ++){
    if(list[i] === selected){
      positionPreviousLater[0] = i;
      positionPreviousLater[1] = list[i - 1];
      positionPreviousLater[2] = list[i + 1];
      break;
    }
  }
  console.log(positionPreviousLater);
  return positionPreviousLater;
}

//função para mover item para cima
function moveUp(){
  const list = document.querySelectorAll("li");
  let selected = document.querySelector(".selected");
  const selectedText = selected.innerText;
  console.log(selectedText);
  let positionPrevious = getPosition();
  let positionPreviousText = positionPrevious[1].innerText

  for(let i = 0; i < list.length; i ++){

    if(i === positionPrevious[0] - 1){
      list[i].innerText = selectedText;
      list[i + 1 ].innerText = positionPreviousText;
    } 
  }

  changesSelected(selected, positionPrevious[1]);
  changeColor();
}

//função para mover para baixo
function moveDown(){
  const list = document.querySelectorAll("li");
  let selected = document.querySelector(".selected");
  console.log(selected);
  let positionLater = getPosition();

  let selectedText = selected.innerText;
  let positionLaterText = positionLater[2].innerText;

  for(let i = 0; i < list.length; i ++){

    if(i === positionLater[0] + 1){
      list[i].innerText = selectedText;
      list[i - 1].innerText = positionLaterText;
    } 
  }
  changesSelected(selected, positionLater[2]);
  changeColor();
}

//verifica se algum item está selecionado ao clicar no botão mover-baixo
function verifySelectedDown(){
  let selected = document.querySelector(".selected");
  let listItems = document.querySelectorAll("li");
  let count = 0;
  for(let key of listItems){
    count += 1;
  }
  console.log(count);
  if(selected !== null && selected !== listItems[count-1]) {
    moveDown();
  }
}

//verifica se algum item está selecionado ao clicar no botão mover-cima
function verifySelectedUp(){
  let selected = document.querySelector(".selected");
  let listItems = document.querySelectorAll("li");
    if(selected !== null && selected !== listItems[0]){
      moveUp();
    } 
}

// função para criar eventos gerais
function createEvent(){
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addValue);

  const clearbutton = document.getElementById("apaga-tudo");
  clearbutton.addEventListener('click', clearList);

  const clearCompletedList = document.getElementById("remover-finalizados");
  clearCompletedList.addEventListener('click', clearCompleted);

  const saveItems = document.getElementById("salvar-tarefas");
  saveItems.addEventListener("click", saveList);

  const moveUpButton = document.getElementById("mover-cima");
  moveUpButton.addEventListener('click', verifySelectedUp);

  const moveDownButton = document.getElementById("mover-baixo");
  moveDownButton.addEventListener('click', verifySelectedDown);

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
  const listItem = document.querySelectorAll("li");
  for(let i = 0; i < listItem.length; i ++){
    listItem[i].addEventListener('click', selectElement);
  }

  for(let i = 0; i < listItem.length; i ++){
    listItem[i].addEventListener('dblclick', verifyCompleted);
  }
}

