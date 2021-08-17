
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

  let TextOfInput;


  button.innerText = "Adiciona Tarefa"
  Input.addEventListener("change", addTarefa)
  function addTarefa() {
    TextOfInput = Input.value


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
     }
    }
  
     
  
 
  
  function AlternBackground() {
    let remove = document.querySelectorAll(".li")
    
    for (let i = 0; i < remove.length; i += 1) {
    remove[i].classList.remove("selected")
    }
    li.classList.add("selected")
      





    }
  }
}



