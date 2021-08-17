
window.onload = AddTarefas

function AddTarefas() {

  let Input = document.createElement("input")
  Input.id = "texto-tarefa"
  let BODY = document.body
  BODY.appendChild(Input)
  let button = document.createElement("button")
  button.id = "criar-tarefa"
  BODY.appendChild(button)
  let List = document.getElementById("lista-tarefas")
  let buttonClear = document.createElement("button")
  BODY.appendChild(buttonClear)
  buttonClear.id = "apaga-tudo"
  let buttonClearFinisheds = document.createElement("button")
  buttonClearFinisheds.id = "remover-finalizados"
  BODY.appendChild(buttonClearFinisheds)
  let TextOfInput;


  button.innerText = "Adiciona Tarefa"
  Input.addEventListener("change", addTarefa)
  function addTarefa() {
    TextOfInput = Input.value


  }
  buttonClear.addEventListener("click", ClearAll)
  function ClearAll() {
    List.innerText = ""
  }





  button.addEventListener("click", clickAddTarefa)
  function clickAddTarefa() {

    let li = document.createElement("li")

    li.innerText = TextOfInput
    li.className = "li"
    List.appendChild(li)
    Input.value = ""
    li.addEventListener("click", AlternBackground)
    li.addEventListener("dblclick", Risca)
   
    function Risca() {
   
     if (li.classList.contains("completed")){
       li.classList.remove("completed")
     } else {
       li.classList.add("completed")
       li.classList.add("finish")
     }
    }

    /*
    buttonClearFinisheds.addEventListener("click", ClearFinisheds)
  function ClearFinisheds(){
  
      
      let finishs = document.querySelectorAll(".finish")      

      List.removeChild(finishs)
    
  }
  */  //terminar essa parte
     
  
 
  function AlternBackground() {
    let remove = document.querySelectorAll(".li")
    
    for (let i = 0; i < remove.length; i += 1) {
    remove[i].classList.remove("selected")
    }
    li.classList.add("selected")
      





    }
  }
}



