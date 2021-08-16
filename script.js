let createTaskBtn = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

function handleAddTask() {
  let li = document.createElement('li');
  li.classList.add('list-item');
  li.textContent = input.value;

  li.addEventListener('click', handleClickItem);
  li.addEventListener('dblclick', handleDoubleClickItem);

  taskList.appendChild(li);

  input.value = '';
}

createTaskBtn.addEventListener('click', handleAddTask);

function handleClickItem(event) {
  for (item of taskList.children) {
    item.classList.remove('selected');
    item.style.background = '';

    event.target.style.background = 'rgb(128, 128, 128)';
    event.target.classList.add('selected');
  }
}

let isCompleted = false;
function handleDoubleClickItem(event) {
  if (isCompleted === false) {
    for (item of taskList.children) {
      event.target.classList.add('completed');
      isCompleted = true;
    }
  } else {
    event.target.classList.remove('completed');
    isCompleted = false;
  }
}
