const addButton = document.getElementById('criar-tarefa'); //botao
const addInput = document.getElementById('texto-tarefa'); // input
const listOrd = document.getElementById('lista-tarefas');//lista ordenada
const taskCreate = document.getElementsByTagName('li');//listas das tarefas criadas


function inputTask() {
  addButton.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerText = addInput.value;
    addInput.value = "";
    listOrd.appendChild(li);
    addEvent();
    removeSelector()
  });
}
inputTask()

// Requisito 7

function addEvent() {
  for (let index = 0; index < taskCreate.length; index += 1) {
    taskCreate[index].addEventListener('click', function () {
      removeSelector()
      taskCreate[index].style.backgroundColor = ' rgb(128, 128, 128)';
      });
  }
}

function removeSelector() {
  for (let index = 0; index < taskCreate.length; index += 1) {
    taskCreate[index].style.backgroundColor = "";
  }
}

// Requisito 9
function styleLine(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = "none";
  } else {
    event.target.classList.add('completed');
    event.target.style.textDecoration = "line-through";
  }
}
 listOrd.addEventListener('dblclick', styleLine);
  

