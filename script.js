const btnCreate = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function createList() {
  const criarItem = document.createElement('li');
  const inputTarefas = document.getElementById('texto-tarefa');
  criarItem.innerText = inputTarefas.value;
  criarItem.className = 'item';
  list.appendChild(criarItem);
  inputTarefas.value = '';
}

btnCreate.addEventListener('click', createList);

function mudaCor(event) {
  const listinha = document.querySelectorAll('.item');
  const colorSelected = 'lista-Selecionados';
  for (let index = 0; index < listinha.length; index += 1) {
    if (listinha[index].classList.contains(colorSelected)) {
      listinha[index].classList.remove(colorSelected);
    }
  }
  event.target.classList.add(colorSelected);
}

list.addEventListener('click', mudaCor);

function completaTarefa(event) {
  event.target.classList.toggle('completed');
}
list.addEventListener('dblclick', completaTarefa);
