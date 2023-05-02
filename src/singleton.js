 class User {
    // Este código no debe ser editado ❌
    constructor(name) {
      this.name = name;
      this.messages = [];
    }
  
    receiveMessage(message) {
      this.messages.push(message);
    }
  }

  class Chat {
    // Creamos una propiedad estática `instance` para almacenar la única instancia de la clase Chat.
    static instance = null;
  
    // Creamos una propiedad `users` para almacenar la lista de usuarios.
    users = [];
  
    // Creamos un constructor que garantiza que solo exista una instancia de la clase Chat en todo momento.
    constructor() {
      // Si la propiedad estática `instance` ya está definida, retornamos esa instancia.
      if (Chat.instance) {
        return Chat.instance;
      }
  
      // Si la propiedad estática `instance` no está definida, la establecemos como la instancia actual.
      Chat.instance = this;
    }
  
    // Creamos un método estático `getInstance` para obtener la instancia única de la clase Chat.
    static getInstance() {
      // Si la propiedad estática `instance` no está definida, creamos una nueva instancia de la clase Chat.
      if (!Chat.instance) {
        Chat.instance = new Chat();
      }
  
      // Retornamos la instancia única de la clase Chat.
      return Chat.instance;
    }
  
    // Creamos un método `addUser` para agregar un usuario a la lista de usuarios.
    addUser(user) {
      // Verificamos que el parámetro `user` sea una instancia de la clase User.
      if (user instanceof User) {
        // Si el parámetro `user` es una instancia de la clase User, lo agregamos a la lista de usuarios.
        this.users.push(user);
      } else {
        // Si el parámetro `user` no es una instancia de la clase User, lanzamos un error.
        throw new Error("User is not an instance of User class");
      }
    }
  
    // Creamos un método `removeUser` para eliminar un usuario de la lista de usuarios por su nombre.
    removeUser(name) {
      // Filtramos la lista de usuarios para excluir el usuario con el nombre especificado.
      this.users = this.users.filter(user => user.name !== name);
    }
  
    // Creamos un método `sendMessage` para enviar un mensaje a todos los usuarios en la lista.
    sendMessage(message) {
      // Iteramos sobre la lista de usuarios y llamamos al método `receiveMessage` de cada usuario con el mensaje especificado.
      this.users.forEach(user => {
        user.receiveMessage(message);
      });
    }
  }