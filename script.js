window.onload = function () {
  let button = document.querySelector("#criar-tarefa");
  
  button.addEventListener("click", function() {
    
    let campoDigitado = document.querySelector("#texto-tarefa");
    let value = campoDigitado.value;
    let li = document.createElement("li");
    li.innerHTML = value;
    document.querySelector("#lista-tarefas").appendChild(li); 
    li.className = "color"
    campoDigitado.value = '';
    
    function changeBg(){
      li.style.backgroundColor = 'rgb(' + 128 + ',' + 128 + ',' + 128 + ')'
    }
    
    li.addEventListener("click", changeBg, false)
})

}


