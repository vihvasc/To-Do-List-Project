window.onload= function (){
    document.addEventListener('click',addToList);
    document.addEventListener('click', inFocus);
    document.addEventListener('dblclick',completeMark);
    window.getSelection().removeAllRanges();
}

function addToList(event){
    
    if(event.target.id === 'criar-tarefa'){

        let li = document.createElement('li');
            let input = document.querySelector('#texto-tarefa');
            let listItem = document.querySelector('#lista-tarefas');            
            li.className = 'item';

        if(input.value !== ''){            
            listItem.appendChild(li).innerText = input.value;
            input.value = '';
        }
    }

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