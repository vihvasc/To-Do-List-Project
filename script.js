function changeLiColor (receivedEvent) {
  const tasksList = document.querySelectorAll('#lista-tarefas> *');
  const element = receivedEvent.target;
  const currentColor = getComputedStyle(receivedEvent.target).getPropertyValue('background-color');
  for (let index = 0; index < tasksList.length; index += 1) {
    tasksList[index].style.backgroundColor = ''; 
  }
  (currentColor !== 'rgb(128, 128, 128)') ? element.style.backgroundColor = 'rgb(128, 128, 128)' : element.style.backgroundColor = '';
}

function createTask() {
  const actionButton = document.getElementById('criar-tarefa');
  const contentTarget = document.getElementById('lista-tarefas');
  const inputElement = document.getElementById('texto-tarefa');

  actionButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerHTML = inputElement.value;
    contentTarget.appendChild(newTask);
    newTask.addEventListener('click', changeLiColor);
    newTask.addEventListener('dblclick', checkCompletedTask);
    inputElement.value = '';
  });
}

createTask();

function checkCompletedTask (receivedEvent) {
  const selectedTask = receivedEvent.target;
  const classOfElement = selectedTask.className;
  (classOfElement !== 'completed') ? selectedTask.classList.add('completed') : selectedTask.classList.remove('completed');
}

function clearTaskList () {
  const clearButton = document.getElementById('apaga-tudo');
  const taskList = document.querySelector('#lista-tarefas');
  clearButton.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

clearTaskList();

function clearCompleted () {
  const clearCompletedButton = document.getElementById('remover-finalizados');
  const completedList = document.getElementsByClassName('completed');
  const taskList = document.getElementById('lista-tarefas');
  let toRemove = [];
  clearCompletedButton.addEventListener('click', ()=> {
    console.log(completedList);
    for (let index = 0; index < completedList.length; index += 1) {
      toRemove.push(completedList[index]);
    }
    console.log(toRemove);
    for (let index = 0; index < toRemove.length; index += 1) {
      taskList.removeChild(toRemove[index]);
    }
    toRemove = [];
  });
}

clearCompleted();

function saveTasks () {
  const saveButton = document.getElementById('salvar-tarefas');
  
  saveButton.addEventListener('click', () => {
    const tasksToSave = document.querySelectorAll('#lista-tarefas> *');
    const listToStorage = [];
    for (let index = 0; index < tasksToSave.length; index += 1) {
      let object = {text: tasksToSave[index].innerHTML, class: tasksToSave[index].className};
      listToStorage.push(object);
    }
    localStorage.setItem('tasks', JSON.stringify(listToStorage));
    JSON.parse(localStorage.getItem('tasks'));
  });
}

saveTasks();

function loadTaskList () {
  const containerToLoad = document.getElementById('lista-tarefas');
  const tasksStore = JSON.parse(localStorage.getItem('tasks'));
  if (tasksStore === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  } else {
    for (let index = 0; index < tasksStore.length; index += 1) {
      const theElement = document.createElement('li');
      theElement.addEventListener('click', changeLiColor);
      theElement.addEventListener('dblclick', checkCompletedTask);
      theElement.innerHTML = tasksStore[index].text;
      theElement.className = tasksStore[index].class;
      containerToLoad.appendChild(theElement);
    }
  }
}
 
loadTaskList();