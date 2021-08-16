const inputTypeTask = document.getElementById('texto-tarefa');
const createTaskBtn = document.getElementById('criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// ao clicar no botão. Fonte: https://pt.stackoverflow.com/questions/341329/inserir-li-e-a-via-javascript
function createTask() {
  createTaskBtn.addEventListener('click', () => {
    const createItem = document.createElement('li');
    taskList.appendChild(createItem);
    createItem.innerText = inputTypeTask.value;
    inputTypeTask.value = '';
    createItem.addEventListener('click', () => {
      const getItens = document.querySelectorAll('li');
      for (let under = 0; under < getItens.length; under += 1) {
        if (getItens[under].style.background = 'rgb(128, 128, 128)') {
          getItens[under].style.backgroundColor = '';
        }
      }
      createItem.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    createItem.addEventListener('dblclick', () => {
      createItem.classList.toggle('completed');
    }); //fonte: https://qastack.com.br/programming/5497073/how-to-differentiate-single-click-event-and-double-click-event
  });
}
createTask();

//botão apaga todos os itens da lista de uma vez
const btnDeleteAllList = document.getElementById('apaga-tudo');
btnDeleteAllList.addEventListener('click', function () {
  while (taskList.firstChild)
    taskList.removeChild(taskList.lastChild);
}); //fonte: https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript