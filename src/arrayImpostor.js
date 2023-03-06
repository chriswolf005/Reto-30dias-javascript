
const cats=[
    {
      name: "Luna",
      followers: [500, 200, 300]
    },
    {
      name: "Michi",
      followers: [100, 300]
    },
  ]

 const cats2=[
    {
      name: "Mimi",
      followers: [320, 120, 70]
    },
    {
      name: "Milo",
      followers: [400, 300, 100, 200]
    },
    {
      name: "Gizmo",
      followers: [250, 750]
    }
  ]


function findFamousCats(cats) {// La función recibe un array de objetos con los nombres y seguidores de los gatos.
    // Tu código aquí 👈
let maxFollowers = 0;// Inicializamos la variable "maxFollowers" en 0.
 let catFmous=[]// Inicializamos el array vacío "famousCats".
    cats.forEach(cat => {// Iteramos el array "cats" con forEach() y creamos una variable temporal "cat" para cada objeto del array.
        
        let followers=cat.followers.reduce((acc,follow)=>{// Utilizamos reduce() para sumar los seguidores de cada red social y guardar el resultado en la variable "followers".
          return acc+follow//Aqui retornamos el resultado
        },0)// este 0 representa el valor inicia de la suma, si no se pone el 0 entonces tomara el primer valor del array para iniciar
        if(followers>maxFollowers){//Aqui comparamos si el nuero de seguidores es mayor al numero maximo de seguidores, si es asi
          catFmous.push(cat.name)//entonces ingresamos el nombre del gato,con mayores seguidores
          maxFollowers=followers;//igualamos el numero maximo de seguidores, con la cantidad de seguidores,asi a la proxima iteracion el proximo michi tendra que tener un numero mauor
          //para poder entrar al arry
        }else if(maxFollowers===followers){//en caso que el numero maximo sea igual que el de seguidores
          catFmous.push(cat.name)//entonces ingresamos el michi al arry
  
        }
    });
      return catFmous//retornamos nuestro array
    
  }

  findFamousCats(cats)//llamamos la funcion

