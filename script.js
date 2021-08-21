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

