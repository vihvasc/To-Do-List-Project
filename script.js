const input = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const arrayList = document.getElementsByTagName('li');

// Requisito 7 e 8
function changeBgColor(event) {
  for (let index = 0; index < arrayList.length; index += 1) {
    arrayList[index].style.backgroundColor = '';
  }
  const eventClicked = event.target;
  eventClicked.style.backgroundColor = 'rgb(128, 128, 128)';
}
// Requisitos 5 e 6
function addTasks() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.addEventListener('click', changeBgColor);
  listTasks.appendChild(li);
  input.value = '';
}

buttonAdd.addEventListener('click', addTasks);
