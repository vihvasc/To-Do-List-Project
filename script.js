const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

function colorPaint(event) {
  const click = event.target;
  const selectColor = document.querySelectorAll('li');
  for (let i = 0; i < selectColor.length; i += 1) {
    selectColor[i].classList.remove('selected');
    selectColor[i].style.backgroundColor = 'white';
  }
  click.classList.add('selected');
  click.style.backgroundColor = 'rgb(128,128,128)';
}

button.addEventListener('click', () => {
  const li = document.createElement('li');
  const task = input.value;
  li.innerText = task;
  ol.appendChild(li);
  input.value = '';
  li.addEventListener('click', colorPaint);
});

const adiciona = document.querySelector('button#criar-tarefa, button#apaga-tudo');
adiciona.style.background = 'rgb(79, 146, 255)';
adiciona.style.color = 'white';