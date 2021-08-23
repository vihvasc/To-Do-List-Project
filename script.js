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

// funçao para apagar todos os itens da lista.
function apagaListaDeItem() {
  const lista = document.getElementById('lista-tarefas'); // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
const delButton = document.getElementById('apaga-tudo');

delButton.addEventListener('click', apagaListaDeItem);

// funçao para apagar tarefa selecionada
function apagaItemSelecionado() {
  const listaDeTarefa = document.getElementById('lista-tarefas');
  const selected = document.querySelector('.selected');

  listaDeTarefa.removeChild(selected);
}
const deletaSelecionadoButton = document.getElementById('remover-selecionado');

deletaSelecionadoButton.addEventListener('click', apagaItemSelecionado);

// funçao para remover as tarefas já executadas.
function apagaExecutados() {

  const executados = document.getElementsByClassName('completed'); // https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

  while (executados.length > 0) {
    executados[0].parentNode.removeChild(executados[0]);
  }
}  

const deletaExecutadosButton = document.getElementById('remover-finalizados');

deletaExecutadosButton.addEventListener('click', apagaExecutados);
