let peso=195
let altura=1.90
let imc=(peso/(altura**2))
imc = imc.toFixed(1);
if(imc<18.5){
    console.log(`La altura de la persona es ${altura}mts, el peso es ${peso}kg entonces su IMC es de ${imc} y tiene BAJO peso`);
}else if(imc>=18.5&&imc<=24.9){
    console.log(`La altura de la persona es ${altura}mts, el peso es ${peso}kg entonces su IMC es de ${imc}  y tiene un peso NORMAL`);
}else if(imc>=25&&imc<=29.9){
    console.log(`La altura de la persona es ${altura}mts, el peso es ${peso}kg entonces su IMC es de ${imc} y tiene SOBREPESO`);
}else{
    console.log(`La altura de la persona es ${altura}mts, el peso es ${peso}kg entonces su IMC es de ${imc} y tiene OBESIDAD`);
}
