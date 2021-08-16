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

corpoDoProjeto[0].appendChild(headerTitle);
headerTitle.appendChild(title);
corpoDoProjeto[0].appendChild(createSection);
createSection.appendChild(createParagraph);
createSection.appendChild(createInput);
