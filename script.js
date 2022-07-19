var numero = 100
var binario = (numero).toString(2)
var res = binario.split("",6)
if(numero > 31 ){
    if(res[0]==res[5] && res[1]==res[4] && res[2]==res[3]){
            console.log(`O número ${numero} é palíndromo!`)
    }else{
            console.log(`O número ${numero} não é palíndromo!`)
    }
}
if(numero >15 && numero <32){
    if(res[0]==res[4] && res[1]==res[3]){
        console.log(`O número ${numero} é palíndromo!`)
    }else{
        console.log(`O número ${numero} não é palíndromo!`)
    }
}
if(numero >7 && numero < 16){
    if(res[0]==res[3] && res[1]==res[2]){
        console.log(`O número ${numero} é palíndromo!`)
    }else{
        console.log(`O número ${numero} não é palíndromo!`)
    }
}

if(numero >3 && numero < 8){      
    if (res[0]==res[2]){
        console.log(`O número ${numero} é palíndromo!`)
    }else{
        console.log(`O número ${numero} não é palíndromo!`)
}
}
if(numero <= 3){
    if(res[0]==res[1]){
        console.log(`O número ${numero} é palíndromo!`)
    }else{
        console.log(`O número ${numero} não é palíndromo!`)
    }
}
console.log(res)