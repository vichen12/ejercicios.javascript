let num1=-10
let num2=-20
let num3=-30

let suma= num1+num2+num3
let resta= num1-num2-num3
let multipliacion= num1*num2*num3

if (suma>resta && suma>multipliacion){
    console.log(`El resultado mas grande es la suma y es: ${suma}`)
}else if (resta>suma && resta>multipliacion){
    console.log(`El resultado mas grande es la resta y es: ${resta}`)
}else if (multipliacion>suma && multipliacion>resta){
    console.log(`El resultado mas grande es la multipliacion y es: ${multipliacion}`)
}

