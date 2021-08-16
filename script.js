let addTaskBtn = document.getElementById('criar-tarefa')
let taskList = document.getElementById('lista-tarefas')
let inputTask = document.getElementById('texto-tarefa')

addTaskBtn.addEventListener('click', addToList)

function addToList() {
  let li = document.createElement('li')
  li.innerHTML = inputTask.value
  taskList.appendChild(li)
  inputTask.value = ''
}