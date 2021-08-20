const creatTask = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const allLi = document.getElementsByTagName('li');

function addItem() {
  const input = document.getElementById('texto-tarefa').value;
  let addToList = list.innerHTML;
  addToList = `${addToList}<li>${input}</li>`;

  document.getElementById('lista-tarefas').innerHTML = addToList;
  document.getElementById('texto-tarefa').value = '';
}

function clickChange(event) {
  for (let i = 0; i < allLi.length; i += 1) {
    if (allLi[i].classList.contains('greySelected')) {
      allLi[i].classList.remove('greySelected');
    }
  }
  event.target.classList.add('greySelected');
}

creatTask.addEventListener('click', addItem);
list.addEventListener('click', clickChange);
