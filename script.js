// Função que cria ítem após click no botão;

const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const textInput = document.getElementById('texto-tarefa');

button.addEventListener('click', creatItem);

// Cria o ítem na lista
function creatItem() {
  const item = document.createElement('li');
  item.innerText = textInput.value;
  list.appendChild(item);
  textInput.value = '';
}
