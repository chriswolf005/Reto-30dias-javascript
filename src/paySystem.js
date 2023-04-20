// Generar la clase pay
class Pay {
    constructor(quantity){
        this.quantity = quantity;
    }
    makePay(quantity){
        return {
            realized: true,
            quantity: quantity || this.quantity,
        }
    }
}

class PayPal extends Pay {
    // Tu código aquí 👈
    constructor(email){
        this.email=email
    }
    makePay(){
        const {realized,quantity}=super.makePay
        return {realized,quantity,"plataform":"Paypal","email":this.email}
    }
  }

  class Card extends Pay {
    // Tu código aquí 👈
    constructor(cardNumber){
        this.cardNumber=cardNumber;
    }
    makePay(){
        let ultimoDig=this.cardNumber.slice(-4)
        if(this.cardNumber.length!==16){
            return console.error("El numero de tarjeta es incorrecto");
        }else{
            const {realized,quantity}=super.makePay
            return  {realized,quantity,"lastCardNumber":ultimoDig}
        }
    }
  }
  

 function processPay(method, quantity) {
    // Tu código aquí 👈
  }
  
