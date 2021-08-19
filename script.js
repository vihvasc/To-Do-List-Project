let section = document.getElementsByTagName('section')[0];
let secTion = document.getElementsByTagName('section')[1];

let input = document.createElement('input');
input.type = 'text';
input.id = 'texto-tarefa';
section.appendChild(input);

let button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Adicionar';
button.style.backgroundColor = 'blue';
section.appendChild(button);

let listaOrdenada = document.createElement('ol');
listaOrdenada.id = 'lista-tarefas';
listaOrdenada.className = 'lista-apagar';
section.appendChild(listaOrdenada);

let buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerText = 'Limpar Lista';
secTion.appendChild(buttonClear);

function addTarefas() {
  let input = document.getElementById('texto-tarefa');

  let textoLi = document.createElement('li');
  textoLi.innerHTML = input.value;
  listaOrdenada.appendChild(textoLi);
  input.value = '';
}

let buttonAdicionar = document.getElementById('criar-tarefa');
buttonAdicionar.addEventListener('click', addTarefas);

let textoLi = document.getElementById('lista-tarefas');

textoLi.addEventListener('click', function (event) {
  const element = event.target;
  let classCor = document.querySelector('.colorSelect');
  console.log(classCor);
  if (classCor && classCor !== element) {
    classCor.classList.remove('colorSelect');
  }
  element.classList.toggle('colorSelect');
});

textoLi.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
});

buttonClear.addEventListener('click', function (event) {
  let clearList = document.querySelectorAll('li');
  for (let i = 0; i < clearList.length; i += 1) {
    clearList[i].remove();
  }
});
