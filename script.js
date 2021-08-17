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
//requisito 5 e 6
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
      let listItem = document.createElement('li');
      listItem.innerText = newItem;
      list.appendChild(listItem);
      listItem.addEventListener('click', changeListItemBackgroundColor);
      listItem.addEventListener('dblclick', elementoRiscado);
      list;
      input.value = '';
    }
  });
}
addNewItem();
//requisito 7
function changeListItemBackgroundColor(event) {
  let li = event.target;
  li.style.backgroundColor = 'rgb(128, 128, 128)';
}
//requisito 8
//preciso excluir a cor da anterior
// function removebackgrondColor(){

// }
// requisito 9
function elementoRiscado() {
  let listItem = document.getElementsByTagName('li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].classList.contains('completed')) {
      listItem[index].classList.remove('completed');
    } else {
      listItem[index].classList = 'completed';
    }
  }
}
elementoRiscado();
