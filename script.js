  let inputTarefa = document.getElementById("texto-tarefa");
  let criarTarefa = document.getElementById("criar-tarefa");
  let listaTarefa = document.getElementById("lista-tarefas");
  let body = document.querySelector('body');

  criarTarefa.addEventListener("click", adicionaTarefa);

  function adicionaTarefa (){
      let valorTarefa = inputTarefa.value;
      let novaTarefa = document.createElement("li");
      novaTarefa.innerHTML = valorTarefa;
      listaTarefa.appendChild(novaTarefa);
      inputTarefa.value = "";
  }

  function addSelected(element){
      let tarefas = Array.from(listaTarefa.children);
      for (let index = 0; index < tarefas.length; index += 1){
          let tarefaAtual = tarefas[index];
          if(tarefaAtual.classList.contains("selected")){
              tarefaAtual.classList.remove("selected");
          }
      }
      element.classList.add("selected");
  }

  function checkItem(originEvent) {
    const element = originEvent.target;
    if (element.parentNode.id === 'lista-tarefas') {
      addSelected(element);
    }
  }

  body.addEventListener('click', checkItem);

  