const addButton = document.getElementById('criar-tarefa');
const addInput = document.getElementById('texto-tarefa'); 
const listOrd = document.getElementById('lista-tarefas');
const taskCreate = document.getElementsByTagName('li');
const clearFinalist = document.getElementById('remover-finalizados');

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

function clearList(){
  location.reload();
}

function removeThrough(){
  const throughClear = document.querySelectorAll('.completed');

  for(let deletThrough of throughClear){
    deletThrough.remove();
  }
}
clearFinalist.addEventListener('click', removeThrough);



