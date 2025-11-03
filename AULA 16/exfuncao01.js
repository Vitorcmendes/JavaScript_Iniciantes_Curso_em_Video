function parimpar(n){
    if (n %2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimpar(4)

console.log(parimpar(4))

function soma(n1, n2) {
    return n1 + n2
}

console.log(`\n` + soma(2,5))

// se não for passado uma quantidade de parametros suficientes na função, o JS entende a parametro como undefined
// É possível nesse caso definifir parametros opcionais

function soma(n1=0, n2=0) {
    return n1 + n2

}

console.log(`\n` + soma(2)) // n1 ficou 2 e n2 ficou 0