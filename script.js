let button = document.getElementById('criar-tarefa');

button.addEventListener('click', addTask);

function addTask() {
  let ol = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  let li = document.createElement('li');
  ol.appendChild(li).innerText = input.value;
  input.value = '';
}

let li = document.getElementsByTagName('li');
let ul = document.getElementById('lista-tarefas');

ul.addEventListener('click', markTask);

function markTask(event) {
  const selectClick = event.target;
  cleanMark()
  if (selectClick.tagName === 'LI') {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}

function cleanMark() {
  for (let i = 0; i < li.length; i += 1) {
    li[i].style.backgroundColor = 'white';
  }
}
