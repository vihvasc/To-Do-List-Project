function addLi() {
    let getOl = document.getElementById('lista-tarefas');
    let getInput = document.getElementById('texto-tarefa');
    let setLi = document.createElement('li');
    let valorInput = getInput.value;
    setLi.className = 'tarefas';
    setLi.innerText = valorInput;    
    getOl.appendChild(setLi);    
    getInput.value = '';
}

function clickButton() {
    let getButton = document.getElementById('criar-tarefa');
    
    getButton.addEventListener('click', addLi);
}
clickButton();