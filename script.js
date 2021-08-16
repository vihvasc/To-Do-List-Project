const taskButton = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");
const list = document.getElementById("lista-tarefas");
const removeAllButton = document.getElementById("apaga-tudo");
const removeSelected = document.getElementById("remover-finalizados");

function addTask() {
  let textInput = inputText.value;
  let createTask = document.createElement("li");
  createTask.innerText = textInput;
  createTask.classList = "item";
  list.appendChild(createTask);
  inputText.value = ""
}
taskButton.addEventListener("click", addTask);

let itemList = document.getElementsByTagName("li");

function clickItem(event) {
  let selectedItem = event.target;

  for(let i = 0; i < itemList.length; i += 1) {
      allItens = itemList[i];
      allItens.classList.remove("selected");
  }
  selectedItem.classList.add("selected");
}
list.addEventListener("click", clickItem);

function completed(event){
  let selectedItem = event.target;
  selectedItem.classList.add("completed");
}
list.addEventListener("dblclick", completed);

function removeAll() {
  selectAll = document.querySelectorAll(".item");
  
  for (let i = 0; i < selectAll.length; i += 1) {
    selectAll[i].remove();
  }
}
removeAllButton.addEventListener("click", removeAll);

function removeFinished() {
  selectedFinished = document.querySelectorAll(".completed");

  for (let i = 0; i < selectedFinished.length; i += 1) {
      selectedFinished[i].remove();
  }
}
removeSelected.addEventListener("click", removeFinished);