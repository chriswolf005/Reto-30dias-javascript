
//Prototipos con la sintaxis de clases

class Car {
    constructor(brand,model,year,mileage,state=false){
        this.brand=brand;
        this.model=model;
        this.year=year;
        this.mileage=mileage;
        this.state=state
    }
    turnOn(){
       this.state=true 
       console.log("El vehiculo esta encendido")
    }
    turnOff(){
        this.state=false
        console.log("El vehiculo esta apagado")
    }
    drive(kilometers){
        if(this.state==false){
            throw new Error("El vehiculo esta apagado");;
        }
        else{
            this.mileage+=kilometers
        }
    }
}

const tesla= new Car(
    "tesla",
    "x",
    2020,
    10,
    false
)