let inputText = document.getElementById("texto-tarefa"); 
let ordenadeList = document.getElementById("lista-tarefas");
const buttonAdd = document.getElementById("criar-tarefa");
buttonAdd.addEventListener("click",addList);
function addList() {
  const createLi = document.createElement("li");
  createLi.innerText = inputText.value
  createLi.className = "lista"
  ordenadeList.appendChild(createLi);
  inputText.value = "";
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
  const completed = document.querySelector("completed")
  if (!completed) {
    event.target.classList.add("completed");
  }
}

