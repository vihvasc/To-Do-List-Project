const lista = document.getElementById('lista-tarefas');
const botaoAdiciona = document.getElementById('criar-tarefa');
const botaoRemove = document.getElementById('apaga-tudo');

function button() {
  const inputAdicionar = document.getElementById('texto-tarefa').value;
  const criaLi = document.createElement('li');

  lista.appendChild(criaLi);
  criaLi.innerText = inputAdicionar;
  criaLi.classList.add('classLi');
  document.getElementById('texto-tarefa').value = '';
}

botaoAdiciona.addEventListener('click', button);

function mudaFundo(event) {
  const mudaCorLi = event.target;
  const allList = document.querySelectorAll('.classLi');

  for (let index = 0; index < allList.length; index += 1) {
    allList[index].classList.remove('paint');
  }
  mudaCorLi.classList.add('paint');
}

lista.addEventListener('click', mudaFundo);

function riscaTarefas(event) {
  const eventTarget = event.target;
  eventTarget.classList.toggle('completed');
}

lista.addEventListener('dblclick', riscaTarefas);

function apagaLista() {
  const listaFilhos = document.getElementById('lista-tarefas');
  listaFilhos.innerText = '';
}

botaoRemove.addEventListener('click', apagaLista);
