const inputTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
/* const botaoRemoveFinalizadas = document.querySelector('#remover-finalizados');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
const botaoMoverCima = document.querySelector('#mover-cima');
const botaoMoverBaixo = document.querySelector('#mover-baixo');
const botaoRemoveSelecionado = document.querySelector('#remover-selecionado'); */

function criaTarefa() {
  const itemLista = document.createElement('li');
  itemLista.innerText = inputTarefa.value;
  listaTarefas.appendChild(itemLista);
  inputTarefa.value = '';
  itemLista.addEventListener('click', corFundo);
  itemLista.addEventListener('dblclick', taxado);
  console.log(itemLista);
}

function corFundo(event) {
  const antigoSelecionado = document.querySelector('.selected');
  if (antigoSelecionado != null) {
    antigoSelecionado.classList.remove('selected');
  }
  const evento = event.target;
  evento.classList.add('selected');
}
function apagaTudo() {
  const listaElementos = document.getElementsByTagName('li');
  for (let i = 0; i < listaElementos.length; i = 0) {
    listaElementos[i].remove();
  }
}
function taxado(event) {
  if (event.target.classList.contains('completed')) { 
    // o className.includes('completed') tbm funciona
    event.target.classList.remove('completed');
  } else { event.target.classList.add('completed'); }
}

botaoCriaTarefa.addEventListener('click', criaTarefa);
botaoApagaTudo.addEventListener('click', apagaTudo);

/* botaoRemoveFinalizadas.addEventListener('click', apagaFinalizados);
botaoRemoveSelecionado.addEventListener('click', apagaSelecionados);
botaoSalvarTarefas.addEventListener('click', salvaListaTarefas);
botaoMoverCima.addEventListener('click', moverCima);
botaoMoverBaixo.addEventListener('click', moverBaixo); */
