window.onload = function () {

  let button = document.querySelector("#cria-tarefa");
  

  button.addEventListener("click", function() {
    
    let campoDigitado = document.querySelector("#texto-tarefa");
    let value = campoDigitado.value;
    let li = document.createElement("li");
    li.innerHTML = value;
    document.querySelector("#lista-tarefas").appendChild(li);
  })

}