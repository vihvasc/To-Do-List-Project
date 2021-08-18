window.onload = function () {
  let text = []; // texto da tarefa
  let inputBar = document.getElementById('texto-tarefa'); // pega o inputBar
  let taskList = document.getElementById('lista-tarefas'); // pega a OL
  let buttonAddTask = document.getElementById('criar-tarefa'); // pega o botão que cria tarefa
  let createTask = document.getElementsByClassName('task'); // peguei lista criada
  // let removeClass = document.getElementsByClassName('selected'); // pega classe

  buttonAddTask.addEventListener('click', createList);

  function createList() {
    text.push(inputBar.value);
    let createTask = document.createElement('li');
    for (let i = 0; i < text.length; i += 1) {
      let tasks = text[i];
      createTask.className = 'task';
      createTask.innerText = tasks;
      inputBar.value = '';

      createTask.addEventListener('dblclick', changeClass);
      function changeClass(event) {
        let dbclick = event.target;
        if (dbclick.className === 'task completed') {
          dbclick.classList.remove('completed')
        } else {
          dbclick.classList.add('completed')
        }
      }

      createTask.addEventListener('click', function () {
        removeBg();
        createTask.style.background = 'rgb(128, 128, 128)';
      });
    }
    taskList.appendChild(createTask);
  }

  function removeBg() {
    for (let i = 0; i < createTask.length; i += 1) {
      createTask[i].style.background = '';
    }
  }
};
