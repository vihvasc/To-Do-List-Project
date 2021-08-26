function addTagById(myTag, id, text) {
  const tag = document.createElement(`${myTag}`);
  tag.id = id;
  tag.innerText = text;
  document.body.appendChild(tag);
}

function selectListItem(ol, li) {
  li.addEventListener('click', () => {
    ol.childNodes.forEach((item) => {
      item.style.backgroundColor = 'white';
    });
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

function addTaskButton() {
  const inputDiv = document.getElementById('input-div');
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar Tarefa';
  inputDiv.appendChild(button);
}

function addInput() {
  const div = document.getElementById('input-div');
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  div.appendChild(input);
}

function addOrderedList() {
  const div = document.getElementById('lista-div');
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  div.appendChild(ol);
}

function addTitle() {
  const header = document.getElementById('header');
  const h1 = document.createElement('h1');
  h1.innerText = 'Minha Lista de Tarefas';
  header.appendChild(h1);
}

function completedTask(li) { 
  li.addEventListener('dblclick', () => {
    if (li.className !== 'completed') {
      li.className = 'completed';
    } else {
      li.className = 'incompleted';
    }
  });
}

function addListItem() {
  const button = document.getElementById('criar-tarefa');
  const userText = document.getElementById('texto-tarefa');

  button.addEventListener('click', () => {
    if (userText.value !== '') {
      const ol = document.getElementById('lista-tarefas');
      const li = document.createElement('li');
      li.id = userText.value;
      li.innerText = userText.value;
      selectListItem(ol, li);
      completedTask(li);
      ol.appendChild(li);
      userText.value = '';
    }
  });
}

function clearListButton() {
  const div = document.getElementById('buttons-div');
  const button = document.createElement('button');
  button.innerText = 'Apaga Tudo';
  button.id = 'apaga-tudo';
  button.addEventListener('click', () => {
    const ol = document.getElementById('lista-tarefas');
    ol.innerHTML = '';
  });
  div.appendChild(button);
}

function removeCompletedButton() {
  const taskList = document.getElementById('lista-tarefas');
  const div = document.getElementById('buttons-div');
  const button = document.createElement('button');
  const items = taskList.getElementsByTagName('li');
  button.id = 'remover-finalizados';
  button.innerText = 'Remover Finalizados';

  button.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      const actualItem = items[i];
      if (actualItem.className === 'completed') {
        taskList.removeChild(items[i]);
        i -= 1;
      }
    }
  });

  div.appendChild(button);
}

function todoList() {
  addTagById('header', 'header', '');
  addTitle();
  addTagById('p', 'funcionamento', 'Clique duas vezes em um item para marcá-lo como completo');
  addTagById('div', 'input-div', '');
  addInput();
  addTagById('div', 'lista-div', '');
  addOrderedList();
  addTaskButton();
  addListItem();
  addTagById('div', 'buttons-div', '');
  clearListButton();
  removeCompletedButton();
}

window.onload = todoList();
