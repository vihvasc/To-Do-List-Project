function cleanBackgrood() {
  const li = document.querySelectorAll('li');
  for (let key = 0; key < li.length; key += 1) {
    li[key].style.backgroundColor = 'white';
  }
}

function listColor() {
  const li = document.querySelectorAll('li');
  for (let key = 0; key < li.length; key += 1) {
    li[key].addEventListener('click', () => {
      cleanBackgrood();
      li[key].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function addTaks() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const valueInpt = document.getElementById('texto-tarefa');
    const list = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerText = valueInpt.value;
    valueInpt.value = '';
    list.appendChild(li);
    listColor();
  });
}
addTaks();
