const buttonAdd = document.querySelector('#criar-tarefa');

const ol = document.querySelector('#lista-tarefas');

buttonAdd.addEventListener('click', (event) => {
  const text = document.querySelector('#texto-tarefa'); // pega o input
  const value = text.value; // pega o valor do inpu

  const list = document.createElement('li'); // cria uma vareavel com o elemento li
  const listAdd = ol.appendChild(list); // adiciona a vareavel com o elemento li nas ordenadas
  listAdd.innerText = value; // insere o texto na li
  text.value = '';

});
