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
    taskList.appendChild(newTask);
    input.value = "";
  } else {
    window.alert('Você não digitou nada!')
  }
}