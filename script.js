var numero = document.getElementById("txtm")
    var tab = document.getElementById("seltab")
    var finalizado = document.getElementById("resultado")
    var grupo = []
function adicionar()
{
grupo.push(numero)
    
if ( numero.value.length == 0) 
{

window.alert("Favor digite um número")
}
 else if (numero.value >= 101)
{
    window.alert("Por favor, esse número não pode passar de 100.")
}
else if (numero.value <= 0)
{
    window.alert("Por favor, esse número não pode ser abaixo de 1.")
}
 else 
{
var somador = Number(numero.value)
    var item = document.createElement("option")
    item.text = `Valor ${somador} adicionado.`
    tab.appendChild(item)
}
numero.value = " "
numero.focus()
}
function finalizar()
{
    var maiorNumero = grupo[0]
    var menorNumero = grupo[0]
    var soma = 0
    var media = 0

    for (let pos in grupo)
    {
        soma += grupo[pos]
        if (grupo[pos] > maiorNumero)
        maiorNumero = grupo[pos]
        if (grupo[pos] < menorNumero)
        menorNumero = grupo[pos]
    }
    media = soma / grupo.length
var finalizado = document.getElementById("resultado")
    finalizado.innerHTML = 
    `Ao todo temos <b>${grupo.length}</b> números cadastrados.<br>
    O maior valor informado foi <b>${maiorNumero}</b>.<br>
    O menor valor informado foi <b>${menorNumero}</b>.<br>
    Somando todos os valores temos <b>${soma}</b>.<br>
    A média do valores digitados é <b>${media}</b>.`


}
