window.onload = function (){

    let buttonTarefa = document.querySelector('#criar-tarefa');
    let buttonClear = document.getElementById('apaga-tudo');
    let buttonClearFinished = document.getElementById('remover-finalizados');
    let buttonSaveList = document.getElementById('salvar-tarefas');

    if (localStorage.getItem('history') === null){

    } else {
        clearList();
        recoverySave();
    }

    
    buttonTarefa.addEventListener('click',addSession);
    buttonClear.addEventListener('click', clearList);
    buttonClearFinished.addEventListener('click',removeFinished);
    buttonSaveList.addEventListener('click',saveList);
    document.addEventListener('click', inFocus);
    document.addEventListener('dblclick',completeMark);

    
}
let input = document.querySelector('#texto-tarefa');

function addSession(){
    
    if (sessionStorage.getItem('lista') === null){
        sessionStorage.setItem('lista', JSON.stringify([]));
    }

    let oldList = JSON.parse(sessionStorage.getItem('lista'));
    if(input.value !== ''){
        listItemText = input.value;
        oldList.push(listItemText);
        sessionStorage.setItem('lista', JSON.stringify(oldList));
        addToList();
    
    }
    
    
}

function addToList(){    
    let arraySession = JSON.parse(sessionStorage.getItem('lista'));
    let li = document.createElement('li');        
    let listItem = document.querySelector('#lista-tarefas');
    let textPosition = arraySession.length - 1;            
    li.className = 'item';  
    
    listItem.appendChild(li).innerText = arraySession[textPosition];
    input.value = '';

    }


function inFocus(element){
    if(element.target.classList.contains('item')){
        if(document.querySelectorAll('.mark').length === 0){
                element.target.className += ' mark';
        } else {
            document.querySelector('.mark').classList.remove('mark');
            element.target.className += ' mark';
        }
    }
}

function completeMark(element){

    if (element.target.classList.contains('item')){
        if(element.target.classList.contains('completed')){
            element.target.classList.remove('completed');
        } else {
            element.target.className += ' completed';
        }
    }
    
}

function clearList(){
    
        let list = document.querySelectorAll('.item');
        for (let i = 0; i < list.length; i += 1){
            list[i].remove();
        }
}

function removeFinished(){

        let list = document.querySelectorAll('.completed');
        for (let i = 0; i < list.length; i += 1){
            list[i].remove();
        }
}

function saveList(){
    let listToSave = document.querySelectorAll('.item');

        localStorage.setItem('history', JSON.stringify([]));
        localStorage.setItem('classToSave', JSON.stringify([]));

    let historyList = JSON.parse(localStorage.getItem('history'));
    let historyListClass = JSON.parse(localStorage.getItem('classToSave'));   

    for(let i = 0; i < listToSave.length; i += 1){
        historyList.push(listToSave[i].innerText);
        historyListClass.push(listToSave[i].className);

    }

    localStorage.setItem('history', JSON.stringify(historyList));
    localStorage.setItem('classToSave', JSON.stringify(historyListClass));
    
}

function recoverySave() {

    let list = document.querySelector('#lista-tarefas');
    let historyList = JSON.parse(localStorage.getItem('history'));
    let historyListClass = JSON.parse(localStorage.getItem('classToSave'));
    

    for (let i = 0; i < historyList.length; i += 1){
        let li = document.createElement('li');
        li.innerText = historyList[i];
        li.classList = historyListClass[i];
        list.appendChild(li);
    }
}