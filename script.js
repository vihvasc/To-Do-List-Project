const creatTaskButton = document.getElementById('criar-tarefa');
const getInputList = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');
const liList = document.getElementsByTagName('li');
const clearAllButton = document.getElementById('apaga-tudo');
const completedList = document.getElementsByClassName('completed');
const clearCompletedButton = document.getElementById('remover-finalizados');
const selectedList = document.getElementsByClassName('selected');
const clearSelectedButton = document.getElementById('remover-selecionado');

function creatTask() {
  creatTaskButton.addEventListener('click', () => {
    let listItem = document.createElement('li');

    if (getInputList.value === '') {
      listItem = false;
    } else {
      listItem.innerHTML = getInputList.value;
      getInputList.value = '';
      listTask.appendChild(listItem);
    }
  });
}

creatTask();

function paintTask() {
  listTask.addEventListener('click', (event) => {
    for (let i = 0; i < liList.length; i += 1) {
      liList[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
    listTask.classList.remove('selected');
  });
}

paintTask();

function checkedTask() {
  listTask.addEventListener('dblclick', (event) => {
    // acesado https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
    event.target.classList.toggle('completed');
    // ......
    listTask.className = '';
  });
}

checkedTask();

function clearAll() {
  clearAllButton.addEventListener('click', () => {
    // acessador aqui https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (listTask.firstElementChild) {
      listTask.removeChild(listTask.firstElementChild);
    }
    // ....
  });
}

clearAll();

function clearCompleted() {
  clearCompletedButton.addEventListener('click', () => {
    while (completedList.length > 0) {
      // acessado https://qastack.com.br/programming/4777077/removing-elements-by-class-name
      completedList[0].parentNode.removeChild(completedList[0]);
      // excluo o filho acessando o pai, como cada elemento( com classe completed) tem um pai diferente (li's diferentes) preciso criar um clico com while para acessar cada pai separado e assim excluir seu unico filho.
    }
  });
}

clearCompleted();

function clearselected() {
  clearSelectedButton.addEventListener('click', () => {
    while (selectedList.length > 0) {
    //  acessado https://qastack.com.br/programming/4777077/removing-elements-by-class-name
      selectedList[0].parentNode.removeChild(selectedList[0]);
    //  excluo o filho acessando o pai, como cada elemento( com classe completed) tem um pai diferente (li's diferentes) preciso criar um clico com while para acessar cada pai separado e assim excluir seu unico filho.
    }
  });
}

clearselected();
