// Função para criar items na lista puxando o valor do input
function criaListaDeItem() {

  const listaTarefas = document.getElementById('lista-tarefas');

  const input = document.getElementById('texto-tarefa');

  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = input.value;
  novaTarefa.className = 'tarefa';
  novaTarefa.addEventListener('click', selecionartarefa);
  novaTarefa.addEventListener('dblclick', riscaItenLista);

  listaTarefas.appendChild(novaTarefa);

  input.value = '';
}

const addButton = document.getElementById('criar-tarefa');

addButton.addEventListener('click', criaListaDeItem);

// Função para alterar o background de uma tarefa da lista quando clicado uma vez
function selecionartarefa(event) {

  const tarefa = document.querySelectorAll('li');

  for (let index = 0; index < tarefa.length; index += 1) {

    if (tarefa[index].classList.contains('selected')) { // https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/ dica de amigos.
      const selecionadoTarefa = document.querySelector('.selected');
      selecionadoTarefa.classList.remove('selected');
    }
  }

  event.target.classList.add('selected');
}

// Função para riscar uma tarefa concluida clicando duas veses
function riscaItenLista(event) {

  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}