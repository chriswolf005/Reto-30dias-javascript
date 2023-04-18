// Product class
 class Product {
    // No debes editar este archivo ❌
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    addToCart() {
      throw new Error(
        "La lógica de este método debe ser implementada por las clases hijas"
      );
    }
  }



 class Article extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity){
    super(name, price, quantity)
  }
  addToCart(){
    console.log(`Agregando ${this.quantity} unidades del articulo ${this.name}`)
  }
}

 class Service extends Product {
  // Tu código aquí 👈
  constructor(name, price){
    super(name, price,1)
  }
  addToCart(){
    console.log(`Agregando el servicio ${this.name} al carrito`)
  }
}


 class Cart {
  // Tu código aquí 👈
  constructor() {
    this.products = [];
  }
  addProduct(product){
    this.products.push(product);
    product.addToCart();
  }
  deleteProduct(product){
    index=this.products.indexOf(product)
    if(index!==-1){
      this.products.splice(index,1)
    }
  }
  calculateTotal() {
    let total = 0;
    this.products.forEach((product) => {
      total += product.price;
    });
    return total;
  }
  
  getProducts(){
    return this.products
  }
}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
console.log(cart.calculateTotal()); // debería imprimir 320
