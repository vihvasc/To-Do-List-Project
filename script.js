const addButton = document.getElementById('criar-tarefa');
const addInput = document.getElementById('texto-tarefa');
const listOrd = document.getElementById('lista-tarefas');

function inputTask() {
  addButton.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerText = addInput.value;
    addInput.value = "";
    listOrd.appendChild(li);
  });
}
inputTask()