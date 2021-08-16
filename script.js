// Desafio 7 -Altera cor de fundo do item da lista selecionado
function selectedItemList() {
  const selectedItem = document.querySelectorAll('.itens');

  for (let i = 0; i < selectedItem.length; i += 1) {
    const checkItem = selectedItem[i];

    checkItem.addEventListener('click', () => {
      for (let z = 0; z < selectedItem.length; z += 1) {
        const checkRemove = selectedItem[z];
        checkRemove.classList.remove('selected');
      }
      checkItem.classList.add('selected');
    });
  }
}

// Desafio 5 e 6- Cria uma lista de taferas em sequencia e limpa a entrada do input
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
    selectedItemList();
  });
}

addToList();
