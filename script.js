const buttonAdd = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const itens = document.getElementById('lista-tarefas');

function addTask() {
  const listItem = document.createElement('li');
  const task = inputText.value;
  listItem.innerText = task;
  listItem.className = 'item';
  itens.appendChild(listItem);
  inputText.value = '';
}

buttonAdd.addEventListener('click', addTask);

// altera cor de fundo da lista
const tasks = document.getElementById('lista-tarefas');

function removeClass() {
  const classList = document.querySelectorAll('.item');
  for (let index = 0; index < classList.length; index += 1) {
    classList[index].classList.remove('selected');
  }
}

function changeColor(event) {
  if (event.target.className === 'item') {
    removeClass();
    event.target.classList.add('selected');
  }
}

tasks.addEventListener('click', changeColor);
