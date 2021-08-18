// funçao add itens na lista
const botao = document.querySelector('#criar-tarefa');

function botaoAdd() {
  const descricaoTarefa = document.querySelector('input');
  const novaTarefa = document.createElement('li');
  const listaTarefas = document.querySelector('#lista-tarefas');

  novaTarefa.innerHTML = descricaoTarefa.value;
  novaTarefa.setAttribute('class', 'completed');
  descricaoTarefa.value = '';

  listaTarefas.appendChild(novaTarefa);

}

botao.addEventListener('click', botaoAdd);

