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
  const removePaint = document.querySelectorAll('.classLi');

  for (let index = 0; index < removePaint.length; index += 1) {
    removePaint[index].classList.remove('paint');
  }
  mudaCorLi.classList.add('paint');
}

lista.addEventListener('click', mudaFundo);
