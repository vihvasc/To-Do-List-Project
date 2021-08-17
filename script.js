const butao = document.getElementById('criar-tarefa');

function toDoList() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  const li = document.createElement('li');

  li.innerText = input.value;
  li.addEventListener('click', function (event) {       
    
    const classe = document.querySelector('.selected');
    if (classe) { 
      classe.classList.remove('selected');
      classe.style.backgroundColor = 'white'
    }

    event.target.style.backgroundColor = 'rgb(128,128,128)';
    event.target.classList.add('selected');
  });
  listaTarefas.appendChild(li);
  input.value = '';
}
butao.addEventListener('click', toDoList);