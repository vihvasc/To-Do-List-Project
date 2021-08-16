let botao = document.getElementById('criar-tarefa');
let entrada = document.getElementById('texto-tarefa');
let itemLista = document.getElementsByTagName('li');

botao.addEventListener('click', addTarefa);


function addTarefa (){
    let lista = document.getElementById('lista-tarefas');
    let elemento = document.createElement('li');
    elemento.innerText = entrada.value;
    entrada.value = '';
    lista.appendChild(elemento);
    addEventoItemLista();
}

function addEventoItemLista (){
    for (let index = 0; index < itemLista.length; index++) {
        itemLista[index].addEventListener('click', mudaFundo);
        itemLista[index].addEventListener('dblclick', riscaItem);
    }
}

function mudaFundo(item){
    for (let index = 0; index < itemLista.length; index++) {
        if(itemLista[index].style.backgroundColor){
            itemLista[index].style.backgroundColor = '';
        }
    }
    item.target.style.backgroundColor = 'rgb(128,128,128)';
}

function riscaItem (item){
    item.target.classList.toggle('completed');
}