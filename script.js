// Variáveis
const taskList = document.querySelector('#lista-tarefas')
const createButton = document.querySelector('#criar-tarefa')
const clearButton = document.querySelector('#apaga-tudo')
const removeButton = document.querySelector('#remover-finalizados')

// Event Listeners
createButton.addEventListener("click", addTask)
clearButton.addEventListener("click", clearList)
removeButton.addEventListener("click", removeFinishedTasks)

// Funções
function addTask() {
  let input = document.querySelector('#texto-tarefa');
  
  if (input.value != '') {
    let newTask = document.createElement('li');
    newTask.innerText = input.value;
    newTask.addEventListener("click", highlightTask);
    newTask.addEventListener("dblclick", finishTask);
    taskList.appendChild(newTask);
    input.value = "";
  } else {
    window.alert('Você não digitou nada!')
  }
}

function highlightTask(event) {
  let selected = document.querySelectorAll('.selected');

  if (!event.target.classList.contains('selected')) {
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected')
    }
    event.target.classList.add('selected');
  } else {
    event.target.classList.remove('selected');
  }
}

function finishTask(event) {
  if (!event.target.classList.contains('completed')) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function clearList() {
  let list = document.querySelectorAll('#lista-tarefas li');

  for (let index = 0; index < list.length; index += 1) {
    list[index].remove();
  }
}

function removeFinishedTasks() {
  let list = document.querySelectorAll('.completed');

  for (let index = 0; index < list.length; index += 1) {
    list[index].remove();
  }
}