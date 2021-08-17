let addTaskBtn = document.getElementById('criar-tarefa')
let taskList = document.getElementById('lista-tarefas')
let inputTask = document.getElementById('texto-tarefa')
let deleteListBtn = document.getElementById('apaga-tudo')
let removeCompleted = document.getElementById('remover-finalizados')

removeCompleted.addEventListener('click', removeCompletedItens)
deleteListBtn.addEventListener('click', deleteTasks)
addTaskBtn.addEventListener('click', addToList)

function addToList() {
  var li = document.createElement('li')
  li.innerHTML = inputTask.value
  taskList.appendChild(li)
  inputTask.value = ''
  li.className = 'li'
  li.addEventListener('click', changeColor)
  li.addEventListener('dblclick', completeTask)
}

function changeColor(event) {
  let list = document.querySelectorAll('.li')
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('selected')) {
      list[i].classList.remove('selected')
    }
  }
  event.target.classList.toggle('selected')
}

function completeTask(event) {
  event.target.classList.toggle('completed')
}

function deleteTasks() {
  taskList.innerHTML = ''
}

function removeCompletedItens(event) {
  let list = document.querySelectorAll('.li')
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('completed')) {
      list[i].remove()
    }
  }
}