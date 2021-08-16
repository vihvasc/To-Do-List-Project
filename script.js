const header = document.querySelector('#header');
const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const ol = document.querySelector('#lista-tarefas');
const listItens = document.getElementsByClassName('list-item');

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
  const listItem = document.createElement('li');
  listItem.innerHTML = `${input.value}`;
  listItem.className = 'list-item';
  ol.appendChild(listItem);
  input.value = '';
}

button.addEventListener('click', createListItem);

function targetItem(event) {
  for (let index = 0; index < listItens.length; index += 1) {
    if (listItens[index].classList.contains('target')) {
      listItens[index].classList.remove('target');
      listItens[index].style.backgroundColor = '#fff';
    }

    event.target.classList.add('target');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

ol.addEventListener('click', targetItem);

function setCompleted(event) {
  if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
  }
  else {
    event.target.classList.add('completed');
  }  
}

ol.addEventListener('dblclick', setCompleted);

function clearAll() {
    ol.innerHTML = '';
}

buttonClear.addEventListener('click', clearAll);
