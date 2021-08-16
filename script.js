const inputText = document.getElementById('texto-tarefa'); //texto do input
const lo = document.getElementById('lista-tarefas'); //lista ordenada
const addButton = document.getElementById('criar-tarefa'); // botão adicionar tarefa

function addTask() {
  addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = inputText.value;
    li.className = 'tarefa';
    lo.appendChild(li);
    inputText.value = '';
    addGreyColor();
  });
}
addTask();

function addGreyColor() {
  const createTask = document.getElementsByClassName('tarefa');
  for (let index = 0; index < createTask.length; index += 1) {
    createTask[index].addEventListener('click', () => {
      createTask[index].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
