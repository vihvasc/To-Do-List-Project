const lista = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');

function button() {
  const inputAdicionar = document.getElementById('texto-tarefa').value;
  const criaLi = document.createElement('li');

  lista.appendChild(criaLi);
  criaLi.innerText = inputAdicionar;
  document.getElementById('texto-tarefa').value = '';
}

botao.addEventListener('click', button);

// function mudaFundo(event) {
//   console.log(event.target);
// }
