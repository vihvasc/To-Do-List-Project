let createTaskBtn = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

function handleAddTask() {
  let li = document.createElement('li');
  li.classList.add('list-item');
  li.textContent = input.value;
  li.addEventListener('click', handleClickItem);
  taskList.appendChild(li);

  input.value = '';
}

createTaskBtn.addEventListener('click', handleAddTask);

function handleClickItem(event) {
  for (item of taskList.children) {
    event.target.style.background = 'rgb(128, 128, 128)';
    console.log(item);
  }
}
