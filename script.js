const valorDeInput = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');

// somente um selecionado
function somenteUm() {
  const elementoSelecionado = document.querySelectorAll('.select');
  if (elementoSelecionado.length !== 0) {
    elementoSelecionado[0].classList.remove('select');
  }
}
// Mudar a cordo fundo ao clickar no item

function mudarCorDeFundo(origem) {
  somenteUm();
  origem.target.classList.add('select');
}
// riscar elemento

function riscarElemento(origem) {
  if (origem.target.classList.contains('completed')) {
    origem.target.classList.remove('completed');
  } else {
    origem.target.classList.add('completed');
  }
}
// Montar lista de elementos

function criarElementoTabela() {
  const criarElemento = document.createElement('li');
  criarElemento.innerText = valorDeInput.value;
  listaDeTarefas.appendChild(criarElemento);
  criarElemento.addEventListener('click', mudarCorDeFundo);
  criarElemento.addEventListener('dblclick', riscarElemento);
  valorDeInput.value = '';
}

// Fazer o botão adicionar o Elemento
const botaoDeAtualização = document.querySelector('#criar-tarefa');
botaoDeAtualização.addEventListener('click', criarElementoTabela);

// botao de apagar
const botaoDeApagar = document.querySelector('#apaga-tudo');

function apagarLista() {
  const itensDaLista = document.querySelectorAll('li');
  console.log(itensDaLista);
  for (let int = 0; int < itensDaLista.length; int += 1) {
    listaDeTarefas.removeChild(itensDaLista[int]);
  }
}

botaoDeApagar.addEventListener('click', apagarLista);

// botão para remover os finalizados

const bRemoverOsFinalizados = document.querySelector('#remover-finalizados');

function removF() {
  const itensDaListaCompletado = document.querySelectorAll('li.completed');
  for (let i = 0; i < itensDaListaCompletado.length; i += 1) {
    listaDeTarefas.removeChild(itensDaListaCompletado[i]);
  }
}

bRemoverOsFinalizados.addEventListener('click', removF);

// Salvar itens
const bSalvar = document.querySelector('#salvar-tarefas');

function salvarTabela() {
  const listaLi = document.querySelectorAll('li');

  const salve = [];
  for (let i = 0; i < listaLi.length; i += 1) {
    const inforDaLista = listaLi[i].innerText;

    if (listaLi[i].classList.contains('completed')) {
      salve.push({ texto: inforDaLista, class: 'completed' });
    } else {
      salve.push({ texto: inforDaLista, class: '' });
    }
  }
  localStorage.setItem('key1', JSON.stringify(salve));
}

bSalvar.addEventListener('click', salvarTabela);

// voltar o salve

const loadList = JSON.parse(localStorage.getItem('key1'));
function loadTabela() {
  for (let i = 0; i < loadList.length; i += 1) {
    const criarElemento = document.createElement('li');
    criarElemento.innerText = loadList[i].texto;
    criarElemento.addEventListener('click', mudarCorDeFundo);
    criarElemento.addEventListener('dblclick', riscarElemento);
    if (loadList[i].class) {
      criarElemento.classList.add('completed');
    }
    listaDeTarefas.appendChild(criarElemento);
  }
}

if (localStorage.length > 0) {
  window.onload = loadTabela;
}

// fonte https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
// botão de subir iten
function subirIten() {
  const textoItemAtual = document.querySelector('.select');
  if (!textoItemAtual) return;
  if (textoItemAtual.previousElementSibling) {
    textoItemAtual.parentNode.insertBefore(textoItemAtual, textoItemAtual.previousElementSibling);
  }
}

const bSubirItem = document.querySelector('#mover-cima');

bSubirItem.addEventListener('click', subirIten);

// botão de descer iten

function descerIten() {
  const textoItemAtual = document.querySelector('.select');
  const siblingTexto = textoItemAtual.nextElementSibling;
  const parentTexto = textoItemAtual.parentNode;
  if (!textoItemAtual) return;
  if (siblingTexto) parentTexto.insertBefore(siblingTexto, textoItemAtual);
}

const bDescerItem = document.querySelector('#mover-baixo');

bDescerItem.addEventListener('click', descerIten);

// remover item

const bRemoverItem = document.querySelector('#remover-selecionado');

function rItem() {
  const textoItemAtual = document.querySelector('.select');
  if (!textoItemAtual) return;
  textoItemAtual.remove();
}

bRemoverItem.addEventListener('click', rItem);
