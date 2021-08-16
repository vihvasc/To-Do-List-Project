const inputText = document.getElementById('texto-tarefa');
const lo = document.getElementById('lista-tarefas');
const addButton = document.getElementById('criar-tarefa');

function addTask() {
  addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = inputText.value;
    lo.appendChild(li);
    inputText.value = '';
  });
}

addTask();
