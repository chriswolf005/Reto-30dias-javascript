export class Animal {
    constructor(name, age, specie) {
      this.name = name;
      this.age = age;
      this.species = specie;
    }
  
    getInfo() {
      return {
        "name": this.name,
        "age": this.age,
        "specie": this.species
      }
    }
  
  }
  
  export class Mammal extends Animal {
  
    constructor(name, age, specie, hasFur) {
      super(name, age, specie);
      this.hasFur = hasFur;
    }
  
    getInfo() {
      const { name, age, specie } = super.getInfo()
      return { name, age, specie, "hasFur": this.hasFur }
    }
  
  }
  
  export class Dog extends Mammal {
  
    constructor(name, age, breed, hasFur) {
      super(name, age, "dog", hasFur);
      this.breed = breed;
    }
  
    getInfo() {
      const { name, age, specie, hasFur } = super.getInfo()
      return { name, age, specie, hasFur, "breed": this.breed }
    }
  
    bark() {
      return "woof!"
    }
  
  }