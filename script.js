const buttonAddItem = document.querySelector('#criar-tarefa');
const buttonDelete = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const inputValue = document.querySelector('#texto-tarefa');
const olList = document.querySelector('ol');
const theList = document.querySelector('#lista-tarefas');

// 5 - 6. Created function for addItem and order
function addItemList() {
  if (inputValue.value === null || inputValue.value === '') { // ref.: https://pt.stackoverflow.com/questions/39139/como-impedir-o-submit-de-um-formul%C3%A1rio-vazio
    alert('Digite uma tarefa no campo abaixo!');
    return false;
  }
  const creatListItem = document.createElement('li');
  creatListItem.innerText = inputValue.value;
  creatListItem.classList.add('li-list');
  theList.appendChild(creatListItem);
  inputValue.value = '';
}
buttonAddItem.addEventListener('click', addItemList);

// 7 - 8. Created function for change background-color and select one item
function colorirLista(event) {
  const listItem = document.querySelectorAll('li');
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = 'white';
  }
  const evento = event.target;
  evento.style.backgroundColor = 'rgb(128,128,128)';
}
olList.addEventListener('click', colorirLista);

// 9. Scratched
function scratched(event) {
  event.target.classList.toggle('completed');
}
theList.addEventListener('dblclick', scratched);

// 10. Created button of delete everything
function deleteEverything() {
  const listOl = document.querySelector('ol');
  listOl.innerHTML = '';
}
buttonDelete.addEventListener('click', deleteEverything);

// 11. Created button of remove
function remove() {
  const removeFinished = document.querySelectorAll('li');
  const listComplete = document.querySelector('ol');
  for (let i = 0; i < removeFinished.length; i += 1) {
    if (removeFinished[i].classList.contains('completed')) {
      listComplete.removeChild(removeFinished[i]);
    }
  }
}
buttonRemoveFinished.addEventListener('click', remove);
