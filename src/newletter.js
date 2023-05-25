class Newsletter {
  constructor() {
    this.subscribers = [];
  }

  subscribe(email) {
    this.subscribers.push(email);
    console.log(`El suscriptor ${email} se ha suscrito`);
    return this.subscribers;
  }

  unsubscribe(email) {
    let position = this.subscribers.indexOf(email);
    this.subscribers.splice(position, 1);
    console.log(`El suscriptor ${email} ha sido eliminado`);
    return this.subscribers;
  }

  post(article) {
    this.subscribers.forEach(subscriber => {
      subscriber.receive(article);
    });
  }
}

class Subscriber {
  constructor(email) {
    this.email = email;
  }
  receive(article) {
    console.log(`El suscriptor ${this.email} ha recibido el artículo ${article.title}`);
  }
}
