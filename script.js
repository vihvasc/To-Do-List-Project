const list = [];
const orderlist = document.getElementById('lista-tarefas');
const listItem = document.getElementById('texto-tarefa');

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addList);

function addList() {
  const newItem = listItem.value;
  list.push(newItem);
  const element = document.createElement('li');
  element.innerText = newItem;
  orderlist.appendChild(element);
  listItem.value = '';
}
