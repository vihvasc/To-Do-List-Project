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
    }
    list.appendChild(allTheTasks);
  }

  //não consigo adicionar evento de click em um li que é criada dinamicamente, ou seja,  uma li que só aparece quando é inserido texto na caixa de input. Então a solução seria "delegar" esse evento para outro elemento, no caso o elemento pai, a ol.

  //fontes: https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript
  //https://davidwalsh.name/event-delegate

  function changeColor() {
    list.addEventListener('click', function (event) {
      if (event.target && event.target.className === 'task') {
        event.target.className = 'grey';
      }
    });
  }

  changeColor();
};
