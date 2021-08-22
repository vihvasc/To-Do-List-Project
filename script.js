let ingredientsList = [
    "bisteca",
]


let list = document.getElementById("lista-tarefas");
    function addTarefa() {
        let item = document.createElement("li");
        let input = document.getElementById("texto-tarefa");
      
        item.innerText = input.value;
        item.className = "itemList";
        list.appendChild(item);
        input.value = "";
      }
      
      let buttonAddTarefa = document.getElementById("criar-tarefa");
      buttonAddTarefa.addEventListener("click", addTarefa);
