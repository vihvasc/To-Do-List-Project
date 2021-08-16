function buttonConfg(value) {

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
  });
}
addTaks();
