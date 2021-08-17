const input = document.querySelector('#texto-tarefa');
const buttonAddTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteButton = document.querySelector('#apaga-tudo');
const completedRemoveButton = document.querySelector('#remover-finalizados')
const completed = document.querySelectorAll('.completed');
function addTask() {
  buttonAddTask.addEventListener('click', () => {
    if (input.value === '') {
      window.alert('Você precisa escrever algo');
    } else {
      const listItem = document.createElement('li');
      taskList.appendChild(listItem);
      listItem.innerHTML = input.value;
      listItem.className = 'list-item';
      
      const item = document.querySelectorAll('.list-item');
      
      listItem.addEventListener('click', (event) => {
      const selected = document.querySelectorAll('.selected');
      for(let i = 0; i < selected.length; i += 1) {
        selected[i].classList.remove('selected')
      }
     event.target.classList.add('selected');
    }) 
      
  lineThrough(listItem);
    }input.value = '';
  });
}
addTask();
function lineThrough(listItem) {
  listItem.addEventListener('dblclick', (event) => {
    if(event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  })
}


function deleteTasks () {

  deleteButton.addEventListener('click', () => {
    taskList.remove();
    location.reload();
    
  })
}

deleteTasks()

