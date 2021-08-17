const input = document.querySelector('#texto-tarefa');
const listOrderned = document.querySelector('#lista-tarefas');
const addButtonTask = document.querySelector('#criar-tarefa');
const liTask = document.getElementsByClassName('task');
const deleteButton = document.getElementById('apaga-tudo');
const deleteTask = document.getElementById('remover-finalizados');
const buttonSave = document.getElementById('salvar-tarefas');

function removeColor() {
  for (let index = 0; index < liTask.length; index += 1) {
    liTask[index].style.backgroundColor = '';
  }
}

function addListener() {
  for (let index = 0; index < liTask.length; index += 1) {
    liTask[index].addEventListener('click', () => {
      removeColor();
      liTask[index].style.backgroundColor = 'rgb(128, 128, 128)';
    });
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
  addButtonTask.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.className = 'task';
    li.addEventListener('dblclick', doubleClick);
    input.value = '';
    listOrderned.appendChild(li);
    addListener();
  });
}

createTask();

deleteButton.addEventListener('click', () => {
  // listOrderned.innerHTML = '';
  listOrderned.innerText = '';
});

// function deleteBut() {
//   alert('arthur');
// }
// deleteTask.addEventListener('click', deleteBut());

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

function recuperarListaSalva() {
  const listaRecuperada = JSON.parse(localStorage.getItem('listaAtual'));
  for (let index = 0; index < listaRecuperada.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = listaRecuperada[index].texto;
    li.style.backgroundColor = listaRecuperada[index].corDeFundo;
    li.className = listaRecuperada[index].nomeDaClasse;
    li.addEventListener('dblclick', doubleClick);
    listOrderned.appendChild(li);
    addListener();
  }
}

window.onload = () => {
  if (localStorage.getItem('listaAtual')) {
    recuperarListaSalva();
  }
};

buttonSave.addEventListener('click', save);
