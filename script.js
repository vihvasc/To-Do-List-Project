requisito5e6();

function requisito5e6() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', getInputAddLi);

  function getInputAddLi() {
    const li = document.createElement('li');
    const paiLi = document.getElementById('lista-tarefas');
    paiLi.appendChild(li);
    let input = document.getElementById('texto-tarefa');
    let input2 = input.value;
    li.innerText = input2;
    input.value = '';
    requisito7e8();
    requisito9();
    requisito10();
  }
}

function requisito7e8() {
  const listasLi = document.getElementsByTagName('li');
  for (let key of listasLi) {
    key.addEventListener('click', changeColor);
  }

  function changeColor(event) {
    for (let key of listasLi) {
      key.style.backgroundColor = 'white';
    }
    const evento = event.target;
    evento.style.backgroundColor = 'gray';
  }
}

function requisito9() {
  const listasLi = document.getElementsByTagName('li');
  for (let key of listasLi) {
    key.addEventListener('dblclick', changeTextDecoration);
  }

  function changeTextDecoration(event) {
    const evento = event.target;
    const classeEvento = evento.className;
    if (classeEvento === 'completed') {
      for (let key of listasLi) {
        key.classList.remove('completed');
      }
    }
    if (evento.className !== 'completed') {
      evento.classList = 'completed';
    }
  }

  //   function changeTextDecoration2(event) {
  //     const evento = event.target;
  //     evento.classList.remove('completed');
}
function requisito10() {
  let buttonClear = document.getElementById('apaga-tudo');
  console.log(buttonClear);
  buttonClear.addEventListener('click', clearList);

  function clearList() {
    const paiLi = document.getElementById('lista-tarefas');
    const listasLi = document.getElementsByTagName('li');
    for (let key of listasLi) {
      paiLi.removeChild(key);
    }
  }
}
