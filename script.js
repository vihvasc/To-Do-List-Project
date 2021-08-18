const input = document.querySelector('#texto-tarefa');
const listOrderned = document.querySelector('#lista-tarefas');
const addButtonTask = document.querySelector('#criar-tarefa');
const liTask = document.getElementsByClassName('task');
const deleteButton = document.getElementById('apaga-tudo');
const deleteTask = document.getElementById('remover-finalizados');
const buttonSave = document.getElementById('salvar-tarefas');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
const buttonRemove = document.querySelector('#remover-selecionado');

function removeColor() {
  for (let index = 0; index < liTask.length; index += 1) {
    liTask[index].style.backgroundColor = '';
  }
}

function addColor(event) {
  for (let index = 0; index < liTask.length; index += 1) {
    removeColor();
    const evento = event.target;
    evento.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function doubleClick(event) {
  const eventClicked = event.target;
  if (eventClicked.className === 'task completed') {
    eventClicked.classList.remove('completed');
  } else {
    eventClicked.classList.add('completed');
  }
}

function createTask() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.className = 'task';
  li.addEventListener('click', addColor);
  li.addEventListener('dblclick', doubleClick);
  input.value = '';
  listOrderned.appendChild(li);
}

addButtonTask.addEventListener('click', createTask);

deleteButton.addEventListener('click', () => {
  // listOrderned.innerHTML = '';
  listOrderned.innerText = '';
});

deleteTask.addEventListener('click', () => {
  let classComplete = document.querySelector('.completed');
  while (classComplete) {
    classComplete.remove();
    classComplete = document.querySelector('.completed');
  }
});

function save() {
  const propriedadesDaTarefa = [];
  for (let index = 0; index < liTask.length; index += 1) {
    const objTarefa = {
      texto: liTask[index].innerText,
      corDeFundo: liTask[index].style.backgroundColor,
      nomeDaClasse: liTask[index].className,
    };
    propriedadesDaTarefa.push(objTarefa);
  }
  localStorage.setItem('listaAtual', JSON.stringify(propriedadesDaTarefa));
  alert('Lista salva com sucesso!');
}

function retrieveSavedList() {
  const retrieveList = JSON.parse(localStorage.getItem('listaAtual'));
  for (let index = 0; index < retrieveList.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = retrieveList[index].texto;
    li.style.backgroundColor = retrieveList[index].corDeFundo;
    li.className = retrieveList[index].nomeDaClasse;
    li.addEventListener('click', addColor);
    li.addEventListener('dblclick', doubleClick);
    listOrderned.appendChild(li);
  }
}

window.onload = () => {
  if (localStorage.getItem('listaAtual')) {
    retrieveSavedList();
  }
};

buttonSave.addEventListener('click', save);

function moveUp() {
  for (let index = 0; index < liTask.length; index += 1) {
    if (liTask[index].style.backgroundColor && index > 0) {
      listOrderned.insertBefore(liTask[index], liTask[index].previousSibling);
      return;
    }
  }
}

buttonUp.addEventListener('click', moveUp);

function moveDown() {
  for (let index = 0; index < liTask.length; index += 1) {
    if (liTask[index].style.backgroundColor && index < liTask.length - 1) {
      listOrderned.insertBefore(liTask[index], liTask[index + 1].nextSibling);
      return;
    }
  }
}

buttonDown.addEventListener('click', moveDown);

function removeTask() {
  for (let index = 0; index < liTask.length; index += 1) {
    if (liTask[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      liTask[index].remove();
    }
  }
}

buttonRemove.addEventListener('click', removeTask);
