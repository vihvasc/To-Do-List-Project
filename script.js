function handleInput() {
  const input = document.querySelector('#texto-tarefa');
  const newTask = input.value;
  input.value = '';
  return newTask;
}

function createNewListItem() {
  const newListItem = document.createElement('li');
  newListItem.innerText = handleInput();
  return newListItem;
}

function handleCreateTaskBtn() {
  const list = document.querySelector('#lista-tarefas');
  list.appendChild(createNewListItem());
}

function load() {
  const createTaskBtn = document.querySelector('#criar-tarefa');
  createTaskBtn.addEventListener('click', handleCreateTaskBtn);
}

window.onload = load;
