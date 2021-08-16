const taskButton = document.querySelector('#criar-tarefa');
const addTask = document.querySelector('#texto-tarefa');
const eraseButton = document.querySelector('#apaga-tudo');
const eraseFinishedButton = document.querySelector('#remover-finalizados');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const selectDelButton = document.querySelector('#remover-selecionado');


function addListItem() {
  const newTask = document.createElement('li');
  if (addTask.value !== '') {
    newTask.innerText = addTask.value;
    document.querySelector('#lista-tarefas').appendChild(newTask);
    newTask.className = 'toDoTask';
    newTask.addEventListener('click', changeBackground);
    newTask.addEventListener('dblclick', changeText);
    addTask.value = '';
  }
}
taskButton.addEventListener('click', addListItem);

// Criação da Função que remove o background de todas as listas.
function removeBackground() {
    const listOfLists = document.querySelectorAll('.toDoTask');
    for (let index1 = 0; index1 < listOfLists.length; index1 += 1) {
      listOfLists[index1].style.backgroundColor = '';
    }
  }
  
  function removeSelectedClass(classToRemove) {
    const listToRemove = document.querySelectorAll(`.${classToRemove}`);
    for (let index6 = 0; index6 < listToRemove.length; index6 += 1) {
      listToRemove[index6].classList.remove(classToRemove);
    }
  }
  
  // Criação da Função que torna o Background do item selecionado cinza e adciona a classe selected a penas a esse item.
  function changeBackground(event1) {
    removeBackground();
    removeSelectedClass('selected');
    // console.log(event1.target.className)
    const resolveLogo = event1.target;
    resolveLogo.className += ' selected';
    resolveLogo.style.backgroundColor = 'rgb(128,128,128)';
  }
  
  // Cria função responsável por adcionar e remover a classe que risca o texto
  function changeText(event2) {
    event2.target.classList.toggle('completed');
  }


// Cria a função que apaga lista
function eraseList() {
  const listToErase = document.getElementsByClassName('toDoTask');
  localStorage.removeItem('saveList');
  for (let index2 = listToErase.length - 1; index2 >= 0; index2 -= 1) {
    listToErase[index2].remove();
  }
}

// Adciona o event listener ao butão que apaga tudo.
eraseButton.addEventListener('click', eraseList);

// Cria a função que apaga a lista de tarefas finalizadas.
function eraseFinishedList() {
  const finishedListToErase = document.getElementsByClassName('completed');
  for (let index3 = finishedListToErase.length - 1; index3 >= 0; index3 -= 1) {
    finishedListToErase[index3].remove();
  }
}

// Adciona o event listener ao butão que apaga as tarefas finalizadas.
eraseFinishedButton.addEventListener('click', eraseFinishedList);






// Insere EventListener no botão mover para cima e cria Função que move item selecionado para a cima.
function moveUp() {
  const itemToMove1 = document.querySelector('.selected');
  if (itemToMove1 !== null && itemToMove1.previousElementSibling) {
    itemToMove1.parentNode.insertBefore(itemToMove1, itemToMove1.previousElementSibling);
  }
}
moveUpButton.addEventListener('click', moveUp);

// Insere EventListener no botão mover para baixo e cria Função que move item selecionado para a baixo.
function moveDown() {
  const itemToMove2 = document.querySelector('.selected');
  if (itemToMove2 !== null && itemToMove2.nextElementSibling) {
    itemToMove2.parentNode.insertBefore(itemToMove2.nextElementSibling, itemToMove2);
  }
}
moveDownButton.addEventListener('click', moveDown);

// Adciona EventListener ao botão Remover Selecionado e Função que Remove apenas o Item selecionado.
function removeSelectedItem() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    selectedItem.remove();
  }
}
selectDelButton.addEventListener('click', removeSelectedItem);

