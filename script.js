window.onload = function () {
  let tasks = [];
  let input = document.getElementById('texto-tarefa'); //pega o input
  let list = document.getElementById('lista-tarefas'); //pega a ol
  let button = document.getElementById('criar-tarefa'); //pega o button
  let allTheTasks = document.getElementsByClassName('task'); //pega o li

  button.addEventListener('click', renderTasks);

  function renderTasks() {
    tasks.push(input.value);
    let allTheTasks = document.createElement('li');
    for (let i = 0; i < tasks.length; i += 1) {
      let liText = tasks[i];
      allTheTasks.className = 'task';
      allTheTasks.innerText = liText;
      input.value = '';
      allTheTasks.addEventListener("click", function () {
        colorRemove ();
        allTheTasks.style.background = "rgb(128, 128, 128)";
      });
    }
    list.appendChild(allTheTasks);
  }

  function colorRemove () {
    for(let i = 0; i < allTheTasks.length; i += 1) {
      allTheTasks[i].style.background = "";
    }
  }

  



};
