function removeInputText(input) {
  input.value = "";
}

function addTaskToList() {
  let input = document.getElementById("texto-tarefa");
  let taskList = document.getElementById("lista-tarefas");
  let task = input.value;
  let listItem = document.createElement("li");
  listItem.innerText = task;
  taskList.appendChild(listItem);
  removeInputText(input);
};

function siteStart() {
  let taskButton = document.getElementById("criar-tarefa");
  taskButton.addEventListener("click", addTaskToList);
};

window.onload = function () {
  siteStart();
};