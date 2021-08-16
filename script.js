const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const botaoCriarTarefa = document.getElementById('criar-tarefa');

// Adiciona tarefa a lista
function adicionarTarefa() {
  const tarefas = document.createElement('li');
  tarefas.className = 'tarefa';
  tarefas.innerText = textoTarefa.value;
  listaTarefas.appendChild(tarefas);
  textoTarefa.value = '';
}

botaoCriarTarefa.addEventListener('click', adicionarTarefa);

// Adiciona cor de fundo para item selecionado
function adicionaFundoItem(event) {
  const itemSelecionado = document.querySelector('.selecionado');
  if (itemSelecionado == null) {
    event.target.classList.add('selecionado');
  } else {
    itemSelecionado.classList.remove('selecionado');
    event.target.classList.add('selecionado');
  }
}

listaTarefas.addEventListener('click', adicionaFundoItem);

// Adiciona item riscado ao clicar duas vezes
function adicionaItemCompleto(event) {
  const itemSelecionado = document.querySelector('.completed');
  if (itemSelecionado == null) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

listaTarefas.addEventListener('dblclick', adicionaItemCompleto);
