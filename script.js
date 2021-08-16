const header = document.createElement('header');
document.body.appendChild(header);

const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
header.appendChild(title);

const main = document.createElement('main');
document.body.appendChild(main);
const discreteParagraph = document.createElement('p');
discreteParagraph.id = 'funcionamento';
discreteParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
main.appendChild(discreteParagraph);

const inputDiv = document.createElement('div');
document.body.appendChild(inputDiv);

const input = document.createElement('input');
input.id = 'texto-tarefa';
document.body.appendChild(input);
