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
  addLi.addEventListener('dblclick', addCompletedTask)
  addLi.innerText = getInputText;
  clearText ();
  
function addBackgroundColor (){
  // addLi.classList = 'item-lista';
}
addLi.addEventListener('click', addBackgroundColor);
addLi.addEventListener('click',removeBackground);
}

function removeBackground(event){
let itemListaClasse = document.querySelector('.item-lista');
if(itemListaClasse !== null){
itemListaClasse.classList.remove('item-lista');}
if(event.target.classList.contains('item-lista')){  
event.target.classList.remove('item-lista');
} else {
event.target.classList.add('item-lista');
}
}

function addCompletedTask(event){
event.target.classList.toggle('completed');
}
let getButton2 = document.getElementById('apaga-tudo')
function removeTask(){
  let ol = document.getElementById('lista-tarefas');
  for(i = 0; i < ol.children.length; i = 0)
  ol.removeChild(ol.childNodes[i]);
}
getButton2.addEventListener('click', removeTask);
