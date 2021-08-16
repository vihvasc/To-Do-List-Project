// utils

function addEventListenerToArray(array, eventType, func) {
  for (let element of array) {
    element.addEventListener(eventType, func);
  };
};

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
  for (let item of listItens) {
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

//10

function wipeAllTasks() {
  let tasksList = document.getElementById("lista-tarefas");
  tasksList.innerHTML = "";
};

// 11

function wipeCompletedTasks() {
  let completedTasks = document.getElementsByClassName("completed");
  let completedLength = completedTasks.length;
  for (let index = 0; index < completedLength; index += 1) {
    completedTasks[0].remove();
  };
};

//12 

function saveTasks() {
  let tasksList = document.getElementById("lista-tarefas");
  let tasksToSave = tasksList.innerHTML;
  localStorage.setItem("listItens", tasksToSave);
}

function loadSavedTasks() {
  let tasksList = document.getElementById("lista-tarefas");
  let savedTasks = localStorage.getItem("listItens");
  if (savedTasks) {
    tasksList.innerHTML = savedTasks;
    let tasksItens = document.getElementsByClassName("list-item");
    for (let item of tasksItens) {
      item.addEventListener("click", changeListItemBackgroundColor);
      item.addEventListener("dblclick", completeTask);
    };
  };
};

function moveTaskUp() {
  let selected = document.querySelector(".selected-item");
  if (selected) {
    let previousTask = selected.previousElementSibling;
    if (previousTask) {
      let selectedHtml = selected.innerHTML;
      let previousTaskHtml = previousTask.innerHTML;
      selected.innerHTML = previousTaskHtml;
      previousTask.innerHTML = selectedHtml;
      toggleClass(selected, "selected-item");
      toggleClass(previousTask, "selected-item");
    };
  };
};

function moveTaskDown() {
  let selected = document.querySelector(".selected-item");
  if (selected) {
    let nextTask = selected.nextElementSibling;
    if (nextTask) {
      let selectedHtml = selected.innerHTML;
      let nextTaskHtml = nextTask.innerHTML;
      selected.innerHTML = nextTaskHtml;
      nextTask.innerHTML = selectedHtml;
      toggleClass(selected, "selected-item");
      toggleClass(nextTask, "selected-item");
    };
  };
};

function removeSelectedTask() {
  let task = document.querySelector(".selected-item");
  if (task) {
    task.remove();
  };
};

function buttonsStart() {
  let taskButton = document.getElementById("criar-tarefa");
  taskButton.addEventListener("click", addTaskToList);
  let wipeAllButton = document.getElementById("apaga-tudo");
  wipeAllButton.addEventListener("click", wipeAllTasks)
  let wipeCompletedTasksButton = document.getElementById("remover-finalizados");
  wipeCompletedTasksButton.addEventListener("click", wipeCompletedTasks)
  let saveTasksButton = document.getElementById("salvar-tarefas");
  saveTasksButton.addEventListener("click", saveTasks);
  let moveTaskUpButton = document.getElementById("mover-cima");
  moveTaskUpButton.addEventListener("click", moveTaskUp);
  let moveTaskDownButton = document.getElementById("mover-baixo");
  moveTaskDownButton.addEventListener("click", moveTaskDown);
  let removeSelectedButton = document.getElementById("remover-selecionado");
  removeSelectedButton.addEventListener("click", removeSelectedTask)
};

window.onload = function () {
  buttonsStart();
  loadSavedTasks();
};