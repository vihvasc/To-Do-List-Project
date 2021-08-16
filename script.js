const buttonAdd = document.querySelector('#criar-tarefa');

const ol = document.querySelector('#lista-tarefas');

buttonAdd.addEventListener('click', () => {
  const text = document.querySelector('#texto-tarefa'); // pega o input
  const { value } = text; // pega o valor do inpu

  const list = document.createElement('li'); // cria uma vareavel com o elemento li
  list.className = 'lista';
  const listAdd = ol.appendChild(list); // adiciona a vareavel com o elemento li nas ordenadas
  listAdd.innerText = value; // insere o texto na li
  text.value = ''; // apagando o valor digitado
});

const selectOl = document.querySelector('ol');
selectOl.addEventListener('click', (event) => {
  if (event.target.classList.contains('lista')) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});
