window.onload = function () {
  //digito texto no input
  //clico no botão
  //texto do input vai para a ol

  let tasks = [];

  let list = document.getElementById('lista-tarefas');
  for (i = 0; i < 5; i += 1) {
    let listItems = document.createElement('li');
    listItems.className = "task";
    list.appendChild(listItems);
  }

  let input = document.getElementById('texto-tarefa');

  let button = document.getElementById('criar-tarefa');
  button.addEventListener('click', renderTasks);

  function renderTasks() {
    //quando clicar no botão, quero que o innertext da li seja igual ao value do input
    //quero repetir a operação a cada novo texto no input
    
    let inputText = input.value;
    let task = document.getElementsByClassName("task")[0];
    task.innerText = inputText;
    input.value = "";
  }

  renderTasks();
};
