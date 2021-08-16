let adiciona = document.querySelector('#criar-tarefa')
adiciona.addEventListener('click', adicionaItem)
function completa(evento) {
  let li = evento.target
  if (li.className !== 'completed') {
    li.className = 'completed'
    li.style.textDecoration = 'line-through'
  } else {
    li.className = ''
    li.style.textDecoration = 'none'
  }
}
function mudaCor(evento) {
  if (document.querySelector('#selecionado')) {
    antigo = document.querySelector('#selecionado')
    antigo.id = ''
    antigo.style.backgroundColor = ''
  }
  item = evento.target
  item.id = 'selecionado'
  item.style.backgroundColor = 'rgb(128,128,128)'
}
function adicionaItem() {
  let item = document.querySelector('#texto-tarefa').value
  let ol = document.querySelector('#lista-tarefas')
  let li = document.createElement("li")
  li.innerText = item
  li.addEventListener('click', mudaCor)
  li.addEventListener('dblclick', completa)
  ol.appendChild(li)
  document.querySelector('#texto-tarefa').value = ''
}

function apagaTudo() {
  let ol = document.querySelector('#lista-tarefas')
  let filhos = ol.children
  let tamanho = filhos.length - 1
  for (let index = tamanho; index > -1; index -= 1) {
    filhos[index].remove()
  }
}
document.querySelector('#apaga-tudo').addEventListener('click', apagaTudo)
