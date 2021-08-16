function removeInputText(input) {
  input.value = "";
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

// 7 & 8

function changeListItemBackgroundColor(event) {
  let selectedListItem = event.target;
  let listItens = document.getElementsByClassName("list-item");
  for (item of listItens) {
    if (item === selectedListItem) {
      toggleClass(item, "selected-item");
    } else if (item.classList.contains("selected-item")) {
      toggleClass(item, "selected-item");
    }; 
  };
};

// 9

function completeTask(event) {
  let task = event.target;
  toggleClass(task, "completed");
};

// 5

function addTaskToList() {
  let input = document.getElementById("texto-tarefa");
  let taskList = document.getElementById("lista-tarefas");
  let task = input.value;
  let listItem = document.createElement("li");
  listItem.innerText = task;
  listItem.className = "list-item";
  taskList.appendChild(listItem);
  listItem.addEventListener("click", changeListItemBackgroundColor);
  listItem.addEventListener("dblclick", completeTask);
  removeInputText(input);
};

function addEventListenerToArray(array, eventType, func) {
  for (let element of array) {
    element.addEventListener(eventType, func);
  };
};

function siteStart() {
  let taskButton = document.getElementById("criar-tarefa");
  taskButton.addEventListener("click", addTaskToList);
};

window.onload = function () {
  siteStart();
};