function clickButtonText () {
  let buttonInput = document.getElementById('criar-tarefa');

function inputTextList() {
  let listItem = document.createElement('li');
  let getInputList = document.getElementById('texto-tarefa');
  let listOl = document.getElementById('lista-tarefas');

  listItem.innerHTML = getInputList.value;

  getInputList.value = '';
  listOl.appendChild(listItem);
};

buttonInput.addEventListener('click', inputTextList);

}

clickButtonText();