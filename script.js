const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const textInput = document.getElementById('texto-tarefa');
const buttonClear = document.getElementById('apaga-tudo');

// Cria o ítem na lista
function creatItem() {
  const item = document.createElement('li');
  item.innerText = textInput.value;
  list.appendChild(item);
  textInput.value = '';
}

button.addEventListener('click', creatItem);

// Adciona CSS background-color com click;
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

// Adciona CSS text-decoration com dblclick;
function lineThroughItem(event) {
  event.target.classList.toggle('completed');
}

list.addEventListener('dblclick', lineThroughItem);

// Apaga lista de atividades;
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

buttonClear.addEventListener('click', clearList);
