let getOl = document.getElementById('lista-tarefas');
let getInput = document.getElementById('texto-tarefa');
function addLi() {
    let setLi = document.createElement('li');
    setLi.className = 'tarefas';
    setLi.innerText = getInput.value;
    getOl.appendChild(setLi);
    getInput.value = '';
}
function clickButton() {
    let getButton = document.getElementById('criar-tarefa');
    getButton.addEventListener('click', addLi);
}
clickButton();

function changeBackgroundColor(e){
    if(e.target.classList.contains('tarefas')){
        let elementSelected = document.querySelector('.selected');
        if (elementSelected) {
            elementSelected.classList.remove('selected');
            elementSelected.style.backgroundColor = 'white';
        }
        e.target.classList.add('selected');
        e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}
getOl.addEventListener('click', changeBackgroundColor);