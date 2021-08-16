const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefas = document.getElementById('salvar-tarefas');
const removerSelecionado = document.getElementById('remover-selecionado');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');

if (localStorage.getItem('content')) {
  listaTarefas.innerHTML = localStorage.getItem('content');
}

function taskAdd() {
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  tarefa.classList.add('tarefa');
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
}

function taskSelected(event) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function removeAll() {
  listaTarefas.innerHTML = '';
}

function removeFinished() {
  const finished = document.querySelectorAll('.completed');
  for (let index = 0; index < finished.length; index += 1) {
    listaTarefas.removeChild(finished[index]);
  }
}

function taskSave() {
  localStorage.setItem('content', listaTarefas.innerHTML);
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected) {
    listaTarefas.removeChild(selected);
  }
}

function moveUp() {
  const elementSelected = document.getElementsByClassName('selected')[0];
  const list = document.querySelectorAll('.tarefa');
  if (list[0] !== elementSelected && elementSelected) {
    const elementUp = elementSelected.previousElementSibling;
    const { parentNode } = elementUp;
    parentNode.insertBefore(elementUp, elementSelected.nextSibling);
  }
}

function moveDown() {
  const elementSelected = document.getElementsByClassName('selected')[0];
  const list = document.querySelectorAll('.tarefa');
  if (list[list.length - 1] !== elementSelected && elementSelected) {
    const elementDown = elementSelected.nextSibling;
    const { parentNode } = elementDown;
    parentNode.insertBefore(elementDown, elementSelected);
  }
}

criarTarefa.addEventListener('click', taskAdd);
listaTarefas.addEventListener('click', taskSelected);
listaTarefas.addEventListener('dblclick', taskCompleted);
apagaTudo.addEventListener('click', removeAll);
removerFinalizados.addEventListener('click', removeFinished);
salvarTarefas.addEventListener('click', taskSave);
removerSelecionado.addEventListener('click', removeSelected);
moverCima.addEventListener('click', moveUp);
moverBaixo.addEventListener('click', moveDown);
