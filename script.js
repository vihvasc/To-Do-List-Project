// Cria o input para adicionar Tarefas
createInput();

function createInput() {
  let inputContent = document.getElementById('input-container');
  let input = document.createElement('input');

  input.id = 'texto-tarefa';
  inputContent.appendChild(input);
}
