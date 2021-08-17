const taskList = document.getElementById('lista-tarefas');

function selecionar(task) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  task.target.classList.add('selected');
}

function complete(task) {
  task.target.classList.toggle('completed');
}

function apagarLista() {
  const items = document.querySelectorAll('li');
  items.forEach((item) => {
    item.remove();
  });
}

function apagarFinalizadas() {
  const completed = document.querySelectorAll('.completed');
  completed.forEach((item) => {
    item.remove();
  });
}

function apagarTarefa() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

function salvarLista() {
  localStorage.setItem('toDoList', taskList.innerHTML);
}

function recuperarLista() {
  taskList.innerHTML = localStorage.getItem('toDoList');
}

function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  tarefa.addEventListener('click', selecionar);
  tarefa.addEventListener('dblclick', complete);
  taskList.appendChild(tarefa);
  input.value = '';
}

function addEventListeners() {
  document.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', selecionar);
    item.addEventListener('dblclick', complete);
  });
}

window.onload = function initPage() {
  document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
  document.getElementById('apaga-tudo').addEventListener('click', apagarLista);
  document.getElementById('remover-finalizados').addEventListener('click', apagarFinalizadas);
  document.getElementById('remover-selecionado').addEventListener('click', apagarTarefa);
  document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);
  recuperarLista();
  addEventListeners();
};
