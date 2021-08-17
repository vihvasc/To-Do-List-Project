function taskSelector() {
  const clickOnTask = document.getElementsByTagName('li');
  for (let taskNumber = clickOnTask.length, liLoop = (taskNumber - 1); liLoop >= 0; liLoop -= 1) {
    clickOnTask[liLoop].addEventListener('click', () => {
      if (clickOnTask[liLoop].style.backgroundColor === '') {
        clickOnTask[liLoop].style.backgroundColor = 'rgb(128,128,128)';
      }
    });
  }
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', () => {
  const lista = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  const inputValue = input.value;
  const listItem = document.createElement('li');
  if (inputValue !== '') {
    listItem.innerText = inputValue;
    lista.appendChild(listItem);
    input.value = '';
    taskSelector();
  }
});