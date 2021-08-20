const button = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');

button.addEventListener('click', addNewTask);
taskList.addEventListener('click', selectItem);
clearButton.addEventListener('click', clearList);

function addNewTask() {
    let novaTarefa = document.createElement('li');
    if (inputText.value) {
        novaTarefa.innerHTML = inputText.value;
        taskList.appendChild(novaTarefa)
        inputText.value = '';
  }
}

//Consultei o repositório do Jessé Benevides para resolver esse requisito. Link: https://github.com/tryber/sd-015-b-project-todo-list/pull/107/commits/46afca6df32219c4180238eaf640bb5afdbd0f2f

function selectItem(event) {
    let selected = document.querySelector('.selected');
  
    if (selected && selected !== event.target) {
      selected.classList.remove('selected');
    }
  
    event.target.classList.toggle('selected');
  }

  function clearList(){
      taskList.innerHTML = '';
  }