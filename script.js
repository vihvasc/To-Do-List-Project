let getOl = document.getElementById('lista-tarefas');
let getInput = document.getElementById('texto-tarefa');
let getButtonClear = document.querySelector('#apaga-tudo');

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

        if (elementSelected) {
            elementSelected.classList.remove('selected');
            elementSelected.style.backgroundColor = 'white';
        }
    }
}
getOl.addEventListener('click', changeBackgroundColor);

getOl.addEventListener('dblclick', function(e) {    
    if(e.target.classList.contains('tarefas')) {
        if (e.target.classList.contains('completed')) {
            e.target.classList.remove('completed');
            e.target.style.textDecoration = 'none';
        } else {
            e.target.classList.add('completed');
            e.target.style.textDecoration = 'line-through';
        }
    }
})

function clearList() {
    let getLis = document.querySelectorAll('li');
    for (let i = 0; i < getLis.length; i += 1) {
        getLis[i].remove();
        }
    }
getButtonClear.addEventListener('click', clearList);

function clearCompleted () {
    let getClassCompleted = document.querySelectorAll('.completed');
    for (let i = 0; i < getClassCompleted.length; i += 1) {
        getClassCompleted[i].remove();
    }
}
function buttonCompleted() {
    let getButtonCompleted = document.getElementById('remover-finalizados');
    getButtonCompleted.addEventListener('click', clearCompleted);
}
buttonCompleted()


