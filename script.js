const newList = document.createElement('ol');
newList.id = 'lista-tarefas';
document.body.appendChild(newList);

function addNewTask() {
  const addButton = document.querySelector('#criar-tarefa');
  const getInputField = document.querySelector('#task-input');
  getInputField.id = 'texto-tarefa';
  const getTask = document.querySelector('#texto-tarefa');

  addButton.addEventListener('click', function () {
    const newLine = document.createElement('li');
    newLine.innerText = getInputField.value;
    newLine.className = 'newTask'
    newList.appendChild(newLine);
    getInputField.value = '';
    selectTask()
  }); 
  
}
addNewTask();

function selectTask() {
  console.log('entrou na funcao')
  console.log(document.getElementsByClassName('newTask'));
  const tasks = document.getElementsByClassName('newTask');
  console.log(tasks.length)

  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', function () {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';


    })

  }


}