window.onload = function (){
    let buttonTarefa = document.querySelector('#criar-tarefa');
    let buttonClear = document.getElementById('apaga-tudo');
    let buttonClearFinished = document.getElementById('remover-finalizados');
    let buttonSaveList = document.getElementById('salvar-tarefas');
    
    
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
    if(input.value !== '' && oldList.includes(input.value) === false){
        listItemText = input.value;
        oldList.push(listItemText);
        sessionStorage.setItem('lista', JSON.stringify(oldList));
        addToList();
    
    } else if (oldList.includes(input.value) === true){
        alert('A tarefa já está presente na lista');
        input.value = '';
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

}