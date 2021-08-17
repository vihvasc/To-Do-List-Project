const taskList = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function salvarLista() {
  localStorage.setItem('toDoList', taskList.innerHTML);
}

function selecionar(task) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  task.target.classList.add('selected');
  salvarLista();
}

function complete(task) {
  task.target.classList.toggle('completed');
  salvarLista();
}

function apagarLista() {
  const items = document.querySelectorAll('li');
  items.forEach((item) => {
    item.remove();
  });
  salvarLista();
}

function apagarFinalizadas() {
  const completed = document.querySelectorAll('.completed');
  completed.forEach((item) => {
    item.remove();
  });
  salvarLista();
}

function apagarTarefa() {
  const selected = document.querySelector('.selected');
  selected.remove();
  salvarLista();
}

function recuperarLista() {
  taskList.innerHTML = localStorage.getItem('toDoList');
  salvarLista();
}

function criarTarefa() {
  if (input.value !== '') {
    const tarefa = document.createElement('li');
    tarefa.innerText = input.value;
    tarefa.addEventListener('click', selecionar);
    tarefa.addEventListener('dblclick', complete);
    taskList.appendChild(tarefa);
    input.value = '';
  }
  salvarLista();
}

function addEventListeners() {
  document.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', selecionar);
    item.addEventListener('dblclick', complete);
  });
  salvarLista();
}

function subirItem() {
  const selected = document.querySelector('.selected');
  if (selected) {
    const prevLI = selected.previousElementSibling;
    if (prevLI) {
      taskList.insertBefore(selected, prevLI);
    }
  }
  salvarLista();
}

function descerItem() {
  const selected = document.querySelector('.selected');
  if (selected) {
    const nextLI = selected.nextElementSibling;
    if (nextLI) {
      taskList.insertBefore(selected, nextLI.nextElementSibling);
    }
  }
  salvarLista();
}

function enterToAddTask(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('criar-tarefa').click();
  }
}

window.onload = function initPage() {
  input.addEventListener('keyup', enterToAddTask);
  document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
  document.getElementById('apaga-tudo').addEventListener('click', apagarLista);
  document.getElementById('remover-finalizados').addEventListener('click', apagarFinalizadas);
  document.getElementById('remover-selecionado').addEventListener('click', apagarTarefa);
  // document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);
  document.getElementById('mover-cima').addEventListener('click', subirItem);
  document.getElementById('mover-baixo').addEventListener('click', descerItem);
  recuperarLista();
  addEventListeners();
};
