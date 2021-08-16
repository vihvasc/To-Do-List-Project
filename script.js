// Requisitos Obrigatórios:
// 01 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
// *** O que será verificado:
// ***** Será verificado se sua página possui uma tag header com o conteúdo Minha Lista de Tarefas

function adicionaTitulo() {
    const elementoHeader = document.createElement('header');
    elementoHeader.textContent = 'Minha Lista de Tarefas';
    elementoHeader.id = 'titulo-header';
    document.body.appendChild(elementoHeader);
}
adicionaTitulo();
