const button = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

button.addEventListener('click', addNewTask)

function addNewTask() {
    let novaTarefa = document.createElement('li');
    if (inputText.value) {
        novaTarefa.innerHTML = inputText.value;
        taskList.appendChild(novaTarefa)
        inputText.value = '';
  }
}