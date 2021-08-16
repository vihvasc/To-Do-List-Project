let header1 = document.getElementById('header')
header1.innerText = 'Minha Lista de Tarefas';
let p1 = document.getElementById('funcionamento');
p1.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

let getButton = document.getElementById('criar-tarefa');
function clearText (){
  document.querySelector('#texto-tarefa').value = '';
}
getButton.addEventListener('click', createTask);

function createTask(){
  let getInputText = document.querySelector('#texto-tarefa').value;
  let addLi = document.createElement('li');
  let getOl = document.getElementById('lista-tarefas')
  getOl.appendChild(addLi);
  addLi.innerText = getInputText;
  clearText ();
  
function addBackgroundColor (){
  // addLi.classList = 'item-lista';
}
addLi.addEventListener('click', addBackgroundColor);
addLi.addEventListener('click',removeBackground);
}

function removeBackground(event){
let x = document.querySelector('.item-lista');
if(x !== null){
x.classList.remove('item-lista');}
if(event.target.className !== 'item-lista'){
event.target.className = 'item-lista';
} else {
event.target.className = '';
}
}