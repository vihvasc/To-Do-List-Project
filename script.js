let adiciona = document.querySelector('#criar-tarefa')
adiciona.addEventListener('click', adicionaItem)
function adicionaItem() {
  let item = document.querySelector('#texto-tarefa').value
  let ol = document.querySelector('#lista-tarefas')
  let li = document.createElement("li")
  li.innerText = item
  ol.appendChild(li)
  document.querySelector('#texto-tarefa').value = ''
}