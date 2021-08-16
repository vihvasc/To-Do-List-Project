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
    }
}

function mudaFundo(item){
    let itemList = document.getElementsByTagName('li');
    for (let index = 0; index < itemList.length; index++) {
        console.log(itemList[index]);
        if(itemList[index].style.backgroundColor){
            itemList[index].style.backgroundColor = '';
        }
    }
    item.target.style.backgroundColor = 'rgb(128,128,128)';
}