let v = function(x){
    return x*2
}

function fatorial(n){
    let fat = 1
    for( let c = n; c > 1; c-- ){
        fat= fat*c
} return fat
}

console.log(fatorial(5))


//RECURSIVIDADE, quando a função chama ela mesma

n = 3

function fatorialR(n){
    if (n==1){
        return 1
    } else {
   return n * fatorialR(n -1)
}
}

console.log(fatorialR(n))