


function AddTarefas(){
    let Input = document.createElement("input")
    Input.id = "texto-tarefa"
    let BODY = document.body
    BODY.appendChild(Input)
    let button = document.createElement("button")
    button.id = "criar-tarefa"
    BODY.appendChild(button)
    let List = document.getElementById("lista-tarefas")
    let TextOfInput;
    let ClearInput = ""
     button.innerText = "Adiciona Tarefa"
    Input.addEventListener("change", addTarefa)
    function addTarefa(){
      TextOfInput = Input.value
       console.log(TextOfInput)
     
    }
    
    button.addEventListener("dblclick", clickAddTarefa)
    function clickAddTarefa(){
         let li = document.createElement("li")
         li.innerText = TextOfInput
         List.appendChild(li)
         document.getElementById("texto-tarefa").value = ""
         console.log(li)
    }
  
}
AddTarefas()