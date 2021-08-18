const getValueInputText = document.getElementById('texto-tarefa');
const createElementLi = document.getElementById('lista-tarefas');
const getButton = document.getElementById('criar-tarefa');

getButton.addEventListener('click', () => {
  let elementLi = document.createElement('li')
  
  elementLi.addEventListener('click', () => {
    elementLi.style.backgroundColor = 'rgb(128, 128, 128)'
  })
  
  elementLi.innerText += getValueInputText.value

  createElementLi.appendChild(elementLi)

  getValueInputText.value = ''

});