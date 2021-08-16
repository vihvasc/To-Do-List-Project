const inputText = document.getElementById("texto-tarefa");
const ordenadeList = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearCompleted = document.getElementById('remover-finalizados');
const buttonSaveTask = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
const buttonClearElement = document.getElementById('remover-selecionado');


//Puxa a lista salva no local storage
function loadSaveList() {
  if (localStorage.getItem("lista-ordenada")) {
    ordenadeList.innerHTML = localStorage.getItem("lista-ordenada");
  }
}
loadSaveList();


//Adiciona itens na lista
buttonAdd.addEventListener("click",addList);
function addList() {
  if (inputText.value !== "") {
    const createLi = document.createElement("li");
    createLi.innerText = inputText.value
    createLi.className = "lista"
    ordenadeList.appendChild(createLi);
//Limpa o campo de texto após adicionar
    inputText.value = "";
  } else {
    let placeholder = inputText.placeholder = "Lista vazia!";
  }
}
//Marca a atividade com a class selected e desmarca a anterior para ter somente uma
orderedList.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor(event) {
  const selected = document.querySelector(".selected")
  if (!selected) {
    event.target.classList.add("selected");
  }else {
    selected.classList.remove("selected");
    event.target.classList.add("selected");
  }
}
//Marca a atividade com a class completed
orderedList.addEventListener("dblclick", completedList);
function completedList(event) {
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  }else{
    event.target.classList.add("completed");
  }
}
//Limpa todas as atividades
buttonClearAll.addEventListener("click", clearAll);
function clearAll() {
  orderedList.innerHTML = "";
}
//Limpa as atividades que tem a class completed
buttonClearCompleted.addEventListener("click",clearCompleted)
function clearCompleted() {
  let completed = document.querySelectorAll(".completed");
  for (const key of completed) {
    orderedList.removeChild(key)
  }
}
//Salva a lista no local storage
buttonSaveTask.addEventListener("click", saveTasks);
function saveTasks() {
  localStorage.setItem("lista-ordenada",orderedList.innerHTML)
}
//Mover elemento para cima
buttonMoveUp.addEventListener("click", moveUp);
function moveUp() {
  let elementSelected = document.getElementsByClassName("selected")[0];
  let list = document.querySelectorAll(".lista");
  if (list[0] !== elementSelected && elementSelected) {
    let elementUp = elementSelected.previousElementSibling;
    let parentNode = elementUp.parentNode;
    parentNode.insertBefore(elementUp, elementSelected.nextSibling);
  }
}
//Mover elemento para baixo
buttonMoveDown.addEventListener("click", moveDown);
function moveDown(){
  let elementSelected = document.getElementsByClassName("selected")[0];
  let list = document.querySelectorAll(".lista");
  if (list[list.length-1] !== elementSelected && elementSelected) {
    let elementDown = elementSelected.nextElementSibling;
    let parentNode = elementSelected.parentNode;
    parentNode.insertBefore(elementDown, elementSelected);
  }
}

buttonClearElement.addEventListener("click", clearElement);
function clearElement() {
  let elementSelected = document.getElementsByClassName("selected")[0];
  ordenadeList.removeChild(elementSelected)
}
