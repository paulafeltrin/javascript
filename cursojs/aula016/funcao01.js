function parimp(n) { //(n)= parâmetro
    if(n%2==0) {     // ação = todo este bloco de if
        return 'Par'
    } else {
        return 'ímpar' //retorno (só retorna um resultado, um OU OUTRO)
    }
}
// São duas formas para mostrar o resultado:

let res = parimp(11) //chamada
console.log(res)

// OU

//console.log(parimp(12)) 