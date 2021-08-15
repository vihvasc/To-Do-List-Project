
let inputText = document.getElementById("texto-tarefa"); 
let ordenadeList = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");
const buttonClearAll = document.getElementById("apaga-tudo");
const buttonClearCompleted = document.getElementById("remover-finalizados");
const buttonSaveTask = document.getElementById("salvar-tarefas");
const buttonMoveUp = document.getElementById("mover-cima");
const buttonMoveDown = document.getElementById("mover-baixo");

function loadSaveList() {
  if (localStorage.getItem("lista-ordenada")) {
    ordenadeList.innerHTML = localStorage.getItem("lista-ordenada");
  }
}
loadSaveList();

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

ordenadeList.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor(event) {
  const selected = document.querySelector(".selected")
  if (!selected) {
    event.target.classList.add("selected");
  }else {
    selected.classList.remove("selected");
    event.target.classList.add("selected");
  }
}

ordenadeList.addEventListener("dblclick", completedList);
function completedList(event) {
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  }else{
    event.target.classList.add("completed");
  }
}

buttonClearAll.addEventListener("click", clearAll);
function clearAll() {
  ordenadeList.innerHTML = "";
}

buttonClearCompleted.addEventListener("click",clearCompleted)
function clearCompleted() {
  let completed = document.querySelectorAll(".completed");
  for (const key of completed) {
    ordenadeList.removeChild(key)
  }
}

buttonSaveTask.addEventListener("click", saveTasks);
function saveTasks() {
  localStorage.setItem("lista-ordenada",ordenadeList.innerHTML)
}

buttonMoveUp.addEventListener("click", moveUp)
function moveUp() {
  let textUp = document.querySelector(".selected").previousElementSibling.innerHTML;
  let textDown = document.querySelector(".selected");
  let textStorage = document.createElement("li");
  ordenadeList.appendChild(textStorage)
  textStorage.className = "deleted"

  textStorage.innerHTML = textUp;
  textUp = textDown;
  textDown = textStorage;
    
  document.querySelector(".selected").previousElementSibling.innerHTML = textUp.innerHTML;
  document.querySelector(".selected").innerHTML = textDown.innerHTML;

  ordenadeList.removeChild(textStorage)
}

buttonMoveDown.addEventListener("click", moveDown);
function moveDown() {
  
}