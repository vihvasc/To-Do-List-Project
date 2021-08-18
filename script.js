const pageBody = document.getElementsByTagName('body');
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
const buttonToDeleteTheList = document.createElement('button');
buttonToDeleteTheList.id = 'apaga-tudo';
buttonToDeleteTheList.innerText = 'Deletar tudo';
const buttonDeleteTask = document.createElement('button');
buttonDeleteTask.id = 'remover-finalizados';
buttonDeleteTask.innerText = 'Deletar tarefa';

pageBody[0].appendChild(headerTitle);
headerTitle.appendChild(title);
pageBody[0].appendChild(createSection);
pageBody[0].appendChild(createInputSectionAndButton);
pageBody[0].appendChild(createListSection);
createSection.appendChild(createParagraph);
createInputSectionAndButton.appendChild(createInput);
createListSection.appendChild(createOrderedList);
createInputSectionAndButton.appendChild(createButton);
createInputSectionAndButton.appendChild(buttonToDeleteTheList);
createInputSectionAndButton.appendChild(buttonDeleteTask);

function addedElementToList() {
  const addedValues = document.querySelector('#texto-tarefa');
  const text = addedValues;
  const list = document.createElement('li');
  createOrderedList.appendChild(list);
  list.innerText = text.value;
  text.value = '';
}
createButton.addEventListener('click', addedElementToList);

const tarefas = document.getElementById('lista-tarefas');
const itemDalista = document.getElementsByTagName('li');

function AdicionarCor(event) {
  for (let index = 0; index < itemDalista.length; index += 1) {
    if (itemDalista[index].classList.contains('corDoFundo')) {
      itemDalista[index].classList.remove('corDoFundo');
      itemDalista[index].style.backgroundColor = 'white';
    }
    const localDoClick = event.target;
    localDoClick.classList.add('corDoFundo');
    localDoClick.style.backgroundColor = 'gray';
  }
}

tarefas.addEventListener('click', AdicionarCor);

function adicionarRisco(event) {
  event.target.classList.toggle('completed');
}

tarefas.addEventListener('dblclick', adicionarRisco);

function deleteList() {
  const information = document.querySelectorAll('li');
  for (let index = 0; index < information.length; index += 1) {
    information[index].remove();
  }
}

buttonToDeleteTheList.addEventListener('click', deleteList);

function deletarTarefa() {
  const information = document.querySelectorAll('li');
  for (let index = 0; index < information.length; index += 1) {
    if (information[index].classList.contains('completed')) {
      information[index].remove();
    }
  }
}
buttonDeleteTask.addEventListener('click', deletarTarefa);
