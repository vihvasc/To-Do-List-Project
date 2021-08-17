const input = document.getElementById('texto-tarefa');
const olList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const liSelect = document.getElementsByTagName('li');

function paintingLiBackground(event) {
  for (let index = 0; index < liSelect.length; index += 1) {
    liSelect[index].style.backgroundColor = '';
  }
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function lineTrough(event) {
  const liTarget = event.target;
  if (liTarget.className === 'completed') {
    liTarget.classList.remove('completed');
  } else {
    liTarget.classList.add('completed');
  }
}

function addInputValue() {
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.addEventListener('click', paintingLiBackground);
    li.addEventListener('dblclick', lineTrough);
    olList.appendChild(li);
    input.value = '';
  });
}

addInputValue();
