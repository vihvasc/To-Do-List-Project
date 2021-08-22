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
    
    function changeBackgroundItem(evento) {
    let itemsTarefa = list;
    let itemList = document.querySelectorAll(".itemList");
      
        if (itemList) {
          for (let index = 0; index < itemList.length; index += 1) {
            itemList[index].classList.remove("selected");
          }
          evento.target.classList.add("selected");
        }
      }
    list.addEventListener("click", changeBackgroundItem);