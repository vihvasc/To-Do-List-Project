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
    
    function changeBg(li){
      
      let deixarBranco = document.querySelectorAll(".color");

      for(count = 0; count < deixarBranco.length; count ++){
        deixarBranco[count].style.backgroundColor = "red"
      }
      li.target.style.backgroundColor = 'rgb(' + 128 + ',' + 128 + ',' + 128 + ')'
    }
    li.addEventListener("click", changeBg, false)
    
    limpar = document.querySelector("#apaga-tudo");
    
    limpar.addEventListener("click", clearList)

    function clearList () {
      selectList = document.querySelector("#lista-tarefas");

      selectList.innerHTML = '';
    }
    





  })


  

}





