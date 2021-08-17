const newList = document.createElement('ol');
newList.id = 'lista-tarefas';
document.body.appendChild(newList);

function addNewTask() {
  const addButton = document.querySelector('#criar-tarefa');
  const getInputField = document.querySelector('#task-input');
  getInputField.id = 'texto-tarefa';
  let getTask = document.querySelector('#texto-tarefa');

  addButton.addEventListener('click', function () {
    const newLine = document.createElement('li');
    newLine.innerText = getInputField.value;
    newList.appendChild(newLine);
    getInputField.value = '';
  });
}
addNewTask();
