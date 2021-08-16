//requisito 1
let title = document.createElement('header');
title.innerText = 'Minha Lista  de Tarefas';
document.body.appendChild(title);
//requisito 2
let paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText =
  'Clique duas  vezes em um item para marcá-lo como completo';
document.body.appendChild(paragraph);
//requisito 3
let  input = document.createElement("input");
input.id = "texto-tarefa";
input.type = "text"
document.body.appendChild(input);