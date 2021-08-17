const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  const task = input.value;
  li.innerText = task;
  ol.appendChild(li);
  input.value = '';
});

const adiciona = document.querySelector('button#criar-tarefa');
adiciona.style.background = 'rgb(79, 146, 255)';
adiciona.style.color = 'white';
