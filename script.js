function adicionaTexto() {
  const novoInput = document.createElement('input');
  novoInput.id = 'texto-tarefa';
  novoInput.type = 'text';
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(novoInput);
}
adicionaTexto();

function criaLista() {
  const novaLista = document.createElement('ol');
  novaLista.id = 'lista-tarefas';
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(novaLista);
}
criaLista();
