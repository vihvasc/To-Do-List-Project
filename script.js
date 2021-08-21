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
  if (event.target.classList.contains('lista')) { // se o alvo conter lista
    const attributeRemove = document.getElementsByTagName('li'); // guardar todas lis para percorrer
    for (let i = 0; i < attributeRemove.length; i += 1) {
      attributeRemove[i].removeAttribute('style');
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});
// Requisito 9
selectOl.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('lista')) {
    event.target.classList.toggle('completed');// função nova que aprendi de alternar
  }
});
// limpar a lista
const eraserAll = document.querySelector('#apaga-tudo');

eraserAll.addEventListener('click', () => {
  const olPai = document.getElementById('lista-tarefas');
  while (olPai.firstChild) {
    olPai.removeChild(olPai.firstChild);
  }
});
const eraserSelected = document.querySelector('#remover-finalizados');
eraserSelected.addEventListener('click', () => {
  const liCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < liCompleted.length; i += 1) {
    liCompleted[i].remove();
  }
});
// Requisito 12
const saveList = document.getElementById('salvar-tarefas');

saveList.addEventListener('click', () => { // função para salvar a lista
  const inputList = document.querySelectorAll('li');
  const saveClass = [];
  const lista = [];
  for (let i = 0; i < inputList.length; i += 1) {
    if (inputList[i].classList.contains('completed')) {
      saveClass.push('completed');
    } else {
      saveClass.push('not');
    }
    lista.push(inputList[i].innerText);
  }
  localStorage.setItem('classeSalva', JSON.stringify(saveClass));
  localStorage.setItem('listaSalva', JSON.stringify(lista));
});

function recuperaLista() { // função para recuperar a lista
  const listaRecuperada = JSON.parse(localStorage.getItem('listaSalva'));
  const classeRecuperada = JSON.parse(localStorage.getItem('classeSalva'));
  if (listaRecuperada) {
    for (let i = 0; i < listaRecuperada.length; i += 1) {
      const li = document.createElement('li');
      if (classeRecuperada[i] == 'completed') {
        li.classList.add('completed');
      }
      li.innerText = listaRecuperada[i];
      li.classList.add('lista');
      ol.appendChild(li);
    }
  }
}
// Requisito 13
// Para esse exercicio, usei a pagina do develop MoZila
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore

const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');



buttonUp.addEventListener('click', () => {
  const todasListas = document.querySelectorAll('li');
  const SelectedList = document.querySelector('.lista[style]');
  for (let i = 0; i < todasListas.length; i += 1) {
    if (todasListas[i] === SelectedList) {
      const listaSelecionada = todasListas[i].parentNode; // guarda a referencia do elemento pai
      if (i > 0) {
        const a = i - 1;
        listaSelecionada.insertBefore(todasListas[i], todasListas[a]);// insere um novo elemento antes do primeiro filho
      }
    }
  }
});

buttonDown.addEventListener('click', () => {
  const todasListas = document.querySelectorAll('li');
  const SelectedList = document.querySelector('.lista[style]');
  for (let i = 0; i < todasListas.length; i += 1) {
    if (todasListas[i] === SelectedList) {
      const listaSelecionada = todasListas[i].parentNode; // guarda a referencia do elemento pai
      if (i < todasListas.length) {
        const a = i + 1;
        if (a < todasListas.length) {
          listaSelecionada.insertBefore(todasListas[i], todasListas[a].nextSibling);// insere um novo elemento depois do primeiro filho
        }
      }
    }
  }
});

// Adicionando Requisito 14
const buttonEraserSelect = document.querySelector('#remover-selecionado');
buttonEraserSelect.addEventListener('click', () => {
  const todasListas = document.querySelectorAll('li');
  const SelectedList = document.querySelector('.lista[style]');
  for (let i = 0; i < todasListas.length; i += 1) {
    if (todasListas[i] === SelectedList) {
      todasListas[i].remove();
    }
  }
});

window.onload = function () {
  recuperaLista();
};
