const button = document.querySelector('#criar-tarefa');
const inputValue = document.querySelector('#texto-tarefa');
const theList = document.querySelector('#lista-tarefas');

// 5 - 6. Created function for addItem and order
function addItemList() {
  if (inputValue.value === null || inputValue.value === '') { // ref.: https://pt.stackoverflow.com/questions/39139/como-impedir-o-submit-de-um-formul%C3%A1rio-vazio
    alert('Digite uma tarefa no campo abaixo!');
    return false;
  }
  const creatLiItem = document.createElement('li');
  creatLiItem.innerText = inputValue.value;
  creatLiItem.classList.add('li-list');
  theList.appendChild(creatLiItem);
  inputValue.value = '';
}
button.addEventListener('click', addItemList);

// 7 - 8. Created function for change background-color and select one item
theList.addEventListener('click', (event) => {
  const liItem = document.querySelectorAll('li');
  for (let i = 0; i < liItem.length; i += 1) {
    liItem[i].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

// 9. Scratched
function scratched(event) {
  event.target.classList.toggle('completed');
}
theList.addEventListener('dblclick', scratched);

// 10. Delete everything
function deleteEverything() {
  const listOl = document.querySelector('ol');
  listOl.innerHTML = '';
}
const buttonDelete = document.querySelector('#apaga-tudo');
buttonDelete.addEventListener('click', deleteEverything);
