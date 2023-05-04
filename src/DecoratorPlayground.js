 class Product {
    // Este código no debe ser editado ❌
    constructor(price) {
      this.price = price;
    }
  
    getPrice() {
      return this.price;
    }
  
    getDescription() {
      throw new Error("Este método debe ser implementado en las subclases");
    }
  }


 class BasicProduct extends Product {
  constructor(price, description) {
    // Tu código aquí 👈
    super();
    this.price=price;
    this.description=description
  }

  getDescription() {
    // Tu código aquí 👈
    return this.description
  }
}


 class WarrantyDecorator extends Product {
  constructor(product) {
    // Tu código aquí 👈
    super();
    this.product=product;
  }

  getPrice() {
    // Tu código aquí 👈
    return this.product.price+20;
  }

  getDescription() {
    // Tu código aquí 👈
    return this.product.getDescription() + " " + "Con garantia"
  }
}

 class ShippingInsuranceDecorator extends Product {
    constructor(product) {
      // Tu código aquí 👈
      super();
      this.product=product;
    }
  
    getPrice() {
      // Tu código aquí 👈
      return this.product.getPrice()+20;
    }
  
    getDescription() {
      // Tu código aquí 👈
      return this.product.getDescription() + " " + "con seguro de envío"
    }
  }


const basicProduct = new BasicProduct(100, "Camisa de algodón");
const withWarranty = new WarrantyDecorator(basicProduct);
const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);

console.log(withShippingInsurance.getPrice())
console.log(withShippingInsurance.getDescription())




