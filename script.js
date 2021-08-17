const input = document.getElementById('texto-tarefa');
const olList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const liSelect = document.getElementsByTagName('li');
const clearButton = document.getElementById('apaga-tudo');
const removeButton = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');

function paintingLiBackground(event) {
  for (let index = 0; index < liSelect.length; index += 1) {
    liSelect[index].style.backgroundColor = '';
  }
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function lineTrough(event) {
  const liTarget = event.target;
  if (liTarget.className === 'completed') {
    liTarget.classList.remove('completed');
  } else {
    liTarget.classList.add('completed');
  }
}

function addInputValue() {
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.addEventListener('click', paintingLiBackground);
    li.addEventListener('dblclick', lineTrough);
    olList.appendChild(li);
    input.value = '';
  });
}

addInputValue();

function addButton() {
  clearButton.addEventListener('click', () => {
    olList.innerHTML = '';
  });
}

addButton();

function removeElementsLi() {
  removeButton.addEventListener('click', () => {
    const item = document.querySelectorAll('.completed');
    for (let index = 0; index < item.length; index += 1) {
      item[index].remove();
    }
  });
}

removeElementsLi();

function savingTasks() {
  saveTasks.addEventListener('click', () => {
    localStorage.setItem('tasksList', olList.innerHTML);
  });
}

savingTasks();

window.onload = () => {
  olList.innerHTML = localStorage.getItem('tasksList');
};
