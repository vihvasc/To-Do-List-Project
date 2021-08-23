const btnAdicionar = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

// function trocaCorDaTarefa(event) {
//     const tarefaAnterior = document.querySelector('.tarefa-selecionada');
//     const tarefaSelecionada = event.target;
//     tarefaSelecionada.className = "tarefa-selecionada";
//     tarefaAnterior.classList.remove("tarefa-selecionada");
// }

function adicionaTarefa() {
  const tarefa = document.createElement('li');
  const textoEscritoNoInput = document.getElementById('texto-tarefa');
  listaDeTarefas.appendChild(tarefa);
  tarefa.innerHTML = textoEscritoNoInput.value;
  textoEscritoNoInput.value = '';
//   tarefa.innerHTML = textoEscritoNoInput.value;
//   textoEscritoNoInput.value = '';
  //   tarefa.addEventListener('click', trocaCorDaTarefa);
}

btnAdicionar.addEventListener('click', adicionaTarefa);
