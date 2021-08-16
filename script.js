let adiciona = document.querySelector('#criar-tarefa')
adiciona.addEventListener('click', adicionaItem)
function mudaCor(evento) {
  if (document.querySelector('.selecionado')) {
    antigo = document.querySelector('.selecionado')
    antigo.className = 'naoSelecionado'
    antigo.style.backgroundColor = ''
  }
  item = evento.target
  item.className = "selecionado"
  item.style.backgroundColor = 'rgb(128,128,128)'
}
function adicionaItem() {
  let item = document.querySelector('#texto-tarefa').value
  let ol = document.querySelector('#lista-tarefas')
  let li = document.createElement("li")
  li.innerText = item
  li.addEventListener('click', mudaCor)
  ol.appendChild(li)
  document.querySelector('#texto-tarefa').value = ''
}