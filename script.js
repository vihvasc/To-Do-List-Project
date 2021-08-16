// Desafio 5 - Cria uma lista de taferas em sequencia e limpa a entrada do input
function addToList() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const oList = document.getElementById('lista-tarefas');

  button.addEventListener('click', () => {
    const text = input.value;
    const item = document.createElement('li');

    item.textContent = text;
    item.className = 'itens';
    oList.appendChild(item);

    input.value = '';
  });
}

addToList();
