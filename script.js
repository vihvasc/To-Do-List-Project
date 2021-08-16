function criarTarefa() {
  const tarefa = document.createElement('li');
  const textoTarefa = document.getElementById('texto-tarefa');
  tarefa.innerText = textoTarefa.innerText;
  textoTarefa.innerText = '';
  console.log(textoTarefa.innerText);
}

const cliqueBotaoCriarTarefa = document.getElementById('criar-tarefa');
cliqueBotaoCriarTarefa.addEventListener('click', criarTarefa);
