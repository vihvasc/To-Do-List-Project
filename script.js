const lista = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');

function button() {
  const inputAdicionar = document.getElementById('texto-tarefa').value;
  const criaLi = document.createElement('li');

  lista.appendChild(criaLi);
  criaLi.innerText = inputAdicionar;
  criaLi.classList.add('classLi');
  document.getElementById('texto-tarefa').value = '';
}

botao.addEventListener('click', button);

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
  const riscaItem = event.target;
  riscaItem.classList.toggle('completed');
}

lista.addEventListener('dblclick', riscaTarefas);
