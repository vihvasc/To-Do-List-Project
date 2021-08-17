const selectedItem = document.getElementById('lista-tarefas');

// Desafio 5 e 6- Cria uma lista de taferas em sequencia e limpa a entrada do input
function addToList() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');

  button.addEventListener('click', () => {
    const text = input.value;
    const item = document.createElement('li');

    item.textContent = text;
    item.className = 'itens';
    selectedItem.appendChild(item);

    input.value = '';
  });
}

addToList();

// Desafio 7 -Altera cor de fundo do item da lista selecionado
selectedItem.addEventListener('click', (ev) => {
  const lista = document.getElementsByClassName('itens');
  const selected = ev.target;

  for (let i = 0; i < lista.length; i += 1) {
    const remover = lista[i];
    remover.classList.remove('selected');
  }
  selected.classList.add('selected');
});

// Desafio 9 - Duplos cliques adicionam e retiram a classe complited
const lista = document.querySelector('ol');

lista.addEventListener('dblclick', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('completed');
  }
});

// Desafio 10 - Cria botão que limpa a minha ol
const buttonRemoveList = document.getElementById('apaga-tudo');

buttonRemoveList.addEventListener('click', () => {
  lista.innerHTML = '';
});

// Desafio 11 - Cria botão que limpa itens com a classe completed
const buttonRemoveCompleted = document.getElementById('remover-finalizados');

buttonRemoveCompleted.addEventListener('click', () => {
  const listCompleted = document.querySelectorAll('.completed');

  for (let i = 0; i < listCompleted.length; i += 1) {
    lista.removeChild(listCompleted[i]);
  }

  console.log(listCompleted);
});
