function adicionaTexto() {
  const novoInput = document.createElement('input');
  novoInput.id = 'texto-tarefa';
  novoInput.type = 'text';
  novoInput.placeholder = 'Insira sua tarefa';
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(novoInput);
}
adicionaTexto();
const textoAtual = document.getElementById('texto-tarefa');
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
  const texto = textoAtual.value;
  const li = document.createElement('li');
  const lista = document.getElementById('lista-tarefas');
  li.innerText = texto;
  lista.appendChild(li);
}

const botaoAdiciona = document.getElementById('criar-tarefa');
botaoAdiciona.addEventListener('click', adicionaTarefa);

function apagaTexto() {
  textoAtual.value = '';
}
botaoAdiciona.addEventListener('click', apagaTexto);

function mudaBackground(event) {
  const lis = document.getElementsByTagName('li');
  if (lis.length > 1) {
    for (const index of lis) {
      index.style.backgroundColor = 'rgb(178, 224, 181)';
    }
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
function tiraTarefa() {
  event.target.className = '';
  event.target.addEventListener('click', riscaTarefa);
}

function riscaTarefa() {
  event.target.className = 'completed';
  event.target.addEventListener('dblclick', tiraTarefa);
}
function pintaLis() {
  const ol = document.getElementById('lista-tarefas').lastElementChild;
  ol.addEventListener('click', mudaBackground);
  ol.addEventListener('dblclick', riscaTarefa);
}
botaoAdiciona.addEventListener('click', pintaLis);
