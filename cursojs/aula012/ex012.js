var Agora = new Date()
var hora =  Agora.getHours()
//var hora = 12
console.log(`Agora são ${hora} horas`)
if (hora < 12 && hora >= 6) {
    console.log (`Bom dia!`)
} else if (hora >=13 && hora <= 18) {
    console.log(`Boa Tarde!`)
} else if (hora >= 19 && hora <=24){
    console.log(`Boa Noite!`)
} else {
    console.log(`Boa Madrugada!`)
}
