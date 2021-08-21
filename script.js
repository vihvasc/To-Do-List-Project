// 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
function criarHeader() {
  const novoHeader = document.createElement('header');
  novoHeader.textContent = 'Minha Lista de Tarefas';
  document.body.appendChild(novoHeader);
}
criarHeader();

// 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
function criarParagrafo() {
  const novoParagrafo = document.createElement('p');
  novoParagrafo.textContent = 'Clique duas vezes em um item para marcá-lo como completo';
  novoParagrafo.id = 'funcionamento';
  document.body.appendChild(novoParagrafo);
}
criarParagrafo();

// 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
function criarInput() {
  const novoInput = document.createElement('input');
  novoInput.id = 'texto-tarefa';
  document.body.appendChild(novoInput);
}
criarInput();

// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// 6 - Ordene os itens da lista de tarefas por ordem de criação
function criarBotao() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'criar-tarefa';
  novoBotao.innerText = 'Adicionar';
  document.body.appendChild(novoBotao);

  novoBotao.addEventListener('click', function () {
    const textoInput = document.getElementById('texto-tarefa').value;
    const listaDeTarefas = document.getElementById('lista-tarefas');

    const novoElementoDaLista = document.createElement('li');
    novoElementoDaLista.addEventListener('dblclick', riscarElemento);
    novoElementoDaLista.addEventListener('click', selecionarElemento);
    novoElementoDaLista.innerText = textoInput;
    novoElementoDaLista.className = 'elemento-lista';
    listaDeTarefas.appendChild(novoElementoDaLista);
    document.getElementById('texto-tarefa').value = '';
  });
}
criarBotao();

// 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
function criarListaDeTarefas() {
  const novaListaDeTarefas = document.createElement('ol');
  novaListaDeTarefas.id = 'lista-tarefas';
  document.body.appendChild(novaListaDeTarefas);
}
criarListaDeTarefas();

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
function selecionarElemento(event) {
const elementoAtual = document.querySelector('.selected');
if (elementoAtual) {
  elementoAtual.style.backgroundColor = '#FFFFFF'
  elementoAtual.classList.remove('selected');
}
let elementoClickado = event.target;
elementoClickado.classList.add('selected')
elementoClickado.style.backgroundColor = 'rgb(128, 128, 128)';
}

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function riscarElemento(event) {
  let elementoDblClick= event.target
  const styleElemento = elementoDblClick.style.textDecoration;
  if (styleElemento === 'line-through solid rgb(0, 0, 0)') {
    elementoDblClick.style.textDecoration = '';
    elementoDblClick.classList.remove('completed');
  } else {
    elementoDblClick.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    elementoDblClick.classList.add('completed');
  }
}

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
function apagarTodosElementos() {
  let elementosLista = document.getElementsByClassName('elemento-lista');
  let listaAtual = document.getElementById('lista-tarefas');
  const tamanhoLista = elementosLista.length;
  for (let index = 0; index < tamanhoLista; index += 1) {
    listaAtual.removeChild(elementosLista[0]);
   }
}

function criarBotaoApagaTudo() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'apaga-tudo';
  novoBotao.innerText = 'Limpa Lista';
  document.body.appendChild(novoBotao);

  novoBotao.addEventListener('click', apagarTodosElementos);
}
criarBotaoApagaTudo();

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
function apagarElementosFinalizados() {
  let elementosLista = document.getElementsByClassName('completed');
  let listaAtual = document.getElementById('lista-tarefas');
  const tamanhoLista = elementosLista.length;
  if (tamanhoLista > 0) {
    for (let index = 0; index < tamanhoLista; index += 1) {
      listaAtual.removeChild(elementosLista[0]);
     }
  }
}

function criarBotaoApagaFinalizados() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'remover-finalizados';
  novoBotao.innerText = 'Remove Finalizados';
  document.body.appendChild(novoBotao);

  novoBotao.addEventListener('click', apagarElementosFinalizados);
}
criarBotaoApagaFinalizados();
