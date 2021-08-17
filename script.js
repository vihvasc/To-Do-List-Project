const addButton = document.getElementById('criar-tarefa')
const list = document.getElementById('lista-tarefas')
const delButton = document.getElementById('apaga-tudo')
const delCompletedButton = document.getElementById('remover-finalizados')
const saveButton = document.getElementById('salvar-tarefas')
const upButton = document.getElementById('mover-cima')
const downButton = document.getElementById('mover-baixo')

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
  for (let element of elementsList) {
    arrayWithElements.push(element)
  }

  for (let element of arrayWithElements) {
    element.remove()
  }
}


function saveTasks() {
  const tasksElements = document.getElementsByTagName('li')
  const taskList = []

  for(let i = 0; i < tasksElements.length; i += 1){
    const styles = getComputedStyle(tasksElements[i])

    const taskObj = {
      text: tasksElements[i].innerText,
      completed: styles.textDecoration.includes('line-through'),
      selected: styles.backgroundColor.includes('rgb(128, 128, 128)'),
    }
    taskList.push(taskObj)
  }
  localStorage.setItem('tasks', JSON.stringify(taskList))

}
function getSavedTasks() {
  if (localStorage.hasOwnProperty('tasks')) {
    let localStorageTasks = JSON.parse(localStorage.getItem('tasks'))
    for(obj of localStorageTasks){
      let li = document.createElement('li')
      li.innerText = obj.text
      if(obj.completed){
        li.classList.add('completed')
      }
      if(obj.selected){
        li.style.backgroundColor = 'rgb(128, 128, 128)'
        li.classList.add('selected')
      }
      list.appendChild(li)
    }
  }
}

upButton.addEventListener('click', () => {
  let selected = document.querySelector('.selected')
  if(selected){
    let previousSib = selected.previousSibling
    if (previousSib) {
      selected.parentNode.insertBefore(selected, previousSib)
    }
  }
  
})
downButton.addEventListener('click', () => {
  let selected = document.querySelector('.selected')
  if (selected){
    let nextSib = selected.nextSibling
    if(nextSib){
      selected.parentNode.insertBefore(nextSib, selected)
    }
  }
})
function makeLiObj(li) {
  const styles = getComputedStyle(li)

  const taskObj = {
    text: li.innerText,
    completed: styles.textDecoration.includes('line-through'),
    selected: styles.backgroundColor.includes('rgb(128, 128, 128)'),
  }
  return taskObj
}


getSavedTasks()

addButton.addEventListener('click', addTask)
list.addEventListener('click', changeLiColor)
list.addEventListener('dblclick', scratchTask)
delButton.addEventListener('click', deleteAll)
delCompletedButton.addEventListener('click', deleteCompleted)
saveButton.addEventListener('click', saveTasks)