function todoList() {
  addTagById('header', 'header', '');
  addTitle();
  addTagById('p', 'funcionamento', 'Clique duas vezes em um item para marcá-lo como completo')
  addTagById('div', 'input-div', '')
  addInput();
  addTagById('div', 'lista-div', '')
  addOrderedList();
  addTaskButton();
  addListItem();
};

function addTagById(myTag, id, text) {
  const tag = document.createElement(`${myTag}`)
  tag.id = id;
  tag.innerText = text;
  document.body.appendChild(tag);
};

function addListItem() {
  const button = document.getElementById('criar-tarefa');
  const userText = document.getElementById('texto-tarefa');

  button.addEventListener('click', () => {
    if (userText.value !== '') {
      console.log(userText.value);
      const ol = document.getElementById('lista-tarefas');
      const li = document.createElement('li')
      li.id = userText.value;
      li.innerText = userText.value;
      ol.appendChild(li)
      userText.value = '';
      removeListItem();
    }
  });
}

function removeListItem() {
  const li = document.querySelectorAll('li')
  li.forEach(item => {
    item.addEventListener('click', () => {
      li.forEach(item => {
        item.style.backgroundColor = 'white';
      });
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    }
  );
};

//Child tags
function addTaskButton() {
  const inputDiv = document.getElementById('input-div');
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar Tarefa'
  inputDiv.appendChild(button);
};

function addInput() {
  const div = document.getElementById('input-div');
  const input = document.createElement('input');
  input. id = 'texto-tarefa';
  div.appendChild(input);
};

function addOrderedList() {
  const div = document.getElementById('lista-div');
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  div.appendChild(ol);
};

function addParagraph() {
  const paragraph = document.createElement('p');
  const header = document.getElementById('header');
  paragraph.id = 'funcionamento';
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(paragraph);
};

function addTitle() {
  const header = document.getElementById('header');
  const h1 = document.createElement('h1');
  h1.innerText = 'Minha Lista de Tarefas';
  header.appendChild(h1);
};

window.onload = todoList();
