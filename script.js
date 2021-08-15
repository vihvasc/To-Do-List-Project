const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');

criarTarefa.addEventListener('click', taskAdd);
listaTarefas.addEventListener('click', taskSelected);
listaTarefas.addEventListener('dblclick', taskCompleted);
apagaTudo.addEventListener('click', removeAll);

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
