const tags = ['body', 'header', 'h1', 'div', 'p', 'main', 'section', 'input', 'ol', 'button',
  'li'];
const ids = ['', 'header', 'funcionamento', 'texto-tarefa', 'lista-tarefas', 'criar-tarefa'];
const innerTexts = ['', 'Minha Lista de Tarefas', 'Clique duas vezes em um item para marcá-lo'
  + ' como completo', 'Nova', '[AVISO] - Digite o nome da tarefa para continuar...'];
const classes = ['', 'selected'];

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
}

createPageStructure();

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

btnNewTask();

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

clickListItem();
