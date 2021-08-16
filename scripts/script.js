function todoList() {
  addTitle();
  addParagraph();
  addInput();
};

function addInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  document.body.appendChild(input);
};

function addParagraph() {
  const paragraph = document.createElement('p');
  const header = document.getElementById('header');
  paragraph.id = 'funcionamento'
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(paragraph);
};

function addTitle() {
  const header = document.createElement('header');
  header.id = 'header';
  const h1 = document.createElement('h1');
  
  h1.innerText = 'Minha Lista de Tarefas';
  document.body.appendChild(header);
  header.appendChild(h1);
};

window.onload = todoList();