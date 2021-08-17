const button = document.getElementById('criar-tarefa');
// let listasLi = document.getElementsByTagName('li');
const buttonClear = document.getElementById('apaga-tudo');

function addEventFor() {
  let listasLi = document.getElementsByTagName('li');
  for (let key of listasLi) {
    key.addEventListener('click', changeColor);
  }
  for (let key of listasLi) {
    key.addEventListener('dblclick', changeTextDecoration);
  }
}

function getInputAddLi() {
  const li = document.createElement('li');
  const paiLi = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  li.innerText = input.value;
  paiLi.appendChild(li);
  input.value = '';
  addEventFor();
}

function changeColor(event) {
  let listasLi = document.getElementsByTagName('li');
  for (let key of listasLi) {
    key.style.backgroundColor = 'white';
  }
  const evento = event.target;
  evento.style.backgroundColor = 'gray';
}

function changeTextDecoration(event) {
  const evento = event.target;
  console.log(evento.className);
  const classEvent = evento.clearName;
  if (classEvent === 'completed') {
    evento.classList.removeAtribute('completed');
  } else {
    evento.classList.toggle('completed');
  }
}

function clearList() {
  let listaLi = document.querySelectorAll('li');
  const paiLi = document.querySelector('#lista-tarefas');
  for (let key of listaLi) {
    paiLi.removeChild(key);
  }
}

buttonClear.addEventListener('click', clearList);
button.addEventListener('click', getInputAddLi);

const buttonClearFinal = document.getElementById('remover-finalizados');
buttonClearFinal.addEventListener('click', removeItems);

function removeItems() {
  const selected = document.querySelectorAll('.completed');
  console.log(selected);
  for (let key of selected) {
    key.remove();
  }
}
