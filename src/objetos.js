class Animal {
    // Aquí define las propiedades de la clase Animal
    constructor(nombre, edad, tipo, sonido) {
      // ...
      this.nombre=nombre;
      this.edad=edad;
      this.tipo=tipo;
      this.sonido=sonido;
    }
  
    // Aquí define el método hacerSonido
    hacerSonido() {
      // ...
      console.log(`El ${this.nombre} hace${this.sonido}`)
    }
  }
  
  // Crea al menos dos instancias de la clase Animal
  const animal1 = new Animal('perro',15,'mamifero','Guaao!');
  const animal2 = new Animal('Vaca',13,'mamifero','Muuuuu!');
  
  // Llama al método hacerSonido en cada instancia
  animal1.hacerSonido();
  animal2.hacerSonido();
  

  //Objeto literal

  let cancion={
    titulo:'Pepe',
    artista:'Doble T y el cro',
    album: 'Otro formato',
    duracion: '4:05',
  }
console.log(cancion.titulo)
console.log(cancion.artista)
console.log(cancion.album)
console.log(cancion.duracion)

cancion.lanzamiento='20/12/10'
cancion.genero='dembow'


//Imprimo todo el objeto para verificar los cambios
console.log(cancion.titulo)
console.log(cancion.artista)
console.log(cancion.album)
console.log(cancion.duracion)
console.log(cancion.lanzamiento)
console.log(cancion.genero)

// Utilizando Object.assign y object.freeze

let usuario={
    nombre:'Chris',
    apellido:'Sanchez',
    email:'chrissanchez@gmail.com',
    password:'gola$1344C',
    edad:23
}
 const nuevoUsuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    email: 'juanperez@gmail.com'
  }

 const nuevoObjeto=  Object.assign({},usuario,nuevoUsuario)
 console.log(nuevoObjeto)

 Object.freeze(usuario)
 usuario.nombre='pedro'
 console.log(usuario)

 // Ralizando el playground de platzi
const dog={
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
}

 function protectDog(dog) {
    // Tu código aquí 👈
    const dogCopi=Object.assign({}, dog)
    Object.freeze(dogCopi)
    return dogCopi
  }
  const perroProtegido = protectDog(dog);
  dog.name='pepe';
  dog.owner.name='rolando'
  console.log(dog)
  console.log(perroProtegido)

//Como realmente platzi queria que hagan el ejercicio pero no lo explicaron asi

