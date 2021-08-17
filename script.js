const taskButton = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const removeAllButton = document.getElementById('apaga-tudo');
const removeFinisheds = document.getElementById('remover-finalizados');
const removeSelected = document.getElementById('remover-selecionado');

function addTask() {
  const textInput = inputText.value;
  const createTask = document.createElement('li');
  createTask.innerText = textInput;
  createTask.classList = 'item';
  list.appendChild(createTask);
  inputText.value = '';
}
taskButton.addEventListener('click', addTask);

const itemList = document.getElementsByTagName('li');

function clickItem(event) {
  const selectedItem = event.target;

  for (let i = 0; i < itemList.length; i += 1) {
    const allItens = itemList[i];
    allItens.classList.remove('selected');
  }
  selectedItem.classList.add('selected');
}
list.addEventListener('click', clickItem);

function completed(event) {
  const selectedItem = event.target;
  selectedItem.classList.add('completed');
}
list.addEventListener('dblclick', completed);

function removeAll() {
  const selectAll = document.querySelectorAll('.item');

  for (let i = 0; i < selectAll.length; i += 1) {
    selectAll[i].remove();
  }
}
removeAllButton.addEventListener('click', removeAll);

function removeFinished() {
  const selectedFinished = document.querySelectorAll('.completed');

  for (let i = 0; i < selectedFinished.length; i += 1) {
    selectedFinished[i].remove();
  }
}
removeFinisheds.addEventListener('click', removeFinished);

function removeSelecteds() {
  const selecteds = document.querySelectorAll('.selected');

  for (let i = 0; i < selecteds.length; i += 1) {
    selecteds[i].remove();
  }
}
removeSelected.addEventListener('click', removeSelecteds);
