let textoTarefa = document.getElementById('texto-tarefa');
let addElementoListaTarefas = document.getElementById('lista-tarefas');
const btnCriarTarefa = document.getElementById('criar-tarefa');

btnCriarTarefa.addEventListener('click', function() {
  let elementLi = document.createElement('li')

  elementLi.innerText += textoTarefa.value

  addElementoListaTarefas.appendChild(elementLi)

  textoTarefa.value = ''

  elementLi.addEventListener('click', () => {
    elementLi.style.backgroundColor = 'rgb(128, 128, 128)'
  })

})