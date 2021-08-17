const tags = ['body', 'header', 'h1', 'div', 'p', 'main', 'section', 'input', 'ol', 'button',
  'li'];
const ids = ['', 'header', 'funcionamento', 'texto-tarefa', 'lista-tarefas', 'criar-tarefa',
  'apaga-tudo', 'remover-finalizados', 'salvar-tarefas', 'mover-cima', 'mover-baixo'];
const innerTexts = ['', 'Minha Lista de Tarefas', 'Clique duas vezes em um item para marcá-lo'
  + ' como completo', 'Nova', '[AVISO] - Digite o nome da tarefa para continuar...', 'Apagar', 
'Remover Finalizados', 'Salvar Tarefas', '▲', '▼'];
const classes = ['', 'selected', 'completed'];

function createList(myArray) {
  const titlesList = {
    parent: myArray[0],
    numParent: myArray[1],
    newElement: myArray[2],
    id: myArray[3],
    className: myArray[4],
    innerText: myArray[5],
  };
  return titlesList;
}

function createElements(myArray) {
  const titlesList = createList(myArray);
  const parent = document.getElementsByTagName(titlesList.parent)[titlesList.numParent];
  const newElement = document.createElement(titlesList.newElement);
  if (titlesList.id !== '') {
    newElement.id = titlesList.id;
  }
  if (titlesList.className !== '') {
    newElement.className = titlesList.className;
  }
  if (titlesList.innerText !== '') {
    newElement.innerText = titlesList.innerText;
  }
  parent.appendChild(newElement);
}

function createPageStructure() {
  createElements([tags[0], 0, tags[1], ids[0], classes[0], innerTexts[0]]);
  createElements([tags[1], 0, tags[2], ids[1], classes[0], innerTexts[1]]);
  createElements([tags[0], 0, tags[3], ids[0], classes[0], innerTexts[0]]);
  createElements([tags[3], 0, tags[4], ids[2], classes[0], innerTexts[2]]);
  createElements([tags[0], 0, tags[5], ids[0], classes[0], innerTexts[0]]);
  createElements([tags[5], 0, tags[6], ids[0], classes[0], innerTexts[0]]);
  createElements([tags[6], 0, tags[7], ids[3], classes[0], innerTexts[0]]);
  createElements([tags[5], 0, tags[6], ids[0], classes[0], innerTexts[0]]);
  createElements([tags[6], 1, tags[8], ids[4], classes[0], innerTexts[0]]);
  createElements([tags[5], 0, tags[6], ids[0], classes[0], innerTexts[0]]);
  createElements([tags[6], 2, tags[9], ids[5], classes[0], innerTexts[3]]);
  createElements([tags[6], 2, tags[9], ids[6], classes[0], innerTexts[5]]);
  createElements([tags[6], 2, tags[9], ids[7], classes[0], innerTexts[6]]);
  createElements([tags[6], 2, tags[9], ids[8], classes[0], innerTexts[7]]);
  createElements([tags[6], 2, tags[9], ids[9], classes[0], innerTexts[8]]);
  createElements([tags[6], 2, tags[9], ids[10], classes[0], innerTexts[9]]);
}

function createNewTask() {
  const inputTextoTarefa = document.getElementById(ids[3]);
  if (inputTextoTarefa.value !== '') {
    const olListaTarefas = document.getElementById(ids[4]);
    const liNewTask = document.createElement(tags[10]);
    liNewTask.innerText = inputTextoTarefa.value;
    olListaTarefas.appendChild(liNewTask);
    inputTextoTarefa.value = '';
  } else {
    window.alert(innerTexts[4]);
  }
  inputTextoTarefa.focus();
}

function btnNewTask() {
  const btnCriarTarefa = document.getElementById(ids[5]);
  btnCriarTarefa.addEventListener('click', createNewTask);
}

function selectListItem(event) {
  const liListItem = event;
  const liSelecteItem = document.getElementsByClassName(classes[1]);
  if (liSelecteItem.length > 0) {
    liSelecteItem[0].classList.remove(classes[1]);
    liListItem.target.classList.add(classes[1]);
  } else {
    liListItem.target.classList.add(classes[1]);
  }
}

function clickListItem() {
  const olListaTarefas = document.getElementById(ids[4]);
  olListaTarefas.addEventListener('click', selectListItem);
}

function dblListItem(event) {
  const liListItem = event;
  if (liListItem.target.className.includes(classes[2])) {
    liListItem.target.classList.remove(classes[2]);
  } else {
    liListItem.target.classList.add(classes[2]);
  }
}

function dblclickListItem() {
  const olListaTarefas = document.getElementById(ids[4]);
  olListaTarefas.addEventListener('dblclick', dblListItem);
}

function removeList() {
  const olListaTarefas = document.getElementById(ids[4]);
  const numItensList = olListaTarefas.childElementCount;
  for (let index = 0; index < numItensList; index += 1) {
    olListaTarefas.removeChild(olListaTarefas.lastChild);
  }
}

function btnRemoveList() {
  const btnApagaTudo = document.getElementById(ids[6]);
  btnApagaTudo.addEventListener('click', removeList);
}

function removeSelected() {
  const olListaTarefas = document.getElementById(ids[4]);
  const numItensList = olListaTarefas.childElementCount;
  for (let index = (numItensList - 1); index >= 0; index -= 1) {
    if (olListaTarefas.children[index].className.includes(classes[2])) {
      olListaTarefas.removeChild(olListaTarefas.children[index]);
    }
  }
}

function btnRemoveSelected() {
  const btnRemoverFinalizados = document.getElementById(ids[7]);
  btnRemoverFinalizados.addEventListener('click', removeSelected);
}

function saveTasks() {
  const olListaTarefas = document.getElementById(ids[4]);
  const numItensList = olListaTarefas.childElementCount;
  const listTasks = [];
  for (let index = 0; index < numItensList; index += 1) {
    const listItem = {
      innerText: olListaTarefas.children[index].innerText,
      className: olListaTarefas.children[index].className,
    };
    listTasks.push(listItem);
  }
  localStorage.setItem('ToDoListTasks', JSON.stringify(listTasks));
}

function btnSaveTasks() {
  const btnSalvarTarefas = document.getElementById(ids[8]);
  btnSalvarTarefas.addEventListener('click', saveTasks);
}

function recoverySavedTasks() {
  const olListaTarefas = document.getElementById(ids[4]);
  const listTasks = JSON.parse(localStorage.getItem('ToDoListTasks'));
  for (let index = 0; index < listTasks.length; index += 1) {
    const liListItem = document.createElement(tags[10]);
    liListItem.innerText = listTasks[index].innerText;
    liListItem.className = listTasks[index].className;
    olListaTarefas.appendChild(liListItem);
  }
}

function existSavedTasks() {
  const savedTasks = localStorage.getItem('ToDoListTasks');
  if (savedTasks !== null && savedTasks !== '') {
    recoverySavedTasks();
  }
}

function liMoveUp() {
  const liSelectedItem = document.getElementsByClassName('selected')[0];
  if (liSelectedItem) {
    const liPreviusItem = liSelectedItem.previousElementSibling;
    if (liPreviusItem) {
      const liAuxItem = document.createElement(ids[10]);
      liAuxItem.innerText = liSelectedItem.innerText;
      liAuxItem.className = liSelectedItem.className;
      liSelectedItem.innerText = liPreviusItem.innerText;
      liSelectedItem.className = liPreviusItem.className;
      liPreviusItem.innerText = liAuxItem.innerText;
      liPreviusItem.className = liAuxItem.className;
    }
  }
}

function btnLiMoveUp() {
  const btnMoverCima = document.getElementById(ids[9]);
  btnMoverCima.addEventListener('click', liMoveUp);
}

function liMoveDown() {
  const liSelectedItem = document.getElementsByClassName('selected')[0];
  if (liSelectedItem) {
    const liNextItem = liSelectedItem.nextElementSibling;
    if (liNextItem) {
      const liAuxItem = document.createElement(ids[10]);
      liAuxItem.innerText = liSelectedItem.innerText;
      liAuxItem.className = liSelectedItem.className;
      liSelectedItem.innerText = liNextItem.innerText;
      liSelectedItem.className = liNextItem.className;
      liNextItem.innerText = liAuxItem.innerText;
      liNextItem.className = liAuxItem.className;
    }
  }
}

function btnLiMoveDown() {
  const btnMoverBaixo = document.getElementById(ids[10]);
  btnMoverBaixo.addEventListener('click', liMoveDown);
}

window.onload = function startPage() {
  createPageStructure();
  btnNewTask();
  clickListItem();
  dblclickListItem();
  btnRemoveList();
  btnRemoveSelected();
  btnSaveTasks();
  existSavedTasks();
  btnLiMoveUp();
  btnLiMoveDown();
};
