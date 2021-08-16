const taskButton = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");
const list = document.getElementById("lista-tarefas");

function addTask() {
  let textInput = inputText.value;
  let createTask = document.createElement("li");
  createTask.innerText = textInput;
  list.appendChild(createTask);
  inputText.value = ""
}
taskButton.addEventListener("click", addTask);

let itemList = document.getElementsByTagName("li");

function clickItem(event) {
  let selectedItem = event.target;

  for(i = 0; i < itemList.length; i += 1) {
      allItens = itemList[i];
      allItens.classList.remove("selected");
  }
  selectedItem.classList.add("selected");
}
list.addEventListener("click", clickItem);