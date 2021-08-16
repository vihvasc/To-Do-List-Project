const input = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const arrayList = document.getElementsByTagName('li');

// Requisitos 5 e 6
function addTasks() {
  const li = document.createElement('li');
  li.innerText = input.value;
  listTasks.appendChild(li);
  input.value = '';
  changeBgColor();
}

buttonAdd.addEventListener('click', addTasks);

// Requisito 7
function changeBgColor() {
  for (let index = 0; index < arrayList.length; index += 1) {
    arrayList[index].addEventListener('click', () => {
      arrayList[index].className = 'clicked';
      arrayList[index].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
