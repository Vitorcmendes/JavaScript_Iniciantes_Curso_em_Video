
let inputNumber = document.getElementById('putnumber')
let verificarButton = document.getElementById('verificar')
let numbersBox = document.getElementById('numbers')
let finalizarButton = document.getElementById('finalizar')
let res = document.getElementById('res')
verificarButton.addEventListener('click', addNumber)
finalizarButton.addEventListener('click', finalizar)


let numberList = []
// primeiro confere se é um número

function isNumber(){
    if(Number(inputNumber.value)>=1 && Number(inputNumber.value)<=100){
        return true
} else {
    return false
}
}

//já está na lista
function inList( n, l ){
     if( l.indexOf(Number(n))==-1){
        return false
    } else { 
        return true
    }

     }

function addNumber(){

    if (isNumber() && inList (inputNumber.value, numberList) == false){
       
    let numberTypped = document.createElement('option')
    numberTypped.text = inputNumber.value
    numbersBox.appendChild(numberTypped)
    numberList.push(Number(inputNumber.value)) 
    inputNumber.value = ''
    inputNumber.focus()
        
    } else {
        window.alert(`Valor inválido, ou já existe na caixa`)        
}
}

// function finalizar(){
//      res.appendChild(numberList.value)
// }

