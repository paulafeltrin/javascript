function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    //var hora = 10
    //msg.innerHTML = `Agora são ${hora}`
    msg.innerHTML = `Agora são ${hora}:${min}:${seg}`
    if(hora >=0 && hora < 12) {
        //Bom Dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#b989a1'
    } else if(hora>=12 && hora <= 18) {
       //Boa Tarde!
       img.src = 'fototarde.png'
       document.body.style.background = '#deb17a'
    } else {
        //Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#012246'
    }
}