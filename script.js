const body = document.body;
// Requisitos Obrigatórios:
// 01 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
// *** O que será verificado:
// ***** Será verificado se sua página possui uma tag header com o conteúdo Minha Lista de Tarefas

function adicionaTitulo() {
  const elementoHeader = document.createElement('header');
  elementoHeader.id = 'titulo-header';
  elementoHeader.textContent = 'Minha Lista de Tarefas';
  body.appendChild(elementoHeader);
}
adicionaTitulo();

// 02 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo".
// *** O que será verificado:
// ***** Será verificado que existe na sua página um elemento com o id funcionamento com o conteúdo Clique duas vezes em um item para marcá-lo como completo

function adicionaParagrafo() {
  const elementoP = document.createElement('p');
  elementoP.id = 'funcionamento';
  elementoP.textContent = 'Clique duas vezes em um item para marcá-lo como completo';
  body.appendChild(elementoP);
}
adicionaParagrafo();

// 03 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
// *** O que será verificado:
// ***** Será verificada a existência de um elemento do tipo input com o id texto-tarefa.

function adicionaInput() {
  const elementoInput = document.createElement('input');
  elementoInput.id = 'texto-tarefa';
  body.appendChild(elementoInput);
}
adicionaInput();

// 04 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
// *** O que será verificado:
// ***** Será verificada a existência de um elemento ol com o id lista-tarefas.

function criaLO() {
  const listaOrdenada = document.createElement('ol');
  listaOrdenada.id = 'lista-tarefas';
  body.appendChild(listaOrdenada);
}
criaLO();

// 05 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// *** O que será verificado:
// ***** Será verificada a existência de um elemento do tipo button com o id criar-tarefa
// ***** No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
// ***** A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.

const textoAAdicionar = document.getElementById('texto-tarefa');
console.log(textoAAdicionar.innerText);
function criaTarefa() {
  // Adicionar Botão com id='criar-tarefa'
  const botaoCriarTarefa = document.createElement('button');
  botaoCriarTarefa.id = 'criar-tarefa';
  botaoCriarTarefa.textContent = 'Adicionar Tarefa';
  body.appendChild(botaoCriarTarefa);
  // Ao se clickar no botão, captura-se o texto do input e armazena em uma variável
  botaoCriarTarefa.addEventListener('click', function() {
      const textoAAdicionar = document.getElementById('texto-tarefa');
      const listaDeTarefas = document.getElementById('lista-tarefas');
      // Ao se clickar no botão, cria-se uma 'const' li com o conteúdo dessa variável.
      const novoItem = document.createElement('li');
      novoItem.innerHTML = textoAAdicionar.value;
      // Faz-se o appendChild desse elemento li dentro da ol
      listaDeTarefas.appendChild(novoItem);
  })
}
criaTarefa();
// 0
// *** 
// ***** 
