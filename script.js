const addButton = document.getElementById('criar-tarefa')
const list = document.getElementById('lista-tarefas')
const delButton = document.getElementById('apaga-tudo')
const delCompletedButton = document.getElementById('remover-finalizados')

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
function scratchTask(e) {
  const element = e.target
  const completed = element.classList.contains('completed')

  if (completed) {
    element.classList.remove('completed')
  } else {
    element.classList.add('completed')
  }
}
function deleteAll() {
  const elementsList = list.childNodes
  const arrayWithElements = []

  for (let element of elementsList) {
    arrayWithElements.push(element)
  }

  for(let element of arrayWithElements){
    element.remove()
  }

}
function deleteCompleted () {
  const elementsList = document.querySelectorAll('.completed')
  const arrayWithElements = []
  console.log(elementsList)
  for (let element of elementsList) {
    arrayWithElements.push(element)
  }

  for (let element of arrayWithElements) {
    element.remove()
  }
}
addButton.addEventListener('click', addTask)
list.addEventListener('click', changeLiColor)
list.addEventListener('dblclick', scratchTask)
delButton.addEventListener('click', deleteAll)
delCompletedButton.addEventListener('click', deleteCompleted)