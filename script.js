window.onload = function () {
  let botaoCriarTarefa;
  document.getElementById('lista-tarefas').innerHTML = localStorage.itensSalvos;
  for (let i = 0; i < document.getElementById('lista-tarefas').children.length; i += 1){
    document.getElementById('lista-tarefas').children[i].addEventListener('click', grayColor);
    document.getElementById('lista-tarefas').children[i].addEventListener('dblclick', taskDone);    
  };
};
const input = document.getElementById('texto-tarefa');
let listaOrdenada = document.getElementById('lista-tarefas');
const botaoCriarTarefa = document.getElementById('criar-tarefa');
const doneButton = document.querySelector('#remover-finalizados');

function grayColor(event) {
  let listaOrdenada2 = document.getElementById('lista-tarefas').children;
  for (let i = 0; i < listaOrdenada2.length; i += 1) {
    let task = listaOrdenada2[i];
    if (
      window.getComputedStyle(task).backgroundColor === 'rgb(128, 128, 128)'
    ) {
      task.style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerHTML = input.value;
  newTask.setAttribute("class", "task");
  newTask.addEventListener('click', grayColor);
  newTask.addEventListener('dblclick', taskDone);
  input.value = '';
  listaOrdenada.appendChild(newTask);
}

botaoCriarTarefa.addEventListener('click', createTask);

function taskDone(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

let clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearAll);

function clearAll() {
  listaOrdenada2 = document.getElementById('lista-tarefas').children;
  listaOrdenada = document.getElementById('lista-tarefas');
  if (listaOrdenada2.length > 0) {
    listaOrdenada.innerHTML = ' ';
  }
}

function removeTasksDone() {
  let lista = document.getElementById("lista-tarefas").children
  for (let index = lista.length - 1; index >= 0; index -= 1) {
    if (lista[index].classList.contains('completed')) {
      listaOrdenada.removeChild(lista[index]);
    }
  }
}

doneButton.addEventListener('click', removeTasksDone);

let saveButton = document.getElementById("salvar-tarefas");
saveButton.addEventListener("click", saveOnLocalStorage);

function saveOnLocalStorage (){
  localStorage.setItem('itensSalvos', listaOrdenada.innerHTML);
};

