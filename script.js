//requisito 1
let title = document.createElement('header');
title.innerText = 'Minha Lista  de Tarefas';
document.body.appendChild(title);
//requisito 2
let divParagraph = document.createElement('div');
document.body.appendChild(divParagraph);
let paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText =
  'Clique duas  vezes em um item para marcá-lo como completo';
divParagraph.appendChild(paragraph);
//requisito 3
let divInput = document.createElement('div');
document.body.appendChild(divInput);
let input = document.createElement('input');
input.id = 'texto-tarefa';
input.type = 'text';
divInput.appendChild(input);
//requisito 4
let divList = document.createElement('div');
document.body.appendChild(divList);
let list = document.createElement('ol');
list.id = 'lista-tarefas';
divList.appendChild(list);
//requisito 5
//criei botão
let divButton = document.createElement('div');
document.body.appendChild(divButton);
let button = document.createElement('button');
button.id = 'criar-tarefa';
divButton.appendChild(button);
// criar um evento para esse botão
function addNewItem() {
  button.addEventListener('click', function () {
    let newItem = document.getElementById('texto-tarefa').value;

    let completeList = [];
    for (let index = 0; index <= completeList.length; index += 1) {
      let ListItem = document.createElement('li');
      ListItem.className = 'list-item';
      ListItem.innerText = newItem;
      list.appendChild(ListItem);
      input.value = '';
    }
  });
}
addNewItem();
