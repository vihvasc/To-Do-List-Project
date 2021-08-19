window.onload = function () {
  createAndAddTask();
};

function createAndAddTask() {
  let button = document.querySelector('#criar-tarefa');
  let taskInput = document.querySelector('#texto-tarefa');

  button.addEventListener('click', addTask);

  function addTask() {
    let taskList = document.querySelector('#lista-tarefas');
    let task = document.createElement('li');

    task.innerText = taskInput.value;
    task.className = 'tarefa';

    taskInput.value = '';
    taskList.appendChild(task);
    changeColorOfListItem();
  }
}
function changeColorOfListItem() {
  let listItem = document.querySelectorAll('.tarefa');
  console.log(listItem);
  console.log('cheguei na função');

  for (let index = 0; index < listItem.length; index++) {
    console.log(listItem[index]);
    listItem[index].addEventListener('click', changeColor);
  }

  function changeColor(originEvent) {
    let grayItem = document.querySelectorAll('.gray-list-item');

    if (grayItem.length > 0) {
      return originEvent.target.classList.remove('gray-list-item');
    }
    originEvent.target.classList.add('gray-list-item');
  }
}
