window.onload = function () {
  let tasks = [];
  let input = document.getElementById('texto-tarefa'); //pega o input
  let list = document.getElementById('lista-tarefas'); //pega a ol
  let button = document.getElementById('criar-tarefa'); //pega o button
  let allTheTasks = document.getElementsByClassName('task'); //pega o li
  let removeAllTasks = document.getElementById('apaga-tudo'); //pega o button de remover
  let removeSelectedTasks = document.getElementById('remover-finalizados'); //pega o button de remover as tags tachadas

  button.addEventListener('click', renderTasks);

  function renderTasks() {
    tasks.push(input.value);
    let allTheTasks = document.createElement('li');
    for (let i = 0; i < tasks.length; i += 1) {
      let liText = tasks[i];
      allTheTasks.className = 'task';
      allTheTasks.innerText = liText;
      input.value = '';
      allTheTasks.addEventListener('click', function () {
        colorRemove();
        allTheTasks.style.background = 'rgb(128, 128, 128)';
      });

      allTheTasks.addEventListener('dblclick', finishTask);
    }
    list.appendChild(allTheTasks);
  }

  function colorRemove() {
    for (let i = 0; i < allTheTasks.length; i += 1) {
      allTheTasks[i].style.background = '';
    }
  }

  function finishTask(event) {
    let clicked = event.target;
    if (clicked.className === 'task completed') {
      clicked.classList.remove('completed');
    } else {
      clicked.classList.add('completed');
    }
  }

  removeAllTasks.addEventListener('click', removeTasks);
  function removeTasks() {
    list.innerText = '';
  }

  removeSelectedTasks.addEventListener('click', removeFinishedTasks);

  function removeFinishedTasks() {
    let completed = document.querySelectorAll('.completed');
    for (let i = 0; i < completed.length; i += 1) {
      list.removeChild(completed[i]);
    }
  }
};
