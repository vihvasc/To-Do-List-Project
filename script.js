window.onload = function () {
  let tasks = [];
  let input = document.getElementById('texto-tarefa'); //pega o input
  let list = document.getElementById('lista-tarefas'); //pega a ol
  let button = document.getElementById('criar-tarefa'); //pega o button
  let allTheTasks = document.getElementsByClassName('task'); //pega o li

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

  //não consigo adicionar evento de click em um li que é criada dinamicamente, ou seja, somente quando é inserido texto na caixa de input. Então a solução seria "delegar" esse evento para outro elemento, no caso o elemento pai, a ol.
  //fontes: https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript
  //https://davidwalsh.name/event-delegate

  function changeColor() {
    list.addEventListener('click', function (event) {
      if(event.target && event.target.className === "task") {
        event.target.className = "grey";
      }
    })
  }

  changeColor();

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
