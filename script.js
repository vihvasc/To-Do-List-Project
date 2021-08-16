createEvent();
//função que pega o valor digitado no input
function getValue(){
  const input = document.getElementById("texto-tarefa")
  let tarefa = input.value;
  console.log(tarefa);
  return tarefa;
}

//função que adiciona os valores do input à uma lista
function addValue(){

  let ol = document.getElementById("lista-tarefas");
  let list = document.createElement("li");
  list.classList.add('item-list');
  list.innerText = getValue();
  ol.appendChild(list);
  
  const input = document.getElementById("texto-tarefa");
  input.value = '';

  console.log("Estive aqui");
}

// função para criar eventos 
function createEvent(){
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addValue);
}