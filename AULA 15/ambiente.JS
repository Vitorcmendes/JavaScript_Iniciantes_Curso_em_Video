let num =  [5,8,2,3]
num.push(4)

console.log(num)
console.log(num.sort())
console.log(`Seu vetor tem ${num.length} posições`)

for( let i = 0; i <= num.length; i++) {
    console.log(num[i])
}

num.indexOf(2)

let pos = num.indexOf(4)

if(pos == -1) {
   console.log(`Valor não encontrado`) 
} else {
    console.log(`valor localizado na posição ${pos}`)
}
