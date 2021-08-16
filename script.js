const addButton = document.getElementById('criar-tarefa')
const list = document.getElementById('lista-tarefas')

function addTask() {
  const inputText = document.getElementById('texto-tarefa')

  let task = document.createElement('li')
  task.innerText = inputText.value
  list.appendChild(task)

  inputText.value = ''
}
function changeLiColor(e) {
  let element = e.target
  element.style.backgroundColor = 'rgb(128, 128, 128)'
  element.classList.add('selected')
}
addButton.addEventListener('click', addTask)
list.addEventListener('click', changeLiColor)