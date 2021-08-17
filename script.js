 let bancoDeTarefas = [
     {'descricao': ''}
 ]
 
 const criarTarefa = (descricao) => {
     const tarefa = document.createElement('label');
     tarefa.classList.add('tarefa');
     tarefa.innerHTML = `<div class="descricao">${descricao}</div>
     <input type="button" value="X">`
     
     document.getElementById('lista-tarefas').appendChild(tarefa);
}

 const adicionarTarefa = (e) => {
    bancoDeTarefas.push({'descricao': ''});
 }    

document.getElementById('criar-tarefa').addEventListener('click', adicionarTarefa);