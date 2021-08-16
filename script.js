

 
function AddTarefas(){
  
    let Input = document.createElement("input")
    Input.id = "texto-tarefa"
    let BODY = document.body
    BODY.appendChild(Input)
    let button = document.createElement("button")
    button.id = "criar-tarefa"
    BODY.appendChild(button)
    let List = document.getElementById("lista-tarefas")
    let ListOfLi = document.querySelectorAll(".li")
    let TextOfInput;
    let newList = []
    
     button.innerText = "Adiciona Tarefa"
    Input.addEventListener("change", addTarefa)
    function addTarefa(){
      TextOfInput = Input.value
    
     
    }
     
    button.addEventListener("click", clickAddTarefa)
    function clickAddTarefa(){
        
         let li = document.createElement("li")

         li.innerText = TextOfInput
         li.className = "li"
         List.appendChild(li)
         Input.value = ""
         for(let i = 0;i <=ListOfLi.length; i += 1){
           newList = ListOfLi[i]
           console.log(newList)
           }
         }
        
    }
  
  
    // Li.addEventListener('keydown', AlternBackground)
    // function AlternBackground(){

    // }
 
 

AddTarefas()
