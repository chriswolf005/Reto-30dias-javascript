// Generar la clase Pay
class Pay {
    constructor(quantity) {
      this.quantity = quantity;
    }
    
    makePay(quantity) {
      return {
        realized: true,
        quantity: quantity || this.quantity,
      };
    }
  }
  
  // Clase PayPal que hereda de Pay
  class PayPal extends Pay {
    constructor(email) {
      super(); // Se debe llamar al constructor de la clase padre usando super()
      this.email = email;
    }
  
    makePay() {
      const { realized, quantity } = super.makePay(); // Se debe llamar al método de la clase padre usando super()
      return {
        realized,
        quantity,
        platform: "PayPal", // Se corrige el nombre de la propiedad
        email: this.email,
      };
    }
  }
  
  // Clase Card que hereda de Pay
  class Card extends Pay {
    constructor(cardNumber) {
      super(); // Se debe llamar al constructor de la clase padre usando super()
      this.cardNumber = cardNumber;
    }
  
    makePay() {
      let ultimoDig = this.cardNumber.slice(-4);
      if (this.cardNumber.length !== 16) {
        // Se agrega un throw en lugar de un console.error
        throw new Error("El número de tarjeta es incorrecto");
      } else {
        const { realized, quantity } = super.makePay(); // Se debe llamar al método de la clase padre usando super()
        return { realized, quantity, lastCardNumbers: ultimoDig }; // Se corrige el nombre de la propiedad
      }
    }
  }
  
  // Clase Cash que hereda de Pay
  class Cash extends Pay {
    makePay(quantity) {
      return super.makePay(quantity); // Se debe llamar al método de la clase padre usando super()
    }
  }
  
  // Función processPay
  function processPay(method, quantity) {
    return method.makePay(quantity);
  }
  