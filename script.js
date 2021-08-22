const orderedList = document.getElementById('lista-tarefas');
const createButton = document.querySelector('#criar-tarefa');
const buttonDelete = document.getElementById('apaga-tudo');
const buttonDeleteTask = document.getElementById('remover-finalizados');

function addedElementToList() {
  const addedValues = document.querySelector('#texto-tarefa');
  const text = addedValues;
  const list = document.createElement('li');
  orderedList.appendChild(list);
  list.innerText = text.value;
  text.value = '';
}

createButton.addEventListener('click', addedElementToList);

const itemDalista = document.getElementsByTagName('li');

function AdicionarCor(event) {
  for (let index = 0; index < itemDalista.length; index += 1) {
    if (itemDalista[index].classList.contains('corDoFundo')) {
      itemDalista[index].classList.remove('corDoFundo');
      itemDalista[index].style.backgroundColor = 'white';
    }
    const localDoClick = event.target;
    localDoClick.classList.add('corDoFundo');
    localDoClick.style.backgroundColor = 'gray';
  }
}

orderedList.addEventListener('click', AdicionarCor);

function adicionarRisco(event) {
  event.target.classList.toggle('completed');
}

orderedList.addEventListener('dblclick', adicionarRisco);

function deleteList() {
  const information = document.querySelectorAll('li');
  for (let index = 0; index < information.length; index += 1) {
    information[index].remove();
  }
}

buttonDelete.addEventListener('click', deleteList);

function deletarTarefa() {
  const information = document.querySelectorAll('li');
  for (let index = 0; index < information.length; index += 1) {
    if (information[index].classList.contains('completed')) {
      information[index].remove();
    }
  }
}
buttonDeleteTask.addEventListener('click', deletarTarefa);
