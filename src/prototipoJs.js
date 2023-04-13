// prototipos en js

function Vehiculo(marca,modelo){
    this.marca=marca;
    this.modelo=modelo;
}
Vehiculo.prototype.encendido=function(){
    console.log("El vehiculo se ha encendido")
}

Vehiculo.prototype.apagado=function(){
    console.log("El vehiculo se ha apagado")
}

Vehiculo.prototype.avanzar=function(){
    console.log("El vehiculo ha avanzado")
}
Vehiculo.prototype.retroceder=function(){
    console.log("El vehiculo ha retrocedido")
}
//Creamos la instancia del vehiculo
const toyota=new Vehiculo('toyota','Corolla')

toyota.encendido();
toyota.avanzar();
toyota.retroceder();
toyota.apagado();