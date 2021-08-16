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

// REQUISITO 7 (ADICIONA BACKGROUND AO CLICAR EM UM ITEM DA LISTA)

function mudaFundo(event) {
  const mudaCorLi = event.target;

  mudaCorLi.classList.add('paint');
}

lista.addEventListener('click', mudaFundo);

// REQUISITO 8
