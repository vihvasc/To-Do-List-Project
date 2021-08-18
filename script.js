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
btnInserir.className = 'btn'
btnInserir.id = 'criar-tarefa'
section.appendChild(btnInserir)


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
    item.addEventListener('click', function() {
        let selected = document.querySelector('.selected')
        if(selected === null){
            item.className = 'selected'
        } else {
            selected.classList.remove('selected')
            item.className = 'selected'
        }
    })
    list.appendChild(item)
    input.value = ''
}
