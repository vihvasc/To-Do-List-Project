const newList = document.createElement('ol');
newList.id = 'lista-tarefas';
document.body.appendChild(newList);

function addNewTask() {
  const addButton = document.querySelector('#criar-tarefa');
  const getInputField = document.querySelector('#task-input');
  let getTask = document.querySelector('#texto-tarefa');

  addButton.addEventListener('click', function () {
    const newLine = document.createElement('li');
    newList.appendChild(newLine);
    console.log('valor: ');
    console.log(getInputField.value);
    newLine.innerText = getTask;
    getInputField.value = '';
  });
}
addNewTask();
