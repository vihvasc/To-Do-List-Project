// // Requisito 01 - adicionando tag h1

// const h1 = document.createElement('h1');
// const body = document.getElementsByTagName('body');
// h1.innerText = 'Minha Lista de Tarefas';
// document.body.appendChild(h1);

// // Requisito 02 - adicionando tag p e texto

// const p = document.createElement('p');
// p.id = 'funcionamento';
// p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
// document.body.appendChild(p);

// // Requisito 03 - adicionando input

// const input = document.createElement('input');


// function addEventButton() {
// button.addEventListener('click' function() {
//     const valueInput = document.querySelector('#texto-tarefa');
//     const valueInput = inputValue = input.value;
//     const input = document.querySelector('#texto-tarefa');
//     document.button.appendChild('input');
//     input.value = '';
// })
// }

// addEventButton();

const input = document.querySelector('#texto-tarefa');
const olList = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');

function addInputValue () {
  button.addEventListener('click', function() {
  const li = document.createElement('li');
  li.innerText = input.value;
  olList.appendChild(li);
  input.value = '';
  })
}

addInputValue();
