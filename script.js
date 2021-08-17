function adicionaTexto() {
  const novoInput = document.createElement('input');
  novoInput.id = 'texto-tarefa';
  novoInput.type = 'text';
  novoInput.placeholder = 'Insira sua tarefa';
  const body = document.getElementsByTagName('section')[0];
  body.appendChild(novoInput);
}
adicionaTexto();
const textoAtual = document.getElementById('texto-tarefa');
function criaLista() {
  const novaLista = document.createElement('ol');
  novaLista.id = 'lista-tarefas';
  const body = document.getElementById('ol');
  body.appendChild(novaLista);
}
criaLista();

function criaBotao() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'criar-tarefa';
  novoBotao.innerText = 'Adicionar tarefa';
  const body = document.getElementsByTagName('section')[0];
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
      index.style.backgroundColor = 'rgb(131, 228, 220)';
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

function criaBotaoApagaTudo() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'apaga-tudo';
  novoBotao.innerText = 'Remova todas as tarefas';
  const body = document.getElementsByTagName('section')[0];
  body.appendChild(novoBotao);
}
criaBotaoApagaTudo();
function removeTudo() {
  const ol = document.getElementById('lista-tarefas');
  ol.innerText = '';
  localStorage.clear()
}
const botaoApaga = document.getElementById('apaga-tudo');
botaoApaga.addEventListener('click', removeTudo);

function criaBotaoApagaCompletado() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'remover-finalizados';
  novoBotao.innerText = 'Remova todas as tarefas finalizadas';
  const body = document.getElementsByTagName('section')[0];
  body.appendChild(novoBotao);
}

criaBotaoApagaCompletado();
function apagaCompletado() {
  const pegaCompleto = document.getElementsByClassName('completed');
  for (let i = 0; i <= pegaCompleto.length + 1; i += 1) {
    for (let index of pegaCompleto) {
      console.log(index);
      index.remove();
      localStorage.clear()
      if (index == undefined) {
        const pegaUm = document.getElementsByClassName('completed')[0];
        pegaUm.remove();
      }
    }
  }
}
const botaoApagaCompletado = document.getElementById('remover-finalizados');
botaoApagaCompletado.addEventListener('click', apagaCompletado);

function criaBotaoSalvaArquivo() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'salvar-tarefas';
  novoBotao.innerText = 'Salve suas alterações';
  const body = document.getElementsByTagName('section')[0];
  body.appendChild(novoBotao);
}
criaBotaoSalvaArquivo();

function salvaTudo() {
  const lis = document.getElementsByTagName('li');
  for (let index = 0; index < lis.length; index += 1) {
    let atual = lis[index];
    localStorage.setItem('classe' + index, atual.className);
    localStorage.setItem('text' + index, atual.innerText);
    localStorage.setItem('tag' + index, atual.tagName.toLowerCase());
    localStorage.setItem('background' + index, atual.style.backgroundColor);
  } 
}
const pegaBotaoSalvaTudo = document.getElementById('salvar-tarefas');
pegaBotaoSalvaTudo.addEventListener('click', salvaTudo);

function criaLiNoCarregar() {
  let locals = localStorage.length;
  for (let i = 0; i < locals; i += 1) {
    const novoElemento = document.createElement(localStorage.getItem('tag' + i));
    novoElemento.className = localStorage.getItem('classe' + i);
    novoElemento.innerText = localStorage.getItem('text' + i);
    novoElemento.style.backgroundColor = localStorage.getItem('background' + i);
    const ol = document.getElementById('lista-tarefas');
    ol.appendChild(novoElemento);
  }
}

window.onload = criaLiNoCarregar();
