const corpoDoProjeto = document.getElementsByTagName('body');
const headerTitle = document.createElement('header');
const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
const createSection = document.createElement('section');
const createParagraph = document.createElement('p');
createParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
createParagraph.id = 'funcionamento';
const createInput = document.createElement('input');
createInput.id = 'texto-tarefa';
const createOrderedList = document.createElement('ol');
createOrderedList.id = 'lista-tarefas';
const createButton = document.createElement('button');
createButton.id = 'criar-tarefa';
createButton.innerText = 'Adicionar';
const createInputSectionAndButton = document.createElement('section');
const createListSection = document.createElement('section');

corpoDoProjeto[0].appendChild(headerTitle);
headerTitle.appendChild(title);
corpoDoProjeto[0].appendChild(createSection);
corpoDoProjeto[0].appendChild(createInputSectionAndButton);
corpoDoProjeto[0].appendChild(createListSection);
createSection.appendChild(createParagraph);
createInputSectionAndButton.appendChild(createInput);
createListSection.appendChild(createOrderedList);
createInputSectionAndButton.appendChild(createButton);

const addedValues = document.querySelector('#texto-tarefa');
const text = addedValues;
function addedElementToList() {
  const list = document.createElement('li');
  createOrderedList.appendChild(list);
  list.className = 'lista';
  list.innerText = text.value;
  text.value = '';
}
createButton.addEventListener('click', addedElementToList);
