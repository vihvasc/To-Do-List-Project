const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

criarTarefa.addEventListener('click', taskAdd);
listaTarefas.addEventListener('click', taskSelected);

function taskAdd() {
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  tarefa.classList.add('tarefa');
  listaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
}

function taskSelected(event) {
  event.target.classList.add('selected');
}
