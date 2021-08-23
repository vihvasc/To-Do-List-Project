const btnCreate = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const listItem = document.querySelectorAll('li');

function createList() {
  const criarItem = document.createElement('li');
  const inputTarefas = document.getElementById('texto-tarefa');
  criarItem.innerText = inputTarefas.value;
  list.appendChild(criarItem);
  inputTarefas.value = '';
}

btnCreate.addEventListener('click', createList);

function mudaCor(event) {
  const corInicial = 'white';
  const corCinza = 'rgb(128, 128, 128)';
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].style.backgroundColor !== corInicial) {
      listItem[index].style.backgroundColor === corInicial
    }
  }
  event.target.style.backgroundColor = corCinza;
}

list.addEventListener('click', mudaCor);
