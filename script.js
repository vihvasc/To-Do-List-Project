function criarTarefa(){
    let input = document.getElementById('texto-tarefa');
    let texto = input.value;
    let itemLista = document.getElementById('lista-tarefas');
    let novoItem = document.createElement('li');     
    
    novoItem.innerHTML = texto;
    itemLista.appendChild(novoItem);
    input.value = "";

    novoItem.addEventListener('click', alteraCor);
    
    
}
function alteraCor(evento) {
    let listaTotal = document.getElementsByTagName('li');
    
    for (let i of listaTotal){             
        i.style.backgroundColor = 'white';
    }
    evento.target.style.backgroundColor = 'rgb(128,128,128)';
}
   
 //requisito 9
 /*let itemLista = document.getElementById('lista-tarefas');
 let novoItem = document.createElement('li'); 
 itemLista.appendChild(novoItem);

 novoItem.addEventListener('dbclick', marcaItem);
  function marcaItem(){
    let listaItens = document.getElementsByTagName('li');
    for (let i of listaItens){
        console.log(i);
        i.classList.add('completd');
    }
  }  
*/

// requisito 10
let button = document.getElementById('apaga-tudo');
button.addEventListener('click', apagaTudo)

function apagaTudo(){
    listaCompleta = document.getElementById('lista-tarefas');
    listaCompleta.innerHTML = "";
}
    
    
    

    