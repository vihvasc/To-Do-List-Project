const addButton = document.getElementById('criar-tarefa')
const inputText = document.getElementById('texto-tarefa')


function addTask() {
  const list = document.getElementById('lista-tarefas')

  let task = document.createElement('li')
  task.innerText = inputText.value
  list.appendChild(task)

  inputText.value = ''
}

addButton.addEventListener('click', addTask)