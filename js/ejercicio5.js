let precio_producto=10000
if(precio_producto>100){
    precio_producto=precio_producto-(precio_producto*0.1)
    console.log(`Este producto tiene un descuento del 10% por lo que con el descuento sale: ${precio_producto}$`)

}else if(precio_producto<=100 && precio_producto>=50){
   
    precio_producto=precio_producto-(precio_producto*0.05)
    console.log(`Este producto tiene un descuento del 5% por lo que con el descuento sale: ${precio_producto}$`)

}else if(precio_producto<50 && precio_producto>0){
    console.log(`Este producto no tiene descuento por lo que sale: ${precio_producto}$`)
}