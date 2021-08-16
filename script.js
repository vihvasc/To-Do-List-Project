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
  let selected = document.querySelector('.selected')

  if (selected) {
    selected.classList.remove('selected')
    selected.style.backgroundColor = ''

  }
  element.classList.add('selected')
  element.style.backgroundColor = 'rgb(128, 128, 128)'
}
addButton.addEventListener('click', addTask)
list.addEventListener('click', changeLiColor)