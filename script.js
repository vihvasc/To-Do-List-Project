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
}
