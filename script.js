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
