function addList(){
    let li = document.createElement('LI');
    let inputValue = document.lista.tarefa.value;
    let inputText = document.createTextNode(inputValue);

    li.appendChild(inputText);
    document.querySelector('ol').appendChild(li);
    document.lista.tarefa.value = "";

}