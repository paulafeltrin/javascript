function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verificar os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'obaby.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'ojovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'oadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'osenhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'ababy.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'ajovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'aadulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'asenhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}