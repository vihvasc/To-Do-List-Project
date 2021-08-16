window.onload = function () {
  let tasks = [];
  let input = document.getElementById('texto-tarefa'); //pega o input
  let list = document.getElementById('lista-tarefas'); //pega a ol
  let button = document.getElementById('criar-tarefa'); //pega o button
  let li = document.getElementsByClassName('task')[0]; //pega o li

  button.addEventListener('click', function () {
    tasks.push(input.value);
    input.value = '';
    renderTasks();
  });

  function renderTasks() {
    let listTasks = '';
    for (let i = 0; i < tasks.length; i += 1) {
      listTasks += '<li class="task">' + tasks[i] + '</li>';
    }
    list.innerHTML = listTasks;
  }

  

  //TENTATIVA DE REFATORAR A RENDERTASKS()
  // function renderTasks() {
  //   for (let i = 0; i < tasks.length; i += 1) {
  //     let listTasks = document.createElement('li');
  //     listTasks.className = "task";
  //     listTasks.innerText += tasks[i];
  //   }
  //   list.appendChild = listTasks;
  // }
};
