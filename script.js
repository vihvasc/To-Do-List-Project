function criarTarefa() {
  const tarefaLista = document.createElement('li');
  const textoTarefaInput = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  console.log(textoTarefaInput.innerText);
  tarefaLista.innerText = textoTarefaInput.value;
  listaTarefas.appendChild(tarefaLista);
  textoTarefaInput.value = '';
}

const cliqueBotaoCriarTarefa = document.getElementById('criar-tarefa');
cliqueBotaoCriarTarefa.addEventListener('click', criarTarefa);
