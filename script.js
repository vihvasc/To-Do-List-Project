function clickButtonText () {
  let buttonInput = document.getElementById('criar-tarefa');

function inputTextList() {
  let listItem = document.createElement('li');
  let getInputList = document.getElementById('texto-tarefa');
  let listOl = document.getElementById('lista-tarefas');
  if (getInputList.value === '') { 
    listItem = false
  } else {
  listItem.innerHTML = getInputList.value;
  getInputList.value = '';}
  listOl.appendChild(listItem);
}

buttonInput.addEventListener('click', inputTextList);

}

clickButtonText();

function paintTask() {

    let olList = document.getElementById('lista-tarefas');
    let taskSelected = document.getElementsByTagName('li');
   
    function removeSelected() {
      for (let i = 0; i < taskSelected.length; i += 1) {
        taskSelected[i].classList.remove('selected');
      }
    }

    function selectTask(event) {
      let evitaError = event;
      removeSelected();
      evitaError.target.classList.add('selected');
      olList.classList.remove('selected');

    }

    olList.addEventListener('click', selectTask);
  }
 
  paintTask();

 

function checkedTask() {

    let olList = document.getElementById('lista-tarefas');
    let taskSelected = document.getElementsByTagName('li');

    function selectchecked(event) {
      let evitaError = event;
      // acesado https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
      evitaError.target.classList.toggle('completed');
      // ......
      olList.className = ''
    }
    

    olList.addEventListener('dblclick', selectchecked);
  }
 
  checkedTask();

  function clearAll() {
    let clear = document.getElementById('apaga-tudo');

    function removeAll() {
      let list = document.getElementById('lista-tarefas');
      // acessador aqui https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
       while (list.firstElementChild) {
         list.removeChild(list.firstElementChild)
      // ....
       }
     }

    clear.addEventListener('click', removeAll);

  }

  clearAll();

  

  function clearChecked() {
    let checkeds = document.getElementsByClassName('completed');
    let lists = document.getElementById('lista-tarefas');
    let buttonClearCompleted = document.getElementById('remover-finalizados');

    function completedOut() {
      while (checkeds.length > 0) {
        //  acessado https://qastack.com.br/programming/4777077/removing-elements-by-class-name
        checkeds[0].parentNode.removeChild(checkeds[0]); //excluo o filho acessando o pai, como cada elemento( com classe completed) tem um pai diferente (li's diferentes) preciso criar um clico com while para acessar cada pai separado e assim excluir seu unico filho.
        // ....
      }
    }
    
    buttonClearCompleted.addEventListener('click', completedOut);
  }

  clearChecked();

  function clearselected() {
    let selectedes = document.getElementsByClassName('selected');
    let buttonClearselected = document.getElementById('remover-selecionado');

    function selectedOut() {
      while (selectedes.length > 0) {
        //  acessado https://qastack.com.br/programming/4777077/removing-elements-by-class-name
        selectedes[0].parentNode.removeChild(selectedes[0]); //excluo o filho acessando o pai, como cada elemento( com classe completed) tem um pai diferente (li's diferentes) preciso criar um clico com while para acessar cada pai separado e assim excluir seu unico filho.
        // ....
      }
    }
    
    buttonClearselected.addEventListener('click', selectedOut);
  }

  clearselected();