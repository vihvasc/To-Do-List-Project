const taskList = document.getElementById('lista-tarefas');

// Desafio 5 e 6- Cria uma lista de taferas em sequencia e limpa a entrada do input
function addToList() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');

  button.addEventListener('click', () => {
    const text = input.value;
    const item = document.createElement('li');

    item.textContent = text;
    item.className = 'itens';
    taskList.appendChild(item);

    input.value = '';
  });
}

addToList();

// Desafio 7 -Altera cor de fundo do item da lista selecionado
taskList.addEventListener('click', (ev) => {
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

// Desafio 12 - Adiciona botão que salva a lista mesmo recarregando a pagina
const buttonSave = document.getElementById('salvar-tarefas');

buttonSave.addEventListener('click', () => {
  const listHtml = taskList.innerHTML;

  localStorage.setItem('lista', listHtml);
});

window.onload = () => {
  taskList.innerHTML = localStorage.getItem('lista');
};

// Desafio 13 - Adiciona botões que mudam a posição dos itens na lista
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

moveUpButton.addEventListener('click', () => {
// identifica qual é o meu elemento com a tag selectec
  const selected = document.querySelector('.selected');
// verifica se existe algum elemento com a tag selected
  if (selected) {
// olha pro 'filho' que tem antes de selected
    const previous = selected.previousSibling;
// verifica se o 'filho' anterior existe
    if (previous) {
// coloca o selected antes do meu nó anterior
      selected.parentNode.insertBefore(selected, previous);
    }
  }
});

moveDownButton.addEventListener('click', () => {
// faz o mesmo que o anterior porém verifica o próximo 'filho'
  const selected = document.querySelector('.selected');
  if (selected) {
    const nextSib = selected.nextSibling;
    if (nextSib) {
      selected.parentNode.insertBefore(nextSib, selected);
    }
  }
});

// Desafio 14 - Adiciona botão que remove itens selecionados
const removeSelectedButton = document.getElementById('remover-selecionado');

removeSelectedButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  selected.remove();
});
