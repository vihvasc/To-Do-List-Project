function adicionaTexto() {
  const novoInput = document.createElement('input');
  novoInput.id = 'texto-tarefa';
  novoInput.type = 'text';
  novoInput.placeholder = 'Insira sua tarefa';
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

function criaBotao() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'criar-tarefa';
  novoBotao.innerText = 'Adicionar tarefa';
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(novoBotao);
}
criaBotao();

function adicionaTarefa() {
  const textoAtual = document.getElementById('texto-tarefa');
  const texto = textoAtual.value;
  const li = document.createElement('li');
  li.innerText = texto;
  console.log(li);
  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(li);
}

const botaoAdiciona = document.getElementById('criar-tarefa');
botaoAdiciona.addEventListener('click', adicionaTarefa);

function apagaTexto() {
  const textoAtual = document.getElementById('texto-tarefa');
  textoAtual.value = '';
}
botaoAdiciona.addEventListener('click', apagaTexto);
