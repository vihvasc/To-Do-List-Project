const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');

button.addEventListener('click', addListItem);

function addListItem() {
  const item = document.createElement('li');
  item.innerHTML = inputValue.value;
  list.appendChild(item);

  inputValue.value = '';
  chageBackground();
}

function chageBackground() {
  const itens = document.querySelectorAll('li');

  for (let i = 0; i < itens.length; i += 1) {
    itens[i].addEventListener('click', function() {
      clearBackground();
      itens[i].style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

function clearBackground() {
  const itens = document.querySelectorAll('li');
  
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = 'white';
  }
}

