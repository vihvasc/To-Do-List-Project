// Variáveis
const taskList = document.querySelector('#lista-tarefas')
const button = document.querySelector('#criar-tarefa')

// Event Listeners
button.addEventListener("click", addTask)

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