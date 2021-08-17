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
  const lista = document.querySelectorAll('li');
  lista.forEach((item) => {
    item.remove();
  });
}

function apagarFinalizadas() {
  const prontas = document.querySelectorAll('.completed');
  prontas.forEach((item) => {
    item.remove();
  });
}

function apagarTarefa() {
  const selecionada = document.querySelector('.selected');
  selecionada.remove();
}

function salvarLista() {
  const lista = document.querySelectorAll('li');
  const array = [];
  lista.forEach((item) => {
    array.push(`${item.innerText} ${item.classList}`);
  });
  localStorage.setItem('List', JSON.stringify(array));
}

function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  tarefa.addEventListener('click', selecionar);
  tarefa.addEventListener('dblclick', complete);
  document.getElementById('lista-tarefas').appendChild(tarefa);
  input.value = '';
}

// function recuperarLista() {
//   document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('list');
// }

window.onload = function initPage() {
  document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
  document.getElementById('apaga-tudo').addEventListener('click', apagarLista);
  document.getElementById('remover-finalizados').addEventListener('click', apagarFinalizadas);
  document.getElementById('remover-selecionado').addEventListener('click', apagarTarefa);
  document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);
  // recuperarLista();
};
