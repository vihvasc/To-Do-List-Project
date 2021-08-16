//crio as variaveis que vão receber os valores dos botoes
const inputTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoRemoveFinalizadas = document.querySelector('#remover-finalizados');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
const botaoMoverCima = document.querySelector('#mover-cima');
const botaoMoverBaixo = document.querySelector('#mover-baixo');
const botaoRemoveSelecionado = document.querySelector('#remover-selecionado');

function criaTarefa() {
  const itemAdd = document.createElement('li');
  itemAdd.innerText = inputTarefa.value;
  listaTarefas.appendChild(itemAdd);
  inputTarefa.value = ''
}


//ativo as variáveis para receber o click 
botaoCriaTarefa.addEventListener('click', criaTarefa);
/* botaoApagaTudo.addEventListener('click', apagaTudo);
botaoRemoveFinalizadas.addEventListener('click', apagaFinalizados);
botaoRemoveSelecionado.addEventListener('click', apagaSelecionados);
botaoSalvarTarefas.addEventListener('click', salvaListaTarefas);
botaoMoverCima.addEventListener('click', moverCima);
botaoMoverBaixo.addEventListener('click', moverBaixo); */

