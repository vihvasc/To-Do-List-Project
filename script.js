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