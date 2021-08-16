let addTaskBtn = document.getElementById('criar-tarefa')
let taskList = document.getElementById('lista-tarefas')
let inputTask = document.getElementById('texto-tarefa')

addTaskBtn.addEventListener('click', addToList)

function addToList() {
  var li = document.createElement('li')
  li.innerHTML = inputTask.value
  taskList.appendChild(li)
  inputTask.value = ''
  li.className = 'li'
  li.addEventListener('click', changeColor)
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