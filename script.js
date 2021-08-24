const btnCreate = document.getElementById('criar-tarefa');
const btnErase = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');
const list = document.getElementById('lista-tarefas');

function createList() {
  const criarItem = document.createElement('li');
  const inputTarefas = document.getElementById('texto-tarefa');
  criarItem.innerText = inputTarefas.value;
  criarItem.className = 'item';
  list.appendChild(criarItem);
  inputTarefas.value = '';
}

btnCreate.addEventListener('click', createList);

function mudaCor(event) {
  const listinha = document.querySelectorAll('.item');
  const colorSelected = 'lista-Selecionados';
  for (let index = 0; index < listinha.length; index += 1) {
    if (listinha[index].classList.contains(colorSelected)) {
      listinha[index].classList.remove(colorSelected);
    }
  }
  event.target.classList.add(colorSelected);
}

list.addEventListener('click', mudaCor);

function completaTarefa(event) {
  event.target.classList.toggle('completed');
}
list.addEventListener('dblclick', completaTarefa);

function apagaTudo() {
  list.innerHTML = '';
}
btnErase.addEventListener('click', apagaTudo);

function apagarListaFinalizados() {
  const tarefaCompleta = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaCompleta.length; index += 1) {
    const filhosCompletos = tarefaCompleta[index];
    filhosCompletos.parentNode.removeChild(filhosCompletos);
  }
}
btnFinalizados.addEventListener('click', apagarListaFinalizados)

// Referencias utilizadas
// https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
// https://qastack.com.br/programming/197748/how-do-i-change-the-background-color-with-javascript
// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript