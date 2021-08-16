const buttonAdd = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const itens = document.getElementById('lista-tarefas');

function addTask() {
  const listItem = document.createElement('li');
  const task = inputText.value;
  listItem.innerText = task;
  itens.appendChild(listItem);
  inputText.value = '';
}

buttonAdd.addEventListener('click', addTask);
