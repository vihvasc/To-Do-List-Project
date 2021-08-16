// Variáveis
const taskList = document.querySelector('#lista-tarefas')
const button = document.querySelector('#criar-tarefa')

// Event Listeners
button.addEventListener("click", addTask)

// Funções
function addTask() {
  let value = document.querySelector('#texto-tarefa').value;
  
  if (value != '') {
    let newTask = document.createElement('li');
    newTask.innerText = value;
    taskList.appendChild(newTask);
    value = "";
  } else {
    window.alert('Você não digitou nada!')
  }
}