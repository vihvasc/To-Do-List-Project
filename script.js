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
  if (e.target.style.backgroundColor === '') {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
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
