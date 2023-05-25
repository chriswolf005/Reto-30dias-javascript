//User
 class User {
    constructor(name) {
      // Tu código aquí 👈
      this.name=name
      this.log=false;
    }
  
    login() {
      // Tu código aquí 👈
      this.log=true;
      return  `El usuario ${this.name} esta online`
    }
  
    logout() {
      // Tu código aquí 👈
      this.log=false;
      return  `El usuario ${this.name} esta offline`
    }
  
    isLoggedIn() {
      // Tu código aquí 👈
      if(this.log===true){
       return true
      }else{
        return false
      }
    }
  }

  //Proxi

   class MessagesProxy {
    constructor(messages, user) {
      // Tu código aquí 👈
      this.messages=messages;
      this.user=user;
    }
  
    sendMessage(text) {
      // Tu código aquí 👈
      if(this.user.isLoggedIn()){
        this.messages.history.push(text)
      }else{
        throw new Error("Usuario no registrado")
      }
    }
  
    getHistory() { 
      // Tu código aquí 👈
      if(this.user.isLoggedIn()){
       return this.messages.getHistory()
      }else{
        throw new Error("Usuario no registrado")
      }
     }
  }

  //Messages

 class Messages {
    // No debes editar este código ❌
    constructor() {
      this.history = [];
    }
  
    sendMessage(text) {
      this.history.push(text);
    }
  
    getHistory() {
      return this.history;
    }
  }
  