window.onload = function () {
  let botaoCriarTarefa;
};

let paragrafo = document.getElementById('funcionamento');
let input = document.getElementById('texto-tarefa');
let listaOrdenada = document.getElementById('lista-tarefas');
let botaoCriarTarefa = document.getElementById('criar-tarefa');

botaoCriarTarefa.addEventListener('click', createTask);

function createTask() {
  let newTask = document.createElement('li');
  newTask.innerHTML = input.value;
  newTask.addEventListener('click', grayColor);
  newTask.addEventListener('dblclick', taskDone);
  input.value = '';
  listaOrdenada.appendChild(newTask);
}

function grayColor(event) {
  listaOrdenada = document.getElementById('lista-tarefas').children;
  for (let i = 0; i < listaOrdenada.length; i += 1) {
    let task = listaOrdenada[i];
    if (
      window.getComputedStyle(task).backgroundColor === 'rgb(128, 128, 128)'
    ) {
      task.style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function taskDone(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

let clearButton = document.getElementById("apaga-tudo");
clearButton.addEventListener("click", clearAll);

function clearAll (){  
  listaOrdenada = document.getElementById('lista-tarefas').children;
  listaOrdenada2 = document.getElementById('lista-tarefas')
  if (listaOrdenada.length > 0){
    listaOrdenada2.innerHTML = " "    
  };
};

