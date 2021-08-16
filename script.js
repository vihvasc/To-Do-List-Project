const criarTarefa = document.getElementById('criar-tarefa');
const imput = document.getElementById('texto-tarefa');
const chamaLista = document.getElementById('lista-tarefas');
const buttonClearAll = document.getElementById('apaga-tudo');
const removeFinalizados = document.getElementById('remover-finalizados');
const salvaTarefas = document.getElementById('salvar-tarefas');
const removerSelecionado = document.getElementById('remover-selecionado');
 
if (localStorage.getItem('salvar')) {
  chamaLista.innerHTML = localStorage.getItem('salvar');
}

criarTarefa.addEventListener('click', addListaTarefa);
chamaLista.addEventListener('click', corDaLinha);
chamaLista.addEventListener('dblclick', taskCompleted);
buttonClearAll.addEventListener('click', clearAll);
removeFinalizados.addEventListener('click', removeTaskCompleted);
salvaTarefas.addEventListener('click', salvandoTarefas);
removerSelecionado.addEventListener('click', removeItemSelecionado);

function addListaTarefa() {
  const criaLista = document.createElement('li');
  criaLista.innerText = imput.value;
  chamaLista.appendChild(criaLista);
  imput.value = '';
}
function corDaLinha(event) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function clearAll() {
  chamaLista.innerHTML = '';
}
function removeTaskCompleted() {
  const finalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < finalizados.length; index += 1) {
    chamaLista.removeChild(finalizados[index]);
  }
}

function salvandoTarefas() {
  localStorage.setItem('salvar', chamaLista.innerHTML);
}

function removeItemSelecionado() {
    const removeItem = document.querySelectorAll('.selected');
    for (let index = 0; index < removeItem.length; index += 1) {
        chamaLista.removeChild(removeItem[index]);
    }
}