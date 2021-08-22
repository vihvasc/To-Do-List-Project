const section = document.createElement('section')
section.id = 'section'
document.body.appendChild(section)

const title = document.createElement('header')
title.innerHTML = 'Minha Lista de Tarefas'
section.appendChild(title)

const p = document.createElement('p')
p.id = 'funcionamento'
p.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo'
section.appendChild(p)

const list = document.createElement('ol')
list.id = 'lista-tarefas'
section.appendChild(list)

const input = document.createElement('input')
input.type = 'text'
input.id = 'texto-tarefa'
section.appendChild(input)

const btnInserir = document.createElement('button')
btnInserir.innerText = 'Inserir'
btnInserir.style.backgroundColor = 'green'
btnInserir.className = 'btn'
btnInserir.id = 'criar-tarefa'
section.appendChild(btnInserir)

const btnApagar = document.createElement('button')
btnApagar.id = 'apaga-tudo'
btnApagar.innerText = 'Apagar'
btnApagar.className = 'btn'
btnApagar.style.backgroundColor = 'red'
btnApagar.addEventListener('click', apagao)
section.appendChild(btnApagar)

const btnFinalizado = document.createElement('button')
btnFinalizado.id = 'remover-finalizados'
btnFinalizado.innerText = 'finalizado'
btnFinalizado.className = 'btn'
btnFinalizado.style.backgroundColor = 'yellow'
btnFinalizado.addEventListener('click', finalizados)
section.appendChild(btnFinalizado)

btnInserir.addEventListener('click', function(){
    if(input.value === ''){
        alert('Digite uma tarefa válida!')
    } else {
        inserir();
    }
})

function inserir(){
    let item = document.createElement('li')
    item.innerText = input.value
    item.addEventListener('dblclick', completed)
    item.addEventListener('click', function() {
        let selected = document.querySelector('.selected')
        if(selected === null){
            item.classList.add('selected')
        } else {
            selected.classList.remove('selected')
            item.classList.add('selected')
        }
    })
    list.appendChild(item)
    input.value = ''
}

function completed(event){

    if(event.target.classList.contains('completed')){
        event.target.classList.remove('completed')
    }else{
    event.target.classList.add('completed');
    }
}

function apagao(){
    let tudo = document.querySelectorAll('li')
    for(let index of tudo){
        list.removeChild(index)
    }
}

function finalizados(){
    let finalizados = document.querySelectorAll('.completed')
    for (let index of finalizados)
    list.removeChild(index)
}