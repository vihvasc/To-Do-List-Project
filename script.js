  let inputTarefa = document.getElementById("texto-tarefa");
  let criarTarefa = document.getElementById("criar-tarefa");
  let listaTarefa = document.getElementById("lista-tarefas");

  criarTarefa.addEventListener("click", adicionaTarefa);

  function adicionaTarefa (){
      let valorTarefa = inputTarefa.value;
      let novaTarefa = document.createElement("li");
      novaTarefa.innerHTML = valorTarefa;
      listaTarefa.appendChild(novaTarefa);
      inputTarefa.value = "";
  }
