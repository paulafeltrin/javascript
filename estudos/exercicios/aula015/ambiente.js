/*let num = [5,8,6,1]
num [4]= 2 // acrescenta mais um vetor, neste caso, é o quinto elemento(o primeiro elemento é SEMPRE ZERO) com valor 2 
num.push(10) // acrescenta mais um vetor ao final, independente de qual o for
num.length // número de elementos na array/vetor
num.sort() //ordem crescente

console.log(`Nosso vetor é ${num}`)
console.log(`Primeiro valor do vetor é ${num[0]}`)
console.log(num[0])

for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}
*/

let num = [0,5,9,8,7,1,10,4,3]
//console.log(num)

for(let pos in num){
    console.log(num[pos])
}
let pos = num.indexOf(2)
if (pos == -1) {
    console.log(`Valor não encontrado!`)
} else {
    console.log(`O valor 2 está na posição ${pos}`)
}
