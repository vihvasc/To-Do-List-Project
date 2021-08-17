window.onload = function init () {
  const button = document.getElementById('criar-tarefa');
  
  button.addEventListener('click', handleCreateList);
};

function handleCreateList() {
  const input = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  lista.appendChild(tarefa);
  input.value = '';
  handleColorChange();
};

function handleColorChange(event) {
  const getList = document.getElementsByTagName('li');
  
  for (let tarefa of getList) {
    tarefa.addEventListener('click', function color(event) {
      if (document.querySelector('.selected') === null) {
        event.target.className += ' selected';
      } else {
        const colorCheck = document.querySelector('.selected');
        colorCheck.classList.remove('selected');
        event.target.className += ' selected';
      };
    });
    
    tarefa.addEventListener('dblclick', handleTaskCheck);

  };
};

function handleTaskCheck(event) {
  event.target.className += ' completed';
  event.target.addEventListener('dblclick', function resetLine(event) {
    event.target.classList.remove('completed');
  });
}
