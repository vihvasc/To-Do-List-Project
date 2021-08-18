function selectorValidator(clickOnTask, taskNumber, liLoop) {
  clickOnTask[liLoop].addEventListener('click', () => {
    for (let liLoop2 = 0; liLoop2 < taskNumber; liLoop2 += 1) {
      if (clickOnTask[liLoop2].classList.contains('selected')) {
        clickOnTask[liLoop2].classList.remove('selected');
      }
    }
    clickOnTask[liLoop].classList.add('selected');
  });
}

function taskSelector() {
  const clickOnTask = document.querySelectorAll('.task');
  for (let taskNumber = clickOnTask.length, liLoop = 0; liLoop < taskNumber; liLoop += 1) {
    selectorValidator(clickOnTask, taskNumber, liLoop);
  }
}

function setCompletedTasks(listItem) {
  listItem.addEventListener('dblclick', () => {
    if (listItem.classList.contains('completed')) {
      listItem.classList.remove('completed');
    } else {
      listItem.classList.add('completed');
    }
  });
}

function createTaskList() {
  const lista = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  const inputValue = input.value;
  const listItem = document.createElement('li');
  if (inputValue !== '') {
    listItem.innerText = inputValue;
    lista.appendChild(listItem);
    listItem.className = 'task';
    setCompletedTasks(listItem);
    taskSelector();
    input.value = '';
  }
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createTaskList);
