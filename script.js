const btnCreate = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function createList() {
  const criarItem = document.createElement('li');
  const inputTarefas = document.getElementById('texto-tarefa');
  criarItem.innerText = inputTarefas.value;
  list.appendChild(criarItem);
  inputTarefas.value = '';
}

btnCreate.addEventListener('click', createList);
