function addItem() {
  const add = document.getElementById('texto-tarefa').value;
  let addToList = document.getElementById('lista-tarefas').innerHTML;
  addToList = `${addToList}<li>${add}</li>`;

  document.getElementById('lista-tarefas').innerHTML = addToList;
  document.getElementById('texto-tarefa').value = '';
}
