let button = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let inputValue = document.getElementById('texto-tarefa');

button.addEventListener('click', addListItem);

function addListItem() {
  let item = document.createElement('li');
  item.innerHTML = inputValue.value;
  lista.appendChild(item);

  inputValue.value = '';
}