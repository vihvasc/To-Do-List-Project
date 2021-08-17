function createdTask() {
  const inputValue = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  if (inputValue !== '') {
    const taks = document.createElement('li');
    taks.innerText = inputValue;
    list.appendChild(taks);
  }
  document.getElementById('texto-tarefa').value = '';
}
createdTask();
