requisito5e6();

function requisito5e6() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', getInputAddLi);

  function getInputAddLi() {
    const li = document.createElement('li');
    const paiLi = document.getElementById('lista-tarefas');
    paiLi.appendChild(li);
    li.className = 'colors';
    let input = document.getElementById('texto-tarefa');
    let input2 = input.value;
    li.innerText = input2;
    input.value = '';
    requisito7();
  }
}

function requisito7() {
  const listasLi = document.querySelectorAll('.colors');
  console.log(listasLi);
  for (let key of listasLi) {
    key.addEventListener('click', changeColor);
  }

  function changeColor(event) {
    console.log('ola');
    const evento = event.target;
    evento.style.backgroundColor = 'gray';
  }
}
