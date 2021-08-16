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
  const element = e.target
  const selected = document.querySelector('.selected')

  if (selected) {
    selected.style.backgroundColor = ''
    selected.classList.remove('selected')
  }
  element.classList.add('selected')
  element.style.backgroundColor = 'rgb(128, 128, 128)'
}
function scratchTask(e){
  const element = e.target
  const completed = element.classList.contains('completed')

  if(completed){
    element.classList.remove('completed')
  } else {
    element.classList.add('completed')
  }
}
addButton.addEventListener('click', addTask)
list.addEventListener('click', changeLiColor)
list.addEventListener('dblclick', scratchTask)