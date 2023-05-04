// clase base
class Cafe{
    precio(){
         return 10
    }
}

//Class agregar leche
class AgregarLeche extends Cafe{
    constructor(cafe){
        super();
        this.cafe=cafe;
    }
    precio(){
        return this.cafe.precio()+0.5
    }

}
class AgregarCrema extends Cafe{
    constructor(cafe){
        super();
        this.cafe=cafe
    }
    precio(){
        return this.cafe.precio()+1;
    }
}

const cafe=new Cafe();
console.log(cafe.precio())

const cafeConLeche= new AgregarLeche(cafe);
console.log(cafeConLeche.precio())

const CafeConCremaYLeche=new AgregarCrema(cafeConLeche);
console.log(CafeConCremaYLeche.precio())