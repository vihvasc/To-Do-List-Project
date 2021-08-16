let inputTexto = document.querySelector('#texto-tarefa');
let botaoCriarTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');

// Criar item lista
botaoCriarTarefa.addEventListener('click', function() {
  let criarLi = document.createElement('li');
  criarLi.innerText = inputTexto.value;  
  lista.appendChild(criarLi);
  inputTexto.value = '';
})


