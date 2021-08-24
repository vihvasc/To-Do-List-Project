window.onload = function savedTasks() {
  if (localStorage !== null) {
    const ol = document.querySelector('.lista');
    for (let i = 0; i < localStorage.length; i += 1) {
      const taskSaved = localStorage.getItem([i]);
      ol.innerHTML += taskSaved;
    }
  }
};

function clearAllTasks() {
  const ol = document.getElementById('lista-tarefas');
  ol.innerHTML = '';
}

function clearColorTask() {
  const tasks = document.getElementsByTagName('li');
  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    task.style.backgroundColor = '';
  }
}

function finishedTask(e) {
  const task = e.target;
  if (task.className === 'completed') {
    task.className = '';
  } else {
    task.className = 'completed';
  }
}

function changeBackgroundColorTask(e) {
  const allLi = document.getElementsByTagName('li');
  for (let i = 0; i < allLi.length; i += 1) {
    const li = allLi[i];
    li.id = '';
  }
  if (e.target.style.backgroundColor === '') {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  e.target.id = 'selected';
}

function createdTask() {
  const inputValue = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  if (inputValue !== '') {
    const task = document.createElement('li');
    task.innerText = inputValue;
    list.appendChild(task);
    task.addEventListener('click', clearColorTask);
    task.addEventListener('click', changeBackgroundColorTask);
    task.addEventListener('dblclick', finishedTask);
  }
  document.getElementById('texto-tarefa').value = '';
}
createdTask();

function createButtonClearTasks() {
  const buttonClear = document.createElement('button');
  const section = document.getElementById('buttons');
  section.appendChild(buttonClear);
  buttonClear.addEventListener('click', clearAllTasks);
  buttonClear.id = 'apaga-tudo';
  buttonClear.innerText = 'Limpar';
}
createButtonClearTasks();

function deleteCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    const tasks = completedTasks[i];
    tasks.remove();
  }
}

function createButtonDeleteTasks() {
  const buttonDelete = document.createElement('button');
  const section = document.getElementById('buttons');
  section.appendChild(buttonDelete);
  buttonDelete.innerText = 'Apagar tarefas concluídas';
  buttonDelete.id = 'remover-finalizados';
  buttonDelete.addEventListener('click', deleteCompletedTasks);
}
createButtonDeleteTasks();

function saveTasks() {
  const allTasks = document.getElementsByTagName('li');
  for (let i = 0; i < allTasks.length; i += 1) {
    const task = allTasks[i];
    localStorage.setItem([i], task.outerHTML);
  }
}

function createButtonSavetasks() {
  const buttonSave = document.createElement('button');
  const section = document.getElementById('buttons');
  section.appendChild(buttonSave);
  buttonSave.innerText = 'Salvar tarefas';
  buttonSave.id = 'salvar-tarefas';
  buttonSave.addEventListener('click', saveTasks);
}
createButtonSavetasks();

const list = document.querySelector('.lista');

function moveTaskUp() {
  const li = list.querySelector('#selected');
  if (li === null) {
    alert('Por favor, selecione uma tarefa');
  } else if (li.previousElementSibling === null) {
    alert('Essa tarefa já está no topo!');
  } else {
    const liAbove = li.previousElementSibling;
    list.insertBefore(li, liAbove);
  }
}

function moveTaskDown() {
  const li = list.querySelector('#selected');
  if (li === null) {
    alert('Por favor, selecione uma tarefa');
  } else if (li.nextElementSibling == null) {
    alert('Essa tarefa já é a última da lista!');
  } else {
    const liBelow = li.nextElementSibling;
    list.insertBefore(li, liBelow.nextElementSibling);
  }
}

function createButtonMove() {
  const buttonUp = document.createElement('button');
  buttonUp.id = 'mover-cima';
  const buttonDown = document.createElement('button');
  buttonDown.id = 'mover-baixo';
  const section = document.querySelector('#buttons');
  buttonUp.addEventListener('click', moveTaskUp);
  buttonDown.addEventListener('click', moveTaskDown);
  section.appendChild(buttonUp);
  section.appendChild(buttonDown);
}
createButtonMove();

function createButtonRemoveSelectedTask() {
  const button = document.createElement('button');
  button.id = 'remover-selecionado';
  button.innerText = 'Apagar selecionada';
  const section = document.querySelector('#buttons');
  button.addEventListener('click', () => {
    const taskSelected = document.querySelector('#selected');
    taskSelected.remove();
  });
  section.appendChild(button);
}
createButtonRemoveSelectedTask();
