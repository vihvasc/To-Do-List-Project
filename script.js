const header = document.querySelector('#header');
const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

function createTitle() {
  const title = document.createElement('h1');
  title.innerHTML = 'Minha Lista de Tarefas';
  header.appendChild(title);
}

createTitle();

function createParagraph() {
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(paragraph);
}

createParagraph();

function createListItem() {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${input.value}`;
    ol.appendChild(listItem);
    input.value = '';
}

button.addEventListener('click', createListItem);




