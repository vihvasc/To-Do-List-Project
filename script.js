const button = document.getElementById('criar-tarefa');
button.addEventListener('click', () => {
  const lista = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  let inputValue = input.value;
  const listItem = document.createElement('li');
  if (inputValue !== '') {
    listItem.innerText = inputValue;
    lista.appendChild(listItem);
    input.value = '';
  }
});
