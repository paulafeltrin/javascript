
let num = document.querySelector('input#numn')
let lista = document.querySelector('select#listan')
let res = document.querySelector('div#res')
let valores = []

function ehNumero(n) {
    if(Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function naLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(ehNumero(num.value) && !naLista(num.value, valores)) {
        //window.alert(`Tudo OK`)
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length //quantidade de elementos adicionados
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valors[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos, são ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor} </p>`
        res.innerHTML += `<p>A soma dos valores é igual a ${soma} </p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media} </p>`
    }
}