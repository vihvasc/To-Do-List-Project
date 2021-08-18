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
divButton.id = 'button-criar-tarefa';
document.body.appendChild(divButton);
let button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Criar Tarefa';
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

//requisito 7 e 8
function changeListItemBackgroundColor(event) {
  let li = event.target;
  let listItem = document.getElementsByTagName('li');
  for (let index = 0; index < listItem.length; index++) {
    listItem[index].style.backgroundColor = '';
    if (listItem[index].classList == 'selected') {
      listItem[index].classList.remove('selected');
    }
  }
  li.style.backgroundColor = 'rgb(128, 128, 128)';
  li.classList = 'selected';
}

// requisito 9
function elementoRiscado(event) {
  let listItem = event.target;
  if (listItem.classList.contains('completed')) {
    listItem.classList.remove('completed');
  } else {
    listItem.classList = 'completed';
  }
}

//  requisito 10
function clearAllItems() {
  let buttonClear = document.createElement('button');
  let divButtonClear = document.createElement('div');
  document.body.appendChild(divButtonClear);
  divButtonClear.id = 'button-apaga-tudo';
  buttonClear.id = 'apaga-tudo';
  buttonClear.innerText = 'Apagar Tudo';
  divButtonClear.appendChild(buttonClear);
  buttonClear.addEventListener('click', function () {
    document.location.reload(true);
  });
}
clearAllItems();

//requisito 11
function makeButtonRemove() {
  let buttonRemove = document.createElement('button');
  let divbButtonRemove = document.createElement('div');
  divbButtonRemove.id = 'button-remove-finished';
  buttonRemove.id = 'remover-finalizados';
  buttonRemove.innerText = 'Remover Tarefas Finalizadas';
  buttonRemove.addEventListener('click', removeFinalized);
  document.body.appendChild(divbButtonRemove);
  divbButtonRemove.appendChild(buttonRemove);
}
makeButtonRemove();

function removeFinalized() {
  let item = document.querySelectorAll('.completed');
  for (let index = 0; index < item.length; index += 1) {
    item[index].remove();
  }
}
//requisito 12

function MakeSaveButton() {
  let saveButton = document.createElement('button');
  let divSaveButton = document.createElement('div');
  divSaveButton.id = 'save';
  saveButton.id = 'salvar-tarefas';
  saveButton.innerText = 'Salvar Todas Tarefas';
  saveButton.addEventListener('click', saveList);
  document.body.appendChild(divSaveButton);
  divSaveButton.appendChild(saveButton);
}
MakeSaveButton();

function saveList() {
  let propriedadesDaTarefa = [];
  let listItem = document.getElementsByTagName('li');
  for (let index = 0; index < listItem.length; index += 1) {
    let objTarefa = {
      texto: listItem[index].innerText,
      corDeFundo: listItem[index].style.backgroundColor,
      nomeDaClasse: listItem[index].className,
    };
    propriedadesDaTarefa.push(objTarefa);
  }
  localStorage.setItem('listaAtual', JSON.stringify(propriedadesDaTarefa));
  alert('Lista salva com sucesso');
}

function recoverSaveList() {
  let recoverList = JSON.parse(localStorage.getItem('listaAtual'));
  for (let index = 0; index < recoverList.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = recoverList[index].texto;
    li.style.backgroundColor = recoverList[index].corDeFundo;
    li.className = recoverList[index].nomeDaClasse;
    li.addEventListener('click', changeListItemBackgroundColor);
    li.addEventListener('dblclick', elementoRiscado);
    list.appendChild(li);
  }
}
window.onload = () => {
  if (localStorage.getItem('listaAtual')) {
    recoverSaveList();
  }
};
// requisito 13

//requisito 14
function makeRemoveButton() {
  let divButtonRemoveselected = document.createElement('div');
  let buttonRemoveSelected = document.createElement('button');
  document.body.appendChild(divButtonRemoveselected);
  divButtonRemoveselected.appendChild(buttonRemoveSelected);
  buttonRemoveSelected.id = 'remover-selecionado';
  buttonRemoveSelected.innerText = 'Remover Selecionado';
  buttonRemoveSelected.addEventListener('click', removeSelected);
  divButtonRemoveselected = 'button-remove-selected';
}
makeRemoveButton();

function removeSelected() {
  let item = document.querySelector('.selected');
  item.remove();
}
