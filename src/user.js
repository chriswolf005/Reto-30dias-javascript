class User {
    constructor({
      name,
      age,
    }) {
      this._name = name;
      this._age = age;
      this._friends = [];
      this._menssages = [];
    }
  
    addFriend(friend) {
      this._friends.push(friend);
    }
  
    sendMessage(message, friend) {
      this._menssages.push(message);
      friend._menssages.push(message);
    }
  
    showMessages() {
      return this._menssages;
    }
  
    get name() {
      return this._name;
    }
  
    get age() {
      return this._age;
    }
  
    set name(nuevoNombre) {
      if (typeof nuevoNombre === "string" && nuevoNombre.length !== 0) {
        this._name = nuevoNombre;
      } else {
        throw new Error("Agregue un nombre válido, que no sea un numero y que no este vacio");
      }
    }
  
    set age(nuevaEdad) {
      if (nuevaEdad > 0) {
        this._age = nuevaEdad;
      } else {
        throw new Error("Agregue una edad valida");
      }
    }
  }
  