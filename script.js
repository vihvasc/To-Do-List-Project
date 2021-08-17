const getValueInputText = document.getElementById('texto-tarefa');
let createElementLi = document.getElementById('lista-tarefas');
const getButton = document.getElementById('criar-tarefa');


getButton.addEventListener('click', () => {
  let elementLi = document.createElement('li')
  
  elementLi.innerText += getValueInputText.value

  createElementLi.appendChild(elementLi)

  getValueInputText.value = ''

});