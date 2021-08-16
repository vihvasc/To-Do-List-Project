const tags = ['body', 'header', 'h1', 'div', 'p', 'main', 'section', 'input'];
// const ids = [''];
// const classes = [''];

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
  createElements([tags[0], 0, tags[1], '', '', '']);
  createElements([tags[1], 0, tags[2], tags[1], '', 'Minha Lista de Tarefas']);
  createElements([tags[0], 0, tags[3], '', '', '']);
  createElements([tags[3], 0, tags[4], 'funcionamento', '', 'Clique duas vezes' +
    ' em um item para marcá-lo como completo']);
  createElements([tags[0], 0, tags[5], '', '', '']);
  createElements([tags[5], 0, tags[6], '', '', '']);
  createElements([tags[6], 0, tags[7], 'texto-tarefa', '', '']);
}

createPageStructure();
