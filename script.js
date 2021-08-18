const inputText = document.getElementById('texto-tarefa'); // texto do input
const lo = document.getElementById('lista-tarefas'); // lista ordenada
const addButton = document.getElementById('criar-tarefa'); // botão adicionar tarefa
const createTask = document.getElementsByTagName('li'); // seleciona todas com a classe tarefa
const deleteList = document.getElementById('apaga-tudo'); // botão limpar
const deleteCompleted = document.getElementById('remover-finalizados'); // botão limpar completos
const salveTask = document.getElementById('salvar-tarefas');
const moverUp = document.getElementById('mover-cima');
const moverDown = document.getElementById('mover-baixo');

function addTask() {
  const li = document.createElement('li');
  li.addEventListener('click', addGreyColor);
  li.innerText = inputText.value;
  li.addEventListener('dblclick', tachado);
  inputText.value = '';
  lo.appendChild(li);
}

addButton.addEventListener('click', addTask);

function addGreyColor(event) {
  for (let index = 0; index < createTask.length; index += 1) {
    removeColor();
    const addColor = event.target;
    addColor.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function removeColor() {
  for (let index = 0; index < createTask.length; index += 1) {
    createTask[index].style.removeProperty('background-color');
  }
}

function tachado(event) {
  const tachado1 = event.target;
  if (tachado1.className === 'completed') {
    tachado1.classList.remove('completed');
  } else {
    tachado1.classList.add('completed');
  }
}

deleteList.addEventListener('click', () => {
  lo.innerHTML = '';
});

function deletComp() {
  let classCompleted = document.querySelector('.completed');
  while (classCompleted) {
    classCompleted.remove();
    classCompleted = document.querySelector('.completed');
  }
}
deleteCompleted.addEventListener('click', deletComp);

function enterPress(evento) {
  const keyPress = evento;
  if (keyPress.key === 'Enter') {
    const li = document.createElement('li');
    li.addEventListener('click', addGreyColor);
    li.innerText = inputText.value;
    li.addEventListener('dblclick', tachado);
    inputText.value = '';
    lo.appendChild(li);
  }
}

inputText.addEventListener('keypress', enterPress);

function save() {
  const propriedadeTarefa = [];
  for (let index = 0; index < createTask.length; index += 1) {
    const objTarefa = {
      texto: createTask[index].innerText,
      corDeFundo: createTask[index].style.backgroundColor,
      nomeDaClasse: createTask[index].className,
    };
    propriedadeTarefa.push(objTarefa);
  }
  localStorage.setItem('listaAtual', JSON.stringify(propriedadeTarefa));
  alert('Lista Salva com Sucesso!');
}

function recoveryTask() {
  const listaRecuperada = JSON.parse(localStorage.getItem('listaAtual'));
  for (let index = 0; index < listaRecuperada.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = listaRecuperada[index].texto;
    li.style.backgroundColor = listaRecuperada[index].corDeFundo;
    li.className = listaRecuperada[index].nomeDaClasse;
    li.addEventListener('dblclick', tachado);
    li.addEventListener('click', addGreyColor);
    lo.appendChild(li);
  }
}

salveTask.addEventListener('click', save);

function moveUp() {
  let selected = null;
  for (let index = 0; index < createTask.length; index += 1) {
    selected = index;
    if (createTask[selected].style.backgroundColor !== '' && selected > 0) {
      lo.insertBefore(createTask[selected], createTask[selected].previousElementSibling);
      return;
    }
  }
}
moverUp.addEventListener('click', moveUp);

function moveDown() {
  let selected = null;
  for (let index = 0; index < createTask.length; index += 1) {
    selected = index;
    if (createTask[selected].style.backgroundColor !== '' && selected < createTask.length-1) {
      lo.insertBefore(createTask[selected], createTask[selected + 1].nextElementSibling);
      return;
    }
  }
}
moverDown.addEventListener('click', moveDown);

window.onload = () => {
  if (localStorage.getItem('listaAtual')) {
    recoveryTask();
  }
};
