// Função que cria ítem após click no botão;
const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const textInput = document.getElementById('texto-tarefa');

// Cria o ítem na lista
function creatItem() {
  const item = document.createElement('li');
  item.innerText = textInput.value;
  list.appendChild(item);
  textInput.value = '';
}

button.addEventListener('click', creatItem);

// Adciona CSS ao elemento selecionado com o click;
function colorItem(event) {
  const coloredItem = document.querySelector('.itemSelected');
  if (coloredItem === null) {
    event.target.classList.add('itemSelected');
  } else {
    coloredItem.classList.remove('itemSelected');
    event.target.classList.add('itemSelected');  
  }
}

list.addEventListener('click', colorItem);
