const list = [];
const orderList = document.getElementById('lista-tarefas');
const listItem = document.getElementById('texto-tarefa');

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addList);

function addList() {
  const newItem = listItem.value;
  list.push(newItem);
  const element = document.createElement('li');
  element.innerText = newItem;
  orderList.appendChild(element);
  listItem.value = '';
}

const element = document.getElementsByTagName('ol')[0];
element.addEventListener('click', function (event) {
  clearBackground();
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

function clearBackground() {
  const elements = document.getElementsByTagName('li');
  for (let index = 0; index < elements.length; index += 1) {
    let listElement = elements[index];
    listElement.style.backgroundColor = '';
  }
}

const elementList = document.getElementsByTagName('ol')[0];
elementList.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
});
