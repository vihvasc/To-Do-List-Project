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