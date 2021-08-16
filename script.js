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
      const getItens = document.querySelectorAll('#lista-tarefas');
      for (let under = 0; under < getItens.length; under += 1) {
        getItens[under].style.backgroundColor = '';
      }
      createItem.style.backgroundColor = 'rgb(128, 128, 128)';
    });//aproveitei a criação dos itens e "embuti" para colocar a cor de fundo ao clicar, porém sempre dá para separar e melhorar para leitura. Mas como não ficou complexo, vou deixar assim.
  });
}
createTask();
