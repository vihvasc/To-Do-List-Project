let inputText = document.getElementById("texto-tarefa").value; 
let ordenadeList = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");


buttonAdd.addEventListener("click",addList);
function addList() {
  const createLi = document.createElement("li");
  createLi.innerText = inputText
  ordenadeList.appendChild(createLi);
}